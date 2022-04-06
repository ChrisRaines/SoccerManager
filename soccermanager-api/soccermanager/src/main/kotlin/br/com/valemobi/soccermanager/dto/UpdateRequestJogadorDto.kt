package br.com.valemobi.soccermanager.dto

import javax.persistence.Column

data class UpdateRequestJogadorDto(
    var id: Long,
    var nomeJogador: String,
    var idadeJogador: Integer,
    var nacionalidadeJogador: String,
    var clubeJogador: String,
    var posicaoJogador: String,
    var overallJogador: Integer,
    var valorJogador: Double,
    var fotoJogador: String? = null
)
