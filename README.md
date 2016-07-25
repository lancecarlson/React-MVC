# ReactMVC

## Introduction

React is awesome. Flux is annoying. I propose an alternative.

## MVC

Model, view, controller is such a simple and powerful design pattern and was specifically created to solve UI problems. Let's use it.

## How to use MVC with React?

Let's start with the dependencies. Grab these:

* page.js (https://visionmedia.github.io/page.js/) 
* Immutable JS (I use these for some of my models. Can also use es6 classes)
* whatwg-fetch (polyfill)
* React

Here is a high level overview of what your project will look like:

- Routes: Using page.js, send your routes to actions.
- Controllers: Use either basic es6 classes that extend from an ApplicationController, or just use more functional patterns
- Models: You can use basic es6 classes or Immutable js, or something else. Models should call out to REST API services using the fetch API. No need to JQuery.
- Views: Use React. Fetch the bare mininum data you need to render your components in a "loading" state. Identify the state that will change with data injection and stick that in constructor. Configure your lifecycle methods to account for state changes. I would try to abstract out as much of the data handling/modeling logic into controller/models as you can and just let the react components manage their component lifecycle.

## <FINE />

This is so much cleaner and simpler than Flux. Enjoy.

## Contributors

https://github.com/lholden
