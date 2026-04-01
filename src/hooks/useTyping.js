import { useState, useEffect } from 'react';

export function useTyping(texts, speed = 80) {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const current = texts[idx];
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, display.length + 1);
        setDisplay(next);
        if (next === current) {
          setPaused(true);
          setTimeout(() => { setPaused(false); setDeleting(true); }, 2200);
        }
      } else {
        const next = display.slice(0, -1);
        setDisplay(next);
        if (next === '') {
          setDeleting(false);
          setIdx(i => (i + 1) % texts.length);
        }
      }
    }, deleting ? 38 : speed);

    return () => clearTimeout(timer);
  }, [display, deleting, paused, idx, texts, speed]);

  return display;
}
