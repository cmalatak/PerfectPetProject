// Don't pollute the global scope
{
    const questionOne = document.getElementsByName('answer-one');
    const questionTwo = document.getElementsByName('answer-two');
    const questionThree = document.getElementsByName('answer-three');
    const questions = [questionOne, questionTwo, questionThree];

    const choice = document.querySelector('input');

    const formEl = document.querySelector('form');
    formEl.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(event);
        console.log(questions)
        console.log('all questions are answered: ', areAllQuestionsAnswered(questions))

        if(areAllQuestionsAnswered(questions)) {
            console.log('show pet');
        } else {
            alert("you didn't answer all the questions, dummy");
        }
    })
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

    const perfectPet = () => {
    //     const finalScore = (answerValues);
    //         const x = parseInt(question1Answer);
    //         const y = parseInt(question2Answer);
    //         const z = parseInt(question3Answer);
    //     if (parseInt(finalScore) <= 16) {
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