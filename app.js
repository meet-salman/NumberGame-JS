const yourScore = document.querySelector('#score');
const sysNum = document.querySelector('#sys-num');
const userNum = document.querySelector('#user-num');
const error = document.querySelector('#error');
const result = document.querySelector('#result');
const go = document.querySelector('#go');
const again = document.querySelector('#again');



let score = 0;

go.style.color = "#0077ff";
again.disabled = true;


go.addEventListener('click', () => {

    let randomNum = Math.ceil(Math.random() * 6);

    again.disabled = true;


    if (userNum.value === "" || userNum.value > 6) {

        error.style.color = "red";
        error.innerHTML = 'Please enter number between 1 - 6';
    }
    else {

        if (Number(userNum.value) !== randomNum) {

            error.innerHTML = '';
            sysNum.innerHTML = randomNum;

            yourScore.innerHTML = `Your Score: ${score + Number(userNum.value)}`
            score = score + Number(userNum.value);

            userNum.value = '';

        }
        else {
            error.innerHTML = '';

            go.disabled = true;
            go.style.color = "#a5a5a5";

            again.disabled = false;
            again.style.color = "#008000";

            sysNum.innerHTML = randomNum;
            sysNum.style.color = "red";

            userNum.style.color = "red";

            result.innerHTML = "You're Out";
            result.style.color = "red";
        }
    }
});



again.addEventListener('click', () => {

    location.reload()

})