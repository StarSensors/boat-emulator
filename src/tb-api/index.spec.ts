import _ from 'lodash'
// import { inspect } from 'util'

import { dashboardConfigurationIsEqual } from './index'

import dashboard from '../constants/dashboards/tenant-device-controls.json'

describe('TbApi', () => {
  describe('dashboardConfigurationIsEqual', () => {
    it('should return true if the dashboards are equal', () => {
      const result = dashboardConfigurationIsEqual(dashboard, dashboard)
      expect(result).toBe(true)
    })

    it('should return false if the dashboards are not equal', () => {
      const result = dashboardConfigurationIsEqual(dashboard, {})
      expect(result).toBe(false)
    })

    it('should return false if one property (title) is different', () => {
      const result = dashboardConfigurationIsEqual(dashboard, {
        ...dashboard,
        title: 'new title',
      })
      expect(result).toBe(false)
    })

    it('should return false if one property (mobileHide) in different', () => {
      const result = dashboardConfigurationIsEqual(dashboard, {
        ...dashboard,
        mobileHide: true,
      })
      expect(result).toBe(false)
    })

    it('should return true if one property (mobileHide) in same', () => {
      const result = dashboardConfigurationIsEqual(dashboard, {
        ...dashboard,
        mobileHide: false,
      })
      expect(result).toBe(true)
    })

    it('should return true if an entityId is changed', () => {
      const clone = _.cloneDeep(dashboard)
      const widgetId = _.first(_.keys(clone.configuration.widgets))
      _.set(clone, `configuration.widgets.${widgetId}.id`, 'new-value')
      const result = dashboardConfigurationIsEqual(dashboard, clone)
      expect(result).toBe(true)
    })
  })
})
