const add_button = document.getElementById("add-btn");
const main = document.getElementById("main");
const container = document.querySelector(".container");
const pageform = document.querySelector(".form");
const form_cancel_button = document.getElementById("form-cancel");

const book_stack = [];

function Book(name, author, lastpage, finished) {
    this.name = name;
    this.author = author;
    this.lastpage = lastpage;
    this.finished = finished;
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
    container.classList.toggle("hidden");
    pageform.classList.toggle("hidden");
}) 

add_button.addEventListener('click', function () {
    main.classList.toggle("blur");
    container.classList.toggle("hidden");
    pageform.classList.toggle("hidden");

})

