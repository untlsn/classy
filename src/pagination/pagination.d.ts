export type Meta = {
  count: number,
  nextPage?: number,
  cursor?: number,
}
export type MetaOptions = { limit?: number, page?: number, cursor?: number }
export type GetResultOptions = { take?: number, skip?: number, cursor?: { id: number } }
export type GetResult<Res> = (options: GetResultOptions) => Promise<Res[]>
export type Page<Res> = {
  result: Res[],
  meta: Meta,
}
