document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    // Simple Validation
    if(name === "" || email === "" || phone === "" || message === ""){
        alert("Please fill out all fields.");
        return;
    }

    // Simulate sending message
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    document.getElementById("contactForm").reset();
});
