import 'dotenv/config'

const tb = {
  baseUrl: process.env.TB_BASE_URL || 'http://localhost:8080',
  username: process.env.TB_TENANT_ADMIN_USERNAME || 'tenant@thingsboard.org',
  password: process.env.TB_TENANT_ADMIN_PASSWORD || 'tenant',
}

export default {
  mqtt: {
    url: process.env.TB_MQTT_URL || 'mqtt://localhost:1883',
  },
  tb,
}
