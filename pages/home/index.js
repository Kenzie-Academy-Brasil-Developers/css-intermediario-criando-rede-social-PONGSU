let userImg = ''
let userName = ''
let userStack = ''
let userId = ''
let postId = ''
let postTittle = ''
let postText = ''
let user = {}

let postsSectionTittle = document.getElementById("posts-section-tittle")

let openPostBttn = document.getElementsByClassName('grey1Bttn')
let modal = document.getElementById('reset-out')

let sugestions = document.getElementById('sugestions-list')

let likeBttns = document.getElementsByTagName('path')

function likeTrack() { 
    likeBttns = document.getElementsByTagName('path')   
    for (let i = 0; i < likeBttns.length; i++) {
    likeBttns[i].addEventListener("click", ()=>{
        likeBttns[i].classList.toggle('likeBttnActive')
    })
}
}

let followBttns = []

function followTrack() { 
    followBttns = document.getElementsByClassName('followBttn')  
    for (let i = 0; i < followBttns.length; i++) {
    followBttns[i].addEventListener("click", ()=>{
        followBttns[i].classList.toggle('following')
        console.log(followBttns[i].innerText);
        if (followBttns[i].innerText == 'Seguir') {
            followBttns[i].innerText = 'Seguindo'
        }else{
            followBttns[i].innerText = 'Seguir'
        }
    })
}
}