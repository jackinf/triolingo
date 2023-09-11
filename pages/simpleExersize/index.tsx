import {FormEvent, MouseEvent, useEffect, useRef, useState} from 'react';
import styles from './SimpleExersize.module.css';
import useSWR from 'swr';
import {Question} from "@/interfaces";
import { animated, useTransition } from '@react-spring/web'
import Confetti from 'react-confetti';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function SimpleExersize() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [score, setScore] = useState(0);
    const inputRef = useRef<any | null>(null);
    const [gameInProgress, setGameInProgress] = useState(true);

    const { data: questions, error, isLoading } = useSWR<Question[]>('/api/questions', fetcher)

    const transitions = useTransition(currentIndex, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    });

    useEffect(() => {
        if (!gameInProgress && !inputRef) {
            return;
        }

        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }, 500);
    }, [gameInProgress, currentIndex]);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!questions) return null;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (userInput.toLowerCase() === questions[currentIndex].nl.toLowerCase()) {
            setScore(score + 1);
        }

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setGameInProgress(false);
        }

        setUserInput('');
    };

    const handleReset = (e: MouseEvent) => {
        setCurrentIndex(0);
        setGameInProgress(true);
        setScore(0);
    }

    return (
        <div className={styles.container}>
            {!gameInProgress && <Confetti />}
            {gameInProgress && transitions((transitionStyles, index) => (
                <animated.div style={transitionStyles} className={styles.wrapper} key={index}>
                        <>
                            <h1 className={styles.title}>Translate the word: {questions[currentIndex].en}</h1>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <input
                                    ref={inputRef}
                                    className={styles.input}
                                    type="text"
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                />
                                <button className={styles.button} type="submit">Submit</button>
                            </form>
                        </>
                </animated.div>
            ))}
            {!gameInProgress && (
                <div className={`${styles.scoreboard} ${styles.wrapper}`}>
                    <div>
                        Congratulations! Your final score is: {score}
                    </div>
                    <div>
                        <button onClick={handleReset} className={styles.button} type="submit">Reset</button>
                    </div>
                </div>
            )}
        </div>
    );
}
