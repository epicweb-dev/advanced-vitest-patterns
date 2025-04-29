import { User } from './user'
import { UnlimitedPlan } from './plans'

beforeAll(() => {
	vi.useFakeTimers()
	vi.setSystemTime(new Date('2025-11-02T00:00:00Z'))
})

afterAll(() => {
	vi.useRealTimers()
})

test('cancels the user subscription', () => {
	const user = new User()
	user.subscribe(new UnlimitedPlan())

	// 🐨 Replace the `expect()` calls with `expect.soft()`.
	// This will make these assertions soft.
	// 💰 expect.soft()
	expect(user.subscription.name).toBe('Unlimited')
	expect(user.subscription.kind).toBe('yearly')
	expect(user.subscription.state).toBe('active')
	expect(user.subscription.endsAt).toBeUndefined()

	user.cancelSubscription()

	// 🐨 In a similar manner, refactor these assertions
	// to be soft assertions.
	expect(user.subscription.state).toBe('cancelled')
	expect(user.subscription.endsAt).toBe('2026-01-01T00:00:00.000Z')
})
