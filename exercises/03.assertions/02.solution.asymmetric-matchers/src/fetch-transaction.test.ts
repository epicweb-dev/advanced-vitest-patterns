import { fetchTransaction, type Transaction } from './fetch-transaction'
import { userSchema } from './schemas'

test('fetches a transaction between two users', async () => {
	const transaction = await fetchTransaction('transaction-1')

	expect(transaction).toEqual<Transaction>({
		id: 'transaction-1',
		issuer: expect.toMatchSchema(userSchema),
		recipient: expect.toMatchSchema(userSchema),
	})
})
