import { ISpecificatiosRepository } from "../repositories/ISpecificatiosRepository";


interface IRequest {
    name: string;
    description: string;
}
class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificatiosRepository) {


    }
    execute({ name, description }: IRequest): void {

        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error(`Specification ${name} already exists`);
        }

        this.specificationsRepository.create({
            description,
            name
        });
    }
}

export { CreateSpecificationService } 