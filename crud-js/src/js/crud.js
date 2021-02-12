const url = 'https://reqres.in/api/users'

const getUsuario = async (id) => {
    const resp = await fetch(`${url}/${id}`)
    const { data } = await resp.json()
    return data
}

const crearUsuario = async (usuario) => {
    const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await resp.json()
}

const actulizarUsuario = async (id, usuario) => {
    const resp = await fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await resp.json()
}

const borrarUsuario = async (id) => {
    const resp = await fetch(`${url}/${id}`, {
        method: 'DELETE'
    })
    return (resp.ok) ? 'Borrado' : 'No se pudo eliminar'
}

export {
    getUsuario,
    crearUsuario,
    actulizarUsuario,
    borrarUsuario
}