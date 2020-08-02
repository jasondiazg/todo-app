// app constants
const tokenName = "academikToken";
const userName = "user";

// backend constants
const base = "http://localhost";
const port = "3001";
const baseEndpoint = `${base}:${port}`;
const api = "api";
const loginEndpoint = `${baseEndpoint}/${api}/login`;
const logoutEndpoint = `${baseEndpoint}/${api}/logout`;
const userEndpoint = `${baseEndpoint}/${api}/user`;
const registerEndpoint = `${baseEndpoint}/${api}/register`;
const meEndpoint = `${baseEndpoint}/${api}/me`;
const todoEndpoint = `${baseEndpoint}/${api}/todo`;

// frontend constants
const baseUrl = "http://localhost:3000";
const homeUrl = baseUrl + "/app/pages/home.html";
const registerUrl = baseUrl + "/app/pages/register.html";
const unavailableBackend = "Sorry we have troubles to communicate with API. Please, check your internet connection!";

// entities constants
const todoTableHeaders = [
    "Id",
    "Description",
    "Done",
    "Actions"
];

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
