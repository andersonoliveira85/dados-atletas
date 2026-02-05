class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas

    }
    calculaCategoria(){
        if (this.idade >= 9 && this.idade <= 11){
           return "Infantil"
        }
        if (this.idade == 12 || this.idade == 13){
           return "Juvenil"
        }
        if (this.idade == 14 || this.idade == 15){
           return "Intermediário"
        }
        if (this.idade >= 16 && this.idade <= 30){
            return "Adulto"
        }
        else{
            return "Sem categoria"
        }
        
    }

    calculaIMC(){
        let imc = this.peso / (this.altura * this.altura)
        return imc

    }

    calculaMediaValida(){
        let soma = 0;
        for (let i=0; i<this.notas.length; i++){
            soma += this.notas[i]
        }
        return soma/this.notas.length
    }

    

    obtemNomeAtleta(){
        return "Nome: " + this.nome
    }

    obtemIdadeAtleta(){
        return "Idade: "+ this.idade

    }

    obtemPesoAtleta(){
        return "Peso: " + this.peso
    }
    
    obtemAlturaAtleta(){
        return "Altura: " + this.altura
    }

    obtemNotasAtleta(){
        return "Notas: " + this.notas
        
    }

    obtemCategoria(){
        return "Categoria: " + this.calculaCategoria() 

    }

    obtemIMC(){
        return "IMC: " + this.calculaIMC()

    }

    obtemMediaValida(){
        return "Notas: " + this.calculaMediaValida()
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

    
console.log(atleta.obtemNomeAtleta())
console.log(atleta.obtemIdadeAtleta())
console.log(atleta.obtemPesoAtleta())
console.log(atleta.obtemAlturaAtleta())
console.log(atleta.obtemNotasAtleta())
console.log(atleta.obtemCategoria())
console.log(atleta.obtemIMC())
console.log(atleta.obtemMediaValida())