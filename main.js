let count = 5;
function displaySeconds() {
  document.getElementById("displaySeconds").innerText =
    "Ridirecting to home page in " + count + " seconds...";
  count -= 1;
}
setInterval(displaySeconds, 1000);

function redirectPage() {
  window.location = "http://localhost/paypal-integration/index.php";
}
setInterval(redirectPage, 5000);
