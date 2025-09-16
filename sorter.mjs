const stacks = {
  standard: 'STANDARD',
  special: 'SPECIAL',
  rejected: 'REJECTED'
}

/**
 * Sorts packages to the appropriate stack based on the following rules:
 * cubic volume (cm) >= 1,000,000
 * Assumes input is in "cm" (not something like inches, meters, etc) for the dimensions
 * Assumes mass is in kg (not lbs, oz, etc)
 * or mass >= 20kg
 * @param {number} width width of the package in cm
 * @param {number} height height of the package in cm
 * @param {number} length length of the package in cm
 * @param {number} mass mass of the package in kb
 * @returns {string} stack
 */
const sort = (width, height, length, mass) => {
  if (!valid(width, height, length, mass)) { return stacks.rejected }

  // any 1 side >= 150cm or volume above limit
  const isBulky = [width, height, length].filter(x => x >= 150)?.length > 0 || (width * height * length) >= 1000000
  const isHeavy = mass >= 20

  if (isBulky && isHeavy) { return stacks.rejected }
  if (isBulky || isHeavy) { return stacks.special }

  return stacks.standard // package is not heavy or bulky
}

/**
 * Determines if the input is valid
 * @param {number} width width of the package in cm
 * @param {number} height height of the package in cm
 * @param {number} length length of the package in cm
 * @param {number} mass mass of the package in kb
 * @returns {boolean} true or false if the input is valid or not
 */
const valid = (width, height, length, mass) => {
  if (isNaN(parseFloat(mass)) === true || mass <= 0) { return false }
  if (isNaN(parseFloat(width)) === true || width <= 0) { return false }
  if (isNaN(parseFloat(height)) === true || height <= 0) { return false }
  if (isNaN(parseFloat(length)) === true || length <= 0) { return false }

  return true
}

export default { sort }
