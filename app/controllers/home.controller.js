const loadHome = () => {
    if (!isAuthenticated()) {
        window.location.href = baseUrl;
    }
}

me();