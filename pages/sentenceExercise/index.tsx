import { useState } from 'react';
import styles from './SentenceExercise.module.css';

const questions = [
    {
        en: 'The cat is black',
        nl: ['De', 'kat', 'is', 'zwart'],
        options: ['De', 'Het', 'kat', 'zwart', 'groen', 'blauw', 'is', 'zijn', 'het']
    },
    {
        en: 'I eat an apple',
        nl: ['Ik', 'eet', 'een', 'appel'],
        options: ['Ik', 'Je', 'eet', 'appel', 'en', 'een']
    },
    // Add more questions here
];

export default function SentenceExercise() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [selectedWords, setSelectedWords] = useState<Array<string>>([]);
    const [score, setScore] = useState<number>(0);

    const handleWordClick = (word: string) => {
        setSelectedWords([...selectedWords, word]);
    };

    const handleSubmit = () => {
        if (JSON.stringify(selectedWords) === JSON.stringify(questions[currentIndex].nl)) {
            setScore(score + 1);
        }

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedWords([]);
        } else {
            alert(`Game over! Your score is ${score + 1}`);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Translate the sentence: {questions[currentIndex].en}</h1>
            <div className={styles.options}>
                {questions[currentIndex].options.map((word, index) => (
                    <button key={index} onClick={() => handleWordClick(word)}>
                        {word}
                    </button>
                ))}
            </div>
            <div className={styles.answer}>
                {selectedWords.join(' ')}
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
