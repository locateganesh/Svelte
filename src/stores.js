import { writable } from 'svelte/store';

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
    },
    {
        id: 2,
        rating: 5,
        text: "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño."
    },
    {
        id: 3,
        rating: 2,
        text: "Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio."
    }
]);