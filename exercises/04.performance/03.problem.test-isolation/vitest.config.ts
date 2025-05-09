import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		globals: true,
		// 🐨 Set the `isolate` property to `false`.
	},
})
