
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.pushable').forEach(button => {
        button.addEventListener('click', function() {
            let modalId = this.getAttribute('data-modal');
            let modal = document.getElementById(modalId);
            let content = document.getElementById(modalId + '-content');
            document.body.setAttribute('data-active-modal', modalId);

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
                    if(scaleValue > 0.5) {
                        content.style.display = 'grid';
                    }
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
            let activeModalId = document.body.getAttribute('data-active-modal');
            let content = document.getElementById(activeModalId + '-content');
            anime({
                targets: modal,
                width: ['85%', '0%'],  
                height: ['85%', '0%'], 
                scale: [1, 0],
                opacity: [1, 0],
                easing: 'easeInExpo',
                duration: 800,
                update: function(anim) {
                    let scaleValue = anim.animations[2].currentValue;
                    modal.style.transform = `translate(-50%, -50%) scale(${scaleValue})`;
                    if(scaleValue < 0.5) {
                        content.style.display = 'none';
                    }
                },
                complete: function() {
                    modal.style.display = 'none';
                    modal.classList.remove('active');
                    document.getElementById("copy-email-button").style.backgroundColor = "#FFFFFFFF"
                }
            });
        });
    });

    const initialActiveButton = document.getElementById('web-dev-button');
    initialActiveButton.classList.add('active-button');
    document.getElementsByClassName('web-dev-button-content').item(0).classList.add('active-content');

    function handleButtonClick(event) {
        document.querySelectorAll('button').forEach(button => {
            button.classList.remove('active-button');
        });

        event.target.classList.add('active-button');

        document.querySelectorAll('.button-content').forEach(content => {
            content.classList.remove('active-content');
        });

        const contentClass = event.target.id + '-content';
        document.getElementsByClassName(contentClass)[0].classList.add('active-content');
    }

    document.querySelectorAll('.projects-button').forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

});

function copyText(){
    navigator.clipboard.writeText("wjorg@bu.edu");
    console.log("Copied email to clipboard")
    document.getElementById("copy-email-button").style.backgroundColor = "#4CAF50";
}