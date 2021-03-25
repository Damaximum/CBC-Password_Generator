# CBC-Password Generator

This is my submission for UCSD's Coding Bootcamp Homework #3.

## Objective

The objective of this homework is to use all the Javascript learned over the week and put together a password generator.

## Links
Github: https://github.com/Damaximum/CBC-Password_Generator

Webpage: https://damaximum.github.io/CBC-Password_Generator/

## Screenshots

On Initial Loading:
![Alt text](./screenshots/1-main.png?raw=true "Initial Load")

Asking for length of characters:
![Alt text](./screenshots/2-length.png?raw=true "Length Prompt")

Asking Criterias:
![Alt text](./screenshots/3-criteria.png?raw=true "Criteria Confirmations")

Final Result:
![Alt text](./screenshots/4-final.png?raw=true "Final Result")

## How it was done

I broke down the acceptance criteria as well as the objective of the homework into simple tasks: Criteria, Determining characters, Password generation, Printing the password, Checks and Debugs.

### 1) Creating the Criteria

I approached the criteria with arrays. I realised that I could use [.concat] array method to combine arrays into one array, which will make the random generation much more easily. So, I made arrays for each part that I needed: lowercase letters, uppercase letters, numbers and special symbols (I had to cut out one or two as it caused issues with the syntax of the array and code). Then I created [confirm] popups to check if the user wanted said element, if statements to check if they are true or false, and then using [.concat] and adding them to a blank array.

### 2) Determining the Number of Characters

For this, I had to get the user input, so I used a [prompt] to get it into a variable. Then I checked if it was a number using a [isNaN] check (using a [!==] since if it is a number it returns a false, as I was looking for true, though just looking for false could have worked.) repeating the prompt if it wasn't. Then it was if-else statements to check if it was longer than 8 characters, and smaller than 128 characters, again, repeating the prompt if it didnt fall within the range. Finally, using a for-loop, I made it loop equal to the inputed number (This is possible since the input was a global variable, and was stored as a number.) via [i < PassLength]. 

### 3) Password Generation

This one was straight forward, since all I had to do was run a random number generator with [math.floor] and [math.random], using the length of the blank array for the criteria (which should have values in it due to the criteria function). This would randomly choose a number corresponding to an index number for the criteria array. 

### 4) Printing the Password

The generator generates random numbers, letters, and symbols, but not saving it so far. So, in order to "save" it, I created another (global) blank array, and using the [.push] array method, I was able to "save" the generated characters for use later. Finally, after looking at the pre-made bit of code, I found the code that prints to the box on the site, and made it so that the code prints the generated password.

### 5) Checks and Debugs

After completing the main portion of the code, I went through it to see if there were any issues and changes to make.

Problem: Cannot cancel out of the prompt/looping or the program runs other functions even if it cancels out.
Solution: Reorganize some of the functions and if statements that had prompts, confirms, or alerts so that if it is cancelled, then it does not run. Also added some extra if-else statements to check if the user pressed cancel so that they could leave (added some [return ' ';]s in there but it might be redundant.)

Problem: Printed password has [,] between each number
Solution: Used a [.join] method with [' '] as the criteria, elminating the [,]