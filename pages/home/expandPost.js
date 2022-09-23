function populatePosts() {
    for (let i = 0; i < posts.length; i++) {
        postId = posts[i].id_post
        postTittle = posts[i].title
        postText = posts[i].text
        userId = posts[i].user
        for (let idx = 0; idx < users.length; idx++) {
            if (users[idx].id == userId) {
                userName = users[idx].user
                userStack = users[idx].stack
                userImg = users[idx].img
            }

        }
        postsSectionTittle.insertAdjacentHTML('afterend', `
        <article id='post-${postId}' class="post">
            <div class="post-header">
                <img src="${userImg}" alt="">
                <span>
                    <h3 class="tittle2">${userName}</h3>
                    <h5 class="text2">${userStack}</h5>
                </span>
            </div>
            <h1 class="post-tittle tittle1">${postTittle}</h1>
            <p class="post-content text2">${postText}</p>
            <div class="post-buttons">
                <button data-atributes-id="${postId}" class="grey1Bttn">Abrir Post</button>
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4547 0C15.1447 0 13.1391 1.30143 12.1206 3.21286C11.1022 1.30143 9.09659 0 6.78659 0C3.44819 0 0.741333 2.71857 0.741333 6.07143C0.741333 14.2857 12.1206 20 12.1206 20C12.1206 20 23.5 14.2857 23.5 6.07143C23.5 2.71857 20.7931 0 17.4547 0Z"
                     fill="#212529" fill-opacity="0.5" />
                </svg>
            </div>
        </article>`);
    }
}

populatePosts()


function closePost() {
    document.getElementById('post-close').addEventListener('click', ()=>{
    modal.classList.toggle('view'),
    modal.innerHTML = ''}
)
}

function modalToggle() {
    for (let i = 0; i < openPostBttn.length; i++) {
        openPostBttn[i].addEventListener('click', function () {
            let modalId = openPostBttn[i].getAttribute("data-atributes-id")
            console.log(modalId)
            postId = posts[modalId-1].id_post
            postTittle = posts[modalId-1].title
            postText = posts[modalId-1].text
            userId = posts[modalId-1].user
            for (let idx = 0; idx < users.length; idx++) {
                if (users[idx].id == userId) {
                    userName = users[idx].user
                    userStack = users[idx].stack
                    userImg = users[idx].img
                }
    
            }
            if (modal.innerHTML == ''){
                modal.classList.toggle('view')
                modal.insertAdjacentHTML("beforeend", `
                    <section id="open-post">
                        <button id='post-close' data-atributes-id="${postId}" type="reset">x</button>
                        <div id="open-post-header">
                            <img src="${userImg}" alt="">
                            <span>
                            <h3 class="tittle2">${userName}</h3>
                            <h5 class="text2">${userStack}</h5>
                            </span>
                        </div>
                        <h1 class="tittle1">${postTittle}</h1>
                        <p class="text2">${postText}</p>
                    </section>
            `)            
            closePost() 
            }
        })
    } 
}

modalToggle()
