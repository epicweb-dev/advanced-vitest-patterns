import { sortBy } from './sort-by'

test('sorts a list of fruits by their name', () => {
	expect(
		sortBy(
			[{ name: 'Banana' }, { name: 'Apple' }, { name: 'Cucumber' }],
			'name',
		),
	).toEqual([{ name: 'Apple' }, { name: 'Banana' }, { name: 'Cucumber' }])
})

test('sorts a list of players by their score', () => {
	expect(
		sortBy(
			[
				{ name: 'John', score: 10 },
				{ name: 'Allen', score: 5 },
				{ name: 'Sarah', score: 21 },
			],
			'score',
		),
	).toEqual([
		{ name: 'Allen', score: 5 },
		{ name: 'John', score: 10 },
		{ name: 'Sarah', score: 21 },
	])
})
