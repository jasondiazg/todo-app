const saveToken = (token) => {
    localStorage.setItem(tokenName, token);
}

const getToken = () => {
    return localStorage.getItem(tokenName);
}

const deleteToken = () => {
    localStorage.removeItem(tokenName);
}

const isAuthenticated = () => {
    return getToken();
}

const checkAuthenticated = () => {
    if (isAuthenticated()) {
        goToHome();
    }
}

const saveUser = (user) => {
    localStorage.setItem(userName, JSON.stringify(user));
}

const getUser = () => {
    return JSON.parse(localStorage.getItem(userName));
}

const deleteUser = () => {
    localStorage.removeItem(userName);
}

const login = () => {
    fetch(loginEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        })
    }).then(response => response.json())
        .then(response => {
            if (!response.error) {
                toast.fire({
                    icon: 'success',
                    title: response.message,
                    onClose: () => {
                        saveToken(response.data);
                        goToHome();
                    }
                });
            } else {
                toast.fire({
                    icon: 'error',
                    title: response.message
                });
            }
        }).catch(() =>
            toast.fire({
                icon: 'error',
                title: unavailableBackend
            })
        );
}

const logout = () => {
    fetch(logoutEndpoint, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${getToken()}`
        }
    }).then(response => response.json())
        .then(response => {
            if (!response.error) {
                toast.fire({
                    icon: 'success',
                    title: response.message,
                    onClose: () => {
                        deleteToken();
                        deleteUser();
                        goToBaseUrl();
                    }
                });
            } else {
                toast.fire({
                    icon: 'error',
                    title: response.message
                });
            }
        }).catch(() =>
            toast.fire({
                icon: 'error',
                title: unavailableBackend
            })
        );
}

const register = () => {
    fetch(registerEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            email: document.getElementById('email').value,
            name: document.getElementById('name').value
        })
    }).then(response => response.json())
        .then(response => {
            if (!response.error) {
                toast.fire({
                    icon: 'success',
                    title: response.message,
                    onClose: () => {
                        goToBaseUrl();
                    }
                });
            } else {
                toast.fire({
                    icon: 'error',
                    title: response.message
                });
            }
        }).catch(() =>
            toast.fire({
                icon: 'error',
                title: unavailableBackend
            })
        );
}

const me = () => {
    fetch(meEndpoint, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${getToken()}`
        }
    }).then(response => response.json())
        .then(response => {
            if (!response.error) {
                saveUser(response.data);
                document.getElementById("username").innerText = response.data.name;
            } else {
                toast.fire({
                    icon: 'error',
                    title: response.message
                });
            }
        }).catch(() =>
            toast.fire({
                icon: 'error',
                title: unavailableBackend
            })
        );
}