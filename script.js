const add_button = document.getElementById("add-btn");
const main = document.getElementById("main");
const container = document.querySelector(".container");
const form = document.querySelector(".form");

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



add_button.addEventListener('click', function () {
    main.classList.toggle("blur");
    container.classList.toggle("hidden");
    form.classList.toggle("hidden");

})

