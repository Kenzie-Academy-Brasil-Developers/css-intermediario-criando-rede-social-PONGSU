
let loginEmail = document.getElementById('login-email')
let loginPassword = document.getElementById('login-password')

let loginBttn = document.getElementById("login-bttn")

let authError = document.getElementById('auth-error')


function closeError() {
    document.getElementById('error-close').addEventListener('click', ()=>{
        authError.classList.toggle('view'),
        authError.innerHTML = ''}
)
}

loginBttn.addEventListener('click', () => {
    if (loginEmail.value == '' | loginPassword.value == '') {
        if (authError.innerHTML == '') {
            authError.classList.toggle('view')
            authError.insertAdjacentHTML("beforeend", `
                <section id="open-auth-error">
                    <h4>Acesso não autorizado</h4>  
                    <p class="text2">É preciso informar seus dados para acessar.</p>
                    <button class="whiteFixBttn" id='error-close' data-atributes-id="error" type="submit">Entendi</button>
                </section>
        `)
        closeError() 
    }}
    for (let i = 0; i < users.length; i++) {
        if (loginEmail.value.toLowerCase() == users[i].email.toLowerCase()) {
            if (loginPassword.value == users[i].password) {
                userIn = {
                    id: users[i].id,
                    user: users[i].user,
                    stack: users[i].stack,
                    img: users[i].img,
                    email: users[i].email,
                    password: users[i].password,
                }
                return window.location.href = '../home/index.html'
            } else {
                if (authError.innerHTML == '') {
                    authError.classList.toggle('view')
                    authError.insertAdjacentHTML("beforeend", `
                    <section id="open-auth-error">
                        <h4>Acesso não autorizado</h4>  
                        <p class="text2"><strong>Senha incorreta</strong>, verifique a tecla CapsLock e tente novamente.</p>
                        <button class="whiteFixBttn" id='error-close' data-atributes-id="error" type="submit">Entendi</button>
                    </section>
            `)
            closeError() 
                }
            }
        }
    }
    if (authError.innerHTML == '') {
        authError.classList.toggle('view')
        authError.insertAdjacentHTML("beforeend", `
            <section id="open-auth-error">
                <h4>Acesso não autorizado</h4>  
                <p class="text2"><strong>Email não encontrado</strong>, verifique e tente novamente ou cadastre-se para acessar.</p>
                <button class="whiteFixBttn" id='error-close' data-atributes-id="error" type="submit">Entendi</button>
            </section>
    `)
    closeError() 
    }
})

