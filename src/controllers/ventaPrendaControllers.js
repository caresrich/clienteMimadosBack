import VentaPrenda from '../models/ventaPrendaModels';
import Venta from '../models/VentaModels';
import Cliente from '../models/ClienteModels';


export async function createNewVenta(req, res) {

    const {id}=req.params;
    const {montoCancelado}=req.body.montoCancelado;
    console.log("eeeeeeeeeeeeeeste es el monto cancelado" + montoCancelado);
    
    let v;
    //es una forma de validar que no venga vacio el idCliente
    if (id == "") {
        id = null
    }
    try {
            v = await Venta.create({
            idCliente: id,
            montoCancelado:montoCancelado,
            estadoVen: true,
            fechaRegVen: new Date()
        },
            {
                fields: ['idCliente','montoCancelado','estadoVen', 'fechaRegVen']
            })

            if (v) {
                try {
        
                    for (let i of req.body.ventaPrenda) {
                        let newVenta = await VentaPrenda.create({
                            idVenta: v.idVenta,
                            idPrenda: i.idPrenda,
                            detalle: i.detalle,
                            cantidad: i.cantidad,
                            precio: i.precio,
                            estadoVenPre: true,
                            fechaRegVenPre: new Date()
                        },
                            {
                                fields: ['idVenta', 'idPrenda', 'detalle', 'cantidad', 'precio', 'estadoVenPre', 'fechaRegVenPre']
                            });
                    }
            
                    return res.json({
                        message: "Server: Prendas agregadas a la venta correctamente",
                        exito: true
                    });
                }
                catch (err) {
                    return res.json({
                        message: "Server: Error al agregar la prendas",
                        error:err
                    });
                }
            }

           
    } 

    catch (err) {
       res.json({
            message: 'Server: Error al crear la Venta',
            //enviando exito para detectar en el frontend que la venta fue exitosa o no fue exitosa
            exito:false
        });
    }

};

//Obteniendo las ventas que se realizo a un determinado cliente

export async function getVentasForClient(req, res) {

    const {id}=req.params

    try{
        let ven=await Cliente.findAll({
            where:{idCliente:id},
            include:{
                model:Venta,
                include:VentaPrenda
            }
        });
        if(ven)
        {
            ven.reverse();
            res.json(ven);
        }
        
    }
    catch(err)
    {
        res.json({
            error:err,
            message:'Server: Error al Obtener los Detalles de la Venta'
        })
    }
    

    /*try {
        let c = await Cliente.findOne(
            {
                where: {
                    idCliente: 111
                }

            }
        );
        if (c) {
            let v = await Venta.findAll({
                where: {
                    idCliente: c.idCliente
                }

            });
            if (v) {
                let resultado = {};
                let resultadoFinal = [];
                for (let i of v) {
                    let vp = await VentaPrenda.findAll({
                        where: {
                            idVenta: i.idVenta
                        }
                    });

                    resultado = {
                        nombre:c.nombre,
                        apellidoP:c.apellidoP,
                        idVenta: i.idVenta,
                        montoCancelado: i.montoCancelado,
                        ventaPrendas: vp
                    }

                    resultadoFinal.push(resultado);

                }

                return res.json(resultadoFinal);
            }

        }
    }
    catch (err) {
        return res.json({
            error: err,
            message: 'Server:Error al Obtener las Ventas a un Usuario'
        })
    }*/
};