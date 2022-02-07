# Frontend Mentor - Devjobs web app solution

This is a solution to the [Devjobs web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Be able to filter jobs on the index page by title, location, and whether a job is for a full-time position
- Be able to click a job from the index page so that they can read more information and apply for the job
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Screenshot

![](https://i.imgur.com/XXQAxDv.png)

### Links

- Solution URL: https://www.frontendmentor.io/solutions/devjobs-web-app-w-tailwindcss-vue-vuex-and-persistedstate-FJpUuACTW
- Live Site URL: https://devjobs-web-app-joaospedro.vercel.app/

## My process

### Built with

- Semantic HTML5 markup
- [TailwindCSS](https://tailwindcss.com/)
- [VueJS](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Vuex PersistedState](https://github.com/robinvdvleuten/vuex-persistedstate)

### What I learned

It was my first contact with [Vuex PersistedState](https://github.com/robinvdvleuten/vuex-persistedstate). Basically, this library persists and rehydrates the Vuex state. 
For example, accessing a job's information, since I saved all its information in a state, the data disappeared when refreshing the page. So using this library helped me to maintain the data.

## Author

- Website - [João Pedro Oliveira](https://joaospedro.me)
- Frontend Mentor - [@joaospedro](https://www.frontendmentor.io/profile/joaospedro)
- Twitter - [@_joaospedro](https://www.twitter.com/_joaospedro)
