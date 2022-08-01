import { CreateNoteUseCase } from './CreateNoteUseCase';
import { Request, Response } from 'express';

export class CreateNotesController {
    constructor(
        private createNoteUseCase: CreateNoteUseCase,
    ) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { description } = req.body;

        try {
            const notes = await this.createNoteUseCase.execute({
                description
            })

            return res.status(201).json(notes)
        } catch (err) {
            return res.status(400).json({
                message: err.message || "Unexpected error."
            })
        }
    }
}