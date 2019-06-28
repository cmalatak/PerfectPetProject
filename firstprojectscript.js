// Don't pollute the global scope
import configureCallToActionButton from "./configureQuizComponents.js";
import handleQuizSubmit from "./helpers/handleQuizSubmit.js";
import {
  isQuestionAnswered,
  areAllQuestionsAnswered
} from "./helpers/validation.js";
import getSelectedChoices from "./helpers/getSelectedChoices.js";

{
  const questionOneChoices = Array.from(
    document.getElementsByName("question-one-choice")
  );
  const questionTwoChoices = Array.from(
    document.getElementsByName("question-two-choice")
  );
  const questionThreeChoices = Array.from(
    document.getElementsByName("question-three-choice")
  );
  const questions = [
    questionOneChoices,
    questionTwoChoices,
    questionThreeChoices
  ];

  const submitButtonElement = document.getElementById("submit");

  const formEl = document.querySelector("form");

  formEl.addEventListener("submit", event => {
    handleQuizSubmit(event, questions);
  });
}
