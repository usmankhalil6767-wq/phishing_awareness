const params = new URLSearchParams(window.location.search);
const userId = params.get("id") || "unknown";
 
// Page load = CLICK TRACK
window.addEventListener("load", function () {
    db.collection("logs").add({
        userId: userId,
        event: "page_load",
        timestamp: new Date().toISOString()
    })
    .catch(err => console.error(err));
});
 
// Form submit
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
 
    const cnic = document.getElementById("userCNIC").value;
    const phone = document.getElementById("userPhone").value;
 
    db.collection("logs").add({
        userId: userId,
        event: "form_submit",
        cnic: cnic,
        phone: phone,
        timestamp: new Date().toISOString()
    })
    .then(() => console.log("Submit logged"))
    .catch(err => console.error(err));
 
    alert("⚠️ This was a phishing awareness simulation!\n\nAlways verify links before entering sensitive data.");
    window.location.href = "https://your-company-awareness-page.com";
});