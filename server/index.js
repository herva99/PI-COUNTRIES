const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
//aqui continuamos con nuestra conexion con sequelize
//que hace "force:true"? cada vez que guardemos un cambio se resetea la DB y aparecen los cambios
//en false no realiza los cambios hasta que vuelva a reiniciarse la DB-- ver más en sequelize.org
conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
