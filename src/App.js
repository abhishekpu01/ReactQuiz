import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const [questions, setQuestions] = useState([
    {
      number: 1,
      image: 'https://loremflickr.com/200/200?random=1',
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      answer: 'Paris'
    },
    {
      number: 2,
      image: 'https://loremflickr.com/200/200?random=2',
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Saturn', 'Jupiter', 'Uranus'],
      answer: 'Jupiter'
    },
    {
      number: 3,
      image: 'https://loremflickr.com/200/200?random=3',
      question: 'What is the smallest country in the world?',
      options: ['Vatican City', 'Monaco', 'Nauru', 'Tuvalu'],
      answer: 'Vatican City'
    },
    {
      number: 4,
      image: 'https://loremflickr.com/200/200?random=4',
      question: 'What is the highest mountain in the world?',
      options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
      answer: 'Mount Everest'
    },
    {
      number: 5,
      image: 'https://loremflickr.com/200/200?random=5',
      question: 'What is the deepest ocean in the world?',
      options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
      answer: 'Pacific Ocean'
    },
    {
      number: 6,
      image: 'https://loremflickr.com/200/200?random=6',
      question: 'What is the largest living species of lizard?',
      options: ['Komodo dragon', 'Saltwater crocodile', 'Black mamba', 'Green anaconda'],
      answer: 'Komodo dragon'
    },
    {
      number: 7,
      image: 'https://loremflickr.com/200/200?random=7',
      question: 'What is the fastest land animal?',
      options: ['Cheetah', 'Lion', 'Leopard', 'Jaguar'],
      answer: 'Cheetah'
    },
    {
      number: 8,
      image: 'https://loremflickr.com/200/200?random=8',
      question: 'What is the largest mammal on Earth?',
      options: ['Blue whale', 'Fin whale', 'Humpback whale', 'Sperm whale'],
      answer: 'Blue whale'
    },
    {
      number: 9,
      image: 'https://loremflickr.com/200/200?random=9',
      question: 'What is the driest desert in the world?',
      options: ['Sahara Desert', 'Gobi Desert', 'Mojave Desert', 'Atacama Desert'],
      answer: 'Atacama Desert'
    },
    {
      number: 10,
      image: 'https://loremflickr.com/200/200?random=10',
      question: 'What is the longest river in the world?',
      options: ['Nile River', 'Amazon River', 'Yangtze River', 'Mississippi River'],
      answer: 'Nile River'
    }
  ]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [timer, setTimer] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    setProgress((currentQuestion + 1) / questions.length);
    // Reset timer for each question
    setTimer(300); // Reset timer to 300 seconds

    // Start the timer
    const timerId = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer <= 1) {
          clearInterval(timerId);
          return 0; // Stop at 0
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(timerId); // Cleanup interval on unmount
  }, [currentQuestion]);


  useEffect(() => {
    setProgress((currentQuestion + 1) / questions.length);
  }, [currentQuestion]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <div className="App">
      <div className="container">
        <span className="display-count">{questions[currentQuestion].number}/{questions.length}</span>
        <span style={{ marginLeft: '20px' }} className="display-count">
          {Math.floor(timer / 60)}:{('0' + (timer % 60)).slice(-2)} {/* Format as mm:ss */}
        </span>
        <progress value={progress} max="1" />
        <img src={questions[currentQuestion].image} alt="Question Image" />
        <h2>{questions[currentQuestion].question}</h2>
        <ul>
          {questions[currentQuestion].options.map((option, index) => (
            <li key={index}>
              <label className="button"
                onClick={() => handleOptionSelect(option)}
                style={{ backgroundColor: selectedOption === option ? '#4CAF50' : '#f9f9f9', color: selectedOption === option ? '#fff' : '#4CAF50' }}>
                {option}
              </label>
            </li>
          ))}
        </ul>

        <button onClick={handleCheckAnswer}>Check Answer</button>
        {isCorrect !== null && (
          <p>
            {isCorrect ? 'Correct!' : 'Incorrect. The correct answer is ' + questions[currentQuestion].answer}
          </p>
        )}
        <div className="navigation">
          {currentQuestion > 0 && (
            <button onClick={handlePreviousQuestion}>Previous</button>
          )}
          {currentQuestion < questions.length - 1 && (
            <button onClick={handleNextQuestion}>Next</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
