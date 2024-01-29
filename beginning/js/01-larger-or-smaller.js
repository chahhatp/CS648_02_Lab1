var num1 = parseInt(window.prompt("Enter the first number"), 1);
var num2 = parseInt(window.prompt("Enter the second number"), 1);
if (num1 > num2) {
    window.document.write("The larger number is " + num1);
} else if (num2 > num1) {
    window.document.write("The larger number is " + num2);
} else {
    window.document.write("Numbers are equal");
}