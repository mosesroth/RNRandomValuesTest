# RNRandomValuesTest - React Native Get Random Values Demo

This project demonstrates the implementation of the `react-native-get-random-values` library on React Native, with specific testing on Fire OS devices.

![App Screenshot](./screenshot.png)

## About the App

This application showcases how to properly use cryptographically strong random values in React Native applications by implementing:

- UUID generation using the `uuid` library (which requires `react-native-get-random-values`)
- Direct usage of the Web Crypto API's `crypto.getRandomValues()` method
- Compatibility with Fire OS devices

The app demonstrates two key functionalities:
1. Generating random UUIDs (v4)
2. Generating arrays of random numbers using the Crypto API

## Key Implementation Details

```javascript
import 'react-native-get-random-values'; // Must be imported before any crypto usage
import { v4 as uuidv4 } from 'uuid';

// Generate UUIDs
const newUUID = uuidv4();

// Generate random number arrays
const array = new Uint32Array(5);
crypto.getRandomValues(array);
```

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

## Development Options

In the output, you'll find options to open the app in a:

- [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go)

## Why Use react-native-get-random-values?

The standard JavaScript `Math.random()` is not cryptographically secure. For applications requiring secure random values (like UUIDs, encryption keys, or tokens), the Web Crypto API's `crypto.getRandomValues()` is necessary. The `react-native-get-random-values` library polyfills this functionality for React Native environments.

## Learn More

- [react-native-get-random-values on GitHub](https://github.com/LinusU/react-native-get-random-values)
- [UUID library](https://github.com/uuidjs/uuid)
- [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
