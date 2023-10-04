const add_button = document.getElementById("add-btn");
const main = document.getElementById("main");
const container = document.querySelector(".container");
const pageform = document.querySelector(".form");
const form_cancel_button = document.getElementById("form-cancel");


const book_stack = [];

function Book(name, author, lastpage) {
    this.name = name;
    this.author = author;
    this.lastpage = lastpage;
    this.change_page = function(new_page) {
        this.lastpage = new_page;
    }
}

function add_book(Book) {
    book_stack.push(Book);
}

function remove_book(Book) {
    book_stack = book_stack.filter(item => item !== Book);
}

form_cancel_button.addEventListener('click', function() {
    main.classList.toggle("blur");
    if (book_stack.length > 0) {
        container.classList.toggle("hidden"); 
    }
    pageform.classList.toggle("hidden");
}) 

add_button.addEventListener('click', function () {
    main.classList.toggle("blur");
    if (book_stack.length > 0) {
        container.classList.toggle("hidden"); 
    }
    pageform.classList.toggle("hidden");

})

pageform.addEventListener('submit', function(event) {
    event.preventDefault();

    const form_name = document.getElementById("name").value;
    const form_author = document.getElementById("author").value;
    const form_lastpage = document.getElementById("lastpage").value;

    const book = new Book(form_name, form_author, form_lastpage);

    book_stack.push(book);

    const new_element = document.createElement("div");
    new_element.classList.add("item");
    for (i = 0; i < book_stack.length; i++ ) {
        
        new_element.innerHTML = `
            <div>${book_stack[i].name}</div>
            <div>By: ${book_stack[i].author}</div>
            <div>Stopped at: ${book_stack[i].lastpage}</div>
        `;

        container.appendChild(new_element);
    }

    main.classList.toggle("blur");
    if (book_stack.length > 0) {
        container.classList.toggle("hidden"); 
    }
    pageform.classList.toggle("hidden");

    document.getElementById("name").value = "";
    document.getElementById("author").value = "";
    document.getElementById("lastpage").value = "";
    document.getElementById("finished").value = "";

})
