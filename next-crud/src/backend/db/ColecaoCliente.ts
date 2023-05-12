import firebase from "../config";
import Cliente from "@/src/core/Cliente";
import ClienteRepositorio from "@/src/core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {
    
    conversor = { //conversor é do firebase
        toFirestore(cliente: Cliente){ //converte uma classe que vai ser persistido no firestore
            return {
                nome: cliente.getNome,
                idade: cliente.getIdade
                //id é gerado pelo firestore
            }
        }, 
            fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente {
            //do firestore para minha classe
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }
    
    async salvar(cliente: Cliente): Promise<Cliente> {
        if(cliente?.getId){
            await this.colecao().doc(cliente.getId).set(cliente)
            return cliente
        } else {
            const docRef = await this.colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data() as Cliente
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        return this.colecao().doc(cliente.getId).delete()
    }

    async obterTodos(): Promise<Cliente[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data())
    }

    private colecao(){
        return firebase.firestore().collection('clientes').withConverter(this.conversor)
    }
}

