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

function saveUsers(users){

localStorage.setItem(
"users",
JSON.stringify(users)
)

}

function getUsers(){

return JSON.parse(
localStorage.getItem("users")
) || []

}

function register(){

const username =
document.getElementById("username").value

const password =
document.getElementById("password").value

if(!username || !password){

alert("Preencha tudo")
return

}

const users = getUsers()

const exists = users.find(
u => u.username === username
)

if(exists){

alert("Usuário já existe")
return

}

users.push({

username,
password,
key:"",
created:Date.now()

})

saveUsers(users)

alert("Conta criada")

window.location.href = "login.html"

}

function login(){

const username =
document.getElementById("loginUser").value

const password =
document.getElementById("loginPass").value

const admin = admins.find(a=>

a.user === username &&
a.pass === password

)

if(admin){

localStorage.setItem(
"loggedUser",
username
)

localStorage.setItem(
"isAdmin",
"true"
)

window.location.href =
"admin.html"

return

}

const users = getUsers()

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

localStorage.setItem(
"isAdmin",
"false"
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

localStorage.removeItem(
"isAdmin"
)

window.location.href =
"login.html"

}

function setUserKey(){

const username =
document.getElementById("setKeyUser").value

const key =
document.getElementById("setKeyValue").value

const users = getUsers()

const user = users.find(
u => u.username === username
)

if(!user){

alert("Usuário não encontrado")
return

}

user.key = key

saveUsers(users)

alert("Key salva")

}

function generateKey(){

const chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

let result = "MJ-"

for(let i=0;i<20;i++){

result +=
chars.charAt(
Math.floor(Math.random()*chars.length)
)

}

const field =
document.getElementById("setKeyValue")

if(field){
field.value = result
}

}

function encryptLua(){

const input =
document.getElementById("luaInput")

const output =
document.getElementById("luaOutput")

const text = input.value

const encoded = btoa(unescape(encodeURIComponent(text)))

output.value =
'-- encoded\\n'+encoded

}

function generateAscii(){

const text =
document.getElementById("asciiInput").value

const output =
document.getElementById("asciiOutput")

output.value =
"█▓▒░ " + text + " ░▒▓█"

}

function imageToAscii(event){

const file = event.target.files[0]

if(!file) return

const reader = new FileReader()

reader.onload = function(){

document.getElementById(
"asciiOutput"
).value =
"ASCII gerado da imagem."

}

reader.readAsDataURL(file)

}
