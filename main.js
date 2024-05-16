function Sigma(marca) {
    this.marca = marca;
    this.actionPos = function() {
        console.log(this.marca + " Medicamento");
    }
}

function Amoxicilina(fabricacao, validade, pricinpioAtivo) {
    this.fabricacao = fabricacao;
    this.validade = validade;
    this.pricinpioAtivo = pricinpioAtivo;
}

function Amox(marca, fabricacao, validade) {
    this.fabricacao = fabricacao;
    this.validade = validade;

    Sigma.call(this, marca);
}

const amox1 = new Amox("EMS", 2023, 2025);
const amox2 = new Amoxicilina(2023, 2025, "antibiotico");
const sigma1 = new Sigma("EMS")
sigma1.actionPos();

console.log(amox1);
console.log(amox2);