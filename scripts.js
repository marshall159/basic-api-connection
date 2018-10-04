const app = document.getElementById('root');

const logo = document.createElement('img');

logo.src = 'logo.png'

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);


var request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const heading = document.createElement('h1');
            heading.textContent = movie.title;

            const para = document.createElement('p');
            movie.description = movie.description.substring(0, 300);
            para.textContent = `${movie.description}...`

            container.appendChild(card);
            card.appendChild(heading);
            card.appendChild(para);
        });
    } else {
        const errorMessage = document.createElement('h1');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }

    
}

request.send();
