import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

/**
 *
 * @param {Quiz} quiz
 * @param {UI} ui
 */

const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    console.log(quiz.score );
   ui.showScore(quiz.score)
  } else {
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice);
      renderPage(quiz, ui);
    });
    ui.showProgres(quiz.questionIndex+1, quiz.question.length)

  }
};

const main = () => {
  const quiz = new Quiz(questions);
  const ui = new UI();
  renderPage(quiz, ui);
};

main();
