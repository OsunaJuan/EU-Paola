const menu = document.querySelector(".sideBar");
const bttClose = document.querySelector('#sidebar_close');
const bttnOpen = document.querySelector("#header__Bttn");



bttnOpen.onclick = (event)=>{
    menu.classList.add("active")
    bttClose.classList.add("show")
}

bttClose.onclick = (event)=>{
    menu.classList.remove("active")
    setTimeout(()=>{
        bttClose.classList.remove("show")
    },220)
    
}


