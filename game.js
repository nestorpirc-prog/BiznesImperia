let money = 0
let income = 1

function update(){
document.getElementById("money").innerText = "$" + money
}

function work(){
money += income
update()
}

function buyShop(){

if(money >= 50){
money -= 50
income += 5
alert("You bought a shop!")
}

update()

}

function buyCompany(){

if(money >= 500){
money -= 500
income += 50
alert("You bought a company!")
}

update()

}

setInterval(()=>{
money += income
update()
},3000)
