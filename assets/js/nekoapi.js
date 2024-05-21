document.getElementById("mostrar").addEventListener("click", mostrarDatosAPI);

function mostrarDatosAPI() {
    fetch('https://nekos.best/api/v2/neko')
    .then(response => response.json())
    .then(json => {
        const result = json.results[0];
        const imageUrl = result.url;
        const artistName = result.artist_name;
        console.log('Image URL:', imageUrl);
        console.log('Artist Name:', artistName);
        actualizarContenido(imageUrl, artistName);
    })
    .catch(error => console.error('Error:', error));
}

function actualizarContenido(imageUrl, artistName) {
    const contenido = document.querySelector("#contenidos");

    // Limpiar el contenido anterior
    contenido.innerHTML = '';

    // Crear la nueva imagen y el nombre del artista
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'Neko Image';
    image.style.width = '200px';  // Ajustar el tamaño de la imagen
    image.style.height = 'auto';  // Mantener la proporción

    const artist = document.createElement('p');
    artist.textContent = `Artist: ${artistName}`;
    artist.style.fontSize = '10px';  // Ajustar el tamaño del texto
    artist.style.color = 'black';

    // Agregar los nuevos elementos al contenedor
    contenido.appendChild(image);
    contenido.appendChild(artist);
}
