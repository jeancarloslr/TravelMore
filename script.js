chatHelp = document.querySelector('.chatHelp');
chat = document.querySelector('.talk-message');

function ajudar(){
    chat.classList.toggle('active')
    console.log("jean")
}

chatHelp.addEventListener('click', ajudar);
