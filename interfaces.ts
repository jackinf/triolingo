export interface Question {
    en: string;
    nl: string;
}

export interface Sentence {
    en: Array<string>;
    nl: string;
    options: Array<string>;
}