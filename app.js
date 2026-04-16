/*********************************************************************************************************
 * Objetivo: Arquivo responsável pela criação da API de Projetos Front-End
 * Data: 13/04/2026
 * Autor: Sthefany Correia
 * Versão: 1.0
 * 
 * Vamos ultilizar a biblioteca EXPRESS
 * Buscar no npm que tem todas as dependencias para ser instaladas no node  
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

        if(perfilUsuario) {
            response.status(200)
            response.json(perfilUsuario)
        } else {
            response.status(404)
            response.json({"message": "O numero informado não foi econtrado"})
        }
    })

    app.get('/v1/whatsapp/dadosPessoais/:numeroDadosPessoais', function (request, response) {

        let dadosP = request.params.numeroDadosPessoais
        let funcaoDadosP = listaContatos.getDadosPessoais(dadosP)
        
         if(funcaoDadosP) {
            response.status(200)
            response.json(funcaoDadosP)
        } else {
            response.status(404)
            response.json({"message": "O numero informado não foi encontrado"})
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
            response.json({"message": "O numero informado não foi encontrado"})
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
        } else {
            response.status(404)
            response.json({"message": "Conversa não encontrada"})
        }

    })

    app.get('/v1/whatsapp/:numeroPalavraChave/filtro', function (request, response) {
        
        //Recebe os dados 
        let numeroPalavraChave = request.params.numeroPalavraChave //params envia na URL
        let {nome, palavraChave} = request.query                   //query vem depois do ? na URL
        //let palavraChave = request.query.palavraChave

        //Validação
        if(!palavraChave || !nome || !numeroPalavraChave) {
            response.status(400)
            response.json({"message": "Erro"})
            return
        }

        //Processa os dados
        let filtro =  listaContatos.getPesquisaPalavraChave(palavraChave, numeroPalavraChave, nome)

        //Envia resposta/dados (filtro) ou envia ERRO
        if(filtro) { 
            response.status(200);
            response.json(filtro);
        } else {
            response.json({"message": "Palavra não encontrada"})
            response.status(404)
        }
    })

    app.get('/v1/whatsapp/help', function(request, response) {
        let docAPI = {
            "API-description": "API para manipular dados do whatsapp",
            "date": "2026-04-16",
            "Development": "Sthefany",
            "Version": "1.0",
            "Endpoints": [
                {
                    "id": 1,
                    "Rota 1": "/v1/whatsapp/dadosUsuario",
                    "Obs": "Retorna todos os dados do usuario"
                },
                {
                    "id": 2,
                    "Rota 1": "/v1/whatsapp/perfilUsuario/11987876567",
                    "Obs": "Retorna dados da conta do perfil do usuario",
                },
                {
                    "id": 3,
                    "Rota 1": "/v1/whatsapp/dadosPessoais/11987876567",
                    "Obs": "Retornar apenas os dados pessoais de cada contato do usuário",
                },
                {   "id": 4,
                    "Rota 1": "/v1/whatsapp/conversas/11987876567",
                    "Obs": "Retorna todas as mensagens trocadas de uma conta de usuário",
                },
                {
                    "id": 5,
                    "Rota 1": "/v1/whatsapp/11987876567/conversa?contato=Ana Maria",
                    "Obs": "Retorna uma conversa de um usuário e um contato",
                },
                {
                    "id": 6,
                    "Rota 1": "/v1/whatsapp/11987876567/filtro?nome=Ana Maria&palavraChave=you",
                    "Obs": "Retorna partes da conversa por meio de um filtro de palavras",
                }
            ]
        }

        response.status(200)
        response.json(docAPI)
    })

    app.listen(8080, function(){
         console.log('API funcionando e aguardando novas requisições ...')
    })


