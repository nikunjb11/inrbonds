import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.moodle.moodlemobile',
  appName: 'moodlemobile',
  webDir: 'www',
  bundledWebRuntime: false,
  cordova: {
    preferences: {
      permissions: 'none',
      orientation: 'default',
      'target-device': 'universal',
      fullscreen: 'false',
      'stay-in-webview': 'false',
      webviewbounce: 'false',
      UIWebViewBounce: 'false',
      DisallowOverscroll: 'true',
      'prerendered-icon': 'true',
      AppendUserAgent: 'MoodleMobile',
      BackupWebStorage: 'none',
      ScrollEnabled: 'false',
      KeyboardDisplayRequiresUserAction: 'false',
      HideKeyboardFormAccessoryBar: 'false',
      AllowInlineMediaPlayback: 'true',
      LoadUrlTimeoutValue: '60000',
      'load-url-timeout': '60000',
      SplashScreen: 'screen',
      SplashScreenDelay: '15000',
      SplashMaintainAspectRatio: 'true',
      SplashShowOnlyFirstTime: 'false',
      'android-minSdkVersion': '22',
      'android-targetSdkVersion': '30',
      AndroidPersistentFileLocation: 'Compatibility',
      AndroidInsecureFileModeEnabled: 'true',
      CustomURLSchemePluginClearsAndroidIntent: 'true',
      iosPersistentFileLocation: 'Compatibility',
      iosScheme: 'moodleappfs',
      WKWebViewOnly: 'true'
    }
  }
};

export default config;
