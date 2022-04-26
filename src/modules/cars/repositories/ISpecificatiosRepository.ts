
interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificatiosRepository {
    create({ description, name }: ICreateSpecificationDTO): void;
}

export { ISpecificatiosRepository, ICreateSpecificationDTO }