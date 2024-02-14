import userCustomerMap from './user-customer-map'
import { customers } from './customers'

export const users = userCustomerMap.map(user => {
  const customer = customers.find(customer => customer.title === user.customer)

  if (!customer) {
    throw new Error(`Customer ${user.customer} not found`)
  }

  return {
    ...user,
    customer,
  }
})
