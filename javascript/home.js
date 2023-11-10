const contentContainer = document.getElementById('content-container');
var buttons = document.querySelectorAll('.pushable');
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.pushable').forEach(button => {
        button.addEventListener('click', function() {
            let modalId = this.getAttribute('data-modal');
            let modal = document.getElementById(modalId);

            anime({
                targets: modal,
                width: ['0%', '85%'],  // Starting from 0% to 85% of the viewport width
                height: ['0%', '85%'], // Starting from 0% to 85% of the viewport height
                scale: [0, 1],         // Starting from scale 0 to 1
                opacity: [0, 1],       // Starting from fully transparent to fully opaque
                easing: 'easeOutExpo',
                duration: 800,
                begin: function() {
                    modal.style.display = 'block';
                    modal.style.transform = 'translate(-50%, -50%) scale(0)';
                },
                update: function(anim) {
                    let scaleValue = anim.animations[2].currentValue;
                    modal.style.transform = `translate(-50%, -50%) scale(${scaleValue})`;
                },
                complete: function() {
                    modal.classList.add('active');
                }
            });
        });
    });

    // Optional: Code to close the modals
    document.querySelectorAll('.modal-content .close-button').forEach(button => {
        button.addEventListener('click', function() {
            let modal = this.closest('.modal-content');
            anime({
                targets: modal,
                width: ['85%', '0%'],  // Reverse animation
                height: ['85%', '0%'], // Reverse animation
                scale: [1, 0],
                opacity: [1, 0],
                easing: 'easeInExpo',
                duration: 800,
                complete: function() {
                    modal.style.display = 'none';
                    modal.classList.remove('active');
                }
            });
        });
    });
});