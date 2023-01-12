import { Injectable } from '@nestjs/common';
import env from '~/data/env';
import type { GetResult, Meta, MetaOptions, Page } from '~/pagination/pagination';

@Injectable()
export class PaginationService {

  getMeta({ count, limit = env.defaultLimit, page = 1 }: MetaOptions): Meta | undefined {
    const skip = limit * (page - 1);
    if (skip > count) return undefined;

    const nextPage = page + 1;

    return {
      count,
      nextPage: count > limit * nextPage ? nextPage : undefined,
    };
  }

  async createPage<Res>(options: MetaOptions, getResult: GetResult<Res>): Promise<Page<Res>> {
    const meta = this.getMeta(options);

    if (!meta) {
      return {
        result: [],
        meta: { count: options.count },
      };
    }

    return {
      result: await getResult({
        take: options.limit,
        skip: options.limit * (options.page - 1),
      }),
      meta,
    };
  }
}
