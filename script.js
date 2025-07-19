// Work Order Storage Functions
function getWorkOrders() {
    const orders = localStorage.getItem('workOrders');
    return orders ? JSON.parse(orders) : [];
}

function saveWorkOrder(order) {
    const orders = getWorkOrders();
    orders.push(order);
    localStorage.setItem('workOrders', JSON.stringify(orders));
}

function saveAllWorkOrders(orders) {
    localStorage.setItem('workOrders', JSON.stringify(orders));
}

// Toast Notification Function
function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 300);
    }, duration);
}

// Modal Functions (for secretary.html)
function openModal() {
    document.getElementById('orderModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('orderModal').classList.add('hidden');
}

// Helper function to generate a simple PDF (simulated)
function generatePDF(content) {
    // In a real app, this would use a library like jsPDF
    console.log('Generating PDF with content:', content);
    return 'data:application/pdf;base64,simulated-pdf-data';
}