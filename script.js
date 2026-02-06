document.addEventListener('DOMContentLoaded', () => {
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('userName').value;
            const email = document.getElementById('userEmail').value;
            const message = document.getElementById('userMessage').value;

            const newMessage = {
                name: name,
                email: email,
                message: message,
                date: new Date().toLocaleString()
            };

            const storedMessages = JSON.parse(localStorage.getItem('portfolioMessages')) || [];
            storedMessages.push(newMessage);
            localStorage.setItem('portfolioMessages', JSON.stringify(storedMessages));

            alert('Message recorded!');
            contactForm.reset();
        });
    }

    
    const submissionsList = document.getElementById('submissions-list');
    const emptyState = document.getElementById('empty-state');

    if (submissionsList) {
        const storedMessages = JSON.parse(localStorage.getItem('portfolioMessages')) || [];

        if (storedMessages.length === 0) {
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
            
            
            storedMessages.forEach((msg) => {
                const row = document.createElement('tr');
                row.className = "hover:bg-gray-50 transition-colors";
                
                row.innerHTML = `
                    <td class="px-6 py-4 text-sm text-gray-600">${msg.date}</td>
                    <td class="px-6 py-4 text-sm font-semibold text-gray-900">${msg.name}</td>
                    <td class="px-6 py-4 text-sm text-blue-600">${msg.email}</td>
                    <td class="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">${msg.message}</td>
                `;
                submissionsList.appendChild(row);
            });
        }
    }
});