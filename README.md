# react-native-swipe
### Advance React Native - Swipe Concepts (Tinder-like apps)
Using Animated and Interpolation to make Cards move through finger's swipe

### Usage
1.	make sure npm and node installed, to check type `npm -v` and `node -v`
2.  install `react-native-cli` globally using `npm i -g react-native-cli`
3.  go to project directory and type `npm install` to install all application dependencies
4.  run packager using `npm start` 
5.  run application in xcode simulator using `react-native run-ios`


### Debug using Visual Studio Code
Debug `Attach to Packager` in Visual Studio Code

1.	inside project directory open (create if not exists) `.vscode/settings.json` and make sure the port number the same with the port of our packager that already running
```
{
    "react-native": {
        "packager": {
            "port": 8081
        }
    }
}
```
2. Press :arrow_forward: to run debug session.
