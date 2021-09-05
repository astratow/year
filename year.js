/* currentYear */
//This is a script to provide current year to the website
//call the function currentYear() to do it
function currentYear() {
  document.write(new Date().getFullYear());
}
currentYear();
//It can be added to the HTML after copyright word.
//example:
//<p>Copyright &copy <script src="currentYear.js"></script></p>

