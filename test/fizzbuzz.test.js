import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../fizzbuzz'
describe('fizzbuzz', () => {
  // it('should be a function', () => {
  //   expect(typeof fizzbuzz).toBe('function')
  // })
  it('should throw if there is no number provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow(/number/)
  })
  it('if fizzbuzz is 1 should return 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })
  it('should return fizz if number provided is multiple of 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
  })
  it('should return buzz if number provided is multiple of 5 ', () => {
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
    expect(fizzbuzz(35)).toBe('buzz')
  })
  it('should return fizzbuzz if number provided is multiple of 5 and 3 ', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(30)).toBe('fizzbuzz')
  })
})
