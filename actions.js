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

    alert("Email:" + email + "  Subject:" + subject + "  Message:" + message);

    (function () {
        emailjs.init({
            publicKey: "3_l0I4pTgzMUrIusn",
        });
    })();

    emailjs
        .send("service_pznrcog", "template_2cpvqph", {
            email: email,
            subject: subject,
            message: message,
        })
        .then((res) => {
            alert("Message sent successfully!");
            form.reset();
        })
        .catch((err) => {
            console.error("Internal Server Error");
            alert("Internal Server Error");
        });

    // PUBLIC KEY 3_l0I4pTgzMUrIusn
    // PRIVATE KEY lKJVUFi8Ym2MaB_xFGjFW
    // TEMPLATE ID template_2cpvqph
    // SERVICE ID service_pznrcog
    console.log(message);
});
