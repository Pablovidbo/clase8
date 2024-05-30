var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Esta es mi primera vez en Vue',
        see: true,
        pollerias: [
            { nombre: 'Pardos' },
            { nombre: 'Norkys' },
            { nombre: 'Kykos' },
            { nombre: 'La Leña' }
        ],
        discotecas: [
            {
                "nombre": "Travitas Perú",
                "imagen": "img/dis1.jpg",
                "descripcion": "Ambiente amplio y buena comida. Ubicada en Barranco.",
                "ubicacion": "Av. José de la Torre Ugarte 457, Comas 15314"
            },
            {
                "nombre": "Cocodrilo Verde",
                "imagen": "img/dis2.jpg",
                "descripcion": "Show de flashback los sábados. Música de los años 60 en adelante.",
                "ubicacion": "Francisco de Paula Camino 226, Miraflores 15074"
            },
            {
                "nombre": "La Oficina",
                "imagen": "img/dis3.jpg",
                "descripcion": "Ambiente espectacular con música peruana en vivo. Buena comida.",
                "ubicacion": "Av. Aviación 4584, Santiago de Surco 15000"
            },
            {
                "nombre": "Madbar",
                "imagen": "img/dis4.jpg",
                "descripcion": "Hermoso ambiente y buena música. Atención increíble.",
                "ubicacion": "Av. Guardia Civil 727, Lima 15036"
            }
        ]
    }
})