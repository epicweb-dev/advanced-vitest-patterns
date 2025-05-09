import { fetchUser } from './fetch-user'
import { userSchema } from './schemas'

test('returns the user by id', async () => {
	const user = await fetchUser('abc-123')
	// 🐨 Uncomment this assertion and make sure that the call signature
	// of the `expect.toMatchSchema()` matcher is correct.
	// expect(user).toEqual(expect.toMatchSchema(userSchema))
})
