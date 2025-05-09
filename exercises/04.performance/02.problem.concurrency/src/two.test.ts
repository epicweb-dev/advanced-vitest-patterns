import { setTimeout } from 'node:timers/promises'

for (let i = 0; i < 100; i++) {
	// 🐨 Replace the `test()` function below with `test.concurrent()`.
	// This will make all the test cases in this test file run simultaneously.
	//
	// 🐨 Spread the test context argument here and reference the `expect`
	// function from that object.
	// 💰 async ({ expect }) => {}
	test(`${i}`, async () => {
		await setTimeout(25)
		expect(i).toBe(i)
	})
}
