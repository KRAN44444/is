function random(min,max){
	return Math.floor(Math.random()*(max-min)+min)
}
function chek(correct,usr){
    if (correct == usr){
        alert("you right")
        right ++
    }
    else{
        alert("you lose,correct answer: "+correct)
        not_right ++
    }
}
let min = 1
let max = 9
let right = 0
let not_right = 0
document.querySelector(".plus").onclick = function(){
    let num1 = random(min,max)
    let num2 = random(min,max)
    let correct = num1+num2
    let usr = prompt(num1+"+"+num2,"")
    chek(correct,usr)
}
document.querySelector(".minus").onclick = function(){
    let num1 = random(min,max)
    let num2 = random(min,max)
    let correct = num1-num2
    let usr = prompt(num1+"-"+num2,"")
    chek(correct,usr)
}
document.querySelector(".mu").onclick = function(){
    let num1 = random(min,max)
    let num2 = random(min,max)
    let correct = num1*num2
    let usr = prompt(num1+"*"+num2,"")
    chek(correct,usr)
}
document.querySelector(".div").onclick = function(){
    let num1 = random(min,max)
    let num2 = random(min,max)
    let correct = num1/num2
    correct = Math.round(correct)
    alert("Пожалуйста, округли твой ответ до целого числа:" + " если .5 и выше, то вверх" + " если .4 и ниже, то вниз")
    let usr = prompt(num1+":"+num2,"")
    chek(correct,usr)
}
document.querySelector("select").onchange = function(){
    let value = document.querySelector("select").value;
    console.log(value)
    // if (value == "easy"){
    //     min = 1
    //     max = 9
    // }
    // else if (value == "middle"){
    //     min = 10
    //     max = 99
    // }
    // else if (value == "hard"){
    //     min = 100
    //     max = 999
    // }
    switch(value){
        case "easy":{
            min = 1;
            max = 9;
            break ;
        }
        case "middle":{
            min = 10;
            max = 99;
            break ;
        }
        case "hard":{
            min = 100;
            max = 999;
            break ;
        }
    }
}
document.querySelector(".stats").onclick = function(){
    alert("stats:\n"+"right: "+right+"\n"+"not right: "+not_right)
    
}
document.querySelector(".reset").onclick = function(){
    right = 0
    not_right = 0
}