import { IDeleteNoteRequestDTO } from './DeleteNoteDTO';
import { DeleteNoteUseCase } from './DeleteNoteUseCase';
import { Request, Response } from 'express';


export class DeleteNoteController {
    constructor(
        private deleteNoteUseCase: DeleteNoteUseCase,
    ) {}
    async handle(req: Request, res: Response): Promise<Response> {
        const { id }: IDeleteNoteRequestDTO = req.body;

        try {
            await this.deleteNoteUseCase.execute({
                id
            })

            return res.status(201).send("User deleted, successful")
        } catch (err) {
            return res.status(400).json({
                message: err.message || "Unexpected error."
            })
        }
    }
}