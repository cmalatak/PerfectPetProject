// Don't pollute the global scope
{
    const questionOne = document.getElementsByName('answer-one');
    const questionTwo = document.getElementsByName('answer-two');
    const questionThree = document.getElementsByName('answer-three');
    const questions = [questionOne, questionTwo, questionThree];

    const scoreAnswers = question => {
        const questionArray = [Array.from(question)];
        //return question.map((answer, i) => {
        return questionArray.map((answer, i) => {
            return {
                score: i,
                el: answer
            }
        });
    }

    const questionsWithScoredAnswers = questions => {
        return questions.map(question => {
            scoreAnswers(question);
        })
    }

    const getScoredAnswersToQuestions = questions => {
        return questions.map(question => {
            debugger;
            const questionArray = [Array.from(question)];
            questionArray.forEach(scoredAnswer => {
                if(scoredAnswers.el.checked) {
                    return scoredAnswer;
                }
            })
        })
    }

    const formEl = document.querySelector('form');

    formEl.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(event);
        console.log(questions)
        console.log('all questions are answered: ', areAllQuestionsAnswered(questions))


        if(areAllQuestionsAnswered(questions)) {
            const scoredAnswers = getScoredAnswersToQuestions(questionsWithScoredAnswers(questions))
            const questionsBruh = questionsWithScoredAnswers(questions)
            debugger;
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