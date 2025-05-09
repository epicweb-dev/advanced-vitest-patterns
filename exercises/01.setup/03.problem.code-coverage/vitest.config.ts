import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		globals: true,
		// 🐨 Add a `coverage` property and assign it an empty object for now.
		// 💰 coverage: {}
		//
		// 🐨 Inside `coverage`, set the `enabled` property to `true.
		// 💰 coverage: { enabled: true }
		//
		// 🐨 Add the `include` property and define a pattern for
		// the source files to be used during the coverage analyzis.
		// 💰 coverage: { include: ['src/**/*.ts'] }
		//
		// 🐨 Finally, add the `reporter` property and assign it an array
		// as the value. In that array, list two reporters: "text" and "html".
		// 💰 coverage: { reporter: ['text', 'html'] }
	},
})
