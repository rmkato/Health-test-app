Health Plugin Installation

Useful links: 
•	Health plugin repo: https://github.com/dariosalvi78/cordova-plugin-health (instructions for installation) 
•	Ionic Docs: https://ionicframework.com/docs/native/health
•	Google Fit on Android Docs: https://developers.google.com/fit/android/get-started

General Notes
•	Capacitor is required for creating a signed APK and keystore, but Cordova provides much better debugging with devtools. Debug with Cordova until attempting to request authorization from the plugin; at this point, Capacitor must be used. 
•	Issues I faced 
  o	Wrong import statement in HealthPlugin.java: replace NonNull import with: 
    importandroidx.annotation.NonNull;
  o	For 'User cancelled the dialog' error, make sure the keystore is in the proper folder and the ant.properties file has the correct keystore name and alias

Steps 
•	Install the plugin 

  ionic cordova plugin add cordova-plugin-health
  npm install @ionic-native/health
 
•	Add permissions to package.json

  {
    "cordova": {
      "plugins": {
       "cordova-plugin-health": {
          "HEALTH_READ_PERMISSION": "App needs read access",
          "HEALTH_WRITE_PERMISSION": "App needs write access"
        },
      },
    }
  }
 
•	Add health as a provider in app.module

  import { Health } from '@ionic-native/health/ngx';
  providers: [
      Health
  ]
 
•	Create/update Android Studio project using capacitor 

  npm run build
  npx cap copy android 
  npx cap open android
 
•	Install Google Play services in Android Studio SDK manager SDK requirements 

•	Add the following dependencies to the module build.gradle file

  dependencies {
      implementation 'com.google.android.gms:play-services-fitness:18.0.0'
      implementation 'com.google.android.gms:play-services-auth:18.0.0'
  }
 
•	Register the app in Google Console and get OAuth 2.0 client ID: Get an OAuth 2.0 Client ID
  o	Build the app in Android Studio (using Capacitor), generate a signed APK, and find the app's debug certificate fingerprint. I named the keystore: test.jks and alias: com.example.app

  o	Obtain the SHA-1 key from the keystore
  SHA-1 from test.jks: AE:55:80:52:27:29:C8:3D:15:24:2D:7D:BC:D8:01:6F:D9:37:D5:17

  o	In Google Console (link) register the app and generate an OAuth 2.0 client ID 

  o	Navigate to ./platforms/android and: 
    	Copy the keystore file (.jks) into the folder
    	Create a file in the folder named ant.properties and add these 2 lines: 
    
      key.store=test.jks (or whatever the name of the keystore file is) 
      key.alias= alias in the keystore corresponding to the app 
  
•	Get necessary android permissions, use OAuth 2.0 client ID 
  o	Register permissions in application manifest file

    <uses-permission android:name="android.permission.ACTIVITY_RECOGNITION"/>
    <uses-permission android:name="android.permission.BODY_SENSORS"/>
 
  o	Request the relevant permissions using this.health.isAvailable().then(this.health.requestAuthorization) 
    	See example in Ionic Health documentation (link)

•	Make sure the plugin is working with this.health.isAvailable() function from Ionic Docs (link)
  o	The example app I posted on github tests this function when the button on the home screen is clicked. 
