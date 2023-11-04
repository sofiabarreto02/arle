// Crear una clase Película con propiedades como título, duración y director. Crear clase CatalogoPeliculas para 
// almacenar películas en una lista. Agregar búsqueda por título y filtrado por director. Probar con un catálogo de 
// películas

class Pelicula {
    titulo: string;
    duracion: number;
    director: string;

    constructor(titulo: string, duracion: number, director: string) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.director = director;
    }
}

class CatalogoPeliculas {
    peliculas: Pelicula[];

    constructor() {
        this.peliculas = [];
    }

    agregarPelicula(pelicula: Pelicula) {
        this.peliculas.push(pelicula);
    }

    buscarPorTitulo(titulo: string): Pelicula | undefined {
        return this.peliculas.find((pelicula) => pelicula.titulo === titulo);
    }

    filtrarPorDirector(director: string): Pelicula[] {
        return this.peliculas.filter((pelicula) => pelicula.director === director);
    }
}

const catalogo = new CatalogoPeliculas();

catalogo.agregarPelicula(new Pelicula("Inception", 148, "Christopher Nolan"));
catalogo.agregarPelicula(new Pelicula("The Matrix", 136, "Lana Wachowski"));

console.log(catalogo.filtrarPorDirector("Lana Wachowski")); 