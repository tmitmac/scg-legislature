// Shared functionality
document.addEventListener('DOMContentLoaded', () => {
    // Initialize tooltips
    const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
    
    tooltipTriggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.className = 'absolute z-10 bg-gray-900 text-white text-xs rounded py-1 px-2 bottom-full mb-2';
            tooltip.textContent = trigger.dataset.tooltip;
            
            trigger.appendChild(tooltip);
            
            trigger.addEventListener('mouseleave', () => {
                tooltip.remove();
            }, { once: true });
        });
    });
});

// PDF viewer functionality
function loadPDFViewer(pdfUrl) {
    const viewerContainer = document.getElementById('pdf-viewer-container');
    if (viewerContainer) {
        viewerContainer.innerHTML = `
            <iframe src="${pdfUrl}" class="pdf-viewer w-full"></iframe>
            <div class="mt-4 flex justify-end">
                <a href="${pdfUrl}" download class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition">
                    <i data-feather="download" class="mr-2"></i>
                    Download Document
                </a>
            </div>
        `;
        feather.replace();
    }
}