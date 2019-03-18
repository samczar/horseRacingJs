# horseRacingJs

## horse racing Using react redux Webpack and Babel.

The following application call **"HorseDemojs"** is a demo for animal racing competitions.

It was written using React.js "Javascript Library for building Users Interface https://reactjs.org" and Redux "A predictable state container for JavaScript apps. https://redux.js.org" as it's framework.

HorseDemojs Javascript codes runs on majorly ES16 and is transpile using Babel "Babel is a JavaScript compiler https://babeljs.io" and WebPack which helps in bundling contents "webpack is a module bundler https://webpack.js.org".

Styling of HorseDemojs was written using SASS "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS) https://sass-lang.com".

To startup this application is as easy as downloading or cloning from the github account "https://github.com/samczar/horseRacingjs", run npm install, and finally run npm start.

##Application Layout

`HorseRacingJs was layout is as follows`

- public `( Folder)`
  - Data `(Folder for Json File)`
    - data.json `(file serving the data to redux)`
  - index.html `(Display the compiled version of the application)`
- src `(Folder housing the entire React Redux Application)`

  - components `(Folder)`
    - apis `(Using axios to fetch the data but fetch can also be used)`
      - datasources.js `(function for getting host origin to run on any url and axios call )`
    - App.js `(A dummy component that layout the ** NextRace.js ** and ** RaceTypeFilter.js ** also calls the styles)`
    - NextRace.js `( Smart Container for listing the Games )`
    - RaceTypeFilter.js `( Smart Container for filtering the Games )`
    - redux `(Folder housing our redux functions and containers )`
      - action.js
      - reducers.js (`( Function that returns pieces of the application's state)`)
      - store.js `(A redux function for handling the data)`
    - styles `(Folder for housing SASS file which is transpiled to CSS)`
      - App.scss
    - index.jsx `(Calls the store, wrapping our App using the provider and setting the persist function for the localstorage of current state.)`

- webpack.config.js
- package.json
- .babelrc
