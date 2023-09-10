import { useState, useEffect } from 'react';
import styles from './speechExersizeGoogleTts.module.css';

export default function SpeechExercise() {
    const [isListening, setIsListening] = useState(false);
    const [capturedText, setCapturedText] = useState('');
    const [score, setScore] = useState(0);

    const questions = [
        { nl: 'De kat is zwart', en: 'The cat is black' },
        { nl: 'Ik eet een appel', en: 'I eat an apple' },
        // Add more questions
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isListening) {
            // @ts-ignore
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.lang = 'nl-NL';

            recognition.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript.trim();
                setCapturedText(transcript);

                if (transcript === questions[currentIndex].nl) {
                    setScore(score + 1);
                }
            };

            recognition.onend = () => {
                setIsListening(false);
            };

            recognition.start();
        }
    }, [isListening]);

    const handleNextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setCapturedText('');
        } else {
            alert(`Game over! Your score is ${score}`);
        }
    };

    return (
        <div className={styles.container}>
            <h1>{questions[currentIndex].en}</h1>
            <button onClick={() => setIsListening(true)}>Start Speaking</button>
            <p>Captured Text: {capturedText}</p>
            <button onClick={handleNextQuestion}>Next Question</button>
        </div>
    );
}
