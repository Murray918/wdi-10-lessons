![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# wdi-10-chi (fluff hounds)

![LA FORGE](https://trello-attachments.s3.amazonaws.com/5a1f1414061dcf1a5867f937/5a2aa5c88bb54822ac4cfb43/ae6f0143073d7f3351e7e47a4fc7bf4b/GeordiLaForge.jpg)

---
Title: LA FORGE: Problem solving with functions<br>
Duration: "3:00 - 4:00" <br>
Type: Homework, Assigned Saturday, Dec 9, 2017<br>
Adapted by Reuben Ayres from homework assignment created by Thom Page<br>
Topics: Problem solving with functions<br>

---

# Homework

## Due: Monday, December 11, 2017 @8:59 am. <br>

**NOTE**

If you are not finished by the start of class Monday, **you may request the extension by sending me a Slack message by 8:59am on Monday** and you will be granted an extension until 7:30pm on Monday night **but you must request it.**

## Setup

Make sure you are finished with the Lab we started in class on Friday. Slack me if you have questions.

Fork this repository, and then from the github page for your fork, clone that forked repository onto your machine.
As indicated, do a commit after each step is completed. Of course, you may make more than one commit per problem (like, if you fish a part of a problem).

After your write each function, make sure they work as expected by calling the function for a few test cases.  Include any from the problems themselves and one or two of your own. I recommend commenting out completed work as you go, but when you finish the assignment, uncomment all your code amd make sure it still works, and that the console output is meaningful. 

Like so: 

```javascript
console.log("2. Palindrome:");
console.log('Radar: ' + checkPalindrome("Radar"));
console.log('Borscht: ' + checkPalindrome("Borscht"));
console.log('Sit on a potato pan otis: ' + checkPalindrome("Sit on a potato pan otis"));
console.log('Tennessee: ' + checkPalindrome("Tennessee"));
```

You should understand every letter of code in your submitted responses well enough to explain them to someone else.

## Submission: 

When you are finished, submit a pull request from your fork.


<br>

# Functions

## 1. Verbal questions

Write answers to the following questions as comments. As a reminder you can highlight your code and type `command` + `/` to turn your code into a comment.

```
// my commented answer
```
  a. What is the difference between a **parameter** and an **argument**?

  b. Within a function, what is the difference between **return** and **console.log**?

  c. Explain the concept of scope in four (or fewer) concise sentences.

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Finished #1: Verbal questions".
<hr>

## 2. Palindrome
Write a function `checkPalindrome` that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with **capital letters**.  Additionally, make sure that spaces are ignored.

```javascript
console.log(checkPalindrome("Radar"));
 => true
```

```javascript
console.log(checkPalindrome("Borscht"));
=> false
```
<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Finished #2 - Palindrome".
<hr>

## 3. Digit Sum
Write a function `sumDigits` that accepts a number and returns the sum of its digits.
```
console.log(sumDigits(42));
=> 6;
```

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Finished #3 - Digit Sum".
<hr>

## 4. Pythagoras
Write a function `calculateSide` that takes two arguments: `sideA` and `sideB`, and returns the solution for sideC using the Pythagorean theorem.
  
_hint:_ discover the Pythagorean Theorem on a website called google.com  
_hint:_ checkout the [Math methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) in javascript
```
console.log(calculateSide(8, 6));
=> 10
```
<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Finished #4 - Pythagoras".
<hr>

## 5. Sum Array
Write a function `sumArray` that takes an **array** as an argument.
The array should contain numbers. The function should return the sum of the numbers in the array.
Use a _for loop_ within the function to iterate over the array and sum the contents.
Use a variable such as 
```javascript
let sum = 0;
```
that will **accumulate** value within the loop.
Expected result:
```javascript
console.log(sumArray([1, 2, 3, 4, 5, 6]));
=> 21
```
<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Finished #5 - Sum Array".
<hr>

## 6. Prime Numbers
A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, [go here](https://en.wikipedia.org/wiki/Prime_number).
To test whether a number is Prime, you only need to test as far as the **square root** of that number. This is advisable for optimization and testing large numbers.

### Step One
Write a function called `checkPrime` that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.
_Hint:_ Check every number up to the square root. To do this, try a _for loop_.

### Step Two
Write another function called `printPrimes` that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with `printPrimes(97)`, it will print all the Prime numbers up to and including 97.
This function can **call** the previous `checkPrime` function.
</details>

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Finished #6 - Prime Numbers".
<hr>

## 7. Insert Dash
Write a function `insertDash` that accepts a number as a parameter and returns a string with a dash inserted between any consecutive **odd numbers**. There should not be a dash at the end, it goes only between numbers.
```javascript
console.log(insertDash(454793));
```
> => 4547-9-3

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Finished #7 - Insert Dash".
<hr>


# Hungry for more?

These are optional and a little trickier. Use Google, MDN, stackoverflow, etc as needed.

However, If you straight up copy code from a tutorial or stack overflow post, make sure that you 1) understand exactly how it works such that you could explain it to someone else and 2) put a comment above the code you took saying where you got it and how it works. 
Like so: 
```javascript
// This string reverse function is totally sick, bra.  
// I took it from http://link-to-awesome-js-resource.com/post1234-reverse-string.html
// It uses method chaining to send output of the String.prototype.split() library 
// function to the .reverse() and then to the .reverse() .join() Array library 
// functions, respectively.  I am inspired by its elegance.
function reverse(s) {
  return s.split('').reverse().join('');
}
```

1. Read about the Array method [(Array.prototype.reduce()] on MDN. Create a new answer to the "Sum Array" problem above using the method. We will talk about array helper methods more in class next week.

2. Create a second palindrome function, `fancyPalindrome` such that not only spaces are ignored, but also any character that is not a letter of the English alphabet.  In other words, your function should still return true if you pass in `"R@d@r"` or `"Sit! (on a potato pan), Otis!!!"` or `"aromora12345"` as arguments.

3. Try to come up with a second `reverseString` method, `reverseString2` that **does not use .split(), .reverse(), or .join()**. Spend some time thinking about how you might do it.  There are many many other ways to do it. If you are still pondering, see the hints below; and if you're still pondering after that, see if you can come up with a solution **using only MDN as a resource**.
>Hint: You can index into a string with brackets just like you can an array <br>
>Hint: Check out substr() and/or substring() and/or charAt() <br>

4. Read about CSS pseudo classes and pseudo elements on MDN.  

  a) Verbal questions: What are pseudo classes? What is the difference between pseudo classes and pseudo elements?

  b) **Without using JavaScript**, adapt the layout from Friday so that when you mouse over each block it changes to a different color. The colors for unique elements should be unique but if there are repeated elements (such as the small "nav" boxes on the top right, use "nth-child" to make the even ones mouse to one color and the odd ones mouse to another color


<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Finished #8 - Hungry for More".
<hr>

Have a beer + watch some Star Trek: The Next Generation on Netflix