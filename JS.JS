let raceNumber = Math.floor(Math.random() * 1000)

let cedo = true;
let idade = parseInt(prompt("Digite sua idade"))


if(idade >=18 && cedo == true){
    console.log(raceNumber)
}
if(cedo == true && idade >= 18){
    document.write(`os corredores correm às 09h30. o seu número de corrida é ${raceNumber}.`)
}else if(idade >= 18 && cedo == false){
    document.write(`Adultos que se registraram tarde correm às 11h00. O seu número é ${raceNumber}.`);
}else if(idade = 17){
    document.write(`Jovens registrados correm às 12h30`)
}
