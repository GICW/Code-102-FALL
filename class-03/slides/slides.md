<!-- SLIDE 0 -->
<!-- .element class="main-title" -->

# Code 102: Intro to Software Development

Class 03

---

<!-- SLIDE 1 -->
<!-- .element class="title-and-subtitle" -->

# Agenda

- Review of previous class
  - Share your learning
- Sharing Code
  - Understanding Git
  - GitHub
  - Git-flow
- Deployment
  - GitHub Pages
  - Demo
- Assignments
  - Reading & Lab

NOTE:
Here's our plan for class today

---

<!-- SLIDE 2 -->
<!-- .element class="title-and-subtitle" -->

# Agenda

- Review of previous class <!-- .element class="highlight" -->
  - Share your learning
- Sharing Code
  - Understanding Git
  - GitHub
  - Git-flow
- Deployment
  - GitHub Pages
  - Demo
- Assignments
  - Reading & Lab

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
- Sharing Code <!-- .element class="highlight" -->
  - Understanding Git
  - GitHub
  - Git-flow
- Deployment
  - GitHub Pages
  - Demo
- Assignments
  - Reading & Lab

NOTE:
You are here

---

<!-- SLIDE 5 -->
<!-- .element class="title-and-subtitle" -->

# `<git>` <!-- .element class="highlight" -->

## Sharing code and collaboration: DVCS for the masses

NOTE:
# TELL: Collaboration is what makes large coding projects possible!  Let's take a look at how web software developers share code.

---

<!-- SLIDE 6 -->
<!-- .element class="title-and-subtitle" -->

# What is Git?

- It's a version control system. <!-- .element class="fragment" data-fragment-index="1" -->
- It lets multiple developers work on the same code. <!-- .element class="fragment" data-fragment-index="2" -->
- A history of changes to your files. <!-- .element class="fragment" data-fragment-index="3" -->
- The ability to view, apply, and remove those changes. <!-- .element class="fragment" data-fragment-index="4" -->
- Keep all of your project files in one repository. <!-- .element class="fragment" data-fragment-index="5" -->
- It makes collaboration possible! <!-- .element class="fragment" data-fragment-index="6" -->

NOTE:
# TELL:

- A "version control system."
- A history of everything you do to your files.
- A record of "states" in which your files has existed.
- A way to organize project files using repositories (a repository is simply a collection of things you care about).
- All of the above means that Git is highly effective at maintaining the cohesiveness of group collaboration.
- Git is used to save and backup work, share your code and collaborate on projects.

---

<!-- SLIDE 7 -->
<!-- .element class="title-and-subtitle" -->

# Without version control

- Look familiar? <!-- .element class="fragment" data-fragment-index="1" -->
  - term_paper.docx <!-- .element class="fragment" data-fragment-index="2" -->
  - term_paper2.docx <!-- .element class="fragment" data-fragment-index="3" -->
  - term_paper2_with_footnotes.docx <!-- .element class="fragment" data-fragment-index="4" -->
  - final_term_paper.docx <!-- .element class="fragment" data-fragment-index="5" -->
  - term_paper_for_submission.docx <!-- .element class="fragment" data-fragment-index="6" -->
  - term_paper_for_submission_for_real.docx <!-- .element class="fragment" data-fragment-index="7" -->

NOTE:
# TELL: I'm sure some of you are guilty of this!

---

<!-- SLIDE 8 -->
<!-- .element class="title-and-text" -->

# Snapshots in time

- Commits represent each successive version of a file or files. <!-- .element class="fragment" data-fragment-index="1" -->
- Commits are the Git equivalent of “Save As…” <!-- .element class="fragment" data-fragment-index="2" -->

![Commit A Image](/code-102-guide/curriculum/class-03/slides/assets/commit-a.png) <!-- .element class="fragment" data-fragment-index="3" -->

NOTE:
# TELL:

