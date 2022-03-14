package br.com.valemobi.soccermanager.dto

data class CreateRequestJogadorDTO(
    var nomeJogador: String,
    var idadeJogador: Integer,
    var nacionalidadeJogador: String,
    var clubeJogador: String,
    var posicaoJogador: String,
    var overallJogador: Integer,
    var valorJogador: Double,
    var fotoJogador: String? = null
)
