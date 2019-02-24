
Weather Application
===================

## SYNOPSIS

Getting started with JavaScript Unit Testing (biased towards Jasmine).
Much more info is available via Jasmine official - https://jasmine.github.io/

## IMPORTANT

** The weather application is a Java web application (credit: Hazem Saleh).
   The server-side part of the application is written using Java servlets
   (http://docs.oracle.com/javaee/6/tutorial/doc/bnafd.html).
   If you are not familiar with Java servlets, do not worry.

** Because this app is based on Java, you need the following:
   - Install a runtime java environment (download Java SE Development Kit)
   - Install a server (download apache-tomcat server 7+)
   - Install Jasmine (3.3.1) globally (pip install jasmine)

* Later, we dive working with Jasmine/Karma to test JavaScript

## GET - STARTED

### Assumptions
   - Configure Git and Github
   - Fork and clone the repo
   - Configure java (JAVA_HOME) and tomcat-server (CATALINA_HOME)

### Configure

   - Remember the applications are found within apache-tomcat-(version)/webapps/
   - Goto conf/server.xml, edit <connector port="(input)" scheme="https" .../>
   - Under %JAVA_HOME%, use keytool to generate keys
   - Add the generated keys to your browser (as certificates) to run https://
   - Under conf/tomcat-users, add a role/user to access the manager-gui for easy app management
   - Launch C:\server\apache-tomcat-7.0.68\bin>startup.bat
   - If successful, thus far, launch https://localhost:(port)/manager/html, then select, weatherApplication to launch app.
     OR
     Open the app directly https://127.0.0.1:(port)/weatherApplication/login.jsp
   - See js/README.md for Jasmine configuration

### Contribution guidelines
   - Gitflow remote collaboration model
   - Code review (pull requests)
   - Writing tests (Unit tests)
   - Other guidelines shall be issued with time.

### Who i talk to?
   - Contact: @MwamiTovi on GitHub
   - Email directly: matovu.synergy@gmail.com