# Portfolio-React-Pomodoro

Pomodoro app working on the web or the supported devices by Cordova such as Android and IOS.

A Pomodoro technique can be used to maximize study sessions or programming activities (in binomial) in a way that work time and breaks are well managed. Taking a long break can have negative effects on focus and studying for too long can leave to exhaustion and thus a loss of time. The app swaps up between study and break timers when the respective time is elapsed, with a ringstone to notify the user(s).

<img src="https://github.com/steve-levesque/Portfolio-React-Pomodoro/blob/main/doc/mobile_pomodoro.jpg" alt="Pomodoro mobile app." width="200"/>

## Additional information

### Technologies
- React (Code and web)
- Cordova (Mobile)
- Bulma (CSS)
- *gradle and jdk 1.8 required for android compilation.

### Web app link:
https://steve-levesque.github.io/Portfolio-React-Pomodoro/

## How to run app or code

Steps below suppose that Cordova, React and nodejs are working and installed on the device.

### React
- cd cordova (cordova project with react code)
- npm install
- npm run build (will generate /cordova/build and /www) this must be done each time after modifications for the production build to be up to date.
- npm start

If error occurs, "npm update" might be needed.

### Android
- cd cordova
- npm install
- npm run build (will generate /cordova/build and /www) this must be done each time after modifications, the mobile compiling depends of the build.
- cordova platform add [android]
- cordova run [android]
- npm start (optional)

### IOS and others
- Same steps as Android, but with [android] replaced with the correct name. Cordova's doc for more information.
