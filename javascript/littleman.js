document.addEventListener('keydown', function (event) {
    const character = document.getElementById('character');
    const left = parseInt(getComputedStyle(character).left, 10);
    if (event.key === 'ArrowLeft') {
        character.style.left = (left - 5) + 'px';
    } else if (event.key === 'ArrowRight') {
        character.style.left = (left + 5) + 'px';
    } else if (event.key === 'ArrowUp') {
        jump(character);
    }
});

function jump(character) {
    const initialBottom = parseInt(getComputedStyle(character).bottom, 10);
    let bottom = initialBottom;
    let up = true;
    const jumpInterval = setInterval(function () {
        character.style.bottom = bottom + 'px';
        if (up) {
            bottom += 5;
            if (bottom >= initialBottom + 50) {
                up = false;
            }
        } else {
            bottom -= 5;
            if (bottom <= initialBottom) {
                clearInterval(jumpInterval);
            }
        }
        checkBlockHit(character);
    }, 20);
}

function checkBlockHit(character) {
    const characterRect = character.getBoundingClientRect();
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        const blockRect = block.getBoundingClientRect();
        if (characterRect.top <= blockRect.bottom && 
            characterRect.bottom >= blockRect.top && 
            characterRect.right >= blockRect.left && 
            characterRect.left <= blockRect.right) {
            blockHit();
        }
    });
}

function blockHit() {
    alert('Block Hit! Time to open content!');
    // Add your function to open content here.
}