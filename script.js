function myFunction() {
  var areaHtml = document.querySelector("html");
  areaHtml.classList.toggle("dark-mode");
}

function getFormData() {
  const myForm = document.getElementById("myForm");
  const formData = new FormData(myForm);
  const data = Object.fromEntries(formData);
  console.log("[FORM_DATA]", data);
}
