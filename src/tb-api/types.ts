export type TbClientType = 'customer' | 'tenant'

export type TbApiEntity =
  | 'asset-profile'
  | 'asset'
  | 'customer'
  | 'dashboard'
  | 'device-profile'
  | 'device'
  | 'relation'
  | 'rule-chain'
  | 'user'

export type TbApiOptions = {
  baseUrl: string
  username: string
  password: string
}
