import {FormEvent, useState} from 'react';
import styles from './Exersize.module.css';
import useSWR from 'swr';
import {Question} from "@/interfaces";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Exersize() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [score, setScore] = useState(0);

    const { data: questions, error, isLoading } = useSWR<Question[]>('/api/questions', fetcher)

    if (error) return <div>Failed to load</div>
    if (isLoading) return <div>Loading...</div>
    if (!questions) return null

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (userInput.toLowerCase() === questions[currentIndex].nl) {
            setScore(score + 1);
        }

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setUserInput('');
        } else {
            alert(`Game over! Your score is ${score + 1}`);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Translate the word: {questions[currentIndex].en}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
