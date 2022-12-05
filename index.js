import express from "express";
import { sequelize } from "./database/database.js";
import projectsRoutes from "./routes/projects.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

// import './models/Projects.js';
// import './models/Task.js';

const app = express();
// Middlewares
// Este middleware permite obtener los datos de la aplicacion cliente en formato json
app.use(express.json());

app.use(projectsRoutes);
app.use(taskRoutes);

async function main() {
    try {
        // await sequelize.sync({force: false});
        console.log("conexion exitosa")
        const port = 3001;
        app.listen(port, function () {
            console.log("Servidor en puerto ", port);
        });
    } catch (error) {
        console.error('Error de conexion en bd', error);
    }
}

main();