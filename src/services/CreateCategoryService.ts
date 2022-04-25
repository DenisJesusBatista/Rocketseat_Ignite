import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

/**
 * [] - Definir o tipo de retorno
 * [] - Alterar o retorno de error
 * [] - Acessar o repositorio 
 */

class CreateCategoryService {
    // Acessar o repositorio

    constructor(private categoriesRepository: CategoriesRepository) { }

    // Definir o tipo de retorno - void

    execute({ description, name }: IRequest): void {


        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        //Alterar o retorno de error
        if (categoryAlreadyExists) {
            throw new Error("Category already exists!")
        }

        this.categoriesRepository.create({ name, description })

    };
};


export { CreateCategoryService }