- Git uses “commits” to represent each successive version of a file or files.
- Commits are similar to “Save As…”, but better.

---

<!-- SLIDE 9 -->
<!-- .element class="title-and-text" -->

# Snapshots in time

- Each successive version creates a new snapshot on the timeline of the project. <!-- .element class="fragment" data-fragment-index="1" -->
- Git keeps track of what the file looked like at different points in time. <!-- .element class="fragment" data-fragment-index="2" -->

![Commit A to Commit B Image](/code-102-guide/curriculum/class-03/slides/assets/commit-b.png) <!-- .element class="fragment" data-fragment-index="3" -->

NOTE:
TELL: Each successive version creates a new snapshot on the timeline of the project.

---

<!-- SLIDE 10 -->
<!-- .element class="title-and-text" -->

# Snapshots in time

<br>

![Commit Timeline Image](/code-102-guide/curriculum/class-03/slides/assets/commit-timeline.png) <!-- .element class="fragment" data-fragment-index="2" -->

NOTE:
# TELL: When you do a Save without version control, you only ever have the most recent version of the file. You can't go back to an old version, unless you saved that as a different file.

# TELL: Version control lets you have one file - but it remembers what changes were made.  We continue to update and revise the files in our project Git helps us keep track of where we are and where we've been.  Think of each snapshot, or “commit” as each new version of the paper you were saving.  However, instead of making a full copy of every file, it only keeps track of the actual differences between each version, making it very efficient and fast.

---

<!-- SLIDE 11 -->
<!-- .element class="title-and-text" -->

# Keeping track

- Each commit (snapshot) has a label that points to it. <!-- .element class="fragment" data-fragment-index="1" -->
- HEAD = The label meaning “You Are Here.” <!-- .element class="fragment" data-fragment-index="2" -->
- You can also assign messages to commits. <!-- .element class="fragment" data-fragment-index="3" -->
  - Messages are like writing a caption for your snapshot.

![Head-Labeled Timeline Image](/code-102-guide/curriculum/class-03/slides/assets/head-labeled-timeline.png) <!-- .element class="fragment" data-fragment-index="4" -->

NOTE:
# TELL: Each snapshot, or “commit,” can also have a label that points to it. One of these is HEAD, which always points to the place in the timeline that you are currently looking at. You can think of HEAD as being “You Are Here.”

---

<!-- SLIDE 12 -->
<!-- .element class="title-and-subtitle" -->

# A summary of Git

- You use Git to take snapshots of your code at points in time. <!-- .element class="fragment" data-fragment-index="1" -->
- Git keeps a history of what those snapshots look like. <!-- .element class="fragment" data-fragment-index="2" -->
- Git has a special label, called HEAD, that means “You Are Here.” <!-- .element class="fragment" data-fragment-index="3" -->
- Usually you give a snapshot a label called a message. <!-- .element class="fragment" data-fragment-index="4" -->

NOTE:
# TELL: A Git repository is a set of points in time, with history showing where you've been.

- Each point has a name (here A, B, C) that uniquely identifies it, called a hash.
- Each commit also has a user-generated message which describes its purpose.
- The path from one point to the previous is represented by the difference between the two points.

---

<!-- SLIDE 13 -->
<!-- .element class="title-and-subtitle" -->

# `<GitHub>` <!-- .element class="highlight" -->

Your code, in the cloud.

NOTE:
# TELL: GITHUB is awesome!  Let's explore the one of the technologies that enables people from all over the world to work on open source software development projects!

---

<!-- SLIDE 14 -->
<!-- .element class="title-and-subtitle" -->

# What is GitHub?

