import { useState, useLayoutEffect } from 'react';

const useWindowWidthObserver = (width) => {
    const [isWindowNarrower, setIsWindowNarrower] = useState(false);

    useLayoutEffect(() => {
        const updateWindowWidth = () => {
            if (window.innerWidth < width) {
                setIsWindowNarrower(true);
            } else {
                setIsWindowNarrower(false);
            }
        }
        window.addEventListener('resize', updateWindowWidth);
        updateWindowWidth();
        return () => window.removeEventListener('resize', updateWindowWidth);
    }, [width]);

    return isWindowNarrower;
}

export default useWindowWidthObserver;