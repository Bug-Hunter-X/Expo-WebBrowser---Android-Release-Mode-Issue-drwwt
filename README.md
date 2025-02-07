# Expo WebBrowser - Android Release Mode Issue

This repository demonstrates a bug where `expo-web-browser`'s `openBrowserAsync` function fails to open links in Android release mode.  The issue only occurs when the app is built in release mode; it functions correctly in debug mode.

## Steps to Reproduce

1. Clone the repository.
2. Run `expo prebuild`.
3. Build the app for Android in release mode using EAS Build.
4. Attempt to open a link using the button in the app.

The link will not open in release mode, while it does open correctly in debug mode.

## Expected Behavior

The link should open in both debug and release mode.

## Actual Behavior

The link does not open in release mode.  The console may show a successful result, but the browser never launches.

## Solution

The solution involves ensuring that the correct intent is being used to launch the browser and configuring EAS Build appropriately.  Further investigation and more details will be added if found.  Please see the provided solution code for a potential fix.