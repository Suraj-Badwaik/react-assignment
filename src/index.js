import {navbar} from '../components/navbar'
console.log('navbar:', {navbar})



let nav = document.getElementById('header')

nav.innerHTML = navbar();

