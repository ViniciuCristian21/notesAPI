import { GetAllNoteUseCase } from './GetAllNoteUseCase';
import { Request, Response } from 'express';

export class GetAllNoteController {
    constructor(
        private getAllNoteUseCase: GetAllNoteUseCase,
    ) {}

    async handle(req: Request, res: Response): Promise<Response> {
        
        try {
            const notes = await this.getAllNoteUseCase.execute()

            return res.status(201).json(notes)
        } catch (err) {
            return res.status(400).json({
                message: err.message || "Unexpected error."
            })
        }
    }
}