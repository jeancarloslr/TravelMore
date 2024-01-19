chatHelp = document.querySelector('.chatHelp');

function ajudar(){
    chat = document.querySelector('.talk-message');
    chat.classList.toggle('active');
    console.log("jean")
}

chatHelp.addEventListener('click', ajudar);
