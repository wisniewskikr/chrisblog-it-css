SPRING BOOT MVC, THYMELEAF AND RESPONSIVE CSS
=============================================


LOCALHOST URL
-------------

* **URL**: http://localhost:8080/app/greeting


DESCRIPTION
-----------

This is simple Spring Boot MVC project which displays Greeting page.
This page contains:
* text "Hello World" for all screen sizes;
* text "Hello World" specific for current screen size.

Used technologies:
* **BE**: Spring Boot MVC
* **FE**: Thymeleaf


DESCRIPTION
-----------

#####Goal
The goal of this project shows how to create simple Spring Boot MVC application with responsive handling by CSS.
This application show how to display some html elements only for specific screen`s sizes.

#####Details
This project uses Spring Boot MVC, Thymeleaf and CSS.

#####Result 
The result of this project is Greeting page with following elements:
* text "Hello World" for all screen sizes;
* text "Hello World" specific for current screen size.


IMPLEMENTATION
-----------

Prerequisites:
* Download project "mvc-thymeleaf".

Implementation details:
* Update file "greeting.html" with html elements with special bootstrap css classes;
* Update file "custom.css" with @media elements handling responsive. 
  

LAUNCH
------

To launch project please run following class: 
* Application.java

You can also launch project using Maven command:
* mvn spring-boot:run -Dspring.thymeleaf.cache=false


USAGE
-----

Link to main UI:
* http://[server]/app/greeting