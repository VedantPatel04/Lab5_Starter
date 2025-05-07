# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!
Authors: Vedant Patel, Joseph Eddy, Lawrence Novilla
Team 17

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No, because unit tests debug on a small scale and they cannot test how different parts of code interact with each other. You'd have to test sending to another remote person and them sending back which cannot be done with unit testing.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes, you would use a unit test to test the "max message length" feature becuase it is a single, simple feature. You can test a small piece of code by checking if it returns an error when a message of momre than 80 characters is attempted to be sent.
