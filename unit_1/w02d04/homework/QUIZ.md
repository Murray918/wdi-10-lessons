![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# wdi-10-chi: Quiz 2

---
Title: Combining data types/Callbacks<br>
Type: Quiz/In-class assignment<br>
Creator: Matt Huntington<br>
Adapted by: Reuben Ayres<br>
Competencies: Objects, Arrays, Loops <br>
Prerequisites: JavaScript <br>

---
## Important

Before starting this, please read this set of [Tips and Tricks](../instructor_notes/TIPS.md)

## Setup

0. **IMPORTANT: Read all instructions on this quiz very carefully before you do them!**
1. Create a `quiz` folder in today's folder, and inside of that folder do you know what.
2. Copy the questions that you are answering into your file (and comment it out) and write the answer below the question.

## Combine objects, arrays, and functions

**COMPLETE ANY 3**

1. Create an object that has a property that is an array. Log one of the elements of that array.
1. Create an object that has a property that is an object. Log one of the properties of that inner object.
1. Create an object that has a property that is a function (method).  Call that method.
1. Create an array that has an object in it.  Log one of the properties of that object.
1. Create an array that has an array as one of its elements.  Log one of the elements of the inner array.
1. Create an array that has a function as one of its elements.  Call that function.
1. Create an object that has a property that is an array. Loop over the array and log each individual element.
1. Create an array that has an array as one of its elements.  Loop over the second array and log each individual element.
    - Bonus: make each element of the outer array an array as well.  Using two for loops, loop over each array in the outer array and log those elements.

**Commit 1** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 1 - Combine objects, arrays, and functions"
<hr>

## Combine objects, arrays, and functions more than one level deep

**COMPLETE ANY 3**

1. Create a function that returns an object.  Log a property of that object (hint: call the function and then call a property on the return value).
1. Create a function that returns an array.  Log an element of the array.
1. Create a function that returns an object that has an array.  Log one of the elements of that array.
1. Create a function that returns an object that has an object.  Log one of the properties of the inner object.
1. Create a function that returns an object that has a method.  Call that inner function (method).
1. Create a function that returns a function.  Call that inner function
1. Create an object that has a method that returns an object.  Log a property of the inner object.
1. Create an object that has a method that returns an object that has an array.  Log an element of that array.
1. Create an object that has a method that returns an object that has an object.  Log a property of the inner object.
1. Create an object that has a method that returns an object that has another method.  Call the inner method.
1. Create an object that has a method that returns a function.  Call that function.
1. Create an array that has a function that returns an object.  Log a property of the object.
1. Create an array that has a function that returns an object that has an array.  Log an element of the inner array.
1. Create an array that has a function that returns an object that has an object.  Log a property of the inner object.
1. Create an array that has a function that returns an object that has a method.  Call that method.
1. Create an array that has a function that returns a function.  Call the inner function.

**Commit 2** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 2 - Combine objects, arrays, and functions more than one level deep"
<hr>

## Create a callback

1. Define two functions and set them to variables
1. The second function takes a parameter
1. Call the second function, passing in the variable that references the first function as the parameter
1. In the definition of the second function, invoke (call) the parameter that is being passed into it.  Remember, this parameter is a function

**Commit 3** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 3 - Create a callback"
<hr>

## Indentation

Correctly indent the following code:

```javascript
            if(true){
    const a = 2 + 2;
console.log(a);
        }

    if(true){
if(false){
            console.log('hi');
    }
                }
```

**Commit 4** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 4 - Indentation"
<hr>

## Semantic naming of variables

Fix this variable to have a better name:

```javascript
const c = [2, 4, 6, 8, 10];
```

**Commit 5** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 5 - Semantic naming of variables"
<hr>

## Function definition placement

Clean up this code, so that it works and has function definitions in the correct place

```javascript
bar();
const bar = ()=>{
    console.log('bar here');
}
foo();

const foo = ()=>{
    console.log('foo here');
}
```

**Commit 6** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 6 - Function definition placement"
<hr>

## Commenting code

Write your own comments for each line of code:

```javascript
const addTwoNums = (firstNum, secondNum)=>{
    const finalValue = firstNum + secondNum;
    return finalValue;
}
```

**Commit 7** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 7 - Commenting code"
<hr>

## Describe some common programming principles

Read this article (don't worry it's short): http://www.artima.com/weblogs/viewpost.jsp?thread=331531

## Error reading

What is meant by the error this produces?

```javascript
foo();

const foo ()=>{
    console.log('hi');
}
```

**Commit 8** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 8 - Error reading"
<hr>

## Coerce data types

Fix the following code so the log executes (don't change the `if` statement):

```javascript
const b = '5';

if(b === 5){ //will be false
    console.log('this line should execute');
}
```

Fix the following code so the value 10 is logged (change only the line that has the console.log on it):

```javascript
const a = '5';
console.log(5 + a);
```

**Commit 9** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 9 - Coerce data types"
<hr>
