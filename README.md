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

##Question
`### How long did you spend on the test? Would you do anything differently if you had more time?`

##Answer
`### I spent roughly 3 to 4 on the entire Test from the App to the Test and Documentation. Would have made the buttons and some little elements a reuseable components of theirs so it could be used in other projects.`

##Question
`### In what ways would you adapt your component so that it could be used in many different scenarios where this component is required?`

##Answer
`### The NextRace.js component could be used in other projects or section of the Application to show list of the Races etc.`

##Question
`### What is your favorite CSS property? Why?`

##Answer
`### The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.`

##Question
`### What is your favorite modern JavaScript feature? Why?`

##Answer
`### Spread syntax and the Map . Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected..`
