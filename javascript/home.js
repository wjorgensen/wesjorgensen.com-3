
const contentContainer = document.getElementById('content-container');

document.querySelectorAll('.pushable').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        openContent(modalId);
    });
});

async function openContent(modalId) {
    contentContainer.style.zIndex = 4;
    contentContainer.style.display = 'block';
    contentContainer.style.backgroundColor = getComputedStyle(document.querySelector(`[data-modal="${modalId}"]`)).backgroundColor;
    contentContainer.style.boxShadow = '8px 8px ' + darkenColor(contentContainer.style.backgroundColor, 20);
    document.querySelectorAll('.close-button').forEach(button => {
        button.style.display = 'none';
    });
    await animateContentContainer();
    displayX();
}

function displayX() {
    document.querySelectorAll('.close-button').forEach(button => {
        button.style.display = 'block';
    });
}

document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', function() {
        contentContainer.style.display = 'none';
        contentContainer.style.height = 0+"vh";
        contentContainer.style.width = 0+"vw";
    });
});

function animateContentContainer() {
    return new Promise((resolve, reject) => {
        let pos = 0;
        const id = setInterval(frame, 0.5);
        function frame() {
            if (pos === 85) {
                clearInterval(id);
                console.log("done");
                resolve();
            } else {
                pos++;
                contentContainer.style.height = pos + 'vh';
                contentContainer.style.width = pos + 'vw';
                contentContainer.style.left = 50 - (pos * 0.5) + 'vw';
                contentContainer.style.top = 50 - (pos * 0.5) + 'vh';
            }
        }
    });
}

function darkenColor(color, percent) {
    const num = parseInt(color.slice(1), 16),
          amt = Math.round(2.55 * percent),
          R = (num >> 16) + amt,
          G = (num >> 8 & 0x00FF) + amt,
          B = (num & 0x0000FF) + amt;
    return `#${(0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1)}`;
}
