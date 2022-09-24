function populateSugestions() {
    for (let i = 0; i < sugestUsers.length; i++) {
        userId = sugestUsers[i]
        console.log(userId);
        for (let idx = 0; idx < users.length; idx++) {
            if (users[idx].id == userId) {
                
                userName = users[idx].user
                userStack = users[idx].stack
                userImg = users[idx].img
                
            console.log(users[idx].user);
                sugestions.insertAdjacentHTML('afterbegin', `
                <li>
                    <div class="sugested-user">
                        <img src="${userImg}" alt="">
                        <span>
                            <h3 class="tittle2">${userName}</h3>
                            <h5 class="text2">${userStack}</h5>
                        </span>
                    </div>
                    <button class="followBttn">Seguir</button>
                </li>                   
                `)
            }
        }
    }
}

populateSugestions()


function followTrack() { 
    followBttns = document.getElementsByClassName('followBttn')  
    for (let i = 0; i < followBttns.length; i++) {
    followBttns[i].addEventListener("click", ()=>{
        followBttns[i].classList.toggle('following')
        if (followBttns[i].innerText == 'Seguir') {
            followBttns[i].innerText = 'Seguindo'
        }else{
            followBttns[i].innerText = 'Seguir'
        }
    })
}
}

followTrack() 