package br.com.valemobi.soccermanager.controller

import br.com.valemobi.soccermanager.domain.Jogador
import br.com.valemobi.soccermanager.domain.Usuario
import br.com.valemobi.soccermanager.dto.*
import br.com.valemobi.soccermanager.repository.JogadorRepository
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/jogadores")
@CrossOrigin("*")
data class JogadorController(var repositoryJogador: JogadorRepository){


    // Get para buscar todos os jogadores cadastrados
    @GetMapping()
    fun findAll(): ResponseEntity<List<Jogador?>> {
        val jogadores: List<Jogador?> = repositoryJogador.findAll();

        if (!jogadores.isEmpty()){
            return ResponseEntity.status(200).body(jogadores);
        }

        return ResponseEntity.status(204).build();
    }


    // Get para buscar todos os jogadores disponiveis no mercado, sem um idUsuario preenchido
    @GetMapping("/mercado")
    fun findAllMercado(): ResponseEntity<List<Jogador?>>{
        val jogadores: List<Jogador?> = repositoryJogador.findAllByIdUsuarioIsNull();

        if (!jogadores.isEmpty()){
            return ResponseEntity.status(200).body(jogadores)
        }

        return ResponseEntity.status(204).build()
    }


    // Get para buscar um jogador por id
    @GetMapping("/{id}")
    fun findById(@PathVariable("id") id:Long): ResponseEntity<Jogador> {
        return repositoryJogador.findById(id)
            .map { record -> ResponseEntity.ok().body(record) }
            .orElse(ResponseEntity.notFound().build())
    }



    // Get para fazer a busca de jogadores apenas de um usuario especifico
    // Por id do usuario
    @GetMapping("/{idUsuario}/usuario")
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


    @PutMapping("/update")
    fun updateJogador(@RequestBody jogador : UpdateRequestJogadorDto): ResponseEntity<Jogador> {
        repositoryJogador.updateJogador(jogador.id,
                                         jogador.nomeJogador,
                                         jogador.idadeJogador,
                                         jogador.nacionalidadeJogador,
                                         jogador.clubeJogador,
                                         jogador.posicaoJogador,
                                         jogador.overallJogador,
                                         jogador.valorJogador,
                                         jogador.fotoJogador)

        return ResponseEntity.status(200).build();
    }


    // Delete para excluir um jogador existente
    @DeleteMapping("/{id}")
    fun deleteById(@PathVariable id: Long): ResponseEntity<Jogador>{

        if (repositoryJogador.existsById(id)) {
            repositoryJogador.deleteById(id);

            return ResponseEntity.status(200).build();
        }

        return ResponseEntity.status(204).build();
    }


    // Post para informar qual idUsuario esta comprando qual idJogador
    // alterando o idUsuario que existe no jogador (Para efeturar a compra do jogador)
    // Associando o idUsuario enviado no body ao jogador
    @PostMapping("/comprar")
    fun comprarJogador(@RequestBody comprarJogadorRequestDto: ComprarJogadorRequestDto): ResponseEntity<Jogador>{
        if (repositoryJogador.existsById(comprarJogadorRequestDto.idJogador)){
            repositoryJogador.updateIdUsuario(comprarJogadorRequestDto.idJogador, comprarJogadorRequestDto.idUsuario)

            return ResponseEntity.status(200).build()
        }
        return ResponseEntity.status(204).build()
    }



    // Post para informar qual idUsuario esta vendendo jogador por idJogador
    // alterando o idUsuario do jogador para null, efetuando a venda, fazendo ele voltar para o mercado
    @PostMapping("/vender")
    fun venderJogador(@RequestBody venderJogadorRequestDto: VenderJogadorRequestDto): ResponseEntity<Jogador>{
        if (repositoryJogador.existsById(venderJogadorRequestDto.idJogador)){
            repositoryJogador.removeIdUsuario(venderJogadorRequestDto.idJogador, venderJogadorRequestDto.idUsuario)

            return ResponseEntity.status(200).build();
        }
        return ResponseEntity.status(204).build();
    }

}
