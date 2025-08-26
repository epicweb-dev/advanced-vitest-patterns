import { expensiveCompute } from './utils'

test('retrieves all the rows', function myTest() {
	const rows = expensiveCompute()
	expect(rows).toBeInstanceOf(Array)
	expect(rows).toHaveLength(10_000_000)
})
