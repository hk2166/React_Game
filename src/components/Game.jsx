import { useState, useEffect } from 'react';
import { getWordByOrderAndDifficulty } from '../data/word';

const Game = () => {
  const [wordData, setWordData] = useState({ word: '', clue: '' });
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [incorrectLetters, setIncorrectLetters] = useState(new Set());
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState('easy');
  const [currentWordOrder, setCurrentWordOrder] = useState(1);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'

  useEffect(() => {
    startNewWord();
  }, [difficulty, currentWordOrder]);

  // Add keyboard event listener
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (gameStatus !== 'playing') return;
      
      const key = event.key.toUpperCase();
      if (/^[A-Z]$/.test(key) && !guessedLetters.has(key)) {
        guessLetter(key);
      }
    };

    window.addEventListener('keyup', handleKeyPress);
    return () => window.removeEventListener('keyup', handleKeyPress);
  }, [guessedLetters, gameStatus, wordData]);

  const startNewWord = () => {
    const newWordData = getWordByOrderAndDifficulty(difficulty, currentWordOrder);
    setWordData(newWordData);
    setGuessedLetters(new Set());
    setIncorrectLetters(new Set());
    setWrongAttempts(0);
    setGameStatus('playing');
  };

  const progressToNextWord = () => {
    if (currentWordOrder < 3) {
      // Move to next word in current difficulty
      setCurrentWordOrder(prev => prev + 1);
    } else {
      // Move to next difficulty level
      if (difficulty === 'easy') {
        setDifficulty('medium');
        setCurrentWordOrder(1);
      } else if (difficulty === 'medium') {
        setDifficulty('hard');
        setCurrentWordOrder(1);
      } else {
        // Player has completed all levels
        setGameStatus('completed');
      }
    }
  };

  const calculateScore = () => {
    const basePoints = {
      easy: 10,
      medium: 20,
      hard: 30
    };
    return Math.round(basePoints[difficulty] * (1 - (wrongAttempts / 3)));
  };

  const guessLetter = (letter) => {
    if (gameStatus !== 'playing') return;

    setGuessedLetters(prev => new Set([...prev, letter]));
    
    if (!wordData.word.includes(letter)) {
      setIncorrectLetters(prev => new Set([...prev, letter]));
      const newWrongAttempts = wrongAttempts + 1;
      setWrongAttempts(newWrongAttempts);
      
      if (newWrongAttempts >= 3) {
        setGameStatus('lost');
        return;
      }
    }

    // Check if word is complete
    const isComplete = wordData.word.split('').every(char => 
      guessedLetters.has(char) || char === letter
    );

    if (isComplete) {
      const newScore = score + calculateScore();
      setScore(newScore);
      setGameStatus('won');
      // Wait a bit before progressing to next word
      setTimeout(progressToNextWord, 1500);
    }
  };

  const restartGame = () => {
    setDifficulty('easy');
    setCurrentWordOrder(1);
    setScore(0);
    setGameStatus('playing');
  };

  const renderWord = () => {
    return (
      <div className="word-display">
        {wordData.word.split('').map((letter, index) => (
          <div key={index} className="letter-box">
            {guessedLetters.has(letter) ? letter : '_'}
          </div>
        ))}
      </div>
    );
  };

  const renderKeyboard = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return (
      <div className="keyboard">
        {letters.map(letter => (
          <button
            key={letter}
            onClick={() => guessLetter(letter)}
            disabled={guessedLetters.has(letter) || gameStatus !== 'playing'}
            className={`key ${guessedLetters.has(letter) ? 'used' : ''} ${
              incorrectLetters.has(letter) ? 'incorrect' : ''
            }`}
          >
            {letter}
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="background-effect"></div>
      <div className={`game-container ${difficulty}`}>
        <div className="game-header">
          <div className="level-info">
            <h2>{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Level</h2>
            <p>Word {currentWordOrder} of 3</p>
          </div>
          <div className="score-display">
            Score: {score}
          </div>
        </div>

        <div className="clue-container">
          <h3>Clue:</h3>
          <p>{wordData.clue}</p>
        </div>

        {renderWord()}

        <div className="game-status">
          {gameStatus === 'won' && (
            <>
              <p>Congratulations! You got it! 🎉</p>
              <p>Points earned: {calculateScore()}</p>
              <p>Get ready for the next word...</p>
            </>
          )}
          {gameStatus === 'lost' && (
            <>
              <p>Game Over! The word was: {wordData.word}</p>
              <button className="play-again" onClick={restartGame}>
                Start Over
              </button>
            </>
          )}
          {gameStatus === 'completed' && (
            <>
              <p>🎉 Congratulations! You've completed all levels! 🎉</p>
              <p>Final Score: {score}</p>
              <button className="play-again" onClick={restartGame}>
                Play Again
              </button>
            </>
          )}
          {gameStatus === 'playing' && (
            <div className="attempts">
              Remaining attempts: {3 - wrongAttempts}
            </div>
          )}
        </div>

        {renderKeyboard()}
      </div>
    </>
  );
};

export default Game;
