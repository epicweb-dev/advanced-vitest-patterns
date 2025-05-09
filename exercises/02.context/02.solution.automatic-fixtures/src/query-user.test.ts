import { test } from '../test-extend'
import { queryUser } from './query-user'

test('returns undefined if the user is not found', async () => {
	await expect(queryUser('abc-123')).resolves.toBeUndefined()
})

test('returns the user by id', async ({ createMockDatabase }) => {
	await createMockDatabase((db, done) => {
		db.run(
			'INSERT INTO users (id, name) VALUES (?, ?)',
			['abc-123', 'John Maverick'],
			done,
		)
	})

	await expect(queryUser('abc-123')).resolves.toEqual({
		id: 'abc-123',
		name: 'John Maverick',
	})
})
