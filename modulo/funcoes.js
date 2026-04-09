/*********************************************************************************************************
 * Objetivo: Criando uma API Integrada com projeto Front-End
 * Data: 08/04/2026
 * Autor: Sthefany Correia
 * Versão: 1.0
 ********************************************************************************************************/

const listaContatos = require('./contatos.js')
//  console.log(listaContatos)

 getDadosUsuario()
 function getDadosUsuario() {
    
    let dados = { 
        todosDadosUsuario : []
    }   
                    //Quando se tem - coloca-se em [] e isso não significa ele é um array == "whats-users"
    listaContatos.contatos["whats-users"].forEach(contato => {
        dados.todosDadosUsuario.push(contato)
    });

    return dados
 }

 getContaPerfilUsuario("11987876567")
 function getContaPerfilUsuario(numeroPerfil) {

    let status = false

    let perfil = { 
        nome: '',
        nick: '',
        dadosConta: {
            inicio: '',
            fim: '' ,
        },
        foto: '',
        numero: '',
        corDeFundo: '', 
    }

    listaContatos.contatos["whats-users"].forEach(usuarioPerfil => {
        
        if(numeroPerfil == usuarioPerfil.number){
            perfil.numero = usuarioPerfil.number
            perfil.nome = usuarioPerfil.account
            perfil.nick = usuarioPerfil.nickname
            perfil.dadosConta.inicio = usuarioPerfil['created-since'].start
            perfil.dadosConta.fim = usuarioPerfil['created-since'].end
            perfil.foto = usuarioPerfil["profile-image"]
            perfil.corDeFundo = usuarioPerfil.background
        }
    })
  
    if (status) {
        return perfil
    } else
        return false
 }

 getDadosPessoais("11987876567")
 function getDadosPessoais(numeroDadosPessoais) {

    let status = false

    let lista = []

    listaContatos.contatos["whats-users"].forEach(pessoaisDados => {
     
        if(numeroDadosPessoais == pessoaisDados.number){
         
            pessoaisDados.contacts.forEach(adquirindoDados => {

                let dadosP = {
                    nome: adquirindoDados.name,
                    foto: adquirindoDados.image,
                    descricao: adquirindoDados.description
                }

                lista.push(dadosP)
                status = true
            })
        }
    })

    if(status){
        return lista
    }else
        return false
 }

 getConversas("11966578996")
 function getConversas(numMensagem) {

    let status = false

    let conversa = {
        conta: '',
        mensagens: []
    }

    listaContatos.contatos["whats-users"].forEach(msgm => {
    
        if(numMensagem == msgm.number){
            conversa.conta = msgm.account

            msgm.contacts.forEach(acessandoContatos => {
                conversa.mensagens = acessandoContatos.messages

                acessandoContatos.messages.forEach(acessandoMgm => {
                    conversa.mensagens.push(acessandoMgm)
                    status = true
                })
            })
        }     
    })

    if(status) {
        return conversa
    } else
        return false
 }

 
 getConversa("11987876567", "Ana Maria")
 
 function getConversa(numeroParametro,nomeParametro) {


    listaContatos.contatos['whats-users'].forEach(contato => { //prestar atenção no mome das variáveis
        
        
        if(numeroParametro == contato.number){ 
            console.log(contato);
            
        }
    })
 }




//É sempre muito importante analisar bem cada situação para saber qual caminho tomar,
//nem todas as funções serão iguais, pois cada caso é um.
