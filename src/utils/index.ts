export const getTimeFromMinutes = (minutes: number): string => {
  const hours = Math.trunc(minutes/60)
  const min = minutes % 60
  return `${hours}ч ${min}м`
}

export const getAmountStops = (stops: number): string => {
  switch (stops) {
    case 0:
      return 'без пересадок'
    case 1:
      return '1 пересадка'
    case 2:
      return '2 пересадки'
    case 3:
      return '3 пересадки'
    default:
      return `${stops} пересадки`
  }
}

export const getFormattedTime = (time: number): string =>
  time.toString().length === 1 ? `0${time}` : time.toString()

export const getFlightInterval = (flightDate: string, flightDuration: number): string => {
  const formattedFlightDate = new Date(flightDate)

  const departureHour = formattedFlightDate.getUTCHours()
  const departureMinute = formattedFlightDate.getUTCMinutes()
  const arrivalHourFromMinutes = Math.trunc((departureMinute + flightDuration % 60)/60)
  const arrivalHour = (departureHour + Math.trunc(flightDuration/60)) % 24 + arrivalHourFromMinutes
  const arrivalMinute = (departureMinute + flightDuration % 60) % 60

  const departureTime = `${getFormattedTime(departureHour)}:${getFormattedTime(departureMinute)}`
  const arrivalTime = `${getFormattedTime(arrivalHour)}:${getFormattedTime(arrivalMinute)}`

  return `${departureTime} - ${arrivalTime}`
}
