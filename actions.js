const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = form.elements["name"].value;
    const contact = form.elements["contact-number"].value;
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;
    const subject = form.elements["subject"].value;

    if (!subject) {
        alert("Choose an Subject");
        return;
    }
    const user = {
        name: name,
        contact: contact,
        email: email,
        message: message,
        subject: subject,
    };

    alert(
        "Name: " +
            user.name +
            "  Contact: " +
            user.contact +
            "  Email:" +
            user.email +
            "  Subject: " +
            user.subject +
            "  Message: " +
            user.message,
    );

    (async function () {
        await emailjs.init({
            publicKey: "3_l0I4pTgzMUrIusn",
        });
    })();

    await emailjs
        .send("service_pznrcog", "template_2cpvqph", user)
        .then((res) => {
            alert("Message sent successfully!");
            form.reset();
        })
        .catch((err) => {
            console.error("Internal Server Error");
            alert("Internal Server Error");
        });

    let existingUsers = JSON.parse(localStorage.getItem("contact-data")) || [];

    const submissionWithDate = {
        ...user,
        submittedAt: new Date().toLocaleString(),
        status: "Mark as Read",
    };

    existingUsers.push(submissionWithDate);
    localStorage.setItem("contact-data", JSON.stringify(existingUsers));

    // PUBLIC KEY 3_l0I4pTgzMUrIusn
    // PRIVATE KEY lKJVUFi8Ym2MaB_xFGjFW
    // TEMPLATE ID template_2cpvqph
    // SERVICE ID service_pznrcog
});
