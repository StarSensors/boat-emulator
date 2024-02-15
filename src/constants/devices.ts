import _ from 'lodash'
import { Device } from '../types'

import { DeviceProfile } from '../types'
import { deviceProfiles } from './device-profiles'

const aYearFromNow = new Date()
aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1)

const deviceInfo = [
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6001',
    name: 'Bridge 001',
    deviceProfile: 'Bridge Model 001',
    attributes: {
      uid: 'd5d7bcffff5fd001',
      claimingData: { secretKey: 'bridge-001', expirationTime: +aYearFromNow },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6002',
    name: 'Bridge 002',
    deviceProfile: 'Bridge Model 001',
    attributes: {
      uid: 'd5d7bcffff5fd002',
      claimingData: { secretKey: 'bridge-002', expirationTime: +aYearFromNow },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6003',
    name: 'Bridge 003',
    deviceProfile: 'Bridge Model 001',
    attributes: {
      uid: 'd5d7bcffff5fd003',
      claimingData: { secretKey: 'bridge-003', expirationTime: +aYearFromNow },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6004',
    name: 'Water Sensor 001',
    deviceProfile: 'Water Sensor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:00',
      claimingData: {
        secretKey: 'water-sensor-001',
        expirationTime: +aYearFromNow,
      },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6005',
    name: 'Water Sensor 002',
    deviceProfile: 'Water Sensor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:01',
      claimingData: {
        secretKey: 'water-sensor-002',
        expirationTime: +aYearFromNow,
      },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6006',
    name: 'Water Sensor 003',
    deviceProfile: 'Water Sensor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:02',
      claimingData: {
        secretKey: 'water-sensor-003',
        expirationTime: +aYearFromNow,
      },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6007',
    name: 'Battery Monitor 001',
    deviceProfile: 'Battery Monitor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:03',
      claimingData: {
        secretKey: 'battery-monitor-001',
        expirationTime: +aYearFromNow,
      },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6008',
    name: 'Battery Monitor 002',
    deviceProfile: 'Battery Monitor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:04',
      claimingData: {
        secretKey: 'battery-monitor-002',
        expirationTime: +aYearFromNow,
      },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6009',
    name: 'Battery Monitor 003',
    deviceProfile: 'Battery Monitor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:05',
      claimingData: {
        secretKey: 'battery-monitor-003',
        expirationTime: +aYearFromNow,
      },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6010',
    name: 'Battery Monitor 004',
    deviceProfile: 'Battery Monitor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:06',
      claimingData: {
        secretKey: 'battery-monitor-004',
        expirationTime: +aYearFromNow,
      },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6011',
    name: 'Battery Monitor 005',
    deviceProfile: 'Battery Monitor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:07',
      claimingData: {
        secretKey: 'battery-monitor-005',
        expirationTime: +aYearFromNow,
      },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6012',
    name: 'Battery Monitor 006',
    deviceProfile: 'Battery Monitor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:08',
      claimingData: {
        secretKey: 'battery-monitor-006',
        expirationTime: +aYearFromNow,
      },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6013',
    name: 'Battery Monitor 007',
    deviceProfile: 'Battery Monitor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:09',
      claimingData: {
        secretKey: 'battery-monitor-007',
        expirationTime: +aYearFromNow,
      },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6014',
    name: 'Battery Monitor 010',
    deviceProfile: 'Battery Monitor Model 002',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:0a',
      claimingData: {
        secretKey: 'battery-monitor-010',
        expirationTime: +aYearFromNow,
      },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6015',
    name: 'Battery Monitor 011',
    deviceProfile: 'Battery Monitor Model 002',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:0b',
      claimingData: {
        secretKey: 'battery-monitor-011',
        expirationTime: +aYearFromNow,
      },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6016',
    name: 'Battery Monitor 012',
    deviceProfile: 'Battery Monitor Model 002',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:0c',
      claimingData: {
        secretKey: 'battery-monitor-012',
        expirationTime: +aYearFromNow,
      },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6017',
    name: 'Environmental Sensor 001',
    deviceProfile: 'Environmental Sensor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:0d',
      claimingData: {
        secretKey: 'environmental-sensor-001',
        expirationTime: +aYearFromNow,
      },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6018',
    name: 'Environmental Sensor 002',
    deviceProfile: 'Environmental Sensor Model 002',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:0e',
      claimingData: {
        secretKey: 'environmental-sensor-002',
        expirationTime: +aYearFromNow,
      },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6019',
    name: 'Environmental Sensor 003',
    deviceProfile: 'Environmental Sensor Model 002',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:0f',
      claimingData: {
        secretKey: 'environmental-sensor-003',
        expirationTime: +aYearFromNow,
      },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6024',
    name: 'Hall Sensor 001',
    deviceProfile: 'Hall Sensor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:10',
      claimingData: {
        secretKey: 'hall-sensor-001',
        expirationTime: +aYearFromNow,
      },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6026',
    name: 'Hall Sensor 002',
    deviceProfile: 'Hall Sensor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:11',
      claimingData: {
        secretKey: 'hall-sensor-002',
        expirationTime: +aYearFromNow,
      },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6027',
    name: 'Hall Sensor 003',
    deviceProfile: 'Hall Sensor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:12',
      claimingData: {
        secretKey: 'hall-sensor-003',
        expirationTime: +aYearFromNow,
      },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6028',
    name: 'Hall Sensor 004',
    deviceProfile: 'Hall Sensor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:13',
      claimingData: {
        secretKey: 'hall-sensor-004',
        expirationTime: +aYearFromNow,
      },
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6029',
    name: 'Hall Sensor 005',
    deviceProfile: 'Hall Sensor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:14',
      claimingData: {
        secretKey: 'hall-sensor-005',
        expirationTime: +aYearFromNow,
      },
    },
  },
]

export const devices: Device[] = deviceInfo.map(info => {
  const deviceProfile = deviceProfiles.find(
    (d: DeviceProfile) => d.name === info.deviceProfile,
  )
  if (!deviceProfile) {
    throw new Error(`Device profile not found for ${info.deviceProfile}`)
  }
  const type = deviceProfile.type

  const values = _.zipObject(
    deviceProfile.metrics,
    deviceProfile.metrics.map(() => 0),
  )

  return {
    id: info.id,
    name: info.name,
    label: info.name,
    deviceProfile: deviceProfile,
    attributes: {
      uid: info.attributes.uid,
      type,
      claimingAllowed: true,
      claimingData: info.attributes.claimingData,
    },
    values,
  }
})
