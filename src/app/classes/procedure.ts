import { IProcedure } from '../interfaces/procedure';

export class Procedure {
    id: string | null = null;
    active: boolean | null = null;
    name: string | null = null;

    constructor(data: IProcedure) {
        this.init(data);
    }

    private init(data: IProcedure) {
        if (!data) {
            return;
        }

        this.id = data.concept.id;
        this.active = data.concept.active;
        this.name = data.concept.fsn.term;
    }
}
