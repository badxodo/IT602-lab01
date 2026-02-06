const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;
    const subject = form.elements["subject"].value;

    if (!subject) {
        alert("Choose an Subject");
        return;
    }

    alert("Email:" + email + "  Subject" + subject + "  Message" + message);
    console.log(message);
});
