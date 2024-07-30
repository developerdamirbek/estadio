export const getFormattedNumberWithSpace = (number: number) => {
  if (isNaN(number)) {
    return 0
  }

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export const formatPhoneNumber = (phoneNumber: string) => {
  const cleaned = phoneNumber.replace(/\D/g, '')

  if (cleaned.length === 12) {
    return `+${cleaned.substring(0, 3)} ${cleaned.substring(3, 5)} ${cleaned.substring(5, 8)} ${cleaned.substring(8, 10)} ${cleaned.substring(10, 12)}`
  }

  return phoneNumber
}
