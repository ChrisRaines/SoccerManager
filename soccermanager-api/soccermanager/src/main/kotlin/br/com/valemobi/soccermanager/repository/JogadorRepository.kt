package br.com.valemobi.soccermanager.repository

import br.com.valemobi.soccermanager.domain.Jogador
import br.com.valemobi.soccermanager.domain.Usuario
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import javax.transaction.Transactional

@Repository
interface JogadorRepository: JpaRepository<Jogador, Long>{
    fun findAllByIdUsuario(idUsuario: Long): List<Jogador?>
    fun findAllByIdUsuarioIsNull(): List<Jogador>


    @Modifying
    @Transactional
    @Query(value =
    """
        UPDATE public.jogador
        SET id_usuario = :idUsuario
        WHERE id = :idJogador
        """
        , nativeQuery = true
    )
    fun updateIdUsuario(idJogador: Long, idUsuario: Long);


    @Modifying
    @Transactional
    @Query(value =
    """
        UPDATE public.jogador
        SET id_usuario = null
        WHERE id = :idJogador and
        id_usuario = :idUsuario
        """
        , nativeQuery = true
    )
    fun removeIdUsuario(idJogador: Long, idUsuario: Long);

}