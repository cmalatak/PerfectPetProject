// Don't pollute the global scope
{
    const questionOneChoices = Array.from(document.getElementsByName('question-one-choice'));
    const questionTwoChoices = Array.from(document.getElementsByName('question-two-choice'));
    const questionThreeChoices = Array.from(document.getElementsByName('question-three-choice'));
    const questions = [questionOneChoices, questionTwoChoices, questionThreeChoices];

    const submitButtonElement = document.getElementById("submit")

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

    const determinePetBasedOnScore = (addedScoresForSelectedChoices) => {
        console.log('Your perfect pet is a...');
        let perfectPet;
        console.log(`this is a test ${perfectPet}`)
        if (addedScoresForSelectedChoices <= 7) {
            perfectPet = 'Cat';
            console.log(`${perfectPet}!`);
            const catImageURL = 'http://spcasuncoast.org/wp-content/uploads/2017/02/success_cat.png';
            const catImageElement = document.createElement('img');
            catImageElement.setAttribute('src', catImageURL);
            catImageElement.setAttribute('class', 'cat-pic');
            document.body.insertBefore(catImageElement, submitButtonElement);
        } else {
            perfectPet = 'Dog';
            console.log(`${perfectPet}!`);
            const dogImageURL = 'https://c7.uihere.com/files/151/264/946/golden-retriever-puppy-pomeranian-pet-sitting-nova-scotia-duck-tolling-retriever-golden-retriever-thumb.jpg';
            const dogImageElement = document.createElement('img');
            dogImageElement.setAttribute('src', dogImageURL);
            dogImageElement.setAttribute('class', 'cat-pic');
            document.body.insertBefore(dogImageElement, submitButtonElement);
        }
    
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
            determinePetBasedOnScore(addedScoresForSelectedChoices)
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
    ///////////////////////////
}