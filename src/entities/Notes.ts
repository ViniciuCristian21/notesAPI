
export class Notes {
    public readonly id: string;

    public description: string;
    public date?: Date;

    constructor(props: Omit<Notes, 'id'>, id?: string) {
        Object.assign(this, props)
    }
}