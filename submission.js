const datas = JSON.parse(localStorage.getItem("contact-data")) || [];

const tbody = document.getElementById("submission-table");
const tableCard = document.getElementById("submissions-container");

let bigscreen = window.innerWidth >= 768;

window.addEventListener("resize", () => {
    bigscreen = window.innerWidth >= 768;
    tableData(datas);
});

function tableData(filteredData) {
    tbody.innerHTML = "";
    tableCard.innerHTML = "";

    if (bigscreen) {
        tbody.parentElement.classList.remove("hidden");
        tableCard.classList.add("hidden");

        filteredData.forEach((data, index) => {
            const tr = document.createElement("tr");
            tr.className = index % 2 === 0 ? "bg-white" : "bg-gray-100";

            const statusButton =
                data.status === "Replied"
                    ? `<span class="inline-flex items-center px-3 py-1 
                    rounded-sm text-sm font-medium bg-green-100 text-green-800">✓ Read</span>`
                    : `<button class="status-btn px-3 py-1 rounded bg-blue-100 transition-colors text-blue-800 hover:bg-blue-200" data-index="${index}">${data.status}</button>`;

            tr.innerHTML = `
                <td class="px-4 py-5">${data.name}</td>
                <td class="px-4 py-5">${data.email}</td>
                <td class="px-4 py-5">${data.contact}</td>
                <td class="px-4 py-5">${data.subject}</td>
                <td class="px-4 py-5 max-w-[100px] md:max-w-[150px] lg:max-w-[250px] break-words">${data.message}</td>
                <td class="px-4 py-5">${data.submittedAt}</td>
                <td class="px-4 py-5 text-center">${statusButton}</td>
            `;
            tbody.appendChild(tr);
        });
    } else {
        tbody.parentElement.classList.add("hidden");
        tableCard.classList.remove("hidden");

        filteredData.forEach((data, index) => {
            const card = document.createElement("div");
            card.className =
                "bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow";

            const statusButton =
                data.status === "Replied"
                    ? `<span class="inline-flex items-center px-3 py-1 
                    rounded-full text-sm font-medium bg-green-100 text-green-800">✓ Read</span>`
                    : `<button class="status-btn inline-flex items-center px-3 py-1 rounded-full text-sm 
                    font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 
                    transition-colors" data-index="${index}">${data.status}</button>`;

            card.innerHTML = `
                <div class="mb-3">
                    <h3 class="text-base font-semibold text-gray-900 mb-1">${data.subject}</h3>
                    <p class="text-sm text-gray-600">${data.name}</p>
                </div>
                <div class="flex items-center gap-6 mb-3 text-sm text-gray-600">
                    <div class="flex items-center gap-1">
                        <span class="font-semibold text-gray-900">${data.email}</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <span class="text-gray-500">📞 ${data.contact}</span>
                    </div>
                </div>
                <div class="text-sm text-gray-700 mb-3 break-words p-2 ">
                     ${data.message}
                </div>
                <div class="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span class="text-xs text-gray-500">Published: ${data.submittedAt}</span>
                    <div>${statusButton}</div>
                </div>
            `;
            tableCard.appendChild(card);
        });
    }
}

tableData(datas);

tbody.addEventListener("click", (e) => {
    if (e.target.classList.contains("status-btn")) {
        const i = e.target.dataset.index;
        datas[i].status = "Replied";
        localStorage.setItem("contact-data", JSON.stringify(datas));
        e.target.outerHTML = `<span class="bg-green-500 text-white px-3 py-1 rounded">✔ Read</span>`;
    }
});

tableCard.addEventListener("click", (e) => {
    if (e.target.classList.contains("status-btn")) {
        const i = e.target.dataset.index;
        datas[i].status = "Replied";
        localStorage.setItem("contact-data", JSON.stringify(datas));
        e.target.outerHTML = `<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">✓ Read</span>`;
    }
});

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filteredData = datas.filter((data) =>
        data.email.toLowerCase().includes(query),
    );
    tableData(filteredData);
});
