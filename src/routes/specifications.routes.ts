import { Router } from 'express';
import { SpecificatiosRepository } from '../modules/cars/repositories/SpecificatiosRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();

const specificationsRepository = new SpecificatiosRepository();

specificationsRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const createSpecificaonService = new CreateSpecificationService(specificationsRepository);

    createSpecificaonService.execute({ name, description });

    return response.status(201).send();
});


export { specificationsRoutes }