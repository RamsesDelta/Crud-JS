/*
import { init } from './js/usuarios-page'
init()
*/

import * as CRUD from './js/crud'
/*
CRUD.getUsuario(1).then(console.log)

CRUD.crearUsuario({
    name: 'Fernando',
    job: 'carpitero'
}).then(console.log)

CRUD.actulizarUsuario(1, {
    name: 'Meliza',
    job: 'chef'
}).then(console.log)
*/

CRUD.borrarUsuario(1).then(console.log)