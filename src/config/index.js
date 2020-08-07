const URL_TOP = window.location.hostname.includes('localhost')
? 'http://localhost:8080'
: 'https://devmemeflix.herokuapp.com'; 

export default {
    URL_TOP,
}