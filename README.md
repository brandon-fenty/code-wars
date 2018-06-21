# code-wars
Code Wars solutions

## Morning Lab 6-4-18 - FIXME: Replace the Dots

Link: https://www.codewars.com/kata/fixme-replace-all-dots/train/javascript

### Problem Domain: 

The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

## Pair Kata 6-4-18 - Abbreviate a two word name w/ Chi

Link: https://www.codewars.com/kata/abbreviate-a-two-word-name

### Problem Domain: 

Write a function to take a first and last name and convert it into initials with a dot in between them. The initials need to be upper case.

## Pair Kata 6-5-18 - my head is at the wrong end w/ Tara

Link: https://www.codewars.com/kata/56f699cd9400f5b7d8000b55

### Problem Domain: 

You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics - simples!

## Pair Kata 6-6-18 - insert dashes w/ Kelly

Link: https://www.codewars.com/kata/insert-dashes/train/javascript

### Problem Domain: 

Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

## Pair Kata 6-7-18 - Simple validation of a username with regex w/ Amanda

Link: https://www.codewars.com/kata/simple-validation-of-a-username-with-regex/javascript

### Problem Domain: 
Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

## Weekend Katas 6-10-18 - Regex validate PIN code & Alternate capitalization

Links:
 - https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/solutions/javascript
 - https://www.codewars.com/kata/59cfc000aeb2844d16000075/solutions/javascript

### Problem Domains

 1. Regex Validate Pin Code: 
    - ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

    If the function is passed a valid PIN string, return true, else return false.

2. Alternate capitalization:
    - Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

    For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

    The input will be a lowercase string with no spaces.


## Pair Kata 6-11-18 - Nice Array w/ Sara

### NOTE: I was sick and not at school this day, I did not contribute to my partners whiteboarding for the challenge but we came up with similar solutions so I used her whiteboard solution instead of writing out a completely new one.

Link: https://www.codewars.com/kata/nice-array/train/javascript

Problem Domain: A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.

example:

[2,10,9,3] is Nice array because

2=3-1
10=9+1
3=2+1
9=10-1
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. You should also return false if input array has no elements.

## Pair Kata 6-12-18 w/ Rosie

Link: https://www.codewars.com/kata/disemvowel-trolls/javascript

Problem domain: Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

## Pair Kata 6-13-18 - Find the Middle Element w/ Chris

Link - https://www.codewars.com/kata/find-the-middle-element/train/javascript

Problem Domain: Create a function that when given a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

## Pair Kata 6-14-18 - Reversed strings

Link - https://www.codewars.com/kata/reversed-strings/javascript

Problem Domain: Complete the solution so that it reverses the string value passed into it.

## Weekend Katas 6-16-18 - Calculate Average, List Filtering, & Use map() to double the values in an array

Links - 
- https://www.codewars.com/kata/calculate-average/solutions/javascript/me/best_practice
- https://www.codewars.com/kata/list-filtering/train/javascript
- https://www.codewars.com/kata/use-map-to-double-the-values-in-an-array

### Problem Domains
1. Calculate Average: Write function avg which calculates average of numbers in given list.

2. List Filtering: In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

3. Use map() to double the values in an array: Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object

## Pair Kata 6-18-18 - Sum of Odd Cubed Numbers

Link - https://www.codewars.com/kata/sum-of-odd-cubed-numbers/javascript

Problem Domain: Find the sum of the odd numbers within an array, after cubing the initial integers. This function will return undefined (NULL in PHP) if any of the values aren't numbers.

## Pair Kata 6-19-18 - Highest Scoring Word

Link - https://www.codewars.com/kata/highest-scoring-word/javascript

Problem Domain: Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

## Pair Kata 6-20-18 - Mutate My Strings

Link - https://www.codewars.com/kata/mutate-my-strings/javascript

Problem Domain: I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

Example:

stringOne = 'bubble gum';
stringTwo = 'turtle ham';

Result:
bubble gum
tubble gum
turble gum
turtle gum
turtle hum
turtle ham