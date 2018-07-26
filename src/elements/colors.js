export const darkBlue = '#102C45'
export const blue = '#325080'
export const lightBlue = '#8AA5D5'
export const darkGrey = '#C6C6C6'
export const grey = '#E1E1E1'

export default {
  lightBlue,
  blue,
  darkBlue,
  darkGrey,
  grey,
}

export const rgba = (hax, alpha) => {
  let hex = hax
  hex = hex.replace('#', '')
  const r = parseInt(
    hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2),
    16
  )
  const g = parseInt(
    hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4),
    16
  )
  const b = parseInt(
    hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6),
    16
  )
  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  return `rgb(${r}, ${g}, ${b})`
}
