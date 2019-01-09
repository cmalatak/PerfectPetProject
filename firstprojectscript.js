// Don't pollute the global scope
{
    const formEl = document.querySelector('form');
    formEl.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(event);
    })

    const perfectPet = () => {
        const question1Answer = () => {
            // if inputResult0,1,2,3, (or prompt?) checked === true, then value = the number value of the input 
            //question1 = value of checked input
        }
        const question2Answer = () => {
            // if inputResult4,5,6,7, (or prompt?) checked === true, then value = the number value of the input 
            //question2 = value of checked input
        }
        const question3Answer = () => {
            // if inputResult8,9,10,11, (or prompt?) checked === true, then value = the number value of the input 
            //question3 = value of checked input
        }
        const finalScore = (x+y+z);
            const x = parseInt(question1Answer);
            const y = parseInt(question2Answer);
            const z = parseInt(question3Answer);
        if parseInt(finalScore) <= 16 {
            let perfectPet = "Cat!"
            console.log('Your perfect pet is a...')
            console.log(perfectPet)
        } else {
            let perfectPet = "Dog!"
            console.log('Your perfect pet is a...')
            console.log(perfectPet)
        }
    }
}