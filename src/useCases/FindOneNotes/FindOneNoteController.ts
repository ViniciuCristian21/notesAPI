import { FindOneNoteUseCase } from './FindOneNoteUseCase';
import { Request, Response } from 'express';

export class FindOneNoteController {
    constructor(
        private findOneNoteUseCase: FindOneNoteUseCase,
    ) {}


    async handle(req: Request, res: Response): Promise<Response> {
        const id  = String(req.query.id);

        try {
            const notes = await this.findOneNoteUseCase.execute({
                id
            })

            return res.status(201).json(notes)
        } catch (err) {
            return res.status(400).json({
                message: err.message || "Unexpected error."
            })
        }
    }
}