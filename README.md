# odin-calculator
## The Odin Project Foundations course final project

### Project Goals:
With this being the final project of the Odin Project foundations course, the goals of this project span the entire set of topics covered so far. There will be many skills that need to be utilized here, and those will be outlined below, but first: a reminder to myself regarding healthy outlook:

This project will serve as a fantastic encapsulation of everything I've learned so far, and, upon completion, will be a milestone I should be proud of. But this is still just the end of the beginning, and I must go easy on myself for still having much to learn. Any mistakes or struggles are a natural part of the process. Enjoy that process!

Now, on to the high level topics I hope to focus on while completing this project:

- Continued use of a problem solving framework, and emphasizing this becoming a habit in my workflow moving forward. This includes understanding the problem fully (being able to explain it in simple English), planning the inputs, outputs, and user interface, pseudocoding the algorithm logic before writing any code, and dividing the problem into manageable chunks
- Clean organization of the file structure & code, and separation of concerns between HTML, CSS, & JS achieved through this organization
- Building the project piece by piece, and testing as I go, as well as committing with each small step completed
- Use of both typing vanilla HTML as well as using DOM methods to define & alter the structure of the page
- Use of both CSS & DOM methods to apply styling to elements & the DOM tree, including proper organization of CSS declarations
- Use of the CSS display property and layout flows such as Normal and FlexBox to properly layout the project
- Use of event listeners to add the relevant interactivity to the page
- Breaking down JS code into functions when necessary, to keep code readable, modular, and organized
- Proper simple use of arrays & objects, and their associated methods, as required by the program logic & data needs
- Solidifying my overall knowledge of and comfort with using JS
- Trying to use a more methodical approach to debugging, rather than using simple console.logs
- The continued practice of googling for solutions when stuck

### After-thoughts

Here are a few things I took note of while working on this project, that can hopefully be addressed moving forward in my wev dev jouney:

- With the scale of this project being the biggest so far of the curriculum, organization of code stood out as something I will have to focus on as I do bigger & bigger projects. Knowledge such as how to arrange functions in the file and when to break things out into their own functions will be more and more useful. I am still forming my understanding of how modular should code should be, and how those pieces should fit together and be arranged.

- Where should I have a piece of the algorithm logic if it could be in multiple functions/places in the code? For example, where to convert between numbers and strings if it could happen at multiple points as the data is being passed around. What is best practice?

- I felt a general unsurity about my algorithm. It works, but am I doing things efficiently? How do I apply best practices to this process of creating the algorithm/flow of the program and going beyond something that just works?

- Console.logs were really starting to become a tedious way to debug in a program this size. Not only are they in different sections of the code, making it necessary to hop around a bunch (using time & mental energy), but they don't have as clear of an order compared to a step-through debugger. I need to make a point to start using the dev tools debugger rather than console.logs moving forward, and really become familiar with this process.

- My problem solving/algorithm/pseudocoding process should start to include how data flows through a program and changes at each step. It should also be more granular I think, to plan out the smaller details, such as the nuances of user interactions and the full range of ways a user can interact with the program that may fall outside the program flow I first imagine. I think starting to do diagrams would help immensely.

- I want to learn more about the "proper" way to work with strings and numbers when they need to be converted back and forth to do calculations or populated to the screen. How is the flow of this data and changing types planned/managed/monitored?

- I'm curious to know what a "proper" way to manage the data of this program would be in a professional setting. Due to having studied React in the past, I used a state object to keep track of the data, but I don't know the proper setup for keeping track of data like this. I'm guessing there are clever uses of data structures and their relevant methods to process data more elegantly, but I'm not familiar with them currently. At least my solution worked and is a step in the right direction compared to just having a bunch of independent global variables floating around.

I realize that all of the above probably just needs time to develop and that it's an ongoing process of learning and improvement. I'm early on in my journey. Simply finding a working solution for this project was enough for now.

### Next Steps

Here are some bonus goals for this project for when I feel like circling back and refining things:

- Decimal math is working, but I need to make sure that each number input can only have one decimal point
- Fix automatic decimal rounding (0.5/2 currently displays 0.2, not 0.25)
- Different types of clearing to clear all data, just the line entered so far, or the last character typed
-Refactor/break out functionality into smaller individual functions, such as a function to update screen the screen