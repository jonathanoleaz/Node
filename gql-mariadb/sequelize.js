var Sequelize=require('sequelize');
const Conn = new Sequelize("mysql://root:root@localhost:3306/testing", {// dbdielect://user:password@host:port/database
    define: {
      timestamps: false // true by default. false because bydefault sequelize adds createdAt, modifiedAt columns with timestamps.if you want those columns make ths true.
    }

  });

var medicamentos= Conn.import(__dirname+"/models/medicamentos.js");

Conn.sync({force:false}).then(()=>{ 
    /* force:false para no volver a crear la tabla si ya existe, quita el DROP TABLE IF EXISTS */
    // now we cann do all db operations on customers table.
    //Ex:- lets read all data
    medicamentos.find().then(medicamentos=>{
        console.log("customers are:-",JSON.stringify(medicamentos));
    });
    console.log("sync is completed")
});