import { useSpring, animated } from '@react-spring/web'
import {useState} from "react";

export default function MyAnimation() {
    const [x, setX] = useState(0);
    const [springs, api] = useSpring(() => ({
        from: { x: 0 },
    }));

    const handleClick = () => {
        setX(x + 100);
        api.start({
            from: {
                x: x,
            },
            to: {
                x: x + 100,
            },
        })
    };

    return (
        <animated.div
            onClick={handleClick}
            style={{
                width: 80,
                height: 80,
                background: '#ff6d6d',
                borderRadius: 8,
                ...springs,
            }}
        />
    )
}