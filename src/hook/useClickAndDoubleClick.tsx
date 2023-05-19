import { useRef, useEffect, useState } from 'react';

interface UseClickAndDoubleClickProps {
    singleClickCallback?: (clickCount?: number) => void;
    doubleClickCallback?: (clickCount?: number) => void;
    delay?: number;
}

const useClickAndDoubleClick = ({singleClickCallback, doubleClickCallback, delay = 250}: UseClickAndDoubleClickProps) => {
    const [clickCount, setClickCount] = useState(0);
    const timer = useRef<NodeJS.Timeout>();

    const handleClick = () => {
        setClickCount((prev) => prev + 1);
    };

    useEffect(() => {
        if (clickCount === 1) {
            timer.current = setTimeout(() => {
                if(singleClickCallback) {
                    singleClickCallback(clickCount);
                }
                setClickCount(0);
            }, delay);
        } else if (clickCount === 2) {
            if(doubleClickCallback) {
                doubleClickCallback(clickCount);
            }
            setClickCount(0);
            if(timer.current) {
                clearTimeout(timer.current);
            }
        }
        return () => {
            if(timer.current) {
                clearTimeout(timer.current);
            }
        }
    }, [clickCount]);

    return handleClick;
}

export default useClickAndDoubleClick;
