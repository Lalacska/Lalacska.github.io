// Define translation texts
var translations = {
    'danish': {
        'header': 'Hej Verden',
        'content': 'Jeg er hostet med GitHub Pages.'
    },
    'english': {
        'header': 'Hello World',
        'content': "I'm hosted with GitHub Pages."
    },
    'hungarian': {
        'header': 'Helló Világ',
        'content': 'A GitHub Pages-en vagyok elhelyezve.'
    }
};

// Function to set language based on selection
function setLanguage(language) {
    document.getElementById('header').innerText = translations[language]['header'];
    document.getElementById('content').innerText = translations[language]['content'];
}

function switchLang(lang) {
    console.log("Switching language to: ", lang);
    for (let key in translations[lang]) {
        document.getElementById(key).innerHTML = translations[lang][key];
    }
}

// Add event listeners to language links
document.getElementById('danish').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    switchLang('danish');
});

document.getElementById('english').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    switchLang('english');
});

document.getElementById('hungarian').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    switchLang('hungarian');
});

document.getElementById("LinkedIn").addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/laura-mezei-a16a831a7/", "_blank");
});

document.getElementById("GithubAccont").addEventListener("click", function () {
    window.open("https://github.com/Lalacska?tab=overview&from=2022-10-01&to=2022-10-31",  "_blank");
});

document.getElementById("Flags").addEventListener("click", function () {
    window.open("https://www.freeflagicons.com/", "_blank");
});

document.getElementById("Inspiration").addEventListener("click", function () {
    window.open("https://www.pascalvangemert.nl/", "_blank");
});

document.getElementById("TicketToRide").addEventListener("click", function () {
    window.open("https://github.com/Lalacska/Ticket-to-Ride", "_blank");
});