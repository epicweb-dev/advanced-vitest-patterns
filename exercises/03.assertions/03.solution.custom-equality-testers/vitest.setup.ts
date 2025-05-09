import { Measurement } from './src/measurement'

expect.addEqualityTesters([
	function measurementTester(received, expected) {
		if (received instanceof Measurement && expected instanceof Measurement) {
			return expected.equals(received)
		}
	},
])
