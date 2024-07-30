<!-- SLIDE 0 -->
<!-- .element class="main-title" -->

# Code 102: Intro to Software Development

Class 08

---

<!-- SLIDE 1 -->
<!-- .element class="title-and-subtitle" -->

# Agenda

- Review of previous class
  - Share your learning
- Computer Logic
  - Recap: Discussion Reading
  - Truth Tables
- Computer Loops
  - Demo: ‘while' and ‘for'
  - Lab: Add Features

NOTE:
Here's our plan for class today

---

<!-- SLIDE 2 -->
<!-- .element class="title-and-subtitle" -->

# Agenda

- Review of previous class <!-- .element class="highlight" -->
  - Share your learning
- Computer Logic
  - Recap: Discussion Reading
  - Truth Tables
- Computer Loops
  - Demo: ‘while' and ‘for'
  - Lab: Add Features

NOTE:
You are here

---

<!-- SLIDE 3 -->
<!-- .element class="title-and-subtitle" -->

# Initial Thought <!-- .element class="highlight" -->

*“A gentle reminder, sucking at something is the first step to learning something [new…](https://www.tiktok.com/@hebontheweb/video/6944023461283089670)”* <!-- .element class="fragment" data-fragment-index="1" -->

NOTE:
Click on the link. This will take you to TikTok.

---

<!-- SLIDE 4 -->
<!-- .element class="title-and-subtitle" -->

# `<review>` <!-- .element class="highlight" -->

What did you learn?

NOTE:
There are 4 skills in language learning: Hearing, speaking, reading, writing (and we generally develop them in that order).

These review sessions are your chance to SPEAK with this new language. Practice using the right words. Let these foreign sounds emanate from YOUR mouth. The names of these esoteric characters matter, and using the wrong one will make a difference to the computer.

Go around the room. Each student can share a thing learned, or a sentence from their Learning Journal. Help them use the right words. Document the vocab as necessary on the whiteboard.

Ask specifically for what was learned by reading about other student's learning.

---

<!-- SLIDE 5 -->
<!-- .element class="title-and-subtitle" -->

# Agenda

- Review of previous class
  - Share your learning
- Computer Logic <!-- .element class="highlight" -->
  - Recap: Discussion Reading
- Computer Loops
  - Demo: ‘while' and ‘for'
  - Lab: Add Features

NOTE:
You are here

---

<!-- SLIDE 6 -->
<!-- .element class="title-and-subtitle" -->

# `<reading>` <!-- .element class="highlight" -->

More Logic & Loops

---

<!-- SLIDE 7 -->
<!-- .element class="title-and-subtitle" -->

# Agenda

- Review of previous class
  - Share your learning
- Computer Logic
  - Recap: Discussion Reading
- Computer Loops <!-- .element class="highlight" -->
  - Demo: ‘while' and ‘for'
  - Lab: Add Features

NOTE:
You are here

---

<!-- SLIDE 8 -->
<!-- .element class="image-with-title" -->

## While Loop

![While Loop Structure Image](/code-102-guide/curriculum/class-08/slides/assets/8_0.png) <!-- .element height="600" -->

Note:
Image Source: https://www.programiz.com/python-programming/while-loop

---

<!-- SLIDE 9 -->
<!-- .element class="image-with-title" -->

# For Loop

![For Loop Structure Image](/code-102-guide/curriculum/class-08/slides/assets/9_0.png) <!-- .element height="600" -->

Note:
Image Source: https://clanguageprogrames.blogspot.com/2013/04/syntax-and-flowchart-of-for-loop.html

---

<!-- SLIDE 10 -->
<!-- .element class="split-screen" -->

<div>

# For Loop

```javascript
for (let i = 0; i <= 12; i = i + 1){
  console.log(i * 8)
}
```

![For Loop Example Image](/code-102-guide/curriculum/class-08/slides/assets/filled-for-loop-example.png) <!-- .element class="fragment" data-fragment-index="1" style="height: 450px;" -->

</div>  <!-- .element class="medium-text" -->

<div>

| Loop  | value<br>of 'i'   | evaluate    | execute/<br>output | increment i |
| ----- | ----------------  | ----------- | ------------------ | ------------|
| 1 <!-- .element class="fragment" data-fragment-index="3" --> | 0 <!-- .element class="fragment" data-fragment-index="4" --> | 0 <= 12 ? <!-- .element class="fragment" data-fragment-index="5" --> | **0** <!-- .element class="fragment" data-fragment-index="6" --> | 0 --> 1 <!-- .element class="fragment" data-fragment-index="7" --> |
| 2  <!-- .element class="fragment" data-fragment-index="8" -->| 1 <!-- .element class="fragment" data-fragment-index="9" --> | 1 <= 12 ? <!-- .element class="fragment" data-fragment-index="10" --> | **8** <!-- .element class="fragment" data-fragment-index="11" --> | 1 --> 2 <!-- .element class="fragment" data-fragment-index="12" --> |
| 3 <!-- .element class="fragment" data-fragment-index="13" --> | i = 2 <!-- .element class="fragment" data-fragment-index="14" --> | 2 <= 12 ? <!-- .element class="fragment" data-fragment-index="15" --> | **16** <!-- .element class="fragment" data-fragment-index="16" --> | 2 --> 3 <!-- .element class="fragment" data-fragment-index="17" --> |
| 4 <!-- .element class="fragment" data-fragment-index="18" --> | i = 3 <!-- .element class="fragment" data-fragment-index="19" --> | 3 <= 12 ? <!-- .element class="fragment" data-fragment-index="20" --> | **24** <!-- .element class="fragment" data-fragment-index="21" --> | 3 --> 4 <!-- .element class="fragment" data-fragment-index="22" --> |
| 5 <!-- .element class="fragment" data-fragment-index="23" --> | i = 4 <!-- .element class="fragment" data-fragment-index="23" --> | 4 <= 12 ? <!-- .element class="fragment" data-fragment-index="23" --> | **32** <!-- .element class="fragment" data-fragment-index="23" --> | 4 --> 5 <!-- .element class="fragment" data-fragment-index="23" --> |
| 6 <!-- .element class="fragment" data-fragment-index="23" --> | i = 5 <!-- .element class="fragment" data-fragment-index="23" --> | 5 <= 12 ? <!-- .element class="fragment" data-fragment-index="23" --> | **40** <!-- .element class="fragment" data-fragment-index="23" --> | 5 --> 6 <!-- .element class="fragment" data-fragment-index="23" --> |
| 7 <!-- .element class="fragment" data-fragment-index="23" --> | i = 6 <!-- .element class="fragment" data-fragment-index="23" --> | 6 <= 12 ? <!-- .element class="fragment" data-fragment-index="23" --> | **48** <!-- .element class="fragment" data-fragment-index="23" --> | 6 --> 7 <!-- .element class="fragment" data-fragment-index="23" --> |
| 8 <!-- .element class="fragment" data-fragment-index="23" --> | i = 7 <!-- .element class="fragment" data-fragment-index="23" --> | 7 <= 12 ? <!-- .element class="fragment" data-fragment-index="23" --> | **56** <!-- .element class="fragment" data-fragment-index="23" --> | 7 --> 8 <!-- .element class="fragment" data-fragment-index="23" --> |
| 9 <!-- .element class="fragment" data-fragment-index="23" --> | i = 8 <!-- .element class="fragment" data-fragment-index="23" --> | 8 <= 12 ? <!-- .element class="fragment" data-fragment-index="23" --> | **64** <!-- .element class="fragment" data-fragment-index="23" --> | 8 --> 9 <!-- .element class="fragment" data-fragment-index="23" --> |
| 10 <!-- .element class="fragment" data-fragment-index="23" -->  | i = 9 <!-- .element class="fragment" data-fragment-index="23" -->  | 9 <= 12 ? <!-- .element class="fragment" data-fragment-index="23" --> | **72** <!-- .element class="fragment" data-fragment-index="23" --> | 9 --> 10 <!-- .element class="fragment" data-fragment-index="23" --> |
| 11 <!-- .element class="fragment" data-fragment-index="23" --> | i = 10 <!-- .element class="fragment" data-fragment-index="23" --> | 10 <= 12 ? <!-- .element class="fragment" data-fragment-index="23" --> | **80** <!-- .element class="fragment" data-fragment-index="23" --> | 10 --> 11 <!-- .element class="fragment" data-fragment-index="23" --> |
| 12 <!-- .element class="fragment" data-fragment-index="23" --> | i = 11 <!-- .element class="fragment" data-fragment-index="23" --> | 11 <= 12 ? <!-- .element class="fragment" data-fragment-index="23" --> | **88** <!-- .element class="fragment" data-fragment-index="23" --> | 11 --> 12 <!-- .element class="fragment" data-fragment-index="23" -->  |
| 13 <!-- .element class="fragment" data-fragment-index="24" --> | i = 12 <!-- .element class="fragment" data-fragment-index="25" --> | 12 <= 12 ? <!-- .element class="fragment" data-fragment-index="26" --> | **96** <!-- .element class="fragment" data-fragment-index="27" --> | 12 --> 13 <!-- .element class="fragment" data-fragment-index="28" --> |
| 14 <!-- .element class="fragment" data-fragment-index="29" --> | i = 13 <!-- .element class="fragment" data-fragment-index="30" --> | 13 <= 12 ? <!-- .element class="fragment" data-fragment-index="31" --> | BREAK <!-- .element class="fragment" data-fragment-index="32" -->  | --- <!-- .element class="fragment" data-fragment-index="32" --> |

<!-- Copy of the table that will be rendered, remove the backslashes from the increment column 
| Loop  | value<br>of 'i'   | evaluate    | execute/<br>output | increment i |
| ----- | ----------------  | ----------- | ------------------ | ------------|
|  1    | i = 0             | 0 <= 12 ?   | **0**              | 0 --\> 1     |
|  2    | i = 1             | 1 <= 12 ?   | **8**              | 1 --\> 2     |
|  3    | i = 2             | 2 <= 12 ?   | **16**             | 2 --\> 3     |
|  4    | i = 3             | 3 <= 12 ?   | **24**             | 3 --\> 4     |
|  5    | i = 4             | 4 <= 12 ?   | **32**             | 4 --\> 5     |
|  6    | i = 5             | 5 <= 12 ?   | **40**             | 5 --\> 6     |
|  7    | i = 6             | 6 <= 12 ?   | **48**             | 6 --\> 7     |
|  8    | i = 7             | 7 <= 12 ?   | **56**             | 7 --\> 8     |
|  9    | i = 8             | 8 <= 12 ?   | **64**             | 8 --\> 9     |
|  10   | i = 9             | 9 <= 12 ?   | **72**             | 9 --\> 10    |
|  11   | i = 10            | 10 <= 12 ?  | **80**             | 10 --\> 11   |
|  12   | i = 11            | 11 <= 12 ?  | **88**             | 11 --\> 12   |
|  13   | i = 12            | 12 <= 12 ?  | **96**             | 12 --\> 13   |
|  14   | i = 13            | 13 <= 12 ?  | BREAK              | ---         |
-->

<!-- </section> -->

</div> <!-- .element class="medium-text fragment" data-fragment-index="2"-->

NOTE:

Image: https://www.tenouk.com/clabworksheet/labworksheet7_1.html

Let's change that to code
CRITICAL: Have students walk through the code, and tell you what statements are happening next, what the resulting value is.

---

<!-- SLIDE 11 -->
<!-- .element class="title-and-subtitle" -->

# `<demo>` <!-- .element class="highlight" -->

What can we do with our new skills?

NOTE:
Get suggestions on how you want to modify your app with validations and with creating repeated items. 

---

<!-- SLIDE 12 -->
<!-- .element class="title-and-subtitle" -->

# `<lab>` <!-- .element class="highlight" -->

Plan it out, then build it out
