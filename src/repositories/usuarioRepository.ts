import Usuario from "../models/usuario.js";

const usuarios: Usuario[] = [];



function getUsuarios(): Promise<Usuario[]> {
    return new Promise((resolve, reject) => {
        return resolve(usuarios);

    })
}


export default getUsuarios;