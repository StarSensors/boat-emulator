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
          byId: 'not-implemented', // api/asset/{entityId}
          byName: 'not-available',
        },
        many: 'api/customer/{customerId}/assets', // page
      },
      post: {
        single: 'api/asset',
        many: 'not-available',
      },
    },
    tenant: {
      get: {
        single: {
          byId: 'not-implemented', // api/asset/{entityId}
          byName: 'not-implemented', // api/tenant/assets?assetName={assetName}
        },
        many: 'api/tenant/assets', // page
      },
      post: {
        single: 'api/asset',
        many: 'not-available',
      },
    },
  },
  'asset-profile': {
    customer: {
      get: {
        single: {
          byId: 'not-allowed',
          byName: 'not-available',
        },
        many: 'not-allowed',
      },
      post: {
        single: 'not-allowed',
        many: 'not-available',
      },
    },
    tenant: {
      get: {
        single: {
          byId: 'not-implemented', // api/assetProfile/{entityId}
          byName: 'not-available',
        },
        many: 'api/assetProfiles', // page
      },
      post: {
        single: 'api/assetProfile',
        many: 'not-available',
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
        many: 'not-implemented',
      },
    },
    tenant: {
      get: {
        single: {
          byId: 'not-implemented', // api/customer/{entityId}
          byName: 'not-implemented', // api/tenant/customers?customerTitle={entityName}
        },
        many: 'api/customers', // page
      },
      post: {
        single: 'api/customer',
        many: 'not-implemented',
      },
    },
  },
  device: {
    customer: {
      get: {
        single: {
          byId: 'not-implemented', // api/device/{entityId}
          byName: 'not-available',
        },
        many: 'api/customer/{customerId}/devices', // page
      },
      post: {
        single: 'api/device',
        many: 'not-available',
      },
    },
    tenant: {
      get: {
        single: {
          byId: 'not-implemented', // api/device/{entityId}
          byName: 'not-implemented', // api/tenant/devices?deviceName={entityName}
        },
        many: 'api/tenant/devices', // page
      },
      post: {
        single: 'api/device',
        many: 'not-available',
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
        single: 'api/deviceProfile',
        many: 'not-implemented',
      },
    },
  },
  relation: {
    customer: {
      get: {
        single: {
          byId: 'api/relation',
          byName: 'not-available',
        },
        many: 'api/relations',
      },
      post: {
        single: 'api/relation',
        many: 'not-available',
      },
    },
    tenant: {
      get: {
        single: {
          byId: 'api/relation',
          byName: 'not-available',
        },
        many: 'api/relations',
      },
      post: {
        single: 'api/relation',
        many: 'not-available',
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
        many: 'api/users',
      },
      post: {
        single: 'api/user',
        many: 'not-implemented',
      },
    },
  },
}
