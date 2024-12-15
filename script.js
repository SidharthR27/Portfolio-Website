myWorks = [

]

workTitles = ["Currency Converter", "Password Generator", "Wordle", "Tic Tac Toe", "Battleship", "sticky Notes", "ToDo App"]
workImages = ["currency_converter.jpeg", "password_generator.jpeg", "Wordle.png", "tic_tac_tow.jpeg", "Battleship.png", "StickyNotes.png", "TodoList.png"]

workTitles.forEach((title, index) => {
    myWorks.push({ title: title, imageLink: workImages[index] })
});

console.log(myWorks);

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
    heading4.textContent = "The classic Battleship game that's written using HTML, CSS and vanilla JS. Give it a go!";
    workContent.appendChild(heading4);
    

    // Create and append the h5 element with a link
    const heading5 = document.createElement('h5');
    heading5.className = 'neetocode-link';
    const link = document.createElement('a');
    // link.href = `/projects/${item.title}/index.html`
    link.href = `/Projects/Wordle/`;
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