import 'vitest'
import type { Schema } from 'zod'

// This type describes the call signatures of our custom matchers.
interface CustomMatchers<MatcherResult = any> {
	toMatchSchema: (schema: Schema) => MatcherResult
}

declare module 'vitest' {
	// This makes our custom matchers available on the return type
	// of calling `expect()` from `vitest`.
	interface Assertion<T = any> extends CustomMatchers<T> {}
	interface MatchersDeclaration extends CustomMatchers {}
}

expect.extend({
	// Finally, the implementation for our custom matcher.
	toMatchSchema(received, expected) {
		const result = expected.safeParse(received)

		if (!result.success) {
			return {
				pass: false,
				message: () => 'Does not match the schema',
				actual: this.utils.printReceived(received),
				expected: result.error.format(),
			}
		}

		return {
			pass: true,
			message: () => 'Matches the schema',
			actual: this.utils.printReceived(received),
		}
	},
})
