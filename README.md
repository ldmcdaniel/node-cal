# node-cal [![Build Status](https://travis-ci.org/ldmcdaniel/node-cal.svg?branch=master)](https://travis-ci.org/ldmcdaniel/node-cal) [![Test Coverage](https://codeclimate.com/github/ldmcdaniel/node-cal/badges/coverage.svg)](https://codeclimate.com/github/ldmcdaniel/node-cal/coverage) [![Code Climate](https://codeclimate.com/github/ldmcdaniel/node-cal/badges/gpa.svg)](https://codeclimate.com/github/ldmcdaniel/node-cal)

####*The test pases in the Unix calendar in OSX, but not in Linux.  The difference is in the use of space that each calendar uses.  I am very proud to get it working in Unix, as that was my project's goal.  I am less concerned about getting it to test properly on Linux, particularly when it is a difference in white space and not calendar display.*

## What is the project about?

This is a project at NSS.

The project uses the Zeller's congruence algorithm to build a command line Node.js app that exactly mimics the cal app in terminal.

## What technologies does the project use?

NPM, Node.js, Mocha, Chai, and Istanbul.

## Download and install:

*If you don't have NPM yet, from terminal:*

````curl https://npmjs.org/install.sh | sh````

*In your browser, navigate to:*
>https://github.com/ldmcdaniel/node-cal

*In the top-right corner of the page, click Fork.*

*In your designated code directory, type:*

````git clone https://github.com/Your-Username/node-cal````

*From Terminal:*

````cd node-cal/````

````npm install````

*To display the current month:*

````node cal````

*Compared to:*

````cal````

*To display a specific year;*

````node cal 1999````

*compared to:*

````cal 1999````

*To display a specific month:*

````node cal 12 1955````

*compared to:*

````cal 12 1955````

