import { Injectable } from '@nestjs/common';
import env from '~/data/env';
import type { GetResult, Meta, MetaOptions, Page } from '~/pagination/pagination';
import objIncludesKey from '~/helpers/objIncludesKey';

@Injectable()
export class PaginationService {

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
    const limit = options.limit > 0 ? options.limit : env.defaultLimit;
    const page = options.page > 0 ? options.page : 1;
    const meta = this.getMeta(count, limit, page);

    if (!meta) {
      return {
        result: [],
        meta: { count },
      };
    }

    const result = await getResult({
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
