const datas = JSON.parse(localStorage.getItem("contact-data")) || [];

datas.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));

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
                    rounded-sm text-sm font-medium bg-green-100 text-green-700">✓ Replied</span>`
                    : `<button class="status-btn px-3 py-1 rounded 
                    bg-blue-100 transition-colors text-blue-800 hover:bg-blue-200" data-index="${index}">Mark as Replied</button>`;

            const className =
                "px-4 py-5 max-w-[100px] md:max-w-[150px] lg:max-w-[250px] break-words";

            tr.innerHTML = `
                <td class="${className}">${data.name}</td>
                <td class="${className}">${data.email}</td>
                <td class="${className}">${data.contact}</td>
                <td class="${className}">${data.subject}</td>
                <td class="${className}">${data.message}</td>
                <td class="${className}">${data.submittedAt}</td>
                <td class="${className}">${statusButton}</td>
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
                    rounded-full text-sm font-medium bg-green-100 text-green-700">✓ Replied</span>`
                    : `<button class="status-btn inline-flex items-center px-3 py-1 rounded-full text-sm 
                    font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 
                    transition-colors" data-index="${index}">Mark as Replied</button>`;

            card.innerHTML = `
               <div class="mb-3">
                <h2 class="font-semibold text-gray-900 mb-1">${data.subject}</h2>
                <p class="text-sm text-gray-600 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span>From: <span class="font-medium text-gray-900">${data.name}</span></span>
                    <span class="text-gray-300">|</span>
                    <span>Email: <span class="font-medium text-gray-900">${data.email}</span></span>
                    <span class="text-gray-300">|</span>
                    <span class="text-gray-500">📞 <span class="text-gray-900 font-medium">${data.contact}</span></span>
                </p>
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
        e.target.outerHTML = `<span class="text-sm font-medium bg-green-100 text-green-700 px-3 py-1 rounded">✓ Replied</span>`;
    }
});

tableCard.addEventListener("click", (e) => {
    if (e.target.classList.contains("status-btn")) {
        const i = e.target.dataset.index;
        datas[i].status = "Replied";
        localStorage.setItem("contact-data", JSON.stringify(datas));
        e.target.outerHTML = `<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100
         text-green-700">✓ Replied</span>`;
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
