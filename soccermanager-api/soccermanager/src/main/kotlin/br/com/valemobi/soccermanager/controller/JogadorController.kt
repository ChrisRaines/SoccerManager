package br.com.valemobi.soccermanager.controller

import br.com.valemobi.soccermanager.domain.Jogador
import br.com.valemobi.soccermanager.domain.Usuario
import br.com.valemobi.soccermanager.dto.CreateRequestJogadorDTO
import br.com.valemobi.soccermanager.dto.UpdateRequestIdUsuarioInJogadorDTO
import br.com.valemobi.soccermanager.dto.UpdateRequestWalletUsuarioDTO
import br.com.valemobi.soccermanager.repository.JogadorRepository
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/jogadores")
data class JogadorController(var repositoryJogador: JogadorRepository){


    // Get para buscar todos os jogadores cadastrados
    @GetMapping()
    fun findAllJogadores(): ResponseEntity<List<Jogador?>> {
        val jogadores: List<Jogador?> = repositoryJogador.findAll();

        if (!jogadores.isEmpty()){
            return ResponseEntity.status(200).body(jogadores);
        }

        return ResponseEntity.status(204).build();
    }


    // Get para buscar um jogador por id
    @GetMapping("/{id}")
    fun findJogadorById(@PathVariable("id") id:Long): ResponseEntity<Jogador> {
        return repositoryJogador.findById(id)
            .map { record -> ResponseEntity.ok().body(record) }
            .orElse(ResponseEntity.notFound().build())
    }



    // Get para fazer a busca de jogadores apenas de um usuario especifico
    // Por id do usuario
    @GetMapping("/findByIdUsuario/{idUsuario}")
    fun findJogadorByIdUsuario(@PathVariable idUsuario: Long): ResponseEntity<List<Jogador?>> {
        val jogadores: List<Jogador?> = repositoryJogador.findAllByIdUsuario(idUsuario)

        if (!jogadores.isEmpty()) {
            return ResponseEntity.status(200).body(jogadores)
        }

        return ResponseEntity.status(404).build()

    }



    // POST para cadastrar um Jogador
    @PostMapping("/cadastrar")
    fun cadastrarJogador(@RequestBody jogador: CreateRequestJogadorDTO): ResponseEntity<Jogador> {
        val createdJogador = repositoryJogador.save(Jogador(
            nomeJogador = jogador.nomeJogador,
            idadeJogador = jogador.idadeJogador,
            nacionalidadeJogador = jogador.nacionalidadeJogador,
            clubeJogador = jogador.clubeJogador,
            posicaoJogador = jogador.posicaoJogador,
            overallJogador = jogador.overallJogador,
            valorJogador = jogador.valorJogador,
            fotoJogador = jogador.fotoJogador
        ));

        return ResponseEntity.status(201).body(createdJogador);
    }



    // Delete para excluir um jogador existente
    @DeleteMapping("/{id}")
    fun deleteJogadorById(@PathVariable id: Long): ResponseEntity<Jogador>{

        if (repositoryJogador.existsById(id)) {
            repositoryJogador.deleteById(id);

            return ResponseEntity.status(200).build();
        }

        return ResponseEntity.status(204).build();
    }


    // Patch para alterar o id do usuario  que existe no jogador (Para efeturar a compra do jogador)
    // Associando o id do usuario ao jogador
    @PatchMapping("/update-idusuario/{idJogador}")
    fun updateIdUsuario(@PathVariable idJogador: Long, @RequestBody jogador: UpdateRequestIdUsuarioInJogadorDTO):
            ResponseEntity<Usuario>{

        if (repositoryJogador.existsById(idJogador)) {
            repositoryJogador.updateIdUsuario(idJogador, jogador.idUsuario)

            return ResponseEntity.status(200).build();
        }

        return ResponseEntity.status(404).build();
    }


}