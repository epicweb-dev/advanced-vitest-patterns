import { fn } from './fn'

test('returns "great" if given a number greater than 10', () => {
	expect(fn(42)).toBe('great')
})

test('returns "okay" if given a number less than 10', () => {
	expect(fn(1)).toBe('okay')
	expect(fn(9)).toBe('okay')
})
