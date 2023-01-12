export type Meta = {
  count: number,
  nextPage?: number,
}
export type MetaOptions = { count: number, limit?: number, page?: number }
export type GetResultOptions = { take?: number, skip?: number }
export type GetResult<Res> = (options: GetResultOptions) => Promise<Res[]>
export type Page<Res> = {
  result: Res[],
  meta: Meta,
}
