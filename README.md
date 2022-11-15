# __Different Ways to Execute Javascript__

## Using developer tools to execute Javascipt in Browser

## Adding Javascript to HTML file
   - Internal JS:  JavaScript can be added directly to HTML file by writing the code inside the <script> tag. The <script> tag can either be placed inside the <head> or the <body> tag according to the requirement.
   
   When script is placed inside <head> section, it ensures that the script is loaded before HTML page loads or anyone uses it. 
   
   
    - External JS: JavaScript can be added from external files. Code is written in a file and saved using extension .js and then link to this file is included inside the <head> tag of the HTML file.
    
    When script is placed in the body section means Script is to be executed after the HTML page loads.
    
 # JS in body vs head tag
 
 HTML loads from top to bottom. The head loads first, then the body, and then everything inside the body.
 
 The best practice is to put <script> tag just before the closing </body> tag rather than in the <head> section of HTML. Because, if we put <script> inside <head> tag then the entire script will load before loading HTML content. It will cause below issues:
   - If HTML code has dependancy on JS code then once the script is loaded, no HTML will be present to apply changes to, hence causing errors or code may seems not working.
   - If JS code is large then it will take time to load and hence will slow down the loading of page as it will load entire script before actually loading HTML.
   
  Thus, if JavaScript is placed at the bottom of HTML <body> tag, it gives the HTML time to load before any of the JavaScript loads, which can prevent errors, and can speed up website response time.
 
 
