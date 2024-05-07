let dictionary = [
    dictionary1 = {
        quote: 'never give up',
        author: ' Martin ',
    },

    dictionary2 = {
        quote: 'you can achieve a lot',
        author: ' Jade spades',
    },

    dictionary3 = {
        quote: '\"The greatest glory in living lies not in never falling, but in rising every time we fall\"',
        author: ' Nelson Mandela',
    },
    dictionary4 = {
        quote: '\"The way to get started is to quit talking and begin doing\"',
        author: '  Walt Disney',
    },

    dictionary5 = {
        quote: 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma - which is living with the results of other people\'s thinking. ',
        author: ' Steve Jobs',
    }
];

function getRandom() {
    const random = [Math.floor(Math.random() * dictionary.length)];

    let final = dictionary[random];

    let fuck = Object.values(final);
    console.log(final);

    const second = fuck[0];

    const third = fuck[1];
    console.log(fuck[0]);

    let paragraph = document.getElementById("card-text");
    paragraph.innerHTML = second;

    authorSpace = document.getElementById("authorSide");

    authorSpace.innerHTML = third;

    function load_twitter() {
        window.open(`http://twitter.com/share?text= ${paragraph.textContent}`);

    }
    let anchor = document.querySelector("a");
    anchor.addEventListener("click", load_twitter)
}



document.querySelector("button").addEventListener("click", getRandom);

document.addEventListener("DOMContentLoaded", getRandom);