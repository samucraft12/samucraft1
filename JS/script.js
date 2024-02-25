let button = document.getElementById("startLoad");
let load = 0;
let setLoaderSpan = 0;
let loaderSpan = document.getElementById("loader");
loader.innerHTML = load + "%";
let titleVIS = document.getElementById("changableTitle");
button.addEventListener('click', startLoading);

function startLoading() {
    createDivLoad();
    setLoaderSpan = 0;
    load = 1;
    while(load === 1) {
        loaderSpan.innerHTML = setLoaderSpan + "%";
        if(setLoaderSpan == 100) {
            load = 2;
        }
        setLoaderSpan++
    }
}
const mangaTitles = [
    'One Piece',
    'Naruto',
    'Dragon Ball',
    'Attack on Titan',
    'Death Note',
    'Fullmetal Alchemist',
    'Bleach',
    'One Punch Man',
    'My Hero Academia',
    'Tokyo Ghoul',
    'Demon Slayer',
    'Hunter x Hunter',
    'Fairy Tail',
    'Cowboy Bebop',
    'Neon Genesis Evangelion',
    'Dragon Ball Z',
    'JoJo\'s Bizarre Adventure',
    'Berserk',
    'Yu Yu Hakusho',
    'Death Parade',
    'Black Clover',
    'Vinland Saga',
    'Mob Psycho 100',
    'Slam Dunk',
    'Haikyuu!!',
    'Food Wars!',
    'Assassination Classroom',
    'Parasyte',
    'Soul Eater',
    'Blue Exorcist',
    'Akira',
    'Sword Art Online',
    'Gantz',
    'Hellsing',
    'Claymore',
    'Magi: The Labyrinth of Magic',
    'Trigun',
    'Rurouni Kenshin',
    'Inuyasha',
    'The Promised Neverland',
    'Ranma ½',
    'D.Gray-man',
    'Toriko',
    'Yu-Gi-Oh!',
    'Cardcaptor Sakura',
    'Fairy Tail',
    'Gintama',
    'Case Closed (Detective Conan)',
    'Nausicaä of the Valley of the Wind',
    '20th Century Boys',
    'Vagabond',
    'Pluto',
    'Monster',
    'Black Lagoon',
    'Great Teacher Onizuka',
    'JoJo\'s Bizarre Adventure: Golden Wind',
    'Kingdom',
    'The Seven Deadly Sins',
    'Promised Neverland',
    'Your Lie in April',
    'Re:Zero - Starting Life in Another World',
    'Made in Abyss',
    'Death Parade',
    'Ghost in the Shell',
    'Nana',
    'Blue Spring Ride',
    'Death Note',
    'Noragami',
    'Pandora Hearts',
    'Tokyo Ghoul:re',
    'Assassination Classroom',
    'Future Diary',
    'Air Gear',
    'Beck',
    'Princess Jellyfish',
    'A Silent Voice',
    'Orange',
    'March Comes in Like a Lion',
    'Grand Blue',
    'Kakegurui',
    'Ouran High School Host Club',
    'Skip Beat!',
    'Soul Eater',
    'The World God Only Knows',
    'High School of the Dead',
    'Ajin: Demi-Human',
    'The Rising of the Shield Hero',
    'Inuyashiki',
    'The Ancient Magus\' Bride',
    'Citrus',
    'Fruits Basket',
    'A Certain Magical Index',
    'My Youth Romantic Comedy Is Wrong, As I Expected',
    'Horimiya',
    'Jujutsu Kaisen',
    'Dr. Stone',
    'Black Butler',
    'Assassination Classroom',
    'Boruto: Naruto Next Generations',
    'Fire Force',
    'DanMachi'
  ];
let createDivCardOfManga = mangaTitles.includes('Jujutsu Kaisen');
let section = document.getElementById("mangaContainerSection");

function startLoading() {
    setLoaderSpan = 0;
    load = 1;
    const loadingInterval = setInterval(() => {
        loaderSpan.innerHTML = setLoaderSpan + "%";
        if (setLoaderSpan === 100) {
            clearInterval(loadingInterval);
            load = 2;

            // Call createDivLoad after the loading animation is complete
            for (let i = 0; i < 4; i++) {
                createDivLoad();
            }
        
        }
        setLoaderSpan++;
    }, 4); // Adjust the interval for a smoother animation
}

function createDivLoad() {
    // Create a new div element
    let newDiv = document.createElement("div");
    newDiv.classList.add("exploreMangas");

    // Get a random manga title from the array
    let randomIndex = Math.floor(Math.random() * mangaTitles.length);
    let mangaTitle = mangaTitles[randomIndex];

    // Set the HTML content for the new div
    //: ./manga${mangaTitle}.html
    newDiv.innerHTML = `<a href='./mangaVisualizer.html' class='mangaLinks'>${mangaTitle}<img src='./CSS/RESOURCES/OIG2.jpeg' alt='1'></a>`;

    // Append the new div to the section
    section.appendChild(newDiv);
}