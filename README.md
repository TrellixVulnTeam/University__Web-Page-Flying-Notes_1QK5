# Web Pages
### University task
###### Java, Maven, Spring-Boot, JSP, JS, Angular, CSS, HTML
#### Running
Standard Spring-Boot running procedure with mMaven command line
```
spring-boot:run -f pom.xml
```
Angular located in AngularPAI folder, to run type
```
ng serve --open
```
in its directory from terminal/command prompt.  
Note that you need to have node.js installed.
#### Description
A simple task to make two static websites. I have decided to make them with separate front-end (despite being one project) in order to try different technologies.
All the HTML and CSS layout were also made 'by hand',  not using any tools. Haven't tried SASS/SCSS here yet.
#### Side Notes
This project actually contains TWO web pages;  
Both of them share a common back-end with separate end points.  
First webpage has frond-end made in Angular, started separately (described above) under port localhost:80  
Second one has front-end in JSP, it starts automatically with Spring-Boot and is its part under localhost:8080/index (doesn't have any redirection)

Here is a sample of how it looks like:
![Sample Screenshot](https://github.com/MikiWiX/University__Web-Page-Flying-Notes/blob/main/Sample.png)
