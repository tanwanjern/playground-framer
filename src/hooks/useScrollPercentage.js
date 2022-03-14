import { useState, useEffect } from "react";

export default function useScrollPercentage() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const handleScroll = () => {
        var h = document.documentElement, 
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';

        var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
        setScrollPercentage(percent);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return scrollPercentage;
}