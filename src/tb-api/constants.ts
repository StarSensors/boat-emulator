import { TbClientType, TbApiEntity } from './types'

export const URI_MAPPING: Record<
  TbApiEntity,
  Record<
    TbClientType,
    {
      get: { single: { byId: string; byName: string }; many: string }
      post: { single: string; many: string }
    }
  >
> = {
  asset: {
    customer: {
      get: {
        single: {
          byId: 'not-implemented',
          byName: 'not-implemented',
        },
        many: 'api/customer/{customerId}/assets', // page
      },
      post: {
        single: '/api/asset',
        many: 'not-implemented',
      },
    },
    tenant: {
      get: {
        single: {
          byId: 'not-implemented',
          byName: 'api/tenant/assets', // by assetName
        },
        many: 'api/tenant/assets', // page
      },
      post: {
        single: '/api/asset',
        many: 'not-implemented',
      },
    },
  },
  'asset-profile': {
    customer: {
      get: {
        single: {
          byId: 'not-allowed',
          byName: 'not-allowed',
        },
        many: 'not-allowd',
      },
      post: {
        single: 'not-allowed',
        many: 'not-allowed',
      },
    },
    tenant: {
      get: {
        single: {
          byId: 'not-implemented',
          byName: 'not-implemented',
        },
        many: '/api/assetProfiles',
      },
      post: {
        single: '/api/assetProfile',
        many: 'not-implemented',
      },
    },
  },
  customer: {
    customer: {
      get: {
        single: {
          byId: 'not-allowed',
          byName: 'not-allowed',
        },
        many: 'not-allowed',
      },
      post: {
        single: 'not-allowed',
        many: 'not-allowed',
      },
    },
    tenant: {
      get: {
        single: {
          byId: 'not-implemented',
          byName: 'not-implemented',
        },
        many: '/api/customers',
      },
      post: {
        single: '/api/customer',
        many: 'not-implemented',
      },
    },
  },
  device: {
    customer: {
      get: {
        single: {
          byId: 'not-implemented',
          byName: 'not-implemented',
        },
        many: '/api/customer/{customerId}/devices',
      },
      post: {
        single: '/api/device',
        many: 'not-implemented',
      },
    },
    tenant: {
      get: {
        single: {
          byId: 'not-implemented',
          byName: 'not-implemented',
        },
        many: '/api/tenant/devices',
      },
      post: {
        single: '/api/device',
        many: 'not-implemented',
      },
    },
  },
  'device-profile': {
    customer: {
      get: {
        single: {
          byId: 'not-allowed',
          byName: 'not-allowed',
        },
        many: 'not-allowed',
      },
      post: {
        single: 'not-allowed',
        many: 'not-implemented',
      },
    },
    tenant: {
      get: {
        single: {
          byId: 'not-implemented',
          byName: 'not-implemented',
        },
        many: 'api/deviceProfiles',
      },
      post: {
        single: '/api/deviceProfile',
        many: 'not-implemented',
      },
    },
  },
  user: {
    customer: {
      get: {
        single: {
          byId: 'not-allowed',
          byName: 'not-allowed',
        },
        many: 'not-allowed',
      },
      post: {
        single: 'not-allowd',
        many: 'not-implemented',
      },
    },
    tenant: {
      get: {
        single: {
          byId: 'not-implemented',
          byName: 'not-implented',
        },
        many: '/api/users',
      },
      post: {
        single: '/api/user',
        many: 'not-implemented',
      },
    },
  },
}
