# FrontEnd Development Assignment

## Overview
This quiz application is a simple and interactive way to test your knowledge across various topics. Users can navigate through a series of questions, select answers, and receive immediate feedback on their responses. The application also features a timer that counts down from five minutes for each question, adding an element of challenge and urgency to the quiz experience.

### Features
1. Dynamic Questions: The quiz presents a set of multiple-choice questions with images for a visually engaging experience.
2. Timer: A countdown timer is displayed for each question, allowing users 5 minutes to answer.
3. Progress Tracking: Users can see their current question number and progress through the quiz.
4. Immediate Feedback: Users receive instant feedback on their answers, with indications of whether they are correct or incorrect.
5. Navigation Buttons: Users can easily navigate to the previous and next questions.

### Technologies Used
1. React: The application is built using React for a seamless user experience.
2. CSS: Custom styles are applied for a clean and modern look.

### How It Works
1. State Management:The application uses React's useState and useEffect hooks to manage the current question, selected option, progress, and timer.
2. Question Handling: Each question is stored in an array, allowing the app to dynamically render questions and options.
3. Answer Validation: Users can select an answer, and upon clicking the "Check Answer" button, they receive feedback on their choice.
4. Timer Functionality: A countdown timer is initiated for each question, resetting when the user navigates to a new question. The timer decreases every second, and when it reaches zero, the user can no longer submit their answer.

### Setup Instructions
To run the application locally, follow these steps:

#### 1. Clone the Repository:
Command: git clone https://github.com/abhishekpu01/ReactQuiz.git

#### 2. Navigate to the Project Directory:
Command: cd ReactQuiz

#### 3. Install Dependencies:
Command: npm install

#### 4. Run the application
Command: npm start

#### 5. Access the App:
Open your web browser and go to (http://localhost:3000).