- Not Git. <!-- .element class="fragment" data-fragment-index="1" -->
- A way to share code with others! <!-- .element class="fragment" data-fragment-index="2" -->
- An online place to store your code.  (Backup is good!) <!-- .element class="fragment" data-fragment-index="3" -->
- It uses Git to help you manage your team's work: <!-- .element class="fragment" data-fragment-index="4" -->
  - Version tracking. <!-- .element class="fragment" data-fragment-index="5" -->
  - Reviewing changes. <!-- .element class="fragment" data-fragment-index="6" -->
  - Keep changes separate until you want to add them in. <!-- .element class="fragment" data-fragment-index="7" -->

NOTE:
# TELL: Remotes serve as a way of sharing work with other developers.  GitHub has emerged as a premier location for such sharing. It provides you with a common location that anyone can access. In addition, it provides a number of useful tools for managing work that is being shared among a dispersed group of people.

- Git is designed to be a ‘distributed' system, where you can share code between any connected computers.
- GitHub gives you a centralized ‘canonical' repo that a team can access for the latest contributions from across the team.

---

<!-- SLIDE 15 -->
<!-- .element class="title-and-text" -->

# Git + GitHub = Awesome

<br>

- With Git (version control) and GitHub (online code storage), you can: <!-- .element class="fragment" data-fragment-index="1" -->
  - Have lots of team members work together on the same files, without messing each other up. <!-- .element class="fragment" data-fragment-index="2" -->
  - Keep a history of each file over time. <!-- .element class="fragment" data-fragment-index="3" -->
  - Work on code on your own computer, and sync it with what's online. <!-- .element class="fragment" data-fragment-index="4" -->

NOTE:
# TELL: Git and GitHub let you manage work for teams...or just yourself.

- You can keep a detailed history of what your code looked like, at different points in time
- Keep changes separate, until you want to add them in
- Lets you keep the code you have on your own computer in sync with what's in your online storage

---

<!-- SLIDE 16 -->
<!-- .element class="title-and-subtitle" -->

# `<repositories>` <!-- .element class="highlight" -->

AKA: repos.

NOTE:
# NOTE: You can go step-by-step and opt to have students follow along during this section, and then take out the following “deployment” work time. With larger groups it is better to demo it, and then have them work from the slides and GitHub guide as you and the TAs come around to help.

---

<!-- SLIDE 17 -->
<!-- .element class="title-and-subtitle" -->

# What is a repository?

- A repository is a collection of files that you've told Git to pay attention to. <!-- .element class="fragment" data-fragment-index="1" -->
  - Usually, one project = one repository. <!-- .element class="fragment" data-fragment-index="2" -->
  - Really large projects might have multiple repositories for different parts of their system. (Front end & back end) <!-- .element class="fragment" data-fragment-index="3" -->
  - Repositories can live on GitHub and/or your computer. <!-- .element class="fragment" data-fragment-index="4" -->
- Let's make one now! <!-- .element class="fragment" data-fragment-index="5" -->

NOTE:
# DO: After reviewing this slide, it's time to break away from the slide deck for a bit.  Open up your web browser and pull up your github.com account.  Walk students through the process of creating a repository, cloning that repository on to their local machines, adding an index.html and style.css file and links for any additional pages.  Then it's time to “add”, “commit”, and “push” up their code.  NOTE: They'll be using github.io for deployment.  Review the following to ensure a proper workflow:  https://pages.github.com/  To recap the steps needed for deploying:

create a repository in github clone the repository onto your local machine create/add files and related code
run git add <filenames> to stage the file(s) for commit run git commit -m “initial upload” to commit your changes run git push origin master to upload the files/changes to github

# DO: Make a repo on GitHub

- Create a new repo. MAKE SURE STUDENTS GIVE IT THIS NAME: theirusername.github.io
- Check the “Initialize this repository with a README” option and click Create repository.
- Common problems: repo name doesn't match their username; not checking the README box.
- Explain that different repos can be linked to each other. That means they can get and give code to/from each other.
- Show them how to copy the clone url

# DO: Clone it locally:

