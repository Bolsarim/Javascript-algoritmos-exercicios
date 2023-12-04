/*Faça um Programa que converta metros para centímetros.*/

function converter(){
let metros, cm 
metros = document.getElementById("metros").value
cm = parseFloat(metros) * 100
document.getElementById("resultado").innerText = "De metro pra centimentro: " + cm


 }