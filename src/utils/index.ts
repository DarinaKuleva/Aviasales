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
      return 'без пересадок'
  }
}

const getFormattedTime = (time: number): string => {
  if (time.toString().length === 1) return `0${time}`
  else return time.toString()
}

export const getFlightInterval = (flightDate: string, flightTime: number): string => {
  const formattedFlightDate = new Date(flightDate)

  const startFlightHours = formattedFlightDate.getUTCHours()
  const startFlightMinutes = formattedFlightDate.getUTCMinutes()
  const endFlightHours = (startFlightHours + Math.trunc(flightTime/60)) % 24
  const endFlightMinutes = (startFlightMinutes + flightTime % 60) % 60

  const formattedStartFlightHours = getFormattedTime(startFlightHours)
  const formattedEndFlightHours = getFormattedTime(endFlightHours)
  const formattedStartFlightMinutes = getFormattedTime(startFlightMinutes)
  const formattedEndFlightMinutes = getFormattedTime(endFlightMinutes)

  return `${formattedStartFlightHours}:${formattedStartFlightMinutes} 
    - ${formattedEndFlightHours}:${formattedEndFlightMinutes} `
}
