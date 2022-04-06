package br.com.valemobi.soccermanager.dto

data class UpdateRequestUsuarioDTO(
    val id: Long,
    val username: String,
    val email: String,
    val password: String,
    val wallet: Double,
    val nomeClube: String? = null,
    val fotoPerfil: String? = null
)
