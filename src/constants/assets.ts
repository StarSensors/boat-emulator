import { Asset } from '../types'
import { assetProfiles } from './asset-profiles'
import assetDeviceMap from './asset-device-map'

export const assets: Asset[] = assetDeviceMap.map(boat => {
  const boatAssetProfile = assetProfiles.find(
    assetProfile => assetProfile.name === boat.assetProfile,
  )
  if (!boatAssetProfile) {
    throw new Error('Asset profile not found')
  }

  return {
    name: boat.name,
    label: boat.label,
    assetProfile: boatAssetProfile,
    devices: boat.devices,
  }
})
