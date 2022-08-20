export interface IProcedure {
    term: string;
    active: boolean;
    languageCode: string;
    module: string;
    concept: {
        conceptId: string;
        active: boolean;
        definitionStatus: string;
        moduleId: string;
        fsn: {
        term: string;
        lang: string;
        },
        pt: {
        term: string;
        lang: string;
        },
        id: string;
    }
}
