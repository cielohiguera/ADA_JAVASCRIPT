"use strict";
// 9. Ejercicio de Playlist
// Diseña una clase Playlist que contenga propiedades privadas para nombre y
// canciones (un array de títulos de canciones). Implementa métodos para 
// agregar canciones, eliminar canciones y listar todas las canciones en la 
// playlist. Asegúrate de que se imprima un mensaje si se intenta agregar 
// una canción vacía o eliminar una canción que no existe.
class Playlist {
    constructor(nombre) {
        this._canciones = [];
        this._nombre = nombre;
    }
    // Agregar una nueva cancion si no esta vacía
    agregarCancion(titulo) {
        if (!titulo.trim()) {
            console.log("Error: No se puede agregar una canción vacía");
        }
        else {
            this._canciones.push(titulo);
            console.log(`Canciones "${titulo}" agregada a la playlist`);
        }
    }
    // Eliminamos una canción si existe
    eliminarCancion(titulo) {
        const index = this._canciones.indexOf(titulo);
        if (index === -1) {
            console.log(`Error: la canción "${titulo}" no se encuentra en la playlist.`);
        }
        else {
            this._canciones.splice(index, 1);
            console.log(`Canción "${titulo}" eliminada.`);
        }
    }
    listarCanciones() {
        console.log(`Playlist: ${this._nombre}`);
        if (this._canciones.length === 0) {
            console.log("No hay canciones en la playlist.");
        }
        else {
            this._canciones.forEach((cancion, i) => {
                console.log(`${i + 1}. ${cancion}`);
            });
        }
    }
}
const miPlaylist = new Playlist("Favoritas");
miPlaylist.agregarCancion("Imagine - John Lennon");
miPlaylist.agregarCancion(" ");
miPlaylist.agregarCancion("Bohemian Rhapsody - Queen");
miPlaylist.listarCanciones();
miPlaylist.eliminarCancion("Thriller - Michael Jackson");
miPlaylist.eliminarCancion("Imagine - John Lennon");
miPlaylist.listarCanciones();
