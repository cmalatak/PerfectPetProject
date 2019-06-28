import {areAllQuestionsAnswered} from './validation.js';
import getQuestionsWithScoredChoices from './getQuestionsWithScoredChoices.js';
import getSelectedChoices from './getSelectedChoices.js';
import addScoresForSelectedChoices from './addScoresForSelectedChoices.js';
import determinePetBasedOnScore from './determinePet.js';

const handleQuizSubmit = (event, questions) => {
    event.preventDefault();

    if(areAllQuestionsAnswered(questions)) {
        const questionsWithScoredChoices = getQuestionsWithScoredChoices(questions)
        const selectedChoicesWithScores = getSelectedChoices(questionsWithScoredChoices)
        const addedScoresForSelectedChoices = addScoresForSelectedChoices(selectedChoicesWithScores)
        determinePetBasedOnScore(addedScoresForSelectedChoices)
    } else {
        alert("you didn't answer all the questions, dummy");
    }
}

export default handleQuizSubmit;
