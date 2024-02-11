chatHelp = document.querySelector('.chatHelp');

function ajudar(){
    chat = document.querySelector('.talk-message');
    chat.classList.toggle('active');
}

chatHelp.addEventListener('click', ajudar);

