import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		globals: true,
		coverage: {
			enabled: true,
			include: ['src/**/*.ts'],
			reporter: ['text', 'html'],
		},
	},
})
