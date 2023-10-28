const add_button = document.getElementById("add-btn");
const main = document.getElementById("main");
const container = document.querySelector(".container");
const pageform = document.querySelector(".form");
const form_cancel_button = document.getElementById("form-cancel");
const modal = document.querySelector("[data-modal]");


let book_stack = [];

function Book(name, author) {
    this.name = name;
    this.author = author;
}

function add_book(Book) {
    book_stack.push(Book);
}

function remove_book(btn) {
    container.innerHTML = '';
    const temp = book_stack.find(obj => obj.name == `${btn.getAttribute('data-value')}`);
    book_stack = book_stack.filter(item => item !== temp);
    display_books();
    if (book_stack.length == 0) {
        container.classList.add("hidden")
    }
}

function display_books() {
    book_stack.forEach(book => {

    const new_element = document.createElement("div");
    new_element.classList.add("item");

    new_element.innerHTML = `
        <div>${book.name}</div>
        <div id="item-author">${book.author}</div>
    `;

    const rm_btn = document.createElement("button")
    rm_btn.textContent = "Remove"

    rm_btn.setAttribute('data-value', `${book.name}`)
    rm_btn.setAttribute('class', 'rm_btn')

    rm_btn.addEventListener('click', e => {
        remove_book(rm_btn);
    })

    new_element.appendChild(rm_btn);
    container.appendChild(new_element);
    })

}

form_cancel_button.addEventListener('click', function() {
    document.getElementById("name").value = "";
    document.getElementById("author").value = "";
    modal.close()
}) 

modal.addEventListener('click', e => {
    const dialogDimensions = modal.getBoundingClientRect()
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        document.getElementById("name").value = "";
        document.getElementById("author").value = "";
        modal.close()
    }
})

add_button.addEventListener('click', function () {
    modal.showModal();
})

pageform.addEventListener('submit', function(event) {
    event.preventDefault();
    container.innerHTML = '';
    const book = new Book(document.getElementById("name").value, document.getElementById("author").value);
    book_stack.push(book);
    
    display_books()

    if (book_stack.length > 0) {
        if (container.classList.contains("hidden")) {
            container.classList.remove("hidden")
        }
    }    
    
    document.getElementById("name").value = "";
    document.getElementById("author").value = "";

    modal.close();

})