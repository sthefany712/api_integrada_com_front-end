/*********************************************************************************************************
 * Objetivo: Arquivo responsável pela criação da API de Projetos Front-End
 * Data: 13/04/2026
 * Autor: Sthefany Correia
 * Versão: 1.0
 * 
*  Vamos ultilizar a biblioteca EXPRESS
    Buscar no npm que tem todas as dependencias para ser instaladas nonode
 ********************************************************************************************************/

    const express   = require('express')
    const cors     = require('cors')

    const app = express()

    const corsOptions = {
        origin: ['*'],
        methods: 'GET', 
        allowedHeaders: ['Content-type', 'Autorization']
    }

    app.use(cors(corsOptions))

    const listaContatos = require('./modulo/funcoes.js')

    app.get ('/v1/whatsapp/dadosUsuario', function (request, response) {

        let dadosUsuario = listaContatos.getDadosUsuario()

        response.status(200)
        response.json(dadosUsuario)
    })

    app.get('/v1/whatsapp/perfilUsuario/:numeroPerfil', function (request, response) {

        let perfil = request.params.numeroPerfil
        let perfilUsuario = listaContatos.getContaPerfilUsuario(perfil)

        if(perfilUsuario){
            response.status(200)
            response.json(perfilUsuario)
        }else{
            response.json({"message": "O numero informado não foi econtrado"})
            response.status(404)
        }
    })

    app.get('/v1/whatsapp/dadosPessoais/:numeroDadosPessoais', function (request, response) {

        let dadosP = request.params.numeroDadosPessoais
        let funcaoDadosP = listaContatos.getDadosPessoais(dadosP)
        
         if(funcaoDadosP){
            response.status(200)
            response.json(funcaoDadosP)
        }else{
            response.json({"message": "O numero informado não foi encontrado"})
            response.status(404)
        }
    })

     app.get('/v1/whatsapp/conversas/:numeroConversas', function (request, response) {

        let conversas = request.params.numeroConversas
        let funcaoConversas = listaContatos.getConversas(conversas)
        
         if(funcaoConversas){
            response.status(200)
            response.json(funcaoConversas)
        }else{
           
            response.status(404)
        }
    })

     app.get('/v1/whatsapp/:numeroParametro/conversa', function (request, response) {
        let contato = request.query.contato;
        let numero = request.params.numeroParametro;
        
        if(!contato || !numero) {
            response.json({"message": "Erro"})
            response.status(404)
            return false
        }
        
        let conversa = listaContatos.getConversa(numero, contato)
         
        if(conversa) { 
            response.status(200);
            response.json(conversa);
        }else{
            response.json({"message": "Conversa não encontrada"})
            response.status(404)
        }

    })

    app.get('/v1/whatsapp/filtro', function (request, response) {
        
        let palavraChave = request.query 
        console.log(palavraChave);
        
        let filtro 
    })


    app.listen(8080, function(){
         console.log('API funcionando e aguardando novas requisições ...')
    })


