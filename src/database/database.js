import Sequelize from 'sequelize';

export const db=new Sequelize(
    'DBMimados',
    'root',
    '1234',
    {
    host:'localhost',
    dialect: 'mariadb',
    dialectOptions: {connectTimeout: 1000} // mariadb connector option
    }
    );


export const pruebaConnections=db.authenticate()
    .then(()=>console.log('conected'))
    .catch(err=>console.log('not connected'+ err))