- Have them navigate to their projects folder (they should have made this earlier, when you saved the html file the first time)
- Show them how to execute the clone command in their terminals
- Using the finder, move all files needed for the project into their newly created local repo folder.
- cd into the local repo folder and ls to check that all the files are there.
- Common problems:
  - files not in the projects folder
  - forgetting to cd into local repo folder
  - one file not named index.html.

# DO - GIT/GITHUB Walkthrough:

- Git status
- Git add
- Git commit
- Git push
- Verifying that their code is on GitHub
  - Common problems:
  - forgetting to put -m on git commit -m and ending up in Vim
  - wrong repo name
  - no file named index.html

# DO: Deployment Walkthrough

- Explain that one of the things GitHub comes with is GitHub Pages - turning your code into a site the world can see. If your repo is named “somenamehere.github.io”, then it will look for the index.html file and deploy it! (Explain what “deploying” is.)
- (Editor's note: yes, you can also do github pages if you don't have a repo named “somename.github.io”, but then your files need to be on the gh-pages branch. We're leaving the concept of branching to 201.)

---

<!-- SLIDE 18 -->
<!-- .element class="title-and-text" -->

# Creating a repo on GitHub

<br>

1. Log in to GitHub. <!-- .element class="fragment" data-fragment-index="1" -->
2. At the top right side of the window, look for your profile picture. <!-- .element class="fragment" data-fragment-index="2" -->
3. Next to it you'll find a small + sign. Click that. <!-- .element class="fragment" data-fragment-index="3" -->
4. From the menu that opens, select New repository. <!-- .element class="fragment" data-fragment-index="4" -->

![Image](/code-102-guide/curriculum/class-03/slides/assets/new-repo.jpg) <!-- .element class="fragment" data-fragment-index="5" -->

---

<!-- SLIDE 19 -->
<!-- .element class="split-screen-with-title" -->

# Creating a repo on GitHub

<div>

<div>

1. Repos can be named anything… <!-- .element class="fragment" data-fragment-index="1" -->
   - Pick something meaningful.
   - Your repo's name will be built into your website's URL.
2. Add a description. <!-- .element class="fragment" data-fragment-index="2" -->
3. Make it ‘Public.' <!-- .element class="fragment" data-fragment-index="3" -->
4. Check: Add a README file. <!-- .element class="fragment" data-fragment-index="5" -->
5. Click: Create repository. <!-- .element class="fragment" data-fragment-index="6" -->

</div>

![Image](/code-102-guide/curriculum/class-03/slides/assets/19_0.png)

</div>

---

<!-- SLIDE 20 -->
<!-- .element class="title-and-subtitle" -->

# Linking repos

- Congrats! You just made a new repo. <!-- .element class="fragment" data-fragment-index="1" -->
- Now we need to copy this repo onto our computers, and connect the two repos to each other. <!-- .element class="fragment" data-fragment-index="2" -->
- If they're connected, they can give and receive code from the other repo. <!-- .element class="fragment" data-fragment-index="3" -->
- We'll do this by cloning: from the cloud, to our local machine <!-- .element class="fragment" data-fragment-index="4" -->

---

<!-- SLIDE 21 -->
<!-- .element class="split-screen-with-title" -->

# Clone that repo...

<div>

<div>

1. Click the colored [< > Code] button. <!-- .element class="fragment" data-fragment-index="1" -->
2. Ensure it says “HTTPS”. <!-- .element class="fragment" data-fragment-index="2" -->
3. Copy the URL using the Copy to clipboard button shortcut. <!-- .element class="fragment" data-fragment-index="3" -->

</div>

![github clone selections](/code-102-guide/curriculum/class-03/slides/assets/clone-button.jpg)

</div>

---

<!-- SLIDE 22 -->
<!-- .element class="title-and-text" -->

# ...into your projects folder.

<br>

1. <!-- .element class="fragment" data-fragment-index="1" -->Open up your terminal.
2. Use your  <!-- .element class="fragment" data-fragment-index="2" -->**`cd`** and **`ls`** commands to navigate into your 'projects' directory. <!-- .element class="fragment" data-fragment-index="2" -->
   - If you haven't made a 'projects' directory yet, here's how it's done...
   - Go to your home directory. (Type: <!-- .element class="fragment" data-fragment-index="3" --> **`cd ~`**) <!-- .element class="fragment" data-fragment-index="3" -->
   - Make a folder to hold all your repos. (Type: <!-- .element class="fragment" data-fragment-index="4" --> **`mkdir projects`** ) <!-- .element class="fragment" data-fragment-index="4" -->
   - Then change into that new folder. (Type: <!-- .element class="fragment" data-fragment-index="5" -->**`cd projects`**) <!-- .element class="fragment" data-fragment-index="5" -->
3. Check where you are with <!-- .element class="fragment" data-fragment-index="6" --> **`pwd`** (“print working directory.”) <!-- .element class="fragment" data-fragment-index="6" -->

![Image](/code-102-guide/curriculum/class-03/slides/assets/22_0.png) <!-- .element class="fragment" data-fragment-index="7" -->

---

<!-- SLIDE 23 -->
<!-- .element class="text-only" -->

# Using: **`git clone`**

In the projects directory: <!-- .element class="fragment" data-fragment-index="1" -->

- Type: <!-- .element class="fragment" data-fragment-index="2" --> **`git clone`** <!-- .element class="fragment" data-fragment-index="2" -->
- Follow that with a <!-- .element class="fragment" data-fragment-index="3" --> **`<space>`** <!-- .element class="fragment" data-fragment-index="3" -->
- Paste in the link you copied from GitHub. <!-- .element class="fragment" data-fragment-index="4" -->
- It should look something like: <!-- .element class="fragment" data-fragment-index="5" -->
- Ready? Hit Enter. <!-- .element class="fragment" data-fragment-index="7" -->

![Image](/code-102-guide/curriculum/class-03/slides/assets/23_0.png) <!-- .element class="fragment" data-fragment-index="6" -->

---

<!-- SLIDE 24 -->
<!-- .element class="text-only" -->

# Using: **`git clone`**

## What just happened?

- You made a new folder, <!-- .element class="fragment" data-fragment-index="1" --> **hello-world** (see it with **ls**.) <!-- .element class="fragment" data-fragment-index="1" -->
  - The new folder is a local repo in sync with the one on GitHub. <!-- .element class="fragment" data-fragment-index="1" -->
- Change into that directory. <!-- .element class="fragment" data-fragment-index="2" -->
  - Type: <!-- .element class="fragment" data-fragment-index="2" --> **`cd hello-world`** <!-- .element class="fragment" data-fragment-index="2" -->
- See the URL of the GitHub repo you're connected to. <!-- .element class="fragment" data-fragment-index="3" -->
  - Type: <!-- .element class="fragment" data-fragment-index="3" --> **`git remote -v`** <!-- .element class="fragment" data-fragment-index="3" -->
- It made a directory that has all the files in it you had online. <!-- .element class="fragment" data-fragment-index="4" -->

---

<!-- SLIDE 25 -->
<!-- .element class="title-and-subtitle" -->

# `<gitflow:acp>` <!-- .element class="highlight" -->

Add, commit, push

NOTE:
Add, commit, and push

---

<!-- SLIDE 26 -->
<!-- .element class="text-only" -->

# Using: **`git status`**

- Review the current status of your files by typing: <!-- .element class="fragment" data-fragment-index="1" --> **`git status`** <!-- .element class="fragment" data-fragment-index="1" -->
- The output in your terminal will tell you what files have changed since your last commit. <!-- .element class="fragment" data-fragment-index="2" -->
- We haven't made any changes, so your output should look similar to: <!-- .element class="fragment" data-fragment-index="3" -->
![git status command output with no changes](/code-102-guide/curriculum/class-03/slides/assets/git-status-no-changes.jpg) <!-- .element class="fragment" data-fragment-index="3" -->

---

<!-- SLIDE 27 -->
<!-- .element class="text-only" -->

# Using: **`git status`**

- Right now Git is paying attention to our only file, the README.md file. <!-- .element class="fragment" data-fragment-index="1" -->
- Let's edit that file with VS Code! <!-- .element class="fragment" data-fragment-index="2" -->
  - Open the current directory with the editor. <!-- .element class="fragment" data-fragment-index="3" -->
    - Type: **`code .`**
  - Make any changes to the README.md file. <!-- .element class="fragment" data-fragment-index="4" -->
  - SAVE YOUR CHANGES! <!-- .element class="fragment" data-fragment-index="5" -->
  - ...and see how running<!-- .element class="fragment" data-fragment-index="6" --> **`git status`** in your terminal reports the change <!-- .element class="fragment" data-fragment-index="6" -->

---

<!-- SLIDE 28 -->
<!-- .element class="text-only" -->

# Using: **`git add`**

Next, we need to tell Git what changes we want to commit. <!-- .element class="fragment" data-fragment-index="1" -->

- This is called <!-- .element class="fragment" data-fragment-index="2" -->**staging**. <!-- .element class="fragment" data-fragment-index="2" -->
  - Think of it as placing items into a scene to photograph
- It's done in your terminal by typing <!-- .element class="fragment" data-fragment-index="3" --> **`git add`** and then a specific filename.
  - Type: **`git add README.md`**
- This tells Git to include these changes in the next snapshot. <!-- .element class="fragment" data-fragment-index="4" -->
- Type <!-- .element class="fragment" data-fragment-index="5" --> **`git status`** again to see the difference! <!-- .element class="fragment" data-fragment-index="5" -->

---

<!-- SLIDE 29 -->
<!-- .element class="split-screen-with-title" style="text-align: left;" -->

# Using: **`git commit`**

<br>

Finally, take that snapshot! <!-- .element class="fragment" data-fragment-index="1" -->

The command: <!-- .element class="fragment" data-fragment-index="2" -->**`git commit -m “your message goes here”`** <!-- .element class="fragment" data-fragment-index="2" -->

<div>

<div>

The breakdown: <!-- .element class="fragment" data-fragment-index="3" -->

**`git commit`** <!-- .element class="fragment" data-fragment-index="3" -->

**`-m`** <!-- .element class="fragment" data-fragment-index="4" -->

**`"your message goes here"`** <!-- .element class="fragment" data-fragment-index="5" -->

</div>

<div style="text-align: left;">

The explanation: <!-- .element class="fragment" data-fragment-index="3" -->

The shutter-button to take the snapshot. <!-- .element class="fragment" data-fragment-index="3" -->

"I want to include a message!" <!-- .element class="fragment" data-fragment-index="4" -->

Think of it like a photo caption - why is this moment significant? <!-- .element class="fragment" data-fragment-index="5" -->

</div>

</div>

Type:<!-- .element class="fragment" data-fragment-index="7" --> **`git commit -m "Adds initial greeting to the world"`** <!-- .element class="fragment" data-fragment-index="7" -->

---

<!-- SLIDE 30 -->
<!-- .element class="text-only" -->

# Using: **`git push`**

Great! Now it's time to sync this code to your repo on GitHub. <!-- .element class="fragment" data-fragment-index="1" -->

- Type:<!-- .element class="fragment" data-fragment-index="2" --> **`git push origin main`** <!-- .element class="fragment" data-fragment-index="2" -->
  - This command sends any new commits (the snapshots of your code) to GitHub.

![terminal output after successfully pushing changes to GitHub](/code-102-guide/curriculum/class-03/slides/assets/git-push-origin-main.jpg) <!-- .element class="fragment" data-fragment-index="3"-->

- Go to your repo on GitHub, and look for your files! <!-- .element class="fragment" data-fragment-index="6" -->

---

<!-- SLIDE 31 -->
<!-- .element class="image-and-title" -->

## Verify on GitHub

<br>

In your browser on GitHub you will see the changes that you pushed, as well as the commit message, and the commit id.

![Image](/code-102-guide/curriculum/class-03/slides/assets/31_0.png)

---

<!-- SLIDE 32 -->
<!-- .element class="title-and-subtitle" -->

#  Agenda

- Review of previous class
  - Share your learning
- Sharing Code
  - Understanding git
  - GitHub
  - git-flow
- Deployment <!-- .element class="highlight" -->
  - GitHub Pages
  - Demo
- Assignments
  - Reading & Lab

NOTE:
You are here

---

<!-- SLIDE 33 -->
<!-- .element class="title-and-subtitle" -->

# `<deployment>` <!-- .element class="highlight" -->

Publishing your code  for the world to enjoy!

NOTE:
Make it live, on the internet!

---

<!-- SLIDE 34 -->
<!-- .element class="split-screen-with-title" -->
# GitHub Pages

<div>

<div>

- Any repo can be published with GitHub Pages <!-- .element class="fragment" data-fragment-index="1" -->
- Whenever you push changes, the published site will update <!-- .element class="fragment" data-fragment-index="2" -->
  - That's called “deployment.”
- It turns this markdown... <!-- .element class="fragment" data-fragment-index="3" -->

![Image](/code-102-guide/curriculum/class-03/slides/assets/34_0.png) <!-- .element class="fragment" data-fragment-index="3" -->

</div>

<div>

- ...into a web page publicly accessible on the internet! <!-- .element class="fragment" data-fragment-index="4" -->

![Image](/code-102-guide/curriculum/class-03/slides/assets/35_0.png) <!-- .element class="fragment" data-fragment-index="4" -->

- Your web page URL is: USERNAME.github.io/REPO-NAME/ <!-- .element class="fragment" data-fragment-index="5" -->

</div>

</div>

NOTE:
It might be simple, but it's ALIVE!!!!

---

<!-- SLIDE 35 -->
<!-- .element class="title-and-text" -->

### GitHub Pages

- Go to your GitHub repo ![Settings Icon Image](/code-102-guide/curriculum/class-03/slides/assets/36_1.png)
- On the left menu, select  ![Pages Icon Image](/code-102-guide/curriculum/class-03/slides/assets/36_2.png)
- Activate publication by selecting a branch: change from None to "main", then save.

![Image](/code-102-guide/curriculum/class-03/slides/assets/36_0.png)

NOTE:
After you save the changes, look carefully for the message: "Your GitHub Pages site is currently being built from the main branch." Refresh in a min or two to see the url to the live site!

---

<!-- SLIDE 36 -->
<!-- .element class="title-and-subtitle" -->
# Show off!

- Congratulations! You have successfully deployed your awesome work on the world-wide web. <!-- .element class="fragment" data-fragment-index="1" -->
- Now you can share that link with friends and family, and they can see what you did. <!-- .element class="fragment" data-fragment-index="2" -->
- Tweet it! IG it! Fb it! Let the tech world know you are here! <!-- .element class="fragment" data-fragment-index="3" -->

---

<!-- SLIDE 37 -->
<!-- .element class="title-and-subtitle" -->

#  Agenda

- Review of previous class
  - Share your learning
- Sharing Code
  - Understanding git
  - GitHub
  - git-flow
- Deployment
  - GitHub Pages
  - Demo
- Assignments <!-- .element class="highlight" -->
  - Reading & Lab

NOTE:
You are here

---

<!-- SLIDE 38 -->
<!-- .element class="title-and-subtitle" -->

# `<assignments>` <!-- .element class="highlight" -->

- Lab: Clone & edit your Learning Journal Site
- Read: Make a page of notes about git

NOTE:
Go go go!
