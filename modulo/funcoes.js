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
        imagem: '',
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

            usuarioPerfil.contacts.forEach(img => {
                perfil.imagem = img.image
                status = true
            })
        }
    })

    if (status){
        return perfil
    }else
        return false
 }

 getDadosPessoais("11966578996")
 function getDadosPessoais(numeroDadosPessoais) {

    let status = false

    let dadosP = {

        nome: '',
        foto: '',
        descricao: '',
    }

    listaContatos.contatos["whats-users"].forEach(pessoaisDados => {
     
        if(numeroDadosPessoais == pessoaisDados.number){
            
            pessoaisDados.contacts.forEach(adquirindoDados => {
            dadosP.nome = adquirindoDados.name,
            dadosP.foto =  adquirindoDados.image,
            dadosP.descricao = adquirindoDados.description
            status = true
            })
        }
    })

    if(status){
        return dadosP
    }else
        return false
 }

 getConversas( "11987876567")
 function getConversas(numMensagem) {

    let conversa = {
        msgm: ''
    }

    listaContatos.contatos["whats-users"].forEach(mensagens => {
        // console.log(mensagens);
        
        if(numMensagem == mensagens.number){

            mensagens.contacts.forEach(acessandoMsgm => {
                conversa.msgm = acessandoMsgm.messages
                //console.log(mensagens);
                 console.log(conversa);
            })
        }
    })
 }
