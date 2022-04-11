export default interface Usuario {
    id: number,
    username: string,
    email: string,
    password: string,
    wallet: number,
    nomeClube?: string,
    fotoPerfil?: string
}