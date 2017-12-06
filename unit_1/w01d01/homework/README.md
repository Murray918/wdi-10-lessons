![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# chi-wdi-10

---

Title: Terminal & Loop Homework<br>
Duration: 3 hrs approx.<br>
Creator: Thom Page <br>
Modified by: Kristyn Bryan<br> 
Adapted by: Reuben Ayres<br>
Topics: Terminal, boolean expressions, reading code, while loops, for loops<br>

---

# Homework

## Setup

1) Make a directory in today's folder called `homework`.

2) Build our folder structure like we did in class.

3) Write your answers inside `app.js`.

4) For any answers that require a written response, write the response as commented-out code.

```
// 1. The difference between interpolation and
// concatentation is . . .
```

6) For coded responses, as you work on them comment out everything else but the problem you're working on so that when you load `index.html` in your browser, only that code runs.


Good luck!

<br>
<hr>

# Section 1
## Terms

1. What is the difference between **interpolation** and **concatenation**? Give an example of each.

2. What does the acronym **DRY** stand for? Why should we pay attention to it? What programming tools have we learned to write **DRY** code?

<br>
<hr>

# Section 2
## Boolean expressions
**... and variable assignment**

- Using the provided variable definitions, replace the blanks with mathematical or boolean operators that make the expression evaluate to `true`.
- Test your answers by using `console.log` in front of each expression in your answer file.

```
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';
```

-  a \_\_ b;
-  c \_\_ d;
-  'Name' \_\_ 'Name';
-  a \_\_ b \_\_ c;
-  a \_\_ a \_\_ d;
-  e \_\_ 'Kevin';
-  48 \_\_ '48';

<br>
<hr>

# Section 3
## While loops

Increase your **code literacy** by reading code, line by line.

### Infinite loop?

Read the following code very carefully.

**DO NOT RUN** the code because it might run an **infinite loop**.

Answer the following question:

* is this an infinite loop? Why or why not?

You cannot test this code, so read it line by line and 'execute' the code in your head.

```
while (true) {
	console.log('Do not run this loop');
}
```

