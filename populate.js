require('dotenv').config()
// importo conexion a base de datos
const dataBase = require('./config/database')
// importo modelo de city
const City = require('./models/City')

City.create({
    city: "Buenos Aires",
    country: "Argentina",
    photo: "https://c4.wallpaperflare.com/wallpaper/662/782/517/obelisco-de-buenos-aires-argentina-buenos-aires-city-wallpaper-preview.jpg",
    population: "2890151",
    fundation: "1536",
})


City.create({
    city: "Rio de Janeiro",
    country: "Brasil",
    photo: "https://images2.alphacoders.com/946/946722.jpg",
    population: "6748000",
    fundation: "1565",
})

City.create({
    city: "Madrid",
    country: "Spain",
    photo: "https://images5.alphacoders.com/815/815875.jpg",
    population: "3223000",
    fundation: "865",
})


City.create({
    city: "Rome",
    country: "Italy",
    photo: "https://fondosmil.com/fondo/60652.jpg",
    population: "2873000",
    fundation: "753",
})

City.create({
    city: "Venice",
    country: "Italy",
    photo: "https://w0.peakpx.com/wallpaper/647/346/HD-wallpaper-venice-italy-landscape-graphy.jpg",
    population: "261905",
    fundation: "697",
})


City.create({
    city: "Brussels",
    country: "Belgium",
    photo: "https://p4.wallpaperbetter.com/wallpaper/221/423/653/cities-brussels-belgium-grand-palace-wallpaper-preview.jpg",
    population: "181726",
    fundation: " 979",
})

City.create({
    city: "Santiago de chile",
    country: "Chile",
    photo: "https://i0.wp.com/laderasur.com/wp-content/uploads/2017/06/Captura-de-pantalla-2017-06-02-a-las-14.32.14.jpg?ssl=1",
    population: "5614000",
    fundation: "1541",
})


City.create({
    city: "Lima",
    country: "Peru",
    photo: "https://media.istockphoto.com/photos/panoramic-aerial-view-of-miraflores-town-in-lima-peru-picture-id992182190?k=20&m=992182190&s=612x612&w=0&h=KuLYAWsPmy9a8oyDcvRToYJNhx1KxurCniF5Uj1erh0=",
    population: "9674755",
    fundation: "1535",
})

City.create({
    city: "London",
    country: "England",
    photo: "https://fondosmil.com/fondo/15090.jpg",
    population: "8982000",
    fundation: "47",
})


City.create({
    city: "Cardiff",
    country: "Wales",
    photo: "https://p4.wallpaperbetter.com/wallpaper/451/971/669/cardiff-castle-in-wales-wallpaper-preview.jpg",
    population: "363000",
    fundation: "1899",
})


City.create({
    city: "Porto",
    country: "Portugal",
    photo: "https://p4.wallpaperbetter.com/wallpaper/526/773/141/bridge-river-boats-portugal-wallpaper-preview.jpg",
    population: "214349",
    fundation: "1123",
})


City.create({
    city: "Paris",
    country: "France",
    photo: "https://images6.alphacoders.com/703/thumb-1920-703494.jpg",
    population: "2161000",
    fundation: "52",
})