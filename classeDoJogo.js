class Herroi {
    constructor(nome,idade,tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = "";
    }
    atacar(){
        switch (this.tipo) {
            case ("mago"):
                this.ataque = "magia";
                break;
            
            case ("guerreiro"):
                this.ataque = "espada";
                break;
            
            case  ("monge"):
                this.ataque = "artes marciais";
                break;
            
            case ("ninja"):
                this.ataque = "shuriken";
                break;

            default:
                this.ataque = "socos e chutes";
                
        }
        console.log(`O ${this.tipo} atacou usando ${this.ataque} `);
    }   
}
const mago = new Herroi("Ryze","100","mago");
mago.atacar();

const monge = new Herroi("Ryze","35","monge");
monge.atacar();

const guerreiro = new Herroi("Ryze","55","guerreiro");
guerreiro.atacar();

const ninja  = new Herroi("Ryze","100","ninja");
ninja.atacar();