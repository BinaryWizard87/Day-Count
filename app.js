function calculateAge() {
  // Get the user's birth date from the input field
  var birthDate = document.getElementById("birthDate").value;
  var birthDateParts = birthDate.split("-");
  var birthDateObj = new Date(
    birthDateParts[0],
    birthDateParts[1] - 1,
    birthDateParts[2]
  );

  // Calculate the difference between the current date and the user's birth date
  var today = new Date();
  var difference = Math.floor((today - birthDateObj) / (1000 * 60 * 60 * 24));

  var years = Math.floor(difference / 365);
  var months = Math.floor((difference % 365) / 30);
  var days = Math.floor((difference % 365) % 30);

  // Display the result in a text box
  document.getElementById("result").innerHTML =
    "Years: " + years + ", Months: " + months + ", Days: " + days;
}
function clearInput() {
  // Clear the input field
  document.getElementById("birthDate").value = "";
  // Clear the display textarea
  document.getElementById("result").textContent = "";
}
