const levels: { voltage: number; level: number }[] = [
  { voltage: 12.64, level: 100 },
  { voltage: 12.53, level: 90 },
  { voltage: 12.41, level: 80 },
  { voltage: 12.29, level: 70 },
  { voltage: 12.18, level: 60 },
  { voltage: 12.07, level: 50 },
  { voltage: 11.97, level: 40 },
  { voltage: 11.87, level: 30 },
  { voltage: 11.76, level: 20 },
  { voltage: 11.63, level: 10 },
  { voltage: 11.59, level: 0 },
]

const lerp = (voltageReading: number): number => {
  const maxVoltage = levels[0].voltage
  const minVoltage = levels[levels.length - 1].voltage
  const maxLevel = levels[0].level
  const minLevel = levels[levels.length - 1].level

  let level = 100
  if (voltageReading >= maxVoltage) {
    return maxLevel
  }

  if (voltageReading <= minVoltage) {
    return minLevel
  }

  const index = levels.findIndex(level => level.voltage <= voltageReading)
  const low = levels[index]
  const high = levels[index - 1]
  const range = high.voltage - low.voltage
  level =
    low.level +
    ((voltageReading - low.voltage) / range) * (high.level - low.level)

  return level
}

describe('lerp', () => {
  it('should return 100 when voltage is 20.00', () => {
    expect(lerp(20.0)).toBe(100)
  })
  it('should return 100 when voltage is 12.64', () => {
    expect(lerp(12.64)).toBe(100)
  })
  it('should return 90 when voltage is 12.53', () => {
    expect(lerp(12.53)).toBe(90)
  })
  it('should return 80 when voltage is 12.41', () => {
    expect(lerp(12.41)).toBe(80)
  })
  it('should return 76 when voltage is 12.333333', () => {
    expect(lerp(12.333333)).toBe(73.61108333333334)
  })
  it('should return 0 when voltage is 11.59', () => {
    expect(lerp(11.59)).toBe(0)
  })
  it('should return 0 when voltage is 10.00', () => {
    expect(lerp(10.0)).toBe(0)
  })
})
