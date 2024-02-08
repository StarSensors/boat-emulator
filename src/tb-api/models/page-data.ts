export type TbPageData<T> = {
  data: T[]
  totalElements: number
  totalPages: number
  hasNext: boolean
}
