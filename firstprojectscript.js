// Don't pollute the global scope
{
    const questionOneChoices = Array.from(document.getElementsByName('question-one-choice'));
    const questionTwoChoices = Array.from(document.getElementsByName('question-two-choice'));
    const questionThreeChoices = Array.from(document.getElementsByName('question-three-choice'));
    const questions = [questionOneChoices, questionTwoChoices, questionThreeChoices];

    const submitButtonElement = document.getElementById("submit");

    const petImageContainer = document.getElementById("pet-image-container");

    const fishImageElement = document.createElement('img');
    fishImageElement.setAttribute('src', 'FishImg.png');
    fishImageElement.setAttribute('alt', 'Fish Image');
    fishImageElement.setAttribute('style', 'width:250px');

    const catImageElement = document.createElement('img');
    catImageElement.setAttribute('src', 'CatImg.png');
    catImageElement.setAttribute('alt', 'Cat Image');
    catImageElement.setAttribute('style', 'width:250px');

    const dogImageElement = document.createElement('img');
    dogImageElement.setAttribute('src', 'DogImg.png');
    dogImageElement.setAttribute('alt', 'Dog Image');
    dogImageElement.setAttribute('style', 'width:250px');

    const pikaImageElement = document.createElement('img');
    pikaImageElement.setAttribute('src', 'PikaImg.png');
    pikaImageElement.setAttribute('alt', 'Pikachu Image');
    pikaImageElement.setAttribute('style', 'width:250px');

    const petData = {
        dog: {
            img: dogImageElement,
            heading: 'You got... Dog!',
            text: `Dogs like to have fun, and you seem like you're fun!`,
        },
        cat: {
            img: catImageElement,
            heading: 'You got... Cat!',
            text: `Cats don't like doing much, and you seem like you don't do much either!`,

        },
        fish: {
            img: fishImageElement,
            heading: 'You got... Fish!',
            text: `You seem pretty lazy. Good thing fishes are the easiest animal to keep alive!`,
        },
        pika: {
            img: pikaImageElement,
            heading: 'Pickachu... I choose you!',
            text: `This Pikachu will keep you company, and keep you in line when you're doin too much!`,
        },
    }

///////// SCORING /////////

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

    const determinePetBasedOnScore = (cumulativeScore) => {
        console.log('Your perfect pet is a...');
        let perfectPet;
        if (cumulativeScore <= 3) {
            perfectPet = 'fish';
        } else if(cumulativeScore <= 7) {
            perfectPet = 'cat';
        } else if(cumulativeScore <= 11) {
            perfectPet = 'dog';
        } else {
            perfectPet = 'pika';
        }
        petImageContainer.innerHTML= '';
        petImageContainer.append(petData[perfectPet].heading);
        petImageContainer.append(petData[perfectPet].img);
        petImageContainer.append(petData[perfectPet].text);
    }

    const addScoresForSelectedChoices = (selectedChoicesWithScores) => {
        let totalScore = 0

        for (let i=0; i < selectedChoicesWithScores.length; i++) {
            const selectedChoiceWithScore = selectedChoicesWithScores[i]

            totalScore += selectedChoiceWithScore.score;
        }
        return totalScore;
    }
    ////////////////////////////
    
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