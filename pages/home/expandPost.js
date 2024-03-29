function newPostFill() {
    userHeader.insertAdjacentHTML('afterbegin', 
        `
        <img src="${userInImg}" alt="">
        <span>
          <h3 class="tittle2">${userInName}</h3>
          <h5 class="text2">${userInStack}</h5>
        </span>`
    )
}

newPostFill()

function populatePosts() {
    for (let i = 0; i < posts.length; i++) {
        postId = posts[i].id_post
        postTittle = posts[i].title
        postText = posts[i].text
        postLikes = posts[i].likes
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
                <p class="post-likes">${postLikes}</p>
            </div>
        </article>`);
    }
}

populatePosts()


function likeTrack() { 
    likeBttns = document.getElementsByTagName('path')   
    for (let i = 0; i < likeBttns.length; i++) {
    likeBttns[i].addEventListener("click", ()=>{
        postId = likeBttns[i].parentNode.parentNode.parentNode.id.slice(5)
        likeBttns[i].classList.toggle('likeBttnActive')
        for (let idx = 0; idx < posts.length; idx++) {
                if (postId == posts[idx].id_post && likeBttns[i].classList.value == 'likeBttnActive')  {
                    posts[idx].likes++
                    return likeBttns[i].parentNode.parentNode.getElementsByClassName('post-likes')[0].innerText = posts[idx].likes
                }else if (postId == posts[idx].id_post && likeBttns[i].classList.value == ''){
                    posts[idx].likes--
                    return likeBttns[i].parentNode.parentNode.getElementsByClassName('post-likes')[0].innerText = posts[idx].likes
                }  
        }
    }
    )
}
}
likeTrack()

function closePost() {
    document.getElementById('post-close').addEventListener('click', ()=>{
    modal.classList.toggle('view'),
    modal.innerHTML = ''}
)
}

function expandPost() {
    for (let i = 0; i < openPostBttn.length; i++) {
        openPostBttn[i].addEventListener('click', function () {
            let modalId = openPostBttn[i].getAttribute("data-atributes-id")
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

expandPost()

function createPost() {
}

newPostBttn.addEventListener('click', ()=>{
    if (newPostTittle.value == '' | newPostContent.value == '') {
        return alert('Atenção! É preciso preencher o titulo e conteudo para postar')
    }
    posts.push({
        id_post: `${posts.length+1}`,
        user: `${userInid}`,
        title: `${newPostTittle.value}`,
        text: `${newPostContent.value}`,
        likes: 0,
      })
      newPostTittle.value = '' 
      newPostContent.value = '' 
      postSection.innerHTML = ''
      postSection.insertAdjacentHTML('afterbegin', `
      <h1 id="posts-section-tittle">Posts</h1>
      `)      
      postsSectionTittle = document.getElementById("posts-section-tittle")
      populatePosts()
      likeTrack()
      expandPost()
})