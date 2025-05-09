import { Measurement } from './src/measurement'

// 🐨 Extend default equality testers in Vitest by calling
// `expect.addEqualityTesters` function and passing it an array as an argument.
// 💰 expect.addEqualityTesters([])

// 🐨 In the list of custom equality testers, declare a new function
// called `measurementTester`. It accepts two parameters: `received` and `expected`.
// 💰 function measurementTester(received, expected) {}

// 🐨 Then, check that both the `received` and `expected` values are instances
// of the `Measurement` class.
// 💰 if (one instanceof Measurement && another instanceof Measurement) {}

// 🐨 Next, if both values are measurements, compare them using the `.equals()`
// method of the `Measurement` class. Return the result of that comparison.
// 💰 return expected.equals(received)
