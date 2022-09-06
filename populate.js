require('dotenv').config()
// importo conexion a base de datos
const dataBase = require('./config/database')
// importo modelo de city
const City = require('./models/City')

cities = [
    {
        city: "Buenos Aires",
        country: "Argentina",
        photo: "https://c4.wallpaperflare.com/wallpaper/662/782/517/obelisco-de-buenos-aires-argentina-buenos-aires-city-wallpaper-preview.jpg",
        population: "2890151",
        fundation: "1536",
        information:"Its cultural facet is reflected in the large number and variety of museums, theaters, art galleries and libraries."
    },
    {
        city: "Rio de Janeiro",
        country: "Brasil",
        photo: "https://images2.alphacoders.com/946/946722.jpg",
        population: "6748000",
        fundation: "1565",
        information:"World-renowned for the statue of Christ the Redeemer, the Sugar Loaf, the extraordinary beaches of Copacabana and Ipanema, the Tijuca National Park, the Maracana stadium, its famous carnivals.",
    },
    {
        city: "Madrid",
        country: "Spain",
        photo: "https://images5.alphacoders.com/815/815875.jpg",
        population: "3223000",
        fundation: "865",
        information:"Capital of Spain and commonly known as Villa y Corte, Madrid is the largest city in the country and the second largest in the European Union, with a population of more than 3 million inhabitants.", 
    },
    {
        city: "Rome",
        country: "Italy",
        photo: "https://fondosmil.com/fondo/60652.jpg",
        population: "2873000",
        fundation: "753",
        information:"Rome is an Italian city, capital of the Lazio region and of Italy. With a population of 2,815,951 inhabitants, it is the most populous municipality in Italy and the third most populous city in the European Union.",

    },
    {
        city: "Venice",
        country: "Italy",
        photo: "https://w0.peakpx.com/wallpaper/647/346/HD-wallpaper-venice-italy-landscape-graphy.jpg",
        population: "261905",
        fundation: "697",
        information: "Located in a marshy lagoon in the Adriatic Sea, between the mouths of the Po and Piave rivers, the city of Venice is made up of 120 small islands, connected to each other by hundreds of bridges, rivers and canals.",
    },
    {
        city: "Brussels",
        country: "Belgium",
        photo: "https://p4.wallpaperbetter.com/wallpaper/221/423/653/cities-brussels-belgium-grand-palace-wallpaper-preview.jpg",
        population: "181726",
        fundation: " 979",
        information:"Located in a marshy lagoon in the Adriatic Sea, between the mouths of the Po and Piave rivers, the city of Venice is made up of 120 small islands, connected to each other by hundreds of bridges, rivers and canals.",
    },
    {
        city: "Santiago de chile",
        country: "Chile",
        photo: "https://i0.wp.com/laderasur.com/wp-content/uploads/2017/06/Captura-de-pantalla-2017-06-02-a-las-14.32.14.jpg?ssl=1",
        population: "5614000",
        fundation: "1541",
        information:"Santiago is the political and social capital of Chile, where more than 7 million people live together in an environment that mixes history and modernity. It is surrounded by two mountain ranges, which make it a unique city in the world.",
    },
    {
        city: "Lima",
        country: "Peru",
        photo: "https://media.istockphoto.com/photos/panoramic-aerial-view-of-miraflores-town-in-lima-peru-picture-id992182190?k=20&m=992182190&s=612x612&w=0&h=KuLYAWsPmy9a8oyDcvRToYJNhx1KxurCniF5Uj1erh0=",
        population: "9674755",
        fundation: "1535",
        information:"It is located on the central coast of the country, on the shores of the Pacific Ocean, forming an extensive and populous urban area known as Metropolitan Lima, flanked by the coastal desert and extending over the valleys of the Chillón, Rímac and Lurín rivers.",
    },
    {
        city: "London",
        country: "England",
        photo: "https://fondosmil.com/fondo/15090.jpg",
        population: "8982000",
        fundation: "47",
        information:"This emblematic city is located in the southeast of England, right on the two banks of the River Thames. Founded as Londinium in the year 43, it is one of the most populated cities in Europe, and we would say that in the world.",
    },
    {
        city: "Cardiff",
        country: "Wales",
        photo: "https://p4.wallpaperbetter.com/wallpaper/451/971/669/cardiff-castle-in-wales-wallpaper-preview.jpg",
        population: "363000",
        fundation: "1899",
        information:"Cardiff (Caerdydd in Welsh) is the capital of Wales and its largest city, as well as the most important commercial, cultural, sports, educational and media center in the country.",
    },
    {
        city: "Porto",
        country: "Portugal",
        photo: "https://p4.wallpaperbetter.com/wallpaper/526/773/141/bridge-river-boats-portugal-wallpaper-preview.jpg",
        population: "214349",
        fundation: "1123",
        information:"Porto is the second largest and most populous city in Portugal after Lisbon, with nearly 250,000 inhabitants in its urban center and one and a half million in its metropolitan area.",

    },
    {
        city: "Paris",
        country: "France",
        photo: "https://images6.alphacoders.com/703/thumb-1920-703494.jpg",
        population: "2161000",
        fundation: "52",
        information:"A splendid, vibrant city, a city of fashion and great gourmets, a city of wide avenues and splendor squares, monuments and historic buildings, the best museums",
    }
    
]

cities.forEach( city => {
    City.create({
        city: city.city,
        country: city.country,
        photo: city.photo ,
        population: city.population,
        fundation: city.fundation,
        information: city.information
    })
});