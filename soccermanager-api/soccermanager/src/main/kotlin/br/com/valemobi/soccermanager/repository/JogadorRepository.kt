package br.com.valemobi.soccermanager.repository

import br.com.valemobi.soccermanager.domain.Jogador
import br.com.valemobi.soccermanager.domain.Usuario
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import java.util.*
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


    @Modifying
    @Transactional
    @Query(value =
    """
        UPDATE public.jogador
        SET nome_jogador = :nomeJogador, idade_jogador = :idadeJogador, nacionalidade_jogador = :nacionalidadeJogador, clube_jogador = :clubeJogador, posicao_jogador = :posicaoJogador, overall_jogador = :overallJogador, valor_jogador = :valorJogador, foto_jogador = :fotoJogador
        WHERE id = :id
        """
        , nativeQuery = true
    )
    fun updateJogador(id: Long, nomeJogador: String,
                         idadeJogador: Integer,
                         nacionalidadeJogador: String,
                         clubeJogador: String,
                         posicaoJogador: String,
                         overallJogador: Integer,
                         valorJogador: Double,
                         fotoJogador: String?);

}