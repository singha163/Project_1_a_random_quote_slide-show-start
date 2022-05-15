/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
let quotes = [];
quotes[0]={};
quotes[1]={};
quotes[2]={};
quotes[3]={};
quotes[4]={};



quotes[0].quote="A wise man can learn more from his enemies than a fool from his friends.";
quotes[0].source="Niki Lauda";
quotes[0].year="2013";

quotes[1].quote="Every man dies, but not every man really lives.";
quotes[1].source="William Wallace";
quotes[1].citation="Braveheart";


quotes[2].quote="Great men are not born great, they grow great.";
quotes[2].source="Mario Puzo";
quotes[2].citation="The Godfather";
quotes[2].year="1972";

quotes[3].quote="Life is not the amount of breaths you take. It's the moments that take your breath away.";
quotes[3].source="Alex Hitchens";

quotes[4].quote="Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.";
quotes[4].source="Ferris Bueller";
quotes[4].citation="Ferris Bueller's Day Off";
quotes[4].year="1986";

console.log(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    let quotesLength = quotes.length;
    // getting random number from 0 to quotesLength
    let randomNum = Math.floor(Math.random() * quotesLength);
    // getting random quote
    randomQuote = quotes[randomNum];

    return randomQuote;
}



/***
 * `printQuote` function
***/
function printQuote() {
    let randomQuote = getRandomQuote();

    let PtoHTML1 = "<p class='source'>" + randomQuote.quote + "<p class='source'>" + 
randomQuote.source;

    // checking if citation property exists
    if ('citation' in randomQuote) {
        PtoHTML1 +=  "<span class='citation'>" + randomQuote.citation + "</span>";
    }

    // checking if year property exists
    if ('year' in randomQuote) {
        PtoHTML1 +=  "<span class='year'>" + randomQuote.year + "</span>";
    }

    // adding ending p tag
    PtoHTML1 += "</p>";

    // logging out properties
    console.log(randomQuote);
    console.log(randomQuote.quote);
    console.log(randomQuote.source);
    console.log(PtoHTML1);

    document.getElementById('quote-box').innerHTML = PtoHTML1;

}



/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click", printQuote);