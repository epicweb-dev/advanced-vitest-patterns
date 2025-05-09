import { test } from '../test-extend'
import { queryUser } from './query-user'

test('returns undefined if the user is not found', async () => {
	await expect(queryUser('abc-123')).resolves.toBeUndefined()
})

// 🐨 Add a new test case called "returns the user by id".
// In this test, use the `createMockDatabase()` fixture to seed the mock
// database with a mock user. Make it have the id "abc-123" and the name "John Doe".
// 💰 test('...', () => {})
// 💰 await createMockDatabase((db, done) => {})

// 🐨 Then, write an assertion that querying for the given user ID
// indeed returns the mock user you've created.
// 💰 await expect(fn(args)).resolves.toEqual({})
