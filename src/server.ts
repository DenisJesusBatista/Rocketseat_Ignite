import express, { request } from 'express';
// import { createCourse } from './routes';
import { categoriesRoutes } from './routes/categories.routes';
import { specificationsRoutes } from './routes/specifications.routes';

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes)
app.use("/specifications", specificationsRoutes);

// app.get("/", createCourse);

app.post("/courses", (request, response) => {
    const { name } = request.body;

    return response.json({ name });
})
app.listen(3333, () => console.log("Server is running!"));