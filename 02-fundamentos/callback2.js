let empleados = [
    { id: 1, nombre: 'Shandel' },
    { id: 2, nombre: 'Fabiola' },
    { id: 3, nombre: 'Juan' }
]

let salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 2000 }
]

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => {
        return empleado.id === id;
    })

    if (!empleadoDB) {
        callback(`No existe un empleado con ID ${ id }`);
    } else {
        callback(null, empleadoDB)
    }
}

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => {
        return salario.id === empleado.id;
    })

    if (!salarioDB) {
        callback(`No se encontro un salario para el empleado ${ empleado.nombre }`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        })
    }
}

getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, callback) => {
        if (err) {
            return console.log(err);
        }

        console.log(`El salario de ${ callback.nombre } es de ${ callback.salario }$`);
    })
});