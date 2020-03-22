import Sequelize from 'sequelize';
import { db } from '../database/database';
import VentaPrenda from './ventaPrendaModels';

const Venta = db.define('ventas',
    {
        idVenta: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        idCliente: {
            type: Sequelize.INTEGER
        },
        montoCancelado:
        {
            type:Sequelize.DECIMAL
        },
        estadoVen: {
            type: Sequelize.BOOLEAN
        },
        fechaRegVen: {
            type: Sequelize.DATE
        }
    },
    {
        timestamps: false
    }
);

Venta.hasMany(VentaPrenda,{foreignKey:'idVenta'});
VentaPrenda.belongsTo(Venta,{foreignKey:'idVenta'});

export default Venta;