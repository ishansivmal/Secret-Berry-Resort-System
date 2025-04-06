// Function to open the booking popup
function openBookingPopup(roomName) {
    // You can dynamically set the room name or price if necessary
    document.getElementById('bookingModal').style.display = "block"; // Show modal
    document.getElementById('bookingForm').reset(); // Reset form fields
}

// Function to close the booking popup
function closeBookingPopup() {
    document.getElementById('bookingModal').style.display = "none"; // Hide modal
}

document.addEventListener("DOMContentLoaded", function () {
    // Get the 'See more' button, card, and popup
    const seeMoreButton = document.getElementById("seeMoreButton");
    const specialOfferCard = document.getElementById("specialOfferCard");
    const offerPopup = document.getElementById("offerPopup");
    const closePopupButton = document.getElementById("closePopup");

    // When the "See more" button is clicked, hide the button and show the popup with animation
    seeMoreButton.addEventListener("click", function () {
        // Hide the button
        seeMoreButton.style.display = "none";

        // Show the popup with a sliding animation from top to bottom
        setTimeout(function() {
            offerPopup.classList.add("show");
        }, 300); // Delay before showing the popup for smooth transition
    });

    // Close the popup when the close button is clicked
    closePopupButton.addEventListener("click", function () {
        offerPopup.classList.remove("show");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const seeMoreButton = document.getElementById("seeMoreButton");
    const offerPopup = document.getElementById("offerPopup");
    const closePopup = document.getElementById("closePopup");

    const bookNowBtn = document.querySelector(".btn-book-now");
    const formPopup = document.getElementById("formPopup");
    const closeFormPopup = document.getElementById("closeFormPopup");

    // Show top-down offer popup
    seeMoreButton.addEventListener("click", function () {
        offerPopup.classList.add("show");
        seeMoreButton.style.display = "none";
    });

    // Close offer popup
    closePopup.addEventListener("click", function () {
        offerPopup.classList.remove("show");
        seeMoreButton.style.display = "inline-block";
    });

    // Book Now → show left-side popup
    bookNowBtn.addEventListener("click", function () {
        formPopup.classList.add("show");
    });

    // Close form popup
    closeFormPopup.addEventListener("click", function () {
        formPopup.classList.remove("show");
    });

    // Booking form submit handler
    document.getElementById("bookingForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Booking Submitted!\nThank you for choosing the Luxury Suite.");
        formPopup.classList.remove("show");
    });
});



$(document).ready(function(){
    $("#searchBox").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".room-item").filter(function() {
            $(this).toggle($(this).attr("data-name").toLowerCase().includes(value) || 
                           $(this).attr("data-features").toLowerCase().includes(value));
        });
    });
});
    

    










