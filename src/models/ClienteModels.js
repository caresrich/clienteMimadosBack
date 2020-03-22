import Sequelize from 'sequelize';
import {db} from '../database/database';

import Venta from './VentaModels';

const Cliente=db.define('clientes',
    {
        idCliente:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre:{
            type:Sequelize.TEXT
        },
        apellidoP:{
            type:Sequelize.TEXT
        },
        apellidoM:{
            type:Sequelize.TEXT
        },
        estadoCli:{
            type:Sequelize.BOOLEAN
        },
        fechaRegCli:{
            type:Sequelize.DATE
        }
    },
    {
        timestamps:false
    }
);

Cliente.hasMany(Venta,{foreignKey:'idCliente'});
Venta.belongsTo(Cliente,{foreignKey:'idCliente'});

export default Cliente;