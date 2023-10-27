const add_button = document.getElementById("add-btn");
const main = document.getElementById("main");
const container = document.querySelector(".container");
const pageform = document.querySelector(".form");
const form_cancel_button = document.getElementById("form-cancel");
const modal = document.querySelector("[data-modal]")


const book_stack = [];

function Book(name, author) {
    this.name = name;
    this.author = author;
}

function add_book(Book) {
    book_stack.push(Book);
}

function remove_book(Book) {
    book_stack = book_stack.filter(item => item !== Book);
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

    const form_name = document.getElementById("name").value;
    const form_author = document.getElementById("author").value;

    const book = new Book(form_name, form_author);

    book_stack.push(book);
    console.log(book_stack)

    const new_element = document.createElement("div");
    new_element.classList.add("item");
    for (i = 0; i < book_stack.length; i++ ) {
        
        new_element.innerHTML = `
            <div>${book_stack[i].name}</div>
            <div>By: ${book_stack[i].author}</div>
        `;

        container.appendChild(new_element);
    }

    if (book_stack.length > 0) {
        if (container.classList.contains("hidden")) {
            container.classList.remove("hidden")
        }
    }

    document.getElementById("name").value = "";
    document.getElementById("author").value = "";

    modal.close();

})
