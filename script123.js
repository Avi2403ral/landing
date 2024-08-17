document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popupForm");
    const openPopupBtn = document.getElementById("openPopup");
    const closePopupBtn = document.getElementById("closePopup");

    openPopupBtn.addEventListener("click", function() {
        popup.style.display = "flex";
    });

    closePopupBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded",)
