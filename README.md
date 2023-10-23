# Choose Together App

This project aims at helping parents to choose a name for their child.

It is NOT a Baby Name Generator.

It is a DECISION MAKING TOOL :)

## Overview

Imagine you and your partner have to find a name for your child, BUT... you have different preferences.

You prefer the name "Linda", and he/she prefers the name "Marry". Still, you may consider some other names, like "Jess", "Emily", "Anna". 
Your partner also has a list of 15 other names that she likes.
So - there are many names, different opinions, and a child that needs to have a name.

This app helps you to go through this decision-making process in a pleasant and peaceful way.
You just need to follow these steps:

### `1. Create Pool of Names`

Together with your partner, type down the names, that you are taking into the consideration.

For example, when I used this method together with my wife, we created a list of 30 names, where I had 12 name "candidates" and she had 18.

### `2. Compare Names In Pairs`

Now you will INDIVIDUALLY compare of the name "candidates" in pairs to determine your preference ranking.

In psychological terms, it is easier to compare just TWO candidates, and decide which one we prefer, than think about the entire set of candidates, and picking a preference order.

So each of you will have to decide: "Marry" or "Jess"? "Marry" or "Lind"? Which name do I prefer to give to my child?

This process may take some time, depending on how many names you have in your name pool.

### `3. Results`

Now the app has created preference rankings based on your individual choices.

The program compares these rankings and returns the best name suggestions for your couple.


### How to interpret suggestions?

If, for example, "Jess" scored 3, it means: "the person who likes this name less ranked it at position 3". The second person may like the name "Jess" even more or at the same level.

So, in other words, one of you is probably less happy with the choice, but still, this may be the best deal for you as a pair. If you choose a name that scored, for example, 30, it would probably make the "less-liking" person really dissatisfied, even if, for the second person, this name would be the first choice.


## Technicalites

### Comparison Optimization

To minimize the number of name comparisons (and thus save users' time), I've implemented the MERGE SORT algorithm. It works dynamicly - so as the user proceeds with choices it computes the dynamic comparisons.

### 'Progress bar'
https://www.npmjs.com/package/@ramonak/react-progress-bar#custom-class-names
