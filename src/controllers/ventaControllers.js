import Venta from '../models/VentaModels';
import Cliente from '../models/ClienteModels';


export async function createVenta(req, res) {
    let { idCliente } = req.body;
    console.log(idCliente);

    //es una forma de validar que no venga vacio el idCliente
    if (idCliente == "") {
        idCliente = null
    }
    try {
        let v = await Venta.create({
            idCliente: idCliente,
            montoCancelado:0,
            estadoVen: false,
            fechaRegVen: new Date()
        },
            {
                fields: ['idCliente','montoCancelado','estadoVen', 'fechaRegVen']
            });
        if (v) {

            res.json({
                message: "Server: Venta Creada",
                //enviando exito para detectar en el frontend que la venta fue exitosa o no fue exitosa
                exito:true
            })
        }
    }
    catch (err) {
        console.log(err);
        
        res.json({
            message: 'Server: Error al realizar la Venta',
            //enviando exito para detectar en el frontend que la venta fue exitosa o no fue exitosa
            exito:false
        });
    }
};

export async function getUltimaVenta(req, res) {
    let { id } = req.params;
    try {
        let v = await Venta.findAll({

            where: {
                idCliente: id
            },
            include: [Cliente]

        });
        if (v) {
            return res.json(
                v[v.length - 1]
            );
        }
    }
    catch (err) {
        res.json({
            message: "Server: Error al Obtener el Ultimo Registro"
        });
    };
};

//agrega el monto de precio a una venta que ya fue creada anteriormente
export async function updateMontoCancel(req,res)
{
    let {id}=req.params;
    let {montoCancelado}=req.body;
    console.log(montoCancelado);
    
    try
    {
        let v=await Venta.findOne({
            where:{
                idVenta:id
            }
        });
        if(v)
        {
            v.update({
                montoCancelado:montoCancelado
            });
            return res.json({
                message:"Server: Monto Cancelado Añadido",
                exito:true
            });
        }
    }
    catch(err)
    {
        console.log(err);
        
        return res.json({
            message:"Server: Error al añadir el monto cancelado",
            exito:false

        })
    }
    
};

export async function getAllVentas(req, res) {
    try {

        const allVentas = await Venta.findAll(
            {
                include: [Cliente]
            });
        if (allVentas) {
            return res.json(allVentas);
        }

    }
    catch (err) {
        res.json(
            {
                message: 'error al obtener todos los ventas',
                data: err
            }
        );
    };

};


export async function getSaldosByClient(req, res) {
    const { id } = req.params;
    const ventas = await Venta.findAll(
        {
            //attributes:['idVenta','idCliente','estadoVen','fechaRegVen'],
            where: {
                idCliente: id
            }
        }
    );
    for (let v of ventas) {
        console.log(v.idVenta);

    }
    res.json(ventas);
};

export async function updateStateVenta(req,res)
{
    const {id}=req.params;
    const {estadoVen}=req.body;
    try {
        const v = await Venta.findOne(
            {
                where: {
                    idVenta: id
                }
            }
        );
        if (v) {
            v.update({
                estadoVen:estadoVen
            });
            return res.json(
                {
                    message: 'Server: Estado de Venta Actualizado'
                }
            );
        };

    }
    catch (error) {
        res.json({
            message: 'ocurrio un error al actualizar el Estado',
            err: error
        });
    };
};


export async function addMonto(req,res)
{
    const {id}=req.params;
    const {montoCancelado}=req.body;

    try{

        const v = await Venta.findOne({
            where:{
                idVenta:id
            }
        });

        if(v)
        {
           
            await v.update({
                montoCancelado:parseFloat(montoCancelado)+parseFloat(v.montoCancelado)
            });
            return res.json({
                message:'Server: Monto agregado correctamente',
                objeto:v
            });
            
        }

    }
    catch(error)
    {
        return res.json({
            message:'Server: No se pudo añadir el monto',
            err:error
        })
    }
}

export async function getIdCliente(req,res)
{
    const {id}=req.params;
    console.log(id);
    
    try{
        const idClien=await Venta.findByPk(id,{ attributes: ['idCliente'] });
            if(idClien)
            {
                return res.json({
                    message:'Server: Id de cliente obtenido con exito',
                    objeto:idClien,
                    exito:true
                });
            }
    }
    catch(error)
    {
        return res.json({
            message:'Server:Error al obtener el id del Cliente',
            err:error
        })
    }
}