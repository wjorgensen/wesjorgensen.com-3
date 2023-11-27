const contentContainer = document.getElementById('content-container');
var buttons = document.querySelectorAll('.pushable');
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.pushable').forEach(button => {
        button.addEventListener('click', function() {
            let modalId = this.getAttribute('data-modal');
            let modal = document.getElementById(modalId);

            anime({
                targets: modal,
                width: ['0%', '85%'], 
                height: ['0%', '85%'], 
                scale: [0, 1],         
                opacity: [0, 1],       
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

    document.querySelectorAll('.modal-content .close-button').forEach(button => {
        button.addEventListener('click', function() {
            let modal = this.closest('.modal-content');
            anime({
                targets: modal,
                width: ['85%', '0%'],  
                height: ['85%', '0%'], 
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