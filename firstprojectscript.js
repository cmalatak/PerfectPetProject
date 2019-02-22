// Don't pollute the global scope
{
    //////// SETUP /////////
    const questionOneChoices = Array.from(document.getElementsByName('question-one-choice'));
    const questionTwoChoices = Array.from(document.getElementsByName('question-two-choice'));
    const questionThreeChoices = Array.from(document.getElementsByName('question-three-choice'));
    const questions = [questionOneChoices, questionTwoChoices, questionThreeChoices];

    const getQuestionsWithScoredChoices = questions => {
        return questions.map((questionChoices, i) => {
            return questionChoices.map((choice, i) => {
                return {
                    choice: choice,
                    score: i + 1,
                }
            })
        });
    }

    const getSelectedChoices = (questions) => {
        const selectedChoices = [];

        for (let i=0; i < questions.length; i++) {
            const questionChoices = questions[i];

            for (let j=0; j < questionChoices.length; j++) {
                if(questionChoices[j].choice.checked) {
                    selectedChoices.push(questionChoices[j]);
                }
            }
        }
        return selectedChoices;
    }

    const addScoresForSelectedChoices = (selectedChoicesWithScores) => {
        let totalScore = 0

        for (let i=0; i < selectedChoicesWithScores.length; i++) {
            const selectedChoiceWithScore = selectedChoicesWithScores[i]

            totalScore += selectedChoiceWithScore.score;
        }
        return totalScore;
    }

    /////// SUBMISSION /////////

    const handleQuizSubmit = event => {
        event.preventDefault();

        if(areAllQuestionsAnswered(questions)) {
            const questionsWithScoredChoices = getQuestionsWithScoredChoices(questions)
            const selectedChoicesWithScores = getSelectedChoices(questionsWithScoredChoices)
            const addedScoresForSelectedChoices = addScoresForSelectedChoices(selectedChoicesWithScores)

        } else {
            alert("you didn't answer all the questions, dummy");
        }
    }
    //////////////////////////


    //////// SETUP /////////

    const formEl = document.querySelector('form');

    formEl.addEventListener('submit', handleQuizSubmit)

    //////////////////////////


    ////// VALIDATION ////////

    const isQuestionAnswered = (question) => {
        for (let i=0; i < question.length; i++){ 
            const option = question[i];
       
            if (option.checked) {
                console.log(`${option} is the answer to ${question}`);
                return true
            }
        }
        return false;
    }

    const areAllQuestionsAnswered = questions => {
        const numOfQuestions = questions.length;

        let counter = 0;

        for (let i=0; i < questions.length; i++) {
            const question = questions[i];
            
            if(isQuestionAnswered(question)) {
                counter += 1;
            }
        }

        return numOfQuestions === counter;
    }

    ////////////////

    const perfectPet = () => {
    //     const finalScore = (answerValues);
    //         const x = parseInt(question1Answer);
    //         const y = parseInt(question2Answer);
    //         const z = parseInt(question3Answer);
    //     if (parseInt(finalScore) <= 7) {
    //         let perfectPet = "Cat!"
    //         console.log('Your perfect pet is a...')
    //         console.log(perfectPet)
    //     } else {
    //         let perfectPet = "Dog!"
    //         console.log('Your perfect pet is a...')
    //         console.log(perfectPet)
    //     }
    }
}