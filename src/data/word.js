export const wordList = {
    easy: [
      {
        word: 'PIXEL',
        clue: 'The smallest element of a digital image'
      },
      {
        word: 'JAZZ',
        clue: 'A music genre known for improvisation'
      },
      {
        word: 'MYTH',
        clue: 'A traditional story explaining natural phenomena'
      },
      {
        word: 'GLOW',
        clue: 'To emit a steady, soft light'
      },
      {
        word: 'WAVE',
        clue: 'A disturbance that travels through space and matter'
      },
      {
        word: 'ECHO',
        clue: 'A sound repeated by reflection'
      },
      {
        word: 'COZY',
        clue: 'Warm, comfortable, and relaxing'
      },
      {
        word: 'QUIZ',
        clue: 'A test of knowledge or ability'
      },
      {
        word: 'BEAM',
        clue: 'A ray of light or energy'
      }
    ],
    medium: [
      {
        word: 'ZENITH',
        clue: 'The highest point reached by a celestial body'
      },
      {
        word: 'CIPHER',
        clue: 'A secret way of writing using codes'
      },
      {
        word: 'PRISM',
        clue: 'A transparent object that breaks light into colors'
      },
      {
        word: 'GALAXY',
        clue: 'A massive system of stars, gas, and dust'
      },
      {
        word: 'RHYTHM',
        clue: 'A strong, regular repeated pattern of movement or sound'
      },
      {
        word: 'ENIGMA',
        clue: 'Something hard to understand or explain'
      },
      {
        word: 'AURORA',
        clue: 'Natural light display in the sky, often near the poles'
      },
      {
        word: 'MYSTIC',
        clue: 'Having spiritual or supernatural qualities'
      },
      {
        word: 'PLASMA',
        clue: 'The fourth state of matter, after solid, liquid, and gas'
      }
    ],
    hard: [
      {
        word: 'PHOENIX',
        clue: 'A mythical bird that rises from its own ashes'
      },
      {
        word: 'QUANTUM',
        clue: 'The smallest possible discrete unit of any physical property'
      },
      {
        word: 'NEBULA',
        clue: 'A cloud of gas and dust in outer space'
      },
      {
        word: 'ZEPHYR',
        clue: 'A soft, gentle breeze from the west'
      },
      {
        word: 'PARADOX',
        clue: 'A statement that contradicts itself but might be true'
      },
      {
        word: 'ENTROPY',
        clue: 'The measure of disorder in a system'
      },
      {
        word: 'QUASAR',
        clue: 'An extremely bright and distant celestial object'
      },
      {
        word: 'SYNERGY',
        clue: 'Combined effect greater than the sum of individual effects'
      },
      {
        word: 'AXIOM',
        clue: 'A statement accepted as true without proof'
      }
    ]
  };
  
  // Get three random unique words for a difficulty level
  const getRandomWords = (difficulty) => {
    const words = [...wordList[difficulty]];
    const selectedWords = [];
    
    for (let i = 0; i < 3; i++) {
      if (words.length === 0) break;
      const randomIndex = Math.floor(Math.random() * words.length);
      selectedWords.push(words.splice(randomIndex, 1)[0]);
    }
    
    return selectedWords;
  };
  
  // Keep track of selected words for each difficulty
  let selectedWords = {
    easy: [],
    medium: [],
    hard: []
  };
  
  export const getWordByOrderAndDifficulty = (difficulty, order) => {
    // If we don't have words selected for this difficulty or we've used all words,
    // get new random words
    if (selectedWords[difficulty].length === 0) {
      selectedWords[difficulty] = getRandomWords(difficulty);
    }
    
    // Return the word at the specified order (1-based index)
    return selectedWords[difficulty][order - 1];
  };
  