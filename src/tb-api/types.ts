export type TbClientType = 'customer' | 'tenant'

export type TbApiEntity =
  | 'asset'
  | 'asset-profile'
  | 'customer'
  | 'device'
  | 'device-profile'
  | 'relation'
  | 'user'

export type TbApiOptions = {
  baseUrl: string
  username: string
  password: string
}
