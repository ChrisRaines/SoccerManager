package br.com.valemobi.soccermanager.dto

data class CreateRequestUsuarioDTO(
    val username: String,
    val email: String,
    val password: String,
)
