// app constants
const tokenName = "academikToken";
const baseEndpoint = "http://localhost:3001";
const api = "/api";
const loginEndpoint = baseEndpoint + api + "/login";
const logoutEndpoint = baseEndpoint + api + "/logout";
const userEndpoint = baseEndpoint + api + "/user";
const registerEndpoint = baseEndpoint + api + "/register";

const baseUrl = "http://localhost:3000";
const homeUrl = baseUrl + "/app/pages/home.html";
const registerUrl = baseUrl + "/app/pages/register.html";
const unavailableBackend = "Sorry we have troubles to communicate with API. Please, check your internet connection!";

// utils constants
const toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
