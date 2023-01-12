import { Injectable } from '@nestjs/common';
import type { GetResult, Meta, MetaOptions, Page } from './pagination';
import objIncludesKey from '../helpers/objIncludesKey';
import process from 'process';

@Injectable()
export class PaginationService {
  defaultLimit = Number(process.env.DEFAULT_LIMIT);

  private getMeta(count: number, limit: number, page: number): Meta | undefined {
    const skip = limit * (page - 1);
    if (skip > count) return undefined;

    const nextPage = page + 1;

    return {
      count,
      nextPage: count > limit * nextPage ? nextPage : undefined,
    };
  }

  getCursor<Res>(results: Res[]): number | undefined {
    const lastResult = results.at(-1);

    return objIncludesKey(lastResult, 'id') && typeof lastResult.id == 'number'
      ? lastResult.id
      : undefined;
  }

  async createPage<Res>(
    countPromise: PromiseLike<number>,
    getResult: GetResult<Res>,
    options: MetaOptions,
  ): Promise<Page<Res>> {
    const count = await countPromise;
    const limit = options.limit > 0 ? options.limit : this.defaultLimit;
    const page = options.page > 0 ? options.page : 1;
    const cursor = options.cursor || undefined;
    const meta = this.getMeta(count, limit, page);

    if (!meta) {
      return {
        result: [],
        meta: { count },
      };
    }

    const result = await getResult( cursor ? {
      take: limit,
      skip: 1,
      cursor: { id: cursor },
    } : {
      take: limit,
      skip: limit * (page - 1),
    });

    meta.cursor = this.getCursor(result);

    return {
      result,
      meta,
    };
  }
}
