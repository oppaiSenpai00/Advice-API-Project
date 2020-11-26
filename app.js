// Get Elements from the DOM
const button = document.getElementById('button');

// Add event listener to the Elements
button.addEventListener('click', getAdvice);

function getAdvice() {

    const xhr = new XMLHttpRequest();

    document.getElementById('loader').style.display = 'block';


    xhr.open('GET', 'https://api.adviceslip.com/advice', true);

    xhr.onload = function getAdvices() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            const output = response.slip.advice;

            document.getElementById('mainContent').innerHTML = output;

            document.getElementById('loader').style.display = 'none';
            document.getElementById('mainContent').style.display = 'block';
        } else {
            document.getElementById('mainContent').innerHTML = "Oops something went wrong. Try again!"
        }
    };

    xhr.send();
}

