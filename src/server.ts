import express, { request } from 'express';
// import { createCourse } from './routes';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());

app.use(categoriesRoutes)

// app.get("/", createCourse);

app.post("/courses", (request, response) => {
    const { name } = request.body;

    return response.json({ name });
})
app.listen(3333, () => console.log("Server is running!"));