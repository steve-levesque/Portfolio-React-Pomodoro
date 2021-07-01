<!-- Repo's Banner -->
![Portfolio-React-Pomodoro](https://user-images.githubusercontent.com/42849270/124200296-faab0080-daa2-11eb-9f57-23e82b87e1e2.png)



<!-- Shield Badges -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- Description of the Project -->
## About
Pomodoro app working on the web or the supported devices by Cordova such as Android and IOS.

A Pomodoro technique can be used to maximize study sessions or programming activities (in binomial) in a way that work time and breaks are well managed. Taking a long break can have negative effects on focus and studying for too long can leave to exhaustion and thus a loss of time. The app swaps up between study and break timers when the respective time is elapsed, with a ringstone to notify the user(s).

<img src="https://github.com/steve-levesque/Portfolio-React-Pomodoro/blob/main/doc/mobile_pomodoro.jpg" alt="Pomodoro mobile app." width="200"/>

### Technologies
- React (Code and web)
- Cordova (Mobile)
- Bulma (CSS)
- *gradle and jdk 1.8 required for android compilation.



<!-- Repo's Content Tree -->
## Directories and Files
<details open>
  <summary><b>Project's Tree</b></summary>
    
  ``` bash
    |- cordova      # Contains the application.
    |   |- public   # Base of the web page.
    |   |- src      # React code of the pomodoro application.
    |   |- build    # Generated with command.
    |- [www]        # Generated with command.
    |- doc          # Contains repo readme pictures.
    |- .gitignore
    |- LICENSE
    |- README.md    # This file
  ```
</details>


<!-- Getting Started -->
## Installation
You need to install Cordova, React, npm and node.js.

You will need a device or phone with android, ios or windows phone to test the application as an apk when Cordova converts the code.


## How to Execute
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


<!-- Contribution -->
## Contribution

Contributions are always welcome, thank you for you time. Here are the steps to do so.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/MyContribution`)
3. Commit your Changes (`git commit -m 'Add MyContribution'`)
4. Push to the Branch (`git push origin feature/MyContribution`)
5. Open a Pull Request



<!-- License -->
## License

See the `LICENSE` file at the root of the project directory for more information.



<!-- Acknowlegements and Sources -->
## Acknowlegements and Sources
Programs
- https://fr.reactjs.org/
- https://cordova.apache.org/
- https://gradle.org/
- https://bulma.io/



<!-- md links & imgs -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/steve-levesque/Portfolio-React-Pomodoro.svg?style=for-the-badge
[contributors-url]: https://github.com/steve-levesque/Portfolio-React-Pomodoro/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/steve-levesque/Portfolio-React-Pomodoro.svg?style=for-the-badge
[forks-url]: https://github.com/steve-levesque/Portfolio-React-Pomodoro/network/members
[stars-shield]: https://img.shields.io/github/stars/steve-levesque/Portfolio-React-Pomodoro.svg?style=for-the-badge
[stars-url]: https://github.com/steve-levesque/Portfolio-React-Pomodoro/stargazers
[issues-shield]: https://img.shields.io/github/issues/steve-levesque/Portfolio-React-Pomodoro.svg?style=for-the-badge
[issues-url]: https://github.com/steve-levesque/Portfolio-React-Pomodoro/issues
[license-shield]: https://img.shields.io/github/license/steve-levesque/Portfolio-React-Pomodoro.svg?style=for-the-badge
[license-url]: https://github.com/steve-levesque/Portfolio-React-Pomodoro/blob/main/LICENSE
