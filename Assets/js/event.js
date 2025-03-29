function showModal(title, content) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalBody").innerHTML = content;
    document.getElementById("customModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("customModal").style.display = "none";
}

function showEventDetails() {
    showModal("Event Details", 
        "📅 Date: June 15, 2025 <br>📍 Location: Grand Hall, City Center <br>🔹 A conference on the latest tech trends and innovations.");
}

function showRegisterForm() {
    showModal("Register for Event", 
        `<form action="" class="form">
            <!-- Full Phone Number Field -->
            <input required class="input" type="tel" name="phone" id="phone" placeholder="Full Name" pattern="[0-9]{10}" title="Enter a 10-digit phone number" />

            <!-- Room Number Field -->
            <input required class="input" type="number" name="room" id="room" placeholder="Room Number" />

            <!-- Contact Number Field -->
            <input required class="input" type="number" name="con" id="con" placeholder="Contact Number" />

            <!-- Email Field -->
            <input required class="input" type="email" name="email" id="email" placeholder="E-mail" />

            <!-- Number of Participants Field -->
            <input required class="input" type="number" name="participants" id="participants" placeholder="Number of Participants" min="1" max="10" />

            <!-- Submit Button -->
            <input class="login-button" type="submit" value="Register">
            
            <!-- Clear Button (Reset) -->
            <input class="clear-button" type="reset" value="Clear">
        </form>`);
}
