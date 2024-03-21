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

function swithcLang(lang) {
    for (let key in translations[lang]) {
       document.getElementById(key).innerHTML = languageContent[lang][key];
    }
 }

// Add event listeners to language links
document.getElementById('danish').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    swithcLang('danish');
});

document.getElementById('english').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    swithcLang('english');
});

document.getElementById('hungarian').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    swithcLang('hungarian');
});