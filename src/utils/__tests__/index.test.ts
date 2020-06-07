import {
  getTimeFromMinutes,
  getAmountStops,
  getFormattedTime,
  getFlightInterval
} from '../'

describe('commonUtils: getTimeFromMinutes', () => {
  test('Convert minutes to `hours minutes` (minutes % 60 = 0)', () => {
    expect(getTimeFromMinutes(60)).toEqual(`1ч 0м`)
  })

  test('Convert minutes to `hours minutes` (minutes % 60 != 0)', () => {
    expect(getTimeFromMinutes(145)).toEqual(`2ч 25м`)
  })

  test('Convert minutes to `hours minutes` (minutes < 60)', () => {
    expect(getTimeFromMinutes(45)).toEqual(`0ч 45м`)
  })

  test('Convert minutes to `hours minutes` (minutes = 0)', () => {
    expect(getTimeFromMinutes(0)).toEqual(`0ч 0м`)
  })
})

describe('commonUtils: getAmountStops', () => {
  test('Return description to filter by amount stops (stops = 1)', () => {
    expect(getAmountStops(1)).toEqual('1 пересадка')
  })

  test('Return description to filter by amount stops (stops = 0)', () => {
    expect(getAmountStops(0)).toEqual('без пересадок')
  })

  test('Return description to filter by amount stops (stops > 3)', () => {
    expect(getAmountStops(4)).toEqual('4 пересадки')
  })
})

describe('commonUtils: getFormattedTime', () => {
  test('Return formatted time to string (time single-digit)', () => {
    expect(getFormattedTime(1)).toEqual('01')
  })

  test('Return formatted time to string (time double-digit)', () => {
    expect(getFormattedTime(11)).toEqual('11')
  })

  test('Return formatted time to string (time = 0)', () => {
    expect(getFormattedTime(0)).toEqual('00')
  })
})

describe('commonUtils: getFlightInterval', () => {
  test('Converted flight interval to `чч:мм - чч:мм`', () => {
    expect(getFlightInterval('2020-06-16T14:12:00.000Z', 156)).toEqual('14:12 - 16:48')
  })

  test('Converted flight interval to `чч:мм - чч:мм`', () => {
    expect(getFlightInterval('2020-06-16T01:51:00.000Z', 646)).toEqual('01:51 - 12:37')
  })

  test('Converted flight interval to `чч:мм - чч:мм`', () => {
    expect(getFlightInterval('2020-06-16T23:45:00.000Z', 640)).toEqual('23:45 - 10:25')
  })
})
