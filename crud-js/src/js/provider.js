const url = 'https://api.chucknorris.io/jokes/random'
const urlUsuarios = 'https://reqres.in/api/users?page=2'

/*
fetch(url).then(resp => {
    resp.json().then(({ id, value }) => {
        console.log(id)
        console.log(value)
    })
})*/
/*
fetch(url)
    .then(resp => resp.json)
    .then(({ id, value }) => {
        console.log(id, value)
    })*/

const obtenerChiste = async () => {
    try {
        const resp = await fetch(url)
        if (!resp.ok) throw 'No se pudo realizar la peticion'
        const { icon_url, id, value } = await resp.json()
        return { icon_url, id, value }
    } catch (err) {
        throw err;
    }
}


const obtenerUsuarios = async () => {
    const resp = await fetch(urlUsuarios)
    const { data: usuarios } = await resp.json()
    return usuarios
}


export {
    obtenerChiste,
    obtenerUsuarios
}