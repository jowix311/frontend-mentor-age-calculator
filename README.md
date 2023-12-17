# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot
- Please refer to the live site which is shared on the Links sections

### Links

- Solution URL: [https://github.com/jowix311/frontend-mentor-age-calculator](https://github.com/jowix311/frontend-mentor-age-calculator)
- Live Site URL: [https://age-calculator-jowix.netlify.app/](https://age-calculator-jowix.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- React - JS library
- Netlify
- Tailwind - For styles
- React Hook Form - React JS library to handle form validation
- Date-FNS - A collection of Date related functions to help with date validation and logic

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned
- Learned the basics of Tailwind
  - Mobile first approach with built-in Tailwind classes
  - Added a Prettier library to arrange the classes on file save
  - Applied arbitrary functions
  - Applied Tailwind custom configurations for adding font family, extending colors and border radius
  - Applied validation styling together with React and React Form Hook
- Used React Hook Form for easy form validation
  - Learned to add validation and custom validation with custom messages
  - Learned to use input values from other field when needed to access it
- Used Date-FNS to handle date validation
  - Used it with React Hook Form to check:
    - If date is the future or is before a target date
    - If day is valid on a given date like in a leap year
  - Used it to get the breakdown of year, month and day for the age
- Enhance React skills
  - Created a React component the "animate" counter
  - Integrate React Hook Form to my custom Input component
- Able to use ChatGPT to get some insights or ideas on coding ideas



### Continued development
- Add optimizations for React
- Maybe apply Redux Toolkit

## Author

- Website - [Joseph Englis](https://jowi-englis.vercel.app/)
- Frontend Mentor - [@jowix311](https://www.frontendmentor.io/profile/jowix311)



