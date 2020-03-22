//importamos Cliente , la cual permite operaciones de Sequelize
import Cliente from '../models/ClienteModels';
import Sequelize from 'sequelize';

export async function getAllClient(req, res) {
    try {
        let clientes = await Cliente.findAll();
        if (clientes) {
            clientes.reverse();
            return res.json(clientes);
        };
    }
    catch (error) {
        res.json({
            message: 'error al obtener los clientes'
        });
    };

};

//ejmeplo de registro de un cliente

export async function createClient(req, res) {
    let { nombre, apellidoP, apellidoM } = req.body;


    //este codigo es una forma de validar el nombre,ya que react envia los datos siempre como ""
    //los inputs y al convertir en null no se acpta el registro a la DB
    if (nombre == "") {
        nombre = null;
    };
    try {
        let c = await Cliente.create({
            nombre: nombre,
            apellidoP: apellidoP,
            apellidoM: apellidoM,
            estadoCli: true,
            fechaRegCli: new Date()
        }, {
            fields: ['nombre', 'apellidoP', 'apellidoM', 'estadoCli', 'fechaRegCli']
        });
        if (c) {
            return res.json({
                id:c.idCliente,
                message: 'Cliente Registrado'
            });
        }

    }
    catch (e) {
        res.json({
            message: 'ERROR..! No se pudo registrar el Cliente',
            err: e
        })

    }

};

export async function getOneCliente(req, res) {
    try {
        //la siguiente linea de codigo comentado tambien obtiene el id, pero es mas veloz el restructuring
        //const id = req.params.id;
        const { id } = req.params;  //restructuring
        let cliente = await Cliente.findOne({
            where: {
                idCliente: id
            }
        });
        if (cliente) {
            return res.json(cliente);
        };
    }
    catch (error) {
        res.json({
            message: 'error al obtener el cliente',
            err: error
        });
    };

};

export async function deleteClient(req, res) {
    const { id } = req.params;
    try {
        const countDelete = await Cliente.destroy(
            {
                where: {
                    idCliente: id
                }
            }
        );
        res.json({
            message: 'Server: Cliente Eliminado',
            count: countDelete
        });
    }
    catch (error) {
        res.json({
            message: 'Server: Error al Eliminar el Cliente'
        });
    };
};

export async function updateCliente(req, res) {

    const { id } = req.params;
    const { nombre, apellidoP, apellidoM, estado } = req.body;
    console.log('este es el nombre' + nombre);


    try {
        const c = await Cliente.findOne(
            {
                where: {
                    idCliente: id
                }
            }
        );
        if (c) {
            c.update({
                nombre: nombre,
                apellidoP: apellidoP,
                apellidoM: apellidoM,
                estado: estado
            });
            return res.json(
                {
                    message: 'Server: Cliente Actualizado'
                }
            );
        };

    }
    catch (error) {
        res.json({
            message: 'ocurrio un error al actualizar',
            err: error
        });
    };
};

export async function searchClient(req, res) {
    //sequelize have a method whith name Op permite to operations of consults
    const op=Sequelize.Op;
    const c=req.body.nombre;
    console.log(c);
    
    try {
        let client =await Cliente.findAll(
            {
                where: {
                    [op.or]:{
                    nombre: {
                        [op.like]: `%${c}%`
                    },
                    idCliente:
                    {
                        [op.like]: `%${c}%`
                    },
                    apellidoP:
                    {
                        [op.like]: `%${c}%`
                    }
                }
                }
            }
        );
        if (client) {
            client.reverse();
            return res.json(client);
        }
    }
    catch (err) {
        return res.json({
            message:'Server: Error al Obtener Data',
            error:c
        });
    }
};

