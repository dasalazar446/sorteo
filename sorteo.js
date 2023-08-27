arrayNames = JSON.parse(sessionStorage.getItem('arrayNames'));

const button = document.getElementById('sorteo');
const name = document.getElementById('name');
const consurso = document.getElementById('consurso');

consurso.style.display = 'none';

button.addEventListener('click', () => {
    consurso.style.display = 'block';
    sorteo();
})



const sorteo = () => {
    let index = 0;
    const interval = setInterval(() => {
        index = Math.floor(Math.random() * arrayNames.length);
        name.innerText = arrayNames[index];
        index++;
    },100)

    setTimeout(() => {
        clearInterval(interval);
    },5000)
}