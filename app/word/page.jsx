'use client'

import React from 'react'

import { useState } from 'react';
import Head from 'next/head';
import '../../styles/prueba.css';

const WORDS = ['react'];
const ANSWER = WORDS[Math.floor(Math.random() * WORDS.length)];

export default function page  () {
  const [guesses, setGuesses] = useState(Array(6).fill(''));
  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setCurrentGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentGuess.length !== 5) {
      setMessage('La palabra debe tener 5 letras');
      return;
    }

    const newGuesses = [...guesses];
    const index = newGuesses.findIndex((guess) => guess === '');
    newGuesses[index] = currentGuess;
    setGuesses(newGuesses);
    setCurrentGuess('');

    if (currentGuess === ANSWER) {
      setIsGameOver(true);
      setMessage('¡Ganaste!');
    } else if (index === guesses.length - 1) {
      setIsGameOver(true);
      setMessage(`Perdiste! La palabra era ${ANSWER}`);
    } else {
      setMessage('');
    }
  };

  const getColor = (letter, pos) => {
    if (!currentGuess) return '';
    if (ANSWER.includes(letter)) {
      if (ANSWER[pos] === letter) return 'green';
      return 'yellow';
    }
    return 'gray';
  };

  return (
    <>
      <Head>
        <title>Wordle en Next.js</title>
      </Head>
      <div className="container mt-28">
        <h1>Wordle</h1>
        <div className="guesses">
          {guesses.map((guess, idx) => (
            <div key={idx} className="guess">
              {[...guess].map((letter, letterIdx) => (
                <span
                  key={letterIdx}
                  className="letter"
                  style={{ backgroundColor: getColor(letter, letterIdx) }}
                >
                  {letter}
                </span>
              ))}
            </div>
          ))}
        </div>
        {!isGameOver && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={currentGuess}
              onChange={handleChange}
              maxLength={5}
              disabled={isGameOver}
            />
            <button type="submit" disabled={isGameOver}>
              Adivinar
            </button>
          </form>
        )}
        {message && <p>{message}</p>}
      </div>
    </>
  );
};

