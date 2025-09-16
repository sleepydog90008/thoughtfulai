import assert from 'node:assert'
import { test } from 'node:test'
import sorter from '../sorter.mjs'

const expected = {
  standard: 'STANDARD',
  special: 'SPECIAL',
  rejected: 'REJECTED'
}

/**
 * Test param width is invalid
 */
test('Invalid width', () => {
  const result = sorter.sort('a', 3, 6, 13)
  assert.equal(result, expected.rejected)
})

/**
 * Test param height is invalid
 */
test('Invalid height', () => {
  const result = sorter.sort(5, 'a', 6, 13)
  assert.equal(result, expected.rejected)
})

/**
 * Test param length is invalid
 */
test('Invalid length', () => {
  const result = sorter.sort(52, 3, 'a', 13)
  assert.equal(result, expected.rejected)
})

/**
 * Test param mass is invalid
 */
test('Invalid mass', () => {
  const result = sorter.sort(45, 3, 6, 'a')
  assert.equal(result, expected.rejected)
})

/**
 * Test package is bulky - cubic volume >= 1000000
 */
test('Bulky by volume only', () => {
  const result = sorter.sort(100, 100, 100, 19)
  assert.equal(result, expected.special)
})

/**
 * Test package is bulky - any 1 dimension >= 150
 */
test('Bulky by dimension only', () => {
  const result = sorter.sort(54, 3, 200, 13)
  assert.equal(result, expected.special)
})

/**
 * Test package is heavy
 */
test('Too Heavy (only)', () => {
  const result = sorter.sort(5, 3, 6, 20)
  assert.equal(result, expected.special)
})

/**
 * Test package is bulky and heavy
 */
test('Rejected due to bulk (volume) and mass', () => {
  const result = sorter.sort(100, 100, 100, 20)
  assert.equal(result, expected.rejected)
})

/**
 * Test package is bulky and heavy
 */
test('Rejected due to bulk (dimension) and mass', () => {
  const result = sorter.sort(50, 150, 50, 20)
  assert.equal(result, expected.rejected)
})

/**
 * Test package is neither bulky or heavy
 */
test('Standard - Neither bulky or heavy', () => {
  const result = sorter.sort(99.9, 99.99, 99, 19.99)
  assert.equal(result, expected.standard)
})
