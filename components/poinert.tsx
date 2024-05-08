"use client"
import { useEffect } from 'react';

interface CursorState {
    x: number;
    y: number;
    lazyX: number;
    lazyY: number;
    lazySpeed: number;
    highlightScale: number;
    lazyHighlightScale: number;
}

const lerp = (x: number, y: number, t: number): number => {
    return (1 - t) * x + t * y;
};

const UseCustomCursor = (): JSX.Element => {
    useEffect(() => {
        const cursorElement = document.getElementById('cursor');
        const wrapperElement = document.getElementById('wrapper');

        if (!cursorElement || !wrapperElement) return;

        const cursor: CursorState = {
            x: 0,
            y: 0,
            lazyX: 0,
            lazyY: 0,
            lazySpeed: 0.02,
            highlightScale: 0,
            lazyHighlightScale: 0
        };

        const onMouseEnter = () => {
            cursorElement.classList.remove('hidden');
        };

        const onMouseLeave = () => {
            cursorElement.classList.add('hidden');
            cursor.highlightScale = 0;
        };

        const onMouseMove = (e: MouseEvent) => {
            cursorElement.classList.remove('hidden');
            cursor.x = e.clientX;
            cursor.y = e.clientY;
        };

        const animate = () => {
            requestAnimationFrame(animate);

            cursor.lazyX = lerp(cursor.lazyX, cursor.x, cursor.lazySpeed);
            cursor.lazyY = lerp(cursor.lazyY, cursor.y, cursor.lazySpeed);

            cursor.lazyHighlightScale = lerp(cursor.lazyHighlightScale, cursor.highlightScale, 0.1);


            cursorElement.style.setProperty('--cursorX', `${cursor.x}px`);
            cursorElement.style.setProperty('--cursorY', `${cursor.y}px`);
            // wrapperElement.style.setProperty('--lazyCursorX', `${cursor.lazyX}px`);
            // wrapperElement.style.setProperty('--lazyCursorY', `${cursor.lazyY}px`);
            // wrapperElement.style.setProperty('--cursorHighlightScale', cursor.lazyHighlightScale.toString());
        };

        cursorElement.addEventListener('mouseenter', onMouseEnter);
        cursorElement.addEventListener('mouseleave', onMouseLeave);
        window.addEventListener('mousemove', onMouseMove);
        animate();

        return () => {
            cursorElement.removeEventListener('mouseenter', onMouseEnter);
            cursorElement.removeEventListener('mouseleave', onMouseLeave);
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
            <div id="cursor" className="hidden"></div>
    );
};

export default UseCustomCursor;
