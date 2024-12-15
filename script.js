myWorks = [

]

workTitles = ["Currency Converter", "Password Generator", "Wordle", "Tic Tac Toe", "Battleship", "Sticky Notes", "ToDo App"]
workImages = ["currency_converter.jpeg", "password_generator.jpeg", "Wordle.png", "tic_tac_tow.jpeg", "Battleship.png", "StickyNotes.png", "TodoList.png"]
// workDescription = [
//     "A currency converter app that uses an API for real-time exchange rates. Includes a simple interface to select currencies, input an amount, and display the converted value instantly.",
//     "An application that generates strong passwords with customizable options for allowed characters and an easy-to-use copy feature",
//     "A single-player Wordle game where players guess a five-letter word within six attempts, featuring an intuitive layout and a feedback system to indicate correct, present, or absent letters.",
//     "A two-player Tic-Tac-Toe game where players alternately mark 'X' and 'O' on a grid, aiming to align three in a row horizontally, vertically, or diagonally, with layout design and win, lose, and tie conditions.",
//     "An interactive Battleship game with a clickable grid to reveal battleships or water, featuring a complete game layout and implemented winning and losing conditions.",
//     "An application featuring a dashboard for creating and removing notes, designed to help users effectively organize their thoughts and tasks.",
//     "A functional to-do list app enabling users to create, remove, edit, and manage tasks, including search, featuring a dynamic user interface for seamless task management."

// ]

workDescription = [
    "A sleek currency converter app that uses an API for real-time rates. Select currencies and instantly see the conversion—simple and smooth.",
    "A strong password generator app with customizable character options and a super handy copy feature. Stay secure effortlessly.",
    "The classic Wordle game—guess the five-letter word in six tries, with live feedback on each guess. Can you crack it?",
    "The ultimate two-player Tic-Tac-Toe! Mark 'X' and 'O' and align three in a row to win. Classic gameplay with a stylish layout.",
    "The classic Battleship game written with HTML, CSS, and vanilla JS. Take turns guessing ships and water locations—give it a go!",
    "A handy app with a dashboard for creating, removing, and managing notes. Perfect for organizing your thoughts and tasks on the go.",
    "A dynamic to-do list app for creating, editing, removing, and managing tasks. Stay on top of your game with an intuitive interface."
]

workTitles.forEach((title, index) => {
    myWorks.push({ title: title, imageLink: workImages[index], workDescription: workDescription[index] })
});


addWork = document.getElementById('addWork');
// console.log(addWork)

const viewWorks =(end) => {
    console.log(end)
    addWork.innerHTML = ""

    for(let i=0; i<end; i++ ){
        console.log(i)
        item = myWorks[i];
        
        
    // Create the main container
    const work1Div = document.createElement('div');
    work1Div.className = 'work1';

    // Create the image element
    const workImage = document.createElement('img');
    workImage.className = 'work1-image';
    workImage.src = `images/${item.imageLink}`;

    // Append the image to the main container
    work1Div.appendChild(workImage);

    // Create the content container
    const workContent = document.createElement('div');
    workContent.className = 'work-content';

    // Create and append the h3 element
    const heading3 = document.createElement('h3');
    heading3.textContent = item.title;
    workContent.appendChild(heading3);

    // Create and append the h4 element
    const heading4 = document.createElement('h4');
    heading4.textContent = item.workDescription;
    workContent.appendChild(heading4);
    

    // Create and append the h5 element with a link
    const heading5 = document.createElement('h5');
    heading5.className = 'neetocode-link';
    const link = document.createElement('a');
    // link.href = `/projects/${item.title}/index.html`
    link.href = `/Projects/${item.title}/`;
    link.textContent = 'View Now';
    heading5.appendChild(link);
    workContent.appendChild(heading5);

    // Append the content container to the main container
    work1Div.appendChild(workContent);
    console.log(1)

    // Append the main container to the body (or any other desired parent element)
    addWork.appendChild(work1Div);

}
}

viewWorks(3)

const viewAllWorks = document.getElementById('viewAllWorks');

const handleViewAllWorks = () => {
    viewWorks(myWorks.length)
    viewAllWorks.removeEventListener('click',handleViewAllWorks);
    viewAllWorks.style.display = 'none';

}

viewAllWorks.addEventListener('click',handleViewAllWorks);


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');

    hamburger.addEventListener('click', () => {
        // Toggle active class on hamburger and sidebar
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && 
            !hamburger.contains(event.target) && 
            sidebar.classList.contains('active')) {
            hamburger.classList.remove('active');
            sidebar.classList.remove('active');
        }
    });
});