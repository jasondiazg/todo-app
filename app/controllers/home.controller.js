let todos = [];

const loadHome = () => {
    if (!isAuthenticated()) {
        window.location.href = baseUrl;
    }
}

const refreshTable = (newTodos) => {
    todos = newTodos ? newTodos : todos;
    let table = document.getElementById("table"),
        tbody = document.getElementById("tbody"),
        tr, td, button;

    if (tbody)
        table.removeChild(tbody);

    tbody = document.createElement("tbody");
    tbody.setAttribute("id", "tbody");
    table.appendChild(tbody);

    todos.forEach((todo) => {
        tr = document.createElement("tr");
        for (todoProperty in todo) {
            td = document.createElement("td");

            if (todo[todoProperty] == true) {
                td.innerHTML = "Done"
            } else if (todo[todoProperty] == false) {
                td.innerHTML = "Pending";
            } else {
                td.innerHTML = todo[todoProperty];
            }
            tr.appendChild(td);
        }
        td = document.createElement("td");

        button = getButton('edit', todo);
        td.appendChild(button);

        button = getButton('delete', todo);
        td.appendChild(button);

        button = getButton('changeState', todo);
        td.appendChild(button);

        tr.appendChild(td);

        tbody.appendChild(tr);
    });
}

const buildTableHeader = () => {
    const table = document.getElementById("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");

    thead.className = "thead-dark";
    table.appendChild(thead);

    todoTableHeaders.forEach(th => {
        const thElement = document.createElement("th");
        thElement.innerHTML = th;
        tr.appendChild(thElement);
    });

    thead.appendChild(tr);
}

const getButton = (type, todo) => {
    const button = document.createElement("button");
    const icon = document.createElement("i");
    const strong = document.createElement("strong");
    button.appendChild(icon);
    button.appendChild(strong);

    switch (type) {
        case 'edit':
            button.addEventListener("click", () => openModal(todo));
            button.className = 'btn btn-primary';
            icon.className = 'fa fa-edit';
            strong.innerText = ' Edit';
            break;

        case 'delete':
            button.addEventListener("click", () => deleteTodo(todo));
            button.className = 'btn btn-danger';
            icon.className = 'fa fa-trash';
            strong.innerText = ' Delete';
            break;

        default:
            button.addEventListener("click", () => changeStateTodo(todo));
            button.className = 'btn btn-warning';
            icon.className = todo.done ? 'fa fa-remove' : 'fa fa-check';
            strong.innerText = todo.done ? ' Pending' : ' Done';
            break;
    }
    return button;
}

const openModal = async (todo = { done: false }) => {
    const { value: description } = await Swal.fire({
        input: 'textarea',
        inputValue: todo && todo.description ? todo.description : "",
        inputPlaceholder: 'What do you have to do...',
        showCancelButton: true
    })

    if (description) {
        todo.description = description;
        if (todo._id) {
            editTodo(todo);
        } else {
            saveTodo(todo);
        }
    }
}

me();
getAllTodos();
buildTableHeader();