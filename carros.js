class Veiculo{
    constructor(rodas, combustivel) {
        this.rodas = rodas;
        this.combustivel = combustivel;
      }
    acelerar(){
        console.log('Vruuuuuuuum')
    }
}
class Moto extends Veiculo{
    constructor(rodas, combustivel ,capacete){
    super(rodas, combustivel);
    this.capacete = capacete;
    }
    acelerar(){
        super.acelerar()
    }
    empinar(){
        console.log('Você Empinou e caiu')
    }
}

const honda = new Moto(2,'Flex',false);
const bmw = new Veiculo(3,'Gasolina');

console.log(honda)
console.log(bmw)
honda.acelerar()
honda.empinar()