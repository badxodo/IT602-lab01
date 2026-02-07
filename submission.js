const items = JSON.parse(localStorage.getItem("contact-data")) || [];

const tbody = document.getElementById("submission-table");
tbody.innerHTML = "";

items.forEach((data, index) => {
    const tr = document.createElement("tr");

    tr.className = index % 2 === 0 ? "bg-white" : "bg-gray-100";

    let statusButton = "";
    if (data.status === "Replied") {
        statusButton = `<span class="bg-green-500 text-white px-3 py-1 rounded">✔ Read</span>`;
    } else {
        statusButton = `<button 
        class="status-btn bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600" 
        data-index="${index}">
        ${data.status}
    </button>`;
    }

    tr.innerHTML = `
        <td class="px-4 py-5">${data.name}</td>
        <td class="px-4 py-5">${data.email}</td>
        <td class="px-4 py-5">${data.contact}</td>
        <td class="px-4 py-5">${data.subject}</td>
        <td class="px-4 py-5">${data.message}</td>
        <td class="px-4 py-5">${data.submittedAt}</td>
        <td id="status" class="px-4 py-5 text-center">${statusButton}</td>
    `;

    tbody.appendChild(tr);
});

tbody.addEventListener("click", (e) => {
    if (e.target.classList.contains("status-btn")) {
        const i = e.target.dataset.index;
        items[i].status = "Replied";
        localStorage.setItem("contact-data", JSON.stringify(items));
        e.target.outerHTML = `<span class="bg-green-500 text-white px-3 py-1 rounded">✔ Read</span>`;
    }
});