Infinite or not infinite? Give it a good guess. It is 100% OK if you get it wrong (as long as you don't run the code). It's important to get into the habit of reading code.

## Infinite loop II

* is this loop an infinite loop? Why or why not?

```
const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}
```

Inifnite or not infinite? What is the expected output?

## Reading code

Ok rest easy, no more infinite loops for now!



The following while loop uses a **compound assignment** operator `+=`.

If you need a refresher on what the `compound assignment` operator does, have a look back at the afternoon lesson.


_Without running this loop_, what is the expected output?

Read the code line by line-- everything happens in sequence. Write down what you think the code will log in the Terminal. Be patient with your thought! There is no rush.

```
let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);
```

After coming to a conclusion, run the code and write down whether it gave you the expected result. If not, how did it differ?

<br>
<hr>

# Section 4
## For loops

Answer the following question:

A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?

## For loop I

Write a for loop that will console.log the numbers 0 to 999.

## For loop control statement

Here is an example for loop that prints a message 100 times:

```
for (let i=0; i < 100; i++) {
	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
}
```

What are the three components of the **control statement**? Each component is separated by a semicolon `;`.

Write your answers as comments in the file.

* The first part of the control statement is:
* The second part of the control statement is:
* The third part of the control statement is:

## For loop in reverse

Using a postfix operator `i--` instead of `i++`, write a *for* loop that iterates in *reverse*. Console.log a countdown from 999 to 0.


## More counting

Write a *for* loop that uses **interpolation** to send a message to the console as well as the current value of `i`.

The loop should run from 1 to 10.

Expected Result:

```
The value of i is: 1 of 10
The value of i is: 2 of 10
The value of i is: 3 of 10
The value of i is: 4 of 10
The value of i is: 5 of 10
The value of i is: 6 of 10
The value of i is: 7 of 10
The value of i is: 8 of 10
The value of i is: 9 of 10
The value of i is: 10 of 10
```

<br>
<hr>

# Section 5
## Terminal Practice

Write the answer to each command at the bottom your your homework file. Write them as comments.

# Episode X: A New Terminal

A long time ago in a unix environment far, far away, young Jedi padawans who
knew only of desktop software were seduced by the dark side of the Force to
enter… The Terminal.

Follow the instructions below using all the console commands introduced in
Fundamentals, class, or that you find on your own.


## Part I: Set the Scene

1. Open the **Terminal app**


2. Create a new directory in today's folder called "`homework_part_2`" and enter it.

3. Create a directory called "**death_star**", and make the following files inside of it: "**darth_vader.txt**", "**princess_leia.txt**", "**storm_trooper.txt**"

4. In "`galaxy_far_far_away`", make a directory named "**tatooine**" and create the following files in it: "**luke.txt**", "**ben_kenobi.txt**"

5. Inside of "**tatooine**" make a directory called "**millenium_falcon**", and in it create: "**han_solo.txt**", "**chewbaca.txt**"

<br>

## Part II: mv - rename

* You can rename a file using the `mv` command.

For example, rename `file1.txt` to `file2.txt`

```
mv file1.txt file2.txt
```

1. Rename "**ben_kenobi.txt**" to "**obi_wan.txt**".

<br>

## Part II: cp - copy

* You can copy a file from one location to another using the `cp` command.

For example, copy `file1.txt` to its parent directory:

```
cp file1.txt ..
```

For example, copy `file1.txt` to a sibling directory:

```
cp file1.txt ../some_directory
```

For example, copy `file1.txt` to a child directory:

```
cp file1.txt some_directory
```

2. Copy "**storm_trooper.txt**" from "**death_star**" to "**tatooine**".

<br>

## Part IV: mv - move

* You can use the `mv` command to move files from one location to another.

For example, move a file from its current location to the parent directory:

```
mv file1.txt ..
```

For example, move a file from its current location to a sibling directory:

```
mv file1.txt ../some_directory
```

For example, move a file from its current location to a child directory:

```
mv file1.txt some_directory
```

You can also move directories into other directories using the same syntax.



3. Move "**luke.txt**" and "**obi_wan.txt**" to the "**millenium_falcon**".

4. Move "**millenium_falcon**" out of "**tatooine**" and into "**galaxy_far_far_away**".

5. Move "**millenium_falcon**" into "**death_star**".

6. Move "**princess_leia.txt**" into the "**millenium_falcon**".

<br>


## Part V: rm - remove

You can use `rm` to delete a file.

For example, delete a file:

```
rm file1.txt
```

7. Delete "**obi_wan.txt**".

<br>

## Part VI: all together

8. In "**galaxy_far_far_away**", make a directory called "**yavin_4**".

9. Move the "**millenium_falcon**" out of the "**death_star**" and into "**yavin_4**".

10. Make a directory in "**yavin_4**" called "**x_wing**".

11. Move "**princess_leia.txt**" to "**yavin_4**" and "**luke.txt**" to "**x_wing**".


1. Move the "**millenium_falcon**" and "**x_wing**" out of "**yavin_4**" and into "**galaxy_far_far_away**".

2. In "**death_star**", create directories for "**tie_fighter_1**", "**tie_fighter_2**" and "**tie_fighter_3**".

3. Move "**darth_vader.txt**" into "**tie_fighter_1**".

4. Make a copy of "**storm_trooper.txt**" in both "**tie_fighter_2**" and "**tie_fighter_3**".

5. Move all of the "**tie_fighters**" out of the "**death_star**" and into "**galaxy_far_far_away**".

<br>

## Part VII: rm -r - remove directories

**Be careful with this command**

Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).

This command will typically not ask you if you really want to delete. It will just delete . . .

6. Remove "**tie_fighters**" 2 and 3.


## Part VIII:

7. Touch a file in "**x_wing**" called "**the_force.txt**".

8. Destroy the "**death_star**" and anyone inside of it.

9. Return "**x_wing**" and the "**millenium_falcon**" to "**yavin_4**".

10. Celebrate.


# YOU'RE DONE! GET SOME SLEEP!!! I'M SERIOUS!!!

<br>

Want an extra challenge? Try doing the following, as long as you don't mess up the homework assignment you just did:

* Try applying one command to multiple files at once.
* Try applying one command to **all** files in a single directory (where necessery)
* Try applying one command to **all files that match a pattern**.
* Find and use command line shortcuts.
* Try using a mix of absolute and relative paths.

<br>
<hr>

# Homework submission

Once you've got your homework all done and on github, do a pull request to get it submitted. NICE JOB
