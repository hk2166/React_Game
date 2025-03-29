# Word Guessing Game

A modern, interactive word guessing game built with React and styled with CSS. Test your knowledge across different difficulty levels while enjoying a beautiful, responsive interface.

## Features

- 🎮 Three Difficulty Levels
  - Easy: Simple words with helpful clues
  - Medium: More challenging words with moderate clues
  - Hard: Complex words with cryptic clues

- 🎯 Interactive Gameplay
  - On-screen keyboard support
  - Physical keyboard support
  - Visual feedback for correct and incorrect guesses
  - Score tracking system

- 💅 Modern UI/UX
  - Responsive design for all devices (mobile, tablet, desktop)
  - Beautiful animations and transitions
  - Difficulty-based color themes
  - Clean, minimalist interface

- ♿ Accessibility
  - Keyboard navigation support
  - High contrast color schemes
  - Screen reader friendly
  - Reduced motion support

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository
```bash
git clone [[repository-url]](https://github.com/hk2166/React_Game)
cd React_Game
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5174`

## How to Play

1. Select a difficulty level (Easy, Medium, or Hard)
2. Try to guess the word by clicking letters on the on-screen keyboard or using your physical keyboard
3. Each correct guess reveals the letter in its position
4. Each incorrect guess will be marked on the keyboard
5. Try to guess the word before running out of attempts
6. Score points based on your performance and difficulty level

## Technical Details

### Built With
- React.js - Frontend framework
- Vite - Build tool
- CSS3 - Styling with modern features
  - CSS Grid
  - Flexbox
  - CSS Variables
  - CSS Animations
  - Media Queries

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 480px
  - Tablet: 481px - 768px
  - Desktop: > 769px
  - Large Desktop: > 1440px
  - Ultra-wide: > 1920px

### Theme Support
- Light/Dark mode support
- Difficulty-based color schemes
- Customizable UI elements

## Game Features

### Scoring System
- Points awarded based on:
  - Word difficulty
  - Number of attempts used
  - Time taken to solve

### Word Categories
- Easy: Common words and basic concepts
- Medium: Advanced vocabulary and terminology
- Hard: Expert-level words and specialized terms

### Visual Feedback
- Animated letter reveals
- Keyboard interaction effects
- Difficulty-based color themes
- Success/failure animations
