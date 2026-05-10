const admins = [

{
user:"AdminPato",
pass:"patolino2k"
},

{
user:"AdminMoney",
pass:"Moneygg"
},

{
user:"AdminFw",
pass:"fwakaazz"
}

]

function register(){

const username =
document.getElementById("username").value

const password =
document.getElementById("password").value

if(!username || !password){

alert("Preencha tudo")
return

}

const users =
JSON.parse(localStorage.getItem("users")) || []

users.push({

username,
password

})

localStorage.setItem(
"users",
JSON.stringify(users)
)

alert("Conta criada")

window.location.href = "login.html"

}

function login(){

const username =
document.getElementById("loginUser").value

const password =
document.getElementById("loginPass").value

const admin =
admins.find(a=>

a.user === username &&
a.pass === password

)

if(admin){

localStorage.setItem(
"loggedUser",
username
)

window.location.href =
"admin.html"

return

}

const users =
JSON.parse(localStorage.getItem("users")) || []

const user =
users.find(u=>

u.username === username &&
u.password === password

)

if(user){

localStorage.setItem(
"loggedUser",
username
)

window.location.href =
"dashboard.html"

}else{

alert("Login inválido")

}

}

function logout(){

localStorage.removeItem(
"loggedUser"
)

window.location.href =
"login.html"

}

const welcome =
document.getElementById("welcome")

if(welcome){

welcome.innerText =
"Welcome, " +
localStorage.getItem("loggedUser")

}

const adminName =
document.getElementById("adminName")

if(adminName){

adminName.innerText =
"Admin: " +
localStorage.getItem("loggedUser")

}
