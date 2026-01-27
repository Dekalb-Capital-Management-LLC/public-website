import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ children, animation = 'fade-in-up', delay = 0, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`${className} transition-opacity duration-1000 ${isVisible ? `animate-${animation} opacity-100` : 'opacity-0'
                }`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default ScrollAnimation;
