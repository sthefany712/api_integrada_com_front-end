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

 getContaPerfilUsuario(number)
 function getContaPerfilUsuario(numeroPerfil) {

    let perfil = { 
        //dados : [], 
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
        //perfil.dados.push(usuarioPerfil)
        console.log(numeroPerfil);
        
        if(numeroPerfil == usuarioPerfil.number)
            perfil.numero = usuarioPerfil.number
        // perfil.nome = usuarioPerfil.account
        // perfil.nick = usuarioPerfil.nickname
        // perfil.dadosConta = usuarioPerfil.start
        // perfil.foto = usuarioPerfil.profile-image

    });
    // console.log(perfil);
    
    

 }
