const getAllTodos = () => {
    fetch(todoEndpoint, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    }).then(response => response.json())
        .then(response => {
            if (!response.error) {
                toast.fire({
                    icon: 'success',
                    title: response.message
                });

                const todos = response.data && response.data.length > 0 ? response.data.map(td => { return { _id: td._id, description: td.description, done: td.done }; }) : [];
                refreshTable(todos);
            } else {
                toast.fire({
                    icon: 'error',
                    title: response.message
                });
            }
        }).catch((error) =>
            toast.fire({
                icon: 'error',
                title: unavailableBackend
            })
        );
}

const deleteTodo = (todo) => {
    fetch(`${todoEndpoint}/${todo._id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    }).then(response => response.json())
        .then(response => {
            if (!response.error) {
                toast.fire({
                    icon: 'success',
                    title: response.message
                });
                getAllTodos();
            } else {
                toast.fire({
                    icon: 'error',
                    title: response.message
                });
            }
        }).catch((error) =>
            toast.fire({
                icon: 'error',
                title: unavailableBackend
            })
        );
}

const saveTodo = (todo) => {
    fetch(todoEndpoint, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${getToken()}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo)
    }).then(response => response.json())
        .then(response => {
            if (!response.error) {
                toast.fire({
                    icon: 'success',
                    title: response.message
                });
                getAllTodos();
            } else {
                toast.fire({
                    icon: 'error',
                    title: response.message
                });
            }
        }).catch((error) =>
            toast.fire({
                icon: 'error',
                title: unavailableBackend
            })
        );
}

const editTodo = (todo) => {
    fetch(todoEndpoint, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${getToken()}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo)
    }).then(response => response.json())
        .then(response => {
            if (!response.error) {
                toast.fire({
                    icon: 'success',
                    title: response.message
                });
                getAllTodos();
            } else {
                toast.fire({
                    icon: 'error',
                    title: response.message
                });
            }
        }).catch((error) =>
            toast.fire({
                icon: 'error',
                title: unavailableBackend
            })
        );
}

const changeStateTodo = (todo) => {
    fetch(`${todoEndpoint}/${todo._id}`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    }).then(response => response.json())
        .then(response => {
            if (!response.error) {
                toast.fire({
                    icon: 'success',
                    title: response.message
                });
                getAllTodos();
            } else {
                toast.fire({
                    icon: 'error',
                    title: response.message
                });
            }
        }).catch((error) =>
            toast.fire({
                icon: 'error',
                title: unavailableBackend
            })
        );
}