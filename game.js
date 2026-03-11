let game = {

money:0,
income:1,

businesses:{
lemonade:{
price:50,
income:2,
owned:0
},

shop:{
price:250,
income:10,
owned:0
},

company:{
price:1000,
income:50,
owned:0
}

}

}

function work(){

game.money+=game.income
updateUI()

}

function buyBusiness(name){

let b=game.businesses[name]

if(game.money>=b.price){

game.money-=b.price
game.income+=b.income
b.owned++

b.price=Math.floor(b.price*1.5)

alert("Business purchased!")

}

updateUI()

}

setInterval(()=>{

game.money+=game.income
updateUI()
saveGame()

},1000)

function saveGame(){

localStorage.setItem("empireSave",JSON.stringify(game))

}

function loadGame(){

let save=localStorage.getItem("empireSave")

if(save){

game=JSON.parse(save)

}

}

loadGame()
updateUI()
