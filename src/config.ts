import 'dotenv/config'

import { TbApiOptions } from './types'

const tb: TbApiOptions = {
  baseUrl: process.env.TB_BASE_URL || 'http://localhost:8080',
  tenantAdminUsername:
    process.env.TB_TENANT_ADMIN_USERNAME || 'tenant@thingsboard.org',
  tenantAdminPassword: process.env.TB_TENANT_ADMIN_PASSWORD || 'tenant',
}

export default {
  mqtt: {
    url: process.env.TB_MQTT_URL || 'mqtt://localhost:1883',
  },
  tb,
}
