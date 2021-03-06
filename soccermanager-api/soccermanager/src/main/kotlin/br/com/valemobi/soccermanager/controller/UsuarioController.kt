package br.com.valemobi.soccermanager.controller

import br.com.valemobi.soccermanager.domain.Usuario
import br.com.valemobi.soccermanager.dto.CreateRequestLoginUsuarioDTO
import br.com.valemobi.soccermanager.dto.CreateRequestUsuarioDTO
import br.com.valemobi.soccermanager.dto.UpdateRequestUsuarioDTO
import br.com.valemobi.soccermanager.dto.UpdateRequestWalletUsuarioDTO
import br.com.valemobi.soccermanager.repository.UsuarioRepository
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/usuarios")
@CrossOrigin("*")
class UsuarioController (var repositoryUsuario: UsuarioRepository ) {

    val random = Random();

    // Get para buscar todos os usuarios cadastrados
    @GetMapping()
    fun findAll(): ResponseEntity<List<Usuario?>> {
        val usuarios: List<Usuario?> = repositoryUsuario.findAll();

        if (!usuarios.isEmpty()){
            return ResponseEntity.status(200).body(usuarios);
        }

        return ResponseEntity.status(204).build();
    }


    // Get para buscar um usuario por id
    @GetMapping("/{id}")
    fun findById(@PathVariable("id") id:Long): ResponseEntity<Usuario> {
        return repositoryUsuario.findById(id)
            .map { record -> ResponseEntity.ok().body(record) }
            .orElse(ResponseEntity.notFound().build())
    }


    // POST para cadastrar um usuario
    @PostMapping("/cadastrar")
    fun cadastrarUsuario(@RequestBody user: CreateRequestUsuarioDTO): ResponseEntity<Usuario> {
        val createdUser = repositoryUsuario.save(Usuario(
            username = user.username,
            email = user.email,
            password = user.password
        ));

        return ResponseEntity.status(201).body(createdUser);
    }


    // Post para efetuar o login do usuario
    @PostMapping("/logar")
    fun logar(@RequestBody login: CreateRequestLoginUsuarioDTO): ResponseEntity<Usuario>{
        val user: Usuario? = repositoryUsuario.findByUsernameAndPassword(login.username, login.password);

        if (user != null) {
            return ResponseEntity.status(200).body(user);
        }

        return ResponseEntity.status(401).build();
    }



    // Delete para excluir um usuario existente
    @DeleteMapping("/{id}")
    fun deleteById(@PathVariable id: Long): ResponseEntity<Usuario>{

        if (repositoryUsuario.existsById(id)) {
            repositoryUsuario.deleteById(id);

            return ResponseEntity.status(200).build();
        }

        return ResponseEntity.status(204).build();
    }


    // Update para atualizar as informa????es de um usuario
    @PutMapping("/update")
    fun updateUsuario(@RequestBody dadosUsuario: UpdateRequestUsuarioDTO): ResponseEntity<Usuario> {

        if (repositoryUsuario.existsById(dadosUsuario.id)) {

            repositoryUsuario.update(dadosUsuario.id,
                                     dadosUsuario.username,
                                     dadosUsuario.email,
                                     dadosUsuario.password,
                                     dadosUsuario.wallet,
                                     dadosUsuario.nomeClube,
                                     dadosUsuario.fotoPerfil)

            return ResponseEntity.status(200).build();
        }

        return ResponseEntity.status(404).build();
    }


    // Patch para alterar o saldo da carteira por id
    @PatchMapping("/updateWallet")
    fun updateSaldo(@RequestBody user: UpdateRequestWalletUsuarioDTO):
            ResponseEntity<Usuario>{

        if (repositoryUsuario.existsById(user.id)) {
            repositoryUsuario.updateWallet(user.id, user.wallet)

            return ResponseEntity.status(200).build();
        }

        return ResponseEntity.status(404).build();
    }


}