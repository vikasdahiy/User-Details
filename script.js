document.getElementById("user-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var fullname = document.getElementById("fullname").value;
  var gender = document.getElementById("gender").value;
  var age = document.getElementById("age").value;
  var email = document.getElementById("email").value;
  var country = document.getElementById("country").value;
  var education = document.getElementById("education").value;
  var interests = document.getElementById("interests").value;
  var languages = document.getElementById("languages").value;
  var skills = document.getElementById("skills").value;

  document.getElementById("fullname-display").textContent = "Full Name: " + fullname;
  document.getElementById("gender-display").textContent = "Gender: " + gender;
  document.getElementById("age-display").textContent = "Age: " + age;
  document.getElementById("email-display").textContent = "Email: " + email;
  document.getElementById("country-display").textContent = "Country: " + country;
  document.getElementById("education-display").textContent = "Education: " + education;
  document.getElementById("interests-display").textContent = "Interests: " + interests;
  document.getElementById("languages-display").textContent = "Languages: " + languages;
  document.getElementById("skills-display").textContent = "Skills: " + skills;

  // Hide registration card and show user details card
  document.getElementById("registration-card").classList.add("hidden");
  document.getElementById("user-details-card").classList.remove("hidden");
});
