$(function () {
    $("#header").load("../../header-footer/header.html");
    $("#footer").load("../../header-footer/footer.html");
    });
    function toggleMenu() {
        const menuList = document.getElementById("menuList");
        if (menuList) {
            menuList.classList.toggle("active");
        } else {
            console.error("Error: #menuList not found in HTML.");
        }
    }
    
    

    