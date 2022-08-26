const enviar = () => {

    class Pessoa {
        constructor (nome, cpf, dataDeNascimento) {
            this.nome = nome;
            this.cpf = cpf;
            this.dataDeNascimento = dataDeNascimento;
        }
    
        calcularIdade() {
            let presentYear = new Date().getFullYear();
    
            return (presentYear - this.dataDeNascimento.split('-')[0])
        }
    }

    class Carta {
        constructor(texto, dataDeEnvio, recebida, dataDeRecebimento, Pessoa) {
            this.texto = texto;
            this.dataDeEnvio = dataDeEnvio;
            this.recebida = recebida;
            this.dataDeRecebimento = dataDeRecebimento;
            this.pessoa = Pessoa;
        }
    
        marcarRecebimento() {
      
            if (this.recebida === true) {
                return document.getElementById('recebida').innerHTML = `Carta entregue no dia ${this.dataDeRecebimento}`
            }        
        }
    
        enviar() {
            return document.getElementById('enviada').innerHTML = `Carta enviada no dia ${this.dataDeEnvio}`
        }
    }

    let texto = document.getElementById('texto').value;
    let remetente = document.getElementById('remetente').value;
    let cpf = document.getElementById('cpf').value;
    let nascimento = document.getElementById('nascimento').value;
    let destinatario = document.getElementById('destino').value;

    let data = new Date();

    let dataEnvio = data.toLocaleDateString()

    let dataFutura = new Date();

    dataFutura.setDate(data.getDate() + 3)

    let dataDeRecebimento = dataFutura.toLocaleDateString()
   
    const pessoa = new Pessoa(remetente, cpf, nascimento)

    const carta = new Carta(texto, dataEnvio, true, dataDeRecebimento, pessoa)
    
    if (texto.length > 0 && remetente.length > 0 && cpf.length > 0 && nascimento.length > 0 && destinatario.length > 0){

        carta.enviar();
        carta.marcarRecebimento();

        document.getElementById('entrada--remetente').innerHTML = 'Remetente: ' + remetente
        document.getElementById('entrada--destinatario').innerHTML = 'Destinatário: ' + destinatario
    }else{
        document.getElementById('erro').innerHTML = 'Todos os campos são de preenchimento obrigatório.'
        setTimeout(() => {
            document.getElementById('erro').innerHTML = ''
        }, 5000)
    }

}
