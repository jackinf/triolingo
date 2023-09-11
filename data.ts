import {Sentence} from "@/interfaces";

export const questions = [
    { en: 'apple', nl: 'appel' },
    { en: 'dog', nl: 'hond' },
    { en: 'cat', nl: 'kat' },
    { en: 'book', nl: 'boek' },
    { en: 'tree', nl: 'boom' },
    { en: 'car', nl: 'auto' },
    { en: 'house', nl: 'huis' },
    { en: 'food', nl: 'eten' },
    { en: 'water', nl: 'water' },
    { en: 'bird', nl: 'vogel' },
];

export const sentences: Sentence[] = [
    {
        nl: 'De kat is zwart',
        en: ['The', 'cat', 'is', 'black'],
        options: ['The', 'cat', 'black', 'is']
    },
    {
        nl: 'Ik eet een appel',
        en: ['I', 'eat', 'an', 'apple'],
        options: ['I', 'eat', 'apple', 'an']
    },
]