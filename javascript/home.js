
const contentContainer = document.getElementById('content-container');

document.querySelectorAll('.pushable').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        openContent(modalId);
    });
});

function openContent(modalId) {
    contentContainer.style.zIndex = 4;
    contentContainer.style.backgroundColor = getComputedStyle(document.querySelector(`[data-modal="${modalId}"]`)).backgroundColor;
    contentContainer.style.boxShadow = '8px 8px ' + darkenColor(contentContainer.style.backgroundColor, 20);
    animateContentContainer();
}

document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', function() {
        // Traverse up the DOM to find the parent modal of this close button
        let parent = this.parentElement;
        while (!parent.classList.contains('modal-content')) {
            parent = parent.parentElement;
        }
        // Hide the parent modal
        parent.style.display = 'none';
    });
});

function animateContentContainer() {
    let pos = 0;
    const id = setInterval(frame, 0.5);
    function frame() {
        if (pos === 85) { 
            clearInterval(id);
            // Show the close button after the animation
            document.querySelectorAll('.close-button').forEach(button => {
                button.style.display = 'block';
            });
        } else {
            pos++;
            contentContainer.style.height = pos + 'vh';
            contentContainer.style.width = pos + 'vw';
            contentContainer.style.left = 50 - (pos * 0.5) + 'vw';
            contentContainer.style.top = 50 - (pos * 0.5) + 'vh';
        }
    }
}

function darkenColor(color, percent) {
    const num = parseInt(color.slice(1), 16),
          amt = Math.round(2.55 * percent),
          R = (num >> 16) + amt,
          G = (num >> 8 & 0x00FF) + amt,
          B = (num & 0x0000FF) + amt;
    return `#${(0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1)}`;
}
