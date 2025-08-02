document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;


  if(username === "Harsh" && password === "1234"){
    alert("Login Successful! Redirecting to Travel Dashboard...");
    window.location.href = "index.html"; 
  } else {
    alert("Invalid Username or Password");
  }
});
