
function clickedOrange(){
    document.getElementById('boo-orange').style.zIndex = 4;
    document.getElementById('boo-orange').style.backgroundColor = '#ff8400';
    let id = null;
    const elem = document.getElementById("boo-orange");
    elem.style.boxShadow = '8px 8px #cd6a00'
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 0.5);
    function frame() {
        if (pos == 85) {
         document.getElementById('content-orange').style.display = 'contents';
         document.getElementById('info-content-o').style.display = 'contents';
         document.getElementById('signup-content-o').style.display = 'none';
         document.getElementById('details-content-o').style.display = 'none';
         clearInterval(id);
        } else {
         pos++; 
         elem.style.height = pos + 'vh'; 
         elem.style.width = pos + 'vw';
         elem.style.left = 50 - (pos*0.5) + 'vw';
         elem.style.top = 50 - (pos*0.5) + 'vh';
    }
  }
}

function clickedXOrange(){
    const elem = document.getElementById("boo-orange");
    elem.style.width = 0 + 'vw';
    elem.style.height = 0 + 'vh';
    document.getElementById('content-orange').style.display = 'none';
}

function clickedPurple(){
    document.getElementById('boo-purple').style.zIndex = 4;
    document.getElementById('boo-purple').style.backgroundColor = '#cc02f5';
    let id = null;
    const elem = document.getElementById("boo-purple");
    elem.style.boxShadow = '8px 8px #9b00ba'
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 0.5);
    function frame() {
        if (pos == 85) {
         document.getElementById('content-purple').style.display = 'contents';
         document.getElementById('info-content-p').style.display = 'contents';
         document.getElementById('signup-content-p').style.display = 'none';
         document.getElementById('details-content-p').style.display = 'none';
         clearInterval(id);
        } else {
         pos++; 
         elem.style.height = pos + 'vh'; 
         elem.style.width = pos + 'vw';
         elem.style.left = 50 - (pos*0.5) + 'vw';
         elem.style.top = 50 - (pos*0.5) + 'vh';
    }
  }
}

function clickedXPurple(){
    const elem = document.getElementById("boo-purple");
    elem.style.width = 0 + 'vw';
    elem.style.height = 0 + 'vh';
    document.getElementById('content-purple').style.display = 'none';
}

function clickedSignUpOrange(){
    const form = document.getElementById("signup-content-o");
    const info = document.getElementById("info-content-o");
    const details = document.getElementById("details-content-o");
    form.style.display = 'contents';
    info.style.display = 'none';
    details.style.display = 'none';
}

function clickedInfoOrange(){
    const form = document.getElementById("signup-content-o");
    const info = document.getElementById("info-content-o");
    const details = document.getElementById("details-content-o");
    form.style.display = 'none';
    info.style.display = 'contents';
    details.style.display = 'none';
}

function clickedDetailsOrange(){
    const form = document.getElementById("signup-content-o");
    const info = document.getElementById("info-content-o");
    const details = document.getElementById("details-content-o");
    form.style.display = 'none';
    info.style.display = 'none';
    details.style.display = 'contents';
}

function clickedSignUpPurple(){
    const form = document.getElementById("signup-content-p");
    const info = document.getElementById("info-content-p");
    const details = document.getElementById("details-content-p");
    form.style.display = 'contents';
    info.style.display = 'none';
    details.style.display = 'none';
}

function clickedInfoPurple(){
    const form = document.getElementById("signup-content-p");
    const info = document.getElementById("info-content-p");
    const details = document.getElementById("details-content-p");
    form.style.display = 'none';
    info.style.display = 'contents';
    details.style.display = 'none';
}

function clickedDetailsPurple(){
    const form = document.getElementById("signup-content-p");
    const info = document.getElementById("info-content-p");
    const details = document.getElementById("details-content-p");
    form.style.display = 'none';
    info.style.display = 'none';
    details.style.display = 'contents';
}

function clickedWhite(){
    document.getElementById('boo-white').style.zIndex = 4;
    document.getElementById('boo-white').style.backgroundColor = '#ffffff';
    let id = null;
    const elem = document.getElementById("boo-white");
    elem.style.boxShadow = '8px 8px #b8b8b8';
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 0.5);
    function frame() {
        if (pos == 85) {
         document.getElementById('content-white').style.display = 'contents';
         clearInterval(id);
        } else {
         pos++; 
         elem.style.height = pos + 'vh'; 
         elem.style.width = pos + 'vw';
         elem.style.left = 50 - (pos*0.5) + 'vw';
         elem.style.top = 50 - (pos*0.5) + 'vh';
    }
  }
}

function clickedXWhite(){
    const elem = document.getElementById("boo-white");
    elem.style.width = 0 + 'vw';
    elem.style.height = 0 + 'vh';
    document.getElementById('content-white').style.display = 'none';
}