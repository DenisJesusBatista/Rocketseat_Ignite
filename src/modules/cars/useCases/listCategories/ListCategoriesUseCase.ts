import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


class ListCategoriesUseCase {
    // Acessar o repositorio

    constructor(private categoriesRepository: ICategoriesRepository) { }

    // Definir o tipo de retorno - void

    execute(): Category[] {
        const categories = this.categoriesRepository.list();

        return categories;

    };
}

export { ListCategoriesUseCase }