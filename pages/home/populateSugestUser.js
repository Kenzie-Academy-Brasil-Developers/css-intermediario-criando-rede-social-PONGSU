function populateSugestions() {
    for (let i = 0; i < sugestUsers.length; i++) {
        userId = sugestUsers[i]
        for (let idx = 0; idx < users.length; idx++) {
            if (users[idx].id == userId) {
                userName = users[idx].user
                userStack = users[idx].stack
                userImg = users[idx].img
            }
        }
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

populateSugestions()