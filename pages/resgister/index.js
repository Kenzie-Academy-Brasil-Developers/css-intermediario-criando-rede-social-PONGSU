let newUser = {
    id: 0,
    user: "",
    stack: "",
    img: "",
    email: '',
    password: '',
}

let nameRegister = document.getElementById('register-name')
let emailRegister = document.getElementById('register-email')
let passRegister = document.getElementById('register-pass')
let workRegister = document.getElementById('register-work')
let imageRegister = document.getElementById('register-image')
let bttnRegister = document.getElementById('register-bttn')
let alertEmail = document.getElementById('alert-email')

let checkList = [nameRegister, emailRegister, passRegister, workRegister]
let fillList = [newUser.user, newUser.email, newUser.password, newUser.work]
let checkCount = 0

for (let i = 0; i < checkList.length; i++) {
    if (checkList[i]) {
        checkList[i].addEventListener('keypress', () => {
            if (alertEmail = ! '')
                checkList[i].classList.remove("alert-fail")
            checkList[i].classList.remove("alert")
            if (document.getElementById(`alert-${i}`)) document.getElementById(`alert-${i}`).remove();
        })
    }
}

passRegister.addEventListener('keyup', () => {
    console.log(passRegister.value.length);
    if (passRegister.value.length < 8 && document.getElementById(`alert-pass`) == null) {
        passRegister.insertAdjacentHTML("afterend", `
        <span id='alert-pass' class='alert-fail text3'>A senha precisa ter no minimo 8 caracteres</span>
    `)
        passRegister.classList.add('alert')
    } else if (passRegister.value.length > 7) {
        document.getElementById(`alert-pass`).remove()
        passRegister.classList.remove('alert')
    }
})

function verifyEmpyt() {
    checkCount = 0
    for (let i = 0; i < checkList.length; i++) {
        if (checkList[i].value == '') {
            checkList[i].classList.remove("alert-fail")
            checkList[i].classList.remove("alert")
            if (document.getElementById(`alert-${i}`)) document.getElementById(`alert-${i}`).remove();
            checkList[i].classList.add('alert')
            checkCount++
            checkList[i].insertAdjacentHTML("afterend", `
            <span id='alert-${i}'class='alert-fail text3'>Campo obrigatório</span>
        `)
        }
    } if (checkCount > 0) {
        return
    }
    verifyEmail()
}

function verifyEmail() {
    for (let i = 0; i < users.length; i++) {
        if (emailRegister.value.toLocaleLowerCase() == users[i].email.toLocaleLowerCase()) {
            if (document.getElementById(`alert-email`) == null) {
                emailRegister.classList.add('alert')
                return emailRegister.insertAdjacentHTML("afterend", `
                <span class='alertX text3' id='alert-email'>Email já está cadastrado, se precisa recuperar a senha contate os administradores</span>
            `)                
            }
            return
        }
    }
    verifyImg()
}


function verifyImg() {
    if (imageRegister.value.slice(-4).toLocaleLowerCase() != '.jpg' && imageRegister.value.slice(-4).toLocaleLowerCase() != '.png') {
        if (imageRegister.value != '') {
            imageRegister.classList.add('alert')
            return imageRegister.insertAdjacentHTML("afterend", `
            <span class='alertX text3' id='alert-img'>O formato da imagem precisa ser: .jpg ou .png ou .svg se preferir deixe este campo em branco</span>
        `)
        }
    }
    if (passRegister.value.length < 8) {
        return passRegister.classList.add('alert')
    }
    fillUser()
}

let loginSucess = document.getElementById('login-sucess')

function fillUser() {
    newUser.user = nameRegister.value
    newUser.email = emailRegister.value
    newUser.password = passRegister.value
    newUser.stack = workRegister.value
    if (imageRegister.value == '') {
        newUser.img = '../../assets/noPic.png'
    } else {
        newUser.img = imageRegister.value
    }
    newUser.id = users.length + 1
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    loginSucess.classList.toggle('view')
    return loginSucess.insertAdjacentHTML("beforeend", `
                <section id="open-sucess">
                    <h4>Usuário cadastrado com sucesso!</h4>  
                    <p class="text2">Faça o login para acessar o site</p>
                    <a href='../login/index.html' ><button class="whiteFixBttn" id='go-login' type="submit">Continuar</button></a>
                </section>
        `)
}



bttnRegister.addEventListener('click', () => {
    verifyEmpyt()
})

