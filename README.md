===================TO RUN A FLAVOR VARIANT ================
Here, in this project, i have setup 2 flavors of app, one is rumahaman and other is tibaybalay.
See android/app/build.gradle for reference for setting up different flavors of app

You can run tibaybalay app with this command on your device
 => react-native run-android --variant tibaybalayDebug --appIdSuffix tibaybalay
 
similarly,You can run rumahaman app with this command on your device
  => react-native run-android --variant rumahamanDebug --appIdSuffix rumahaman


====================TO RELEASE AN APK======================
1. cd android
2.  ./gradlew assemble<Flavor Name>Release
for example, you can build an release apk of Tibay Balay with this command in this project:
    ./gradlew assembleTibayBalayRelease
    
    similarly, you can build an release apk of Rumahaman with this command in this project:
     ./gradlew assembleRumahamanRelease

===================FOLLOWING FILES WERE CHANGED WHILE DEMONSTRATING THIS====================

1. android/app/build.gradle
2. rumahaman and tibaybalay folders in android/app/src were created. The name of this folder should match the flavor name
   in the android/app/build.gradle file.
3. res folder was moved from app/src/main to  each individual flavor variant folder leaving AndroidManifest.xml and java folder only
    in app/src/main directory.
4. some scripts were added in package.json files
    
