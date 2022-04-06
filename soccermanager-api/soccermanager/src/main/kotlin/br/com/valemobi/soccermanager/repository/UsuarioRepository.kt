package br.com.valemobi.soccermanager.repository

import br.com.valemobi.soccermanager.domain.Usuario
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import javax.transaction.Transactional

@Repository
interface UsuarioRepository : JpaRepository<Usuario, Long> {
    fun findByUsernameAndPassword(username: String?, password: String?): Usuario?

    @Modifying
    @Transactional
    @Query(value =
    """
        UPDATE public.usuario
        SET username = :username, email = :email, password = :password, wallet = :wallet, nome_clube = :nomeClube, foto_perfil = :fotoPerfil
        WHERE id = :id
        """
        , nativeQuery = true
    )
    fun update(id: Long, username: String, email: String, password: String, wallet: Double, nomeClube: String?, fotoPerfil: String?);


    @Modifying
    @Transactional
    @Query(value =
    """
        UPDATE public.usuario
        SET wallet = :wallet
        WHERE id = :id
        """
        , nativeQuery = true
    )
    fun updateWallet(id: Long, wallet: Double);
}