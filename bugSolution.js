import * as WebBrowser from 'expo-web-browser';
import Linking from 'expo-linking';

const handlePress = async () => {
  const url = 'https://www.example.com';
  // Try using Linking first for better compatibility
  const canOpen = await Linking.canOpenURL(url);
  if (canOpen) {
    await Linking.openURL(url);
  } else {
    // Fallback to WebBrowser if Linking fails
    let result = await WebBrowser.openBrowserAsync(url);
    console.log('Result: ', result);
  }
};