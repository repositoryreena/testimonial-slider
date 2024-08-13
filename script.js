const img = document.getElementById("img")
const blockquote = document.getElementById("blockquote")
const cite = document.getElementById("cite")

const imgArray = ["https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80", "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80", "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"]
const blockquoteArray = ["This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.", "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.", "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best."]
const citeArray = ["Cherise G", "Rosetta Q", "Constantine V"]

let currentIndex = 0
function changeContent() {
    img.src = imgArray[currentIndex];
    blockquote.innerHTML = `${blockquoteArray[currentIndex]}<br><br><cite>${citeArray[currentIndex]}</cite>`;

    currentIndex = (currentIndex + 1) % imgArray.length; // Loop back to the start

    setTimeout(changeContent, 10000); // Change content every 10 seconds
}

// Start the looping function
changeContent();