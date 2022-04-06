import { Request, Response } from 'express'
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {

    CreateCourseService.execute({
        name: "NodeJS",
        educator: "Denis",
        duration: 10
    });

    CreateCourseService.execute({
        name: "ReactJs",
        educator: "Denis",
    });

    return response.send();

}