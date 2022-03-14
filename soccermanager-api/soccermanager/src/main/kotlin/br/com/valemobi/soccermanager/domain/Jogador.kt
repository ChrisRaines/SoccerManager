package br.com.valemobi.soccermanager.domain

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class Jogador (

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,

    @Column(name = "nome_jogador", nullable = false)
    var nomeJogador: String,

    @Column(name = "idade_jogador", nullable = false)
    var idadeJogador: Integer,

    @Column(name = "nacionalidade_jogador", nullable = false)
    var nacionalidadeJogador: String,

    @Column(name = "clube_jogador", nullable = false)
    var clubeJogador: String,

    @Column(name = "posicao_jogador", nullable = false)
    var posicaoJogador: String,

    @Column(name = "overall_jogador", nullable = false)
    var overallJogador: Integer,

    @Column(name = "valor_jogador", nullable = false)
    var valorJogador: Double,

    @Column(name = "foto_jogador", nullable = true)
    var fotoJogador: String? = null,

    @Column(name = "id_usuario", nullable = true)
    var idUsuario: Long? = null

)