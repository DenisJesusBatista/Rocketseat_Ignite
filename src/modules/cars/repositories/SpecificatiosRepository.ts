import { ISpecificatiosRepository, ICreateSpecificationDTO } from "./ISpecificatiosRepository";



class SpecificatiosRepository implements ISpecificatiosRepository {
    create({ description, name }: ICreateSpecificationDTO): void {
        throw new Error("Method not implemented.");
    }
}