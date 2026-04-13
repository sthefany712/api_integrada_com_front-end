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

    app.get ('/v1/whatsapp/dadosUsuario', function (request, response){

        let dadosUsuario = listaContatos.getDadosUsuario()

        response.status(200)
        response.json(dadosUsuario)
    })

    app.get('/v1/whatsapp/perfilUsuario/:numeroPerfil', function (request, response){

        let perfil = request.params.numeroPerfil
        let perfilUsuario = listaContatos.getDadosUsuario(perfil)

        if(perfilUsuario){
            response.status(200)
            response.json(perfilUsuario)
        }else{
            response.json({"message": "O estado informado não foi encontrado"})
            response.status(404)
        }
    })

    app.listen(8080, function(){
        console.log('API funcionando e aguardando novas requisições ...')
    })


