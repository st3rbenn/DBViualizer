import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';

const Bubble = styled(animated.div)`
  display: inline-block;
  border-radius: 50%;
  font-size: 0.5rem;
  color: #d0cecb;
  user-select: none;
`;

function AnimatedBubbleText({ text, delay }: { text: string; delay?: number }) {
  const letters = text.split('');
  const [key, setKey] = useState(0); // Ajout d'un état pour la clé

  useEffect(() => {
    const timer = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <React.Fragment key={key}>
      {letters.map((letter, i) => (
        <AnimatedLetter letter={letter} delay={delay ? delay + i * 100 : i * 100} key={i} />
      ))}
    </React.Fragment>
  );
}

function AnimatedLetter({ letter, delay }: { letter: string; delay: number }) {
  const props = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: [
      { opacity: 1, transform: 'scale(1)' },
      { opacity: 0, transform: 'scale(1)' }, // Ajout d'une étape pour faire disparaître la lettre
    ],
    delay: delay,
    config: config.gentle,
    reset: true, // Réinitialise l'animation après qu'elle soit terminée
  });

  return <Bubble style={props}>{letter}</Bubble>;
}

export default AnimatedBubbleText;
