import _ from 'lodash'
import { Device } from '../types'

import { DeviceProfile } from '../types'
import { deviceProfiles } from './device-profiles'

const deviceInfo = [
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6001',
    name: 'Bridge 001',
    deviceProfile: 'Bridge Model 001',
    attributes: {
      uid: 'd5d7bcffff5fd001',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6002',
    name: 'Bridge 002',
    deviceProfile: 'Bridge Model 001',
    attributes: {
      uid: 'd5d7bcffff5fd002',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6003',
    name: 'Bridge 003',
    deviceProfile: 'Bridge Model 001',
    attributes: {
      uid: 'd5d7bcffff5fd003',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6004',
    name: 'Water Sensor 001',
    deviceProfile: 'Water Sensor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:00',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6005',
    name: 'Water Sensor 002',
    deviceProfile: 'Water Sensor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:01',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6006',
    name: 'Water Sensor 003',
    deviceProfile: 'Water Sensor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:02',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6007',
    name: 'Battery Monitor 001',
    deviceProfile: 'Battery Monitor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:03',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6008',
    name: 'Battery Monitor 002',
    deviceProfile: 'Battery Monitor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:04',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6009',
    name: 'Battery Monitor 003',
    deviceProfile: 'Battery Monitor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:05',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6010',
    name: 'Battery Monitor 004',
    deviceProfile: 'Battery Monitor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:06',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6011',
    name: 'Battery Monitor 005',
    deviceProfile: 'Battery Monitor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:07',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6012',
    name: 'Battery Monitor 006',
    deviceProfile: 'Battery Monitor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:08',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6013',
    name: 'Battery Monitor 007',
    deviceProfile: 'Battery Monitor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:09',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6014',
    name: 'Battery Monitor 010',
    deviceProfile: 'Battery Monitor Model 002',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:0a',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6015',
    name: 'Battery Monitor 011',
    deviceProfile: 'Battery Monitor Model 002',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:0b',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6016',
    name: 'Battery Monitor 012',
    deviceProfile: 'Battery Monitor Model 002',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:0c',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6017',
    name: 'Environmental Sensor 001',
    deviceProfile: 'Environmental Sensor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:0d',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6018',
    name: 'Environmental Sensor 002',
    deviceProfile: 'Environmental Sensor Model 002',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:0e',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6019',
    name: 'Environmental Sensor 003',
    deviceProfile: 'Environmental Sensor Model 002',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:0f',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6024',
    name: 'Hall Sensor 001',
    deviceProfile: 'Hall Sensor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:10',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6026',
    name: 'Hall Sensor 002',
    deviceProfile: 'Hall Sensor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:11',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6027',
    name: 'Hall Sensor 003',
    deviceProfile: 'Hall Sensor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:12',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6028',
    name: 'Hall Sensor 004',
    deviceProfile: 'Hall Sensor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:13',
    },
  },
  {
    id: '6d806d50-9bd5-4625-a64a-42cfba4f6029',
    name: 'Hall Sensor 005',
    deviceProfile: 'Hall Sensor Model 001',
    attributes: {
      uid: 'aa:bb:cc:dd:ee:14',
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
    deviceProfile: deviceProfile,
    attributes: {
      type,
      uid: info.attributes.uid,
    },
    values,
  }
})
