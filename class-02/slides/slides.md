<!-- SLIDE 0 -->
<!-- .element class="main-title" -->

# Code 102: Intro to Software Development

Class 02

---

<!-- SLIDE 1 -->
<!-- .element class="title-and-subtitle" -->

# Agenda

- Review of previous class
  - Share your learning
- Developer Tools
  - Text Editor
  - Terminal
  - Discussion Exercise
- Installfest!
  - Operating Systems
  - Lab: Install and Configure

NOTE:
Here's our plan for class today

---

<!-- SLIDE 2 -->
<!-- .element class="title-and-subtitle" -->

# Agenda

- Review of previous class <!-- .element class="highlight" -->
  - Share your learning
- Developer Tools
  - Text Editor
  - Terminal
  - Discussion Exercise
- Installfest!
  - Operating Systems
  - Lab: Install and Configure

NOTE:
You are here.

---

<!-- SLIDE 3 -->
<!-- .element class="title-and-subtitle" -->

# `<review>` <!-- .element class="highlight" -->

What did you learn?

NOTE:
There are 4 skills in language learning: Hearing, speaking, reading, writing (and we generally develop them in that order).

These review sessions are your chance to SPEAK with this new language. Practice using the right words. Let these foreign sounds emanate from YOUR mouth. The names of these esoteric characters matter, and using the wrong one will make a difference to the computer.

Go around the room. Each student can share a thing learned, or a sentence from their Learning Journal. Help them use the right words. Document the vocab as necessary on the whiteboard.

Ask specifically for what was learned by reading about other student's learning.

---

<!-- SLIDE 4 -->
<!-- .element class="title-and-subtitle" -->

# Agenda

- Review of previous class
  - Share your learning
- Developer Tools <!-- .element class="highlight" -->
  - Text Editor
  - Terminal
  - Discussion Exercise
- Installfest!
  - Operating Systems
  - Lab: Install and Configure

NOTE:
You are here.

---

<!-- SLIDE 5 -->
<!-- .element class="title-and-text" -->

# Power Tools

<br>

“I think one of the things that really separates us from the high primates is that we're tool builders. I read a study that measured the efficiency of locomotion for various species on the planet. The condor used the least energy to move a kilometer. Humans came in with a rather unimpressive showing, about a third of the way down the list. So, that didn't look so good. But, then somebody at Scientific American had the insight to test the efficiency of locomotion for a man on a bicycle. And a human on a bicycle blew the condor away, completely off the top of the charts.

And that's what a computer is to me. What a computer is to me is it's the most remarkable tool that we've ever come up with, and it's the equivalent of a bicycle for our minds.”

### —Steve Jobs, 1990

NOTE:
To introduce this section, here's a quote from Steve Jobs… <READ IT OR HAVE A STUDENT READ IT> 

Source: https://www.brainpickings.org/2011/12/21/steve-jobs-bicycle-for-the-mind-1990/

---

<!-- SLIDE 6 -->
<!-- .element class="split-screen-with-title" -->

# Text Editors

...There are many… Can you name some?

<div>

<div>

# Word Processors <!-- .element class="fragment" data-fragment-index="1" -->

- Microsoft Word <!-- .element class="fragment" data-fragment-index="2" -->
- Google Docs <!-- .element class="fragment" data-fragment-index="3" -->
- Apple Pages <!-- .element class="fragment" data-fragment-index="4" -->
- WordPerfect? <!-- .element class="fragment" data-fragment-index="5" -->
- ...and many more <!-- .element class="fragment" data-fragment-index="6" -->

</div>

<div>

# Code Editors <!-- .element class="fragment" data-fragment-index="7" -->

- GitHub's Atom <!-- .element class="fragment" data-fragment-index="8" -->
- Microsoft's VS Code, Visual Studio <!-- .element class="fragment" data-fragment-index="9" -->
- NotePad++ <!-- .element class="fragment" data-fragment-index="10" -->
- Vim, Emacs, Nano, TextMate <!-- .element class="fragment" data-fragment-index="11" -->
- ...and many more <!-- .element class="fragment" data-fragment-index="12" -->

