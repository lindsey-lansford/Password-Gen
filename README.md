## Password Generator using JavaScript

This web application's purpose is to generate a random, secure password for a user. When the user clicks the "generate password" button, he/she/they will be prompted with a few conditions that will lead to the randomized generated password.

### How it Works

This application was built using HTML for the structure, CSS for the styling and JavaScript for the functionality/behavior.

* **Prompts & Confirms**: When the user clicks the "generate password" button, a prompt appears that will ask the user enter the amount of characters that want in their password. Next they will get a series of confirms that ask do they want to use: lowercase, uppercase, numeric values and/or special characters.
    * **Amount of Characters**: The caveat with this prompt was if the user enter in alphabetical characters instead of numbers. So, in order to fix that I added an "if" statement and an alert that would ask them for numeric values. Then the user would continue through with the confirms.
    * **The Confirms**: The user had to pick 1 or the 4 provided to create a randomize password. These were also written as "if" statements within the code.

* **For Loop --> Math.Random/Math.floor**: After all the conditions for how the user wanted their password to generate, I had to build a "for loop" and within that loop include a Math.random. The Math.random's purpose is to generate a random set of numbers, however we needed those to be whole numbers, so I added a Math.floor to the mix. The code within the for loop will repeat that same function "x" amount of times that they user put into the prompt(Input a number of characters between 8-128 for your password).

## Mock Up

The following screenshot shows the web application's appearance after the user has generated the random password:

![](./screenshot.png)


To view this web application, [click here](https://lindsey-lansford.github.io/Password-Gen/).