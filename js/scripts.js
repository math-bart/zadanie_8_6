var age = prompt("Please enter your age");

if (age >= 18) {
    var a = prompt("Enter first number"),
        b = prompt("Enter second number"),
        value = (a * a) - (2 * a * b) + (b * b);
    if (value > 0) {
      alert("(a * a) - (2 * a * b) + (b * b) value is " + value + ", so value is positive number");
      console.log("(a * a) - (2 * a * b) + (b * b) value for a= " + a + " and b= " + b + " is equal to: " + value + ", so value is positive number");
    } else if (value < 0) {
      alert("(a * a) - (2 * a * b) + (b * b) value is " + value + ", so value is negative number");
      console.log("(a * a) - (2 * a * b) + (b * b) value for a= " + a + " and b= " + b + " is equal to: " + value + ", so value is negative number");
    } else {
      alert("(a * a) - (2 * a * b) + (b * b) value is " + value + ", so value is equal zero");
      console.log("(a * a) - (2 * a * b) + (b * b) value for a= " + a + " and b= " + b + " is equal to: " + value + ", so value is equal zero");
    }
} else {
  alert("Sorry, this site is for adults only");
}
