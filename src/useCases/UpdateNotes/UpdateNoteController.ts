import { UpdateNoteUseCase } from './UpdateNoteUseCase';
import { Request, Response } from 'express';

export class UpdateNotesController {
    constructor(
        private updateNoteUseCase: UpdateNoteUseCase,
    ) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id, description } = req.body;

        try {
            const notes = await this.updateNoteUseCase.execute({
                id,
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