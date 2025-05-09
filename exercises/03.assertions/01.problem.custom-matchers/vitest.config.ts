import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		globals: true,
		environment: 'node',
		// 🐨 Add the `setupFiles` property and include the `./vitest.setup.ts`
		// as the setup for your tests.
		// 💰 setupFiles: [pathToSetupFile]
	},
})
