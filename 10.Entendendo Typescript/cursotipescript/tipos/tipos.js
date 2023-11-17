"use strict";
//string
let nome = 'João';
console.log(nome);
//numbers
let idade = 27;
console.log(idade);
//boolean
let possuiHobbies = true;
console.log(possuiHobbies);
//tipos dinmicos
let minhaIdade;
minhaIdade = 27;
console.log(minhaIdade);
minhaIdade = 'tenho 27';
console.log(minhaIdade);
//array
let hobbies = ['cozinhar', 'praticar sport'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
console.log(hobbies);
//tuplas
let endereco = ['Av 123', 99, 'casa '];
console.log(endereco);
endereco = ['Av 123', 99, 'teste'];
//enums
var Cor;
(function (Cor) {
    Cor[Cor["cinza"] = 0] = "cinza";
    Cor[Cor["verde"] = 100] = "verde";
    Cor[Cor["azul"] = 101] = "azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.azul;
console.log(minhaCor);
//any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
