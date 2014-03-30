smart-a-lot
===========

Add-on for firefox and chrome, improves your experience with extremelot


INSTALLATION

In order to install the extension you need to drag and drop the smart-a-lot.xpi
inside your browser. (aka firefox)

DEVELOPER

This extension is compiled with addon-sdk-1.15 (https://addons.mozilla.org/it/developers/builder) with this tool you have to launch from command line the command:

$ cfx xpi

the main file is in the data folder, all the extension is in the prova.js file.

Inside this file there are two main entry points:

aggiungiEtichetteAraldi(); 

This function is launched in each section of extremelot frameset. It's purpose is to add attribute "title" to the "img" tag, it also produce the map of users in a chat 

$(document).ready();

This function is launched in each section when the page is fully loaded but there is a filter that let the method keep going only in the main page. (aka the one with title "ExtremeLOT - Il Regno Fantasy Virtuale")
All the functionality of the extension are loaded from here.

----------------------
One of the most important function inside "ready" is this:

ogni5MinutiMail(); 

This function call itself each 5 minute and his goal is to forward the mail to the mailbox and also check if there is a good work in the workhouse.

