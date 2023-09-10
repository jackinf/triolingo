import { useState } from 'react';
import styles from './AudioExercise.module.css';

const questions = [
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
    // Add more questions here
];

export default function AudioExercise() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedWords, setSelectedWords] = useState<Array<string>>([]);
    const [score, setScore] = useState(0);

    const speak = (text: string) => {
        const speech = new SpeechSynthesisUtterance();
        speech.lang = "nl-NL";
        speech.text = text;
        speech.rate = 0.5;
        window.speechSynthesis.speak(speech);
    };

    const handleWordClick = (word: string) => {
        setSelectedWords([...selectedWords, word]);
    };

    const handleSubmit = () => {
        if (JSON.stringify(selectedWords) === JSON.stringify(questions[currentIndex].en)) {
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
            <button onClick={() => speak(questions[currentIndex].nl)}>Play Sentence</button>
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
