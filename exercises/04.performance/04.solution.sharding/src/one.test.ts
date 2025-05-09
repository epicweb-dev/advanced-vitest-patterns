import { setTimeout } from 'node:timers/promises'

for (let i = 0; i < 5000; i++) {
	test.concurrent(`${i}`, async ({ expect }) => {
		await setTimeout(25)
		expect(i).toBe(i)
	})
}
