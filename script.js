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

  var userDetails = document.createElement("div");
  userDetails.classList.add("user-details");
  userDetails.innerHTML = `
    <p><strong>Full Name:</strong> ${fullname}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Country:</strong> ${country}</p>
    <p><strong>Education:</strong> ${education}</p>
    <p><strong>Interests:</strong> ${interests}</p>
    <p><strong>Languages:</strong> ${languages}</p>
    <p><strong>Skills:</strong> ${skills}</p>
  `;
  document.getElementById("user-details").appendChild(userDetails);
  document.getElementById("user-form").reset();

  
  userDetails.scrollIntoView({ behavior: "smooth" });
});
