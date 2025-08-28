// 🐨 Start by importing the `expect` function from `vitest`.
// 💰 import { this } from 'that'
//
// 🐨 Then import the `Schema` type from `zod`.
// Use will use it to annotate your custom `.toMatchSchema` matcher.
// 💰 import { this } from 'that'
//
// 🐨 Now, declare a new interface in TypeScript called `CustomMatchers`.
// It accepts a single type argument called `MatcherResult`. Make it default to `any`.
// 💰 interface Name<T = any> {}
//
// 🐨 Inside the `CustomMatchers` interface, add a method called `toMatchSchema`.
// As the type of this method, provide an arrow function that accepts the argument `schema`
// of type `Schema` you've imported earlier, and returns `MatcherResult`.
// 💰 toMatchSchema: (arg: T) => R
//
// 🐨 Augment the type definition for the `vitest` module.
// 💰 declare module 'name' {}
//
// 🐨 Inside the module declaration, declare an interface called `Matchers<T>`.
// Make it extend the `CustomMatchers` interface you created earlier.
// This will extend the type definitions of the `expect()` function to recognize
// your custom matchers.
// 💰 interface Matchers<T> extends CustomMatchers<T> {}
//
// This covers your custom matcher on the type-level.
// Now, let's continue with its implementation!
// 🐨 Call `expect.extend()` and provide it an empty object as an argument.
// 💰 expect.extend({})
//
// 🐨 Inside the object to `expect.extend()`, define a property called `toMatchSchema`.
// As the value of this property, provide an arrow function that accepts two arguments:
// `received` and `expected`.
// 💰 toMatchSchema(received, expected) {}
//
// 🐨 Go inside the `toMatchSchema` function and declare a variable called `result`.
// Asign it the result of parsing the `received` object with the `expected` schema.
// 💰 const result = someSchema.safeParse(someValue)
//
// 🐨 If the `result.success` is `false`, return an object that represents a failed assertion.
// That assertion object consists of the following properties:
// - `pass`, which you should set to `false`, indicating that the assertion failed.
// - `message`, which is a function that returns the assertion error (e.g. "Does not match the schema").
// - `actual`, which is the actual value that was received (`received`).
// - `expected`, which is the expected value (use `result.error.format()`).
// 💰 (!result.success) { return { ... } }
//
// 🐨 Now, handle the successful assertion.
// Return a similar matcher result object but with the following properties:
// - `pass` should be `true`, indicating that the assertion passed.
// - `message` should be a function that returns the assertion success message (e.g. "Matches the schema").
// - `actual` should be the actual value that was received (`received`).
// 💰 return { pass, message: () => '', actual }