</div>

NOTE:
Ask students what they can name…

---

<!-- SLIDE 7 -->
<!-- .element class="split-screen-with-title" -->

# The Terminal

AKA: The Command Line Interface (CLI)

<div>

<div>

# File Explorer Tasks: <!-- .element class="fragment" data-fragment-index="1" -->

- Find files <!-- .element class="fragment" data-fragment-index="2" -->
- Change directories <!-- .element class="fragment" data-fragment-index="3" -->
- Move and copy files <!-- .element class="fragment" data-fragment-index="4" -->
- Open files <!-- .element class="fragment" data-fragment-index="5" -->
- Make new files / folders <!-- .element class="fragment" data-fragment-index="6" -->

</div>

<div>

# Terminal Tasks: <!-- .element class="fragment" data-fragment-index="7" -->

- Find files, or file content <!-- .element class="fragment" data-fragment-index="8" -->
- Change directories <!-- .element class="fragment" data-fragment-index="9" -->
- Move and copy files <!-- .element class="fragment" data-fragment-index="10" -->
- Open files <!-- .element class="fragment" data-fragment-index="11" -->
- Make new files and folders <!-- .element class="fragment" data-fragment-index="12" -->
- ...and much much more <!-- .element class="fragment" data-fragment-index="13" -->

</div>

</div>

NOTE:
Ask students: What are things they do in file explorer?

Find files
Change directories
Move / copy files
Open files
Make new files / folders

You can do all that and more from the Terminal. Learn to use it equivalently, and then you'll layer on even more power.

---

<!-- SLIDE 8 -->
<!-- .element class="title-and-subtitle" -->

# `<demo> && <exercise>` <!-- .element class="highlight" -->

Can you see why it matters?

NOTE:
Show the tools in action:

- Write some HTML in VS Code, and ask for observations.
  - Say: You may not write code this fast yet, but just focus on what the text editor is doing to help me.
  - Create: Write up an HTML file from scratch.
  - WHY is this better than Microsoft Word?
- Move around a bit in the terminal between / within code projects.
  - Show the same actions in the GUI
  - WHY is the Terminal better than File Explorer/Finder?
    - Hands stay on they keyboard
    - Actions can be described precisely (simply “cd xyz”, rather than “Look through the list for a folder named xyz, and doulbe-click on it”)
    - Actions are can be written down, chained, scripted…
    - Other commands can be accessed (like git) that are often unavailable in the GUI

See /demo for details.

Then get students going on the DISCUSSION exercise for the day.

---

<!-- SLIDE 9 -->
<!-- .element class="title-and-subtitle" -->

# Agenda

- Review of previous class
  - Share your learning
- Developer Tools
  - Text Editor
  - Terminal
  - Discussion Exercise
- Installfest! <!-- .element class="highlight" -->
  - Operating Systems
  - Lab: Install and Configure

NOTE:
You are here.

---

<!-- SLIDE 10 -->
<!-- .element class="title-and-text" -->

# The Power of Abstraction

Ignore Details In Layers Above And Below <!-- .element class="fragment" data-fragment-index="1" -->

![layers of abstraction image](/code-102-guide/curriculum/class-02/slides/assets/10_0.png) <!-- .element height="550" -->

NOTE:
Abstraction simply means we leave out some irrelevant details.

Each of these layers has a different problem to solve, so different approaches are utilized. Even within each layer, multiple interchangeable options exist. What you use is your “stack”.

At the bottom: YOUR OPERATING SYSTEM
ASK: What is the job of the OS?

- Install programs
- Control the hardware: HDD, RAM, peripherals, etc
- File management
- Control which program is getting CPU time
- User management
- etc

---

<!-- SLIDE 11 -->
<!-- .element class="title-and-subtitle" -->

# `<exercise>` <!-- .element class="highlight" -->

Installfest!

NOTE:
Get students going with following the computer setup guide.

Group students up by OS, and have them work through the guide together.
