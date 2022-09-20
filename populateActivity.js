require('dotenv').config()

const database = require('./config/database')

const activity = require('./models/Activity')



let activities = [
    {   // Venice
        name: "Palazzo Ducale (Doge's Palace)",
        photo: 'https://www.planetware.com/photos-large/I/italy-venice-doges-palace-sea-view.jpg',
        itinerary: '631966ba8b500c669de4cfd8' 
    },
    {
        name: 'Grand Canal by Gondola with commentary',
        photo: 'https://www.tripsavvy.com/thmb/EWjePfNEI9c__4FS4JxVDy5lfE4=/3865x2174/smart/filters:no_upscale()/italy--venice--elevated-view-of-canal-in-city-543346423-59812f179abed50010eeb207.jpg',
        itinerary: '631966ba8b500c669de4cfd8' 
    },
    {
        name: 'Gondola Ride in Venice Bacino Orseolo Rialto',
        photo: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/e1/6f/fb.jpg',
        itinerary: '631966ba8b500c669de4cfd8' 
    },
    {  // Lima MIRAFLOWERS 
        name: 'National museum of fine arts',
        photo: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRHYGX7tvMnml8jlJDJmsBS1_gggRDBoZaMe9ZWKsI2-eKFc_ZYiL0lB_uu1HYZO-MAWtM1WLCFY_blRXZkG2Z89g',
        itinerary: '631966ba8b500c669de4cfe2'
    },
    {
        name: 'main square of lima',
        photo: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSpObdZguwqhhM6UYNgLtBf-cZHnP95eR9VAxP0jV4eHY7XcoAm8R22uJeHJNS856RP_61EQlsv_4e_7up5ybcXVg',
        itinerary: '631966ba8b500c669de4cfe2'
    },
    {
        name: 'Basilica and Convent of San Francisco',
        photo: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRv8iJMSn0q__emkjYlFInMOlgF0YCw1Zk8Yq8VqmxjhcBjVw8qenVowKQ82-TocNwR9Y-Jw9u9ElC_2Siqiq0LWQ',
        itinerary: '631966ba8b500c669de4cfe2'
    },
    { // HISTORICAL CENTER Lima
        name: 'Huaca Pucllana',
        photo: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTLWiaFKM2vTepIRUsuMKsSvDRim_ahMr7crZe11GasImdI9S729fvOZcS5ijuBN5jtUjHUS6-1B6Xs_7B0YZT0Xg',
        itinerary: '631966ba8b500c669de4cfe3'
    },
    {
        name: 'Barranco neighborhood',
        photo: 'https://viajes.nationalgeographic.com.es/medio/2019/11/06/barranco1_f042373f_1080x720.jpg',
        itinerary: '631966ba8b500c669de4cfe3'
    },
    {
        name: 'Miraflores',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRdDUbIMWO2h-J3lxHGdvMYn9dwimsYJd0gOres_-84EzsXYfiTstbagAIL8TKUFv98zEnuo8mdNiwN_K3fcXmQ',
        itinerary: '631966ba8b500c669de4cfe3'
    },
    {
        name: 'Magical Water Circuit',
        photo: 'https://www.viajeroscallejeros.com/wp-content/uploads/2019/12/circuito-magio-agua.jpg',
        itinerary: '631966ba8b500c669de4cfe4'
    },
    {
        name: 'Larco Museum',
        photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSy4kv5UyQL6W9TDB8SzkU3kNm5FFDlODnlyWTNyKyAXUE709MMwFQEhLICRyGkfQZfwaMwhOw30NhVs3ugiHuh-Q',
        itinerary: '631966ba8b500c669de4cfe4'
    },
    {
        name: 'San Martin Plaza',
        photo: 'https://www.viajeroscallejeros.com/wp-content/uploads/2019/12/plaza-san-martin.jpg',
        itinerary: '631966ba8b500c669de4cfe4'
    },
    { // Visit Stadiums in Madrid
        name: 'Santiago Bernabeu Stadium',
        photo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwCG9QgdM9dN_8AyqKUZsFyCJMrxlyY-fxsqAPxn-DjgzaBwz3eAU2jFvMYAaY4ejrqYTn6OeW8OVwbCxd2fRdnA',
        itinerary: '6319978b67afd67c3ab07744'
    },
    {
        name: 'Wanda Metropolitan',
        photo: 'https://todosobremadrid.com/wp-content/uploads/2019/04/39569725004_d47fe7129b_k.jpg',
        itinerary: '6319978b67afd67c3ab07744'
    },
    {
        name: 'Alfonso Perez Coliseum',
        photo: 'https://todosobremadrid.com/wp-content/uploads/2016/05/imagen_0003007266_00040.jpg',
        itinerary: '6319978b67afd67c3ab07744'
    },
    { // Visit Brussels
        name: 'Grand Place',
        photo: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQcJ3g1xaK-NGwIRPONgRsxVkaqXCgHll5QVJQvFgYwEv0Tu_9xui7CgXShkcXxKcnznsJs02kFbyLuAWbLg1TM3Q',
        itinerary: '631966ba8b500c669de4cfd9'
    },
    {
        name: 'Atomium',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI45A8sV-MdbGsL9v-2nKDDntQzykkSaM4oKUjJNRbGZPcWzLrv1ldWbhbC8n9YPyQjIbqudtqS1chp6TDV4VOpw',
        itinerary: '631966ba8b500c669de4cfd9'
    },
    {
        name: 'Manneken Pis',
        photo: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTH7kUQswhDIeYL6SOS7w59fKoKvRB6WgWujvocOTBkQE7ts_fiPHKVkt05oXLd-rcmF9V2Xadw05ma7QU6FTuUaQ',
        itinerary: '631966ba8b500c669de4cfd9'
    },
    { // brussels tour
        name: 'Royal Palace of Brussels',
        photo: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQuGjEXvD009bc2f7euty0GfZCicvRK2dKU8fnEhq6zNvplSoXmPXq2iGgl6MApOZO77JysqwGKz2kX9Jzm03bYBw',
        itinerary: '631966ba8b500c669de4cfda'
    },
    {
        name: 'Royal Museums of Fine Arts of Belgium',
        photo: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRy0uCI3iVJEl1RH7rxquCdWMn6C0WFK9NOSprguDaZj1t5NP2_wfHQLhOO8R7HRwlNG56dMo2dQneky2_jiftSTQ',
        itinerary: '631966ba8b500c669de4cfda'
    },
    {
        name: 'Saint Michael and Saint Gudula Cathedral',
        photo: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRqb30pkTRLtFNyuoaC1sWOHcHMO3tbQ5K-0xMtpFDretnPlFSM1bT3S4dElLLobfA4S_KrafG6jk-Goqa20jyquA',
        itinerary: '631966ba8b500c669de4cfda'
    },
    {  // adventure Santiago de Chile
        name: 'San Cristobal Hill',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0h9rxCTCn0EN_L_JsvWrFxqHFQ3JBCctdUQLSqFAWv0zSnQ9szL0_CefRkQ_Y-iWNVuTnOzskCnDMQQ6at6iJA',
        itinerary: '631966ba8b500c669de4cfdb'
    },
    {
        name: 'coastal sky',
        photo: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTDj01KzawoqigMiCRazovobWv59ZeV1XEMAA7INqwoLN6845H2Hmq7l_BehXCxhZdBrgxXa5DSvm2v4_NRMlRPLw',
        itinerary: '631966ba8b500c669de4cfdb'
    },
    {
        name: 'Santa Lucia Hill',
        photo: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQG7yB-LjIcpF4F332TxbdshL1utjjFotghOsapYb46qhlp1L2SbqU6AV_XgO-Ssa9ghQPNQzOofKW3D0tS-cnkFg',
        itinerary: '631966ba8b500c669de4cfdb'
    },
    { // crossing Santiago de Chile
        name: 'Chilean Museum of Pre-Columbian Art',
        photo: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRBRG_bMZL6kc6qdC1EbO4BC938hTkgYUmeKmV7apOs_xuczPVbuT1p_etaJUqAVje016DVYpKo4JpIPHYs3aYOaA',
        itinerary: '631966ba8b500c669de4cfdc'
    },
    {
        name: 'Main Square',
        photo: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSqnRjXHhtiKAL2DtGorceRxNqSaXJhSNuELchfi7xQHC_L6yqcncC8gbha5kTG0Bc5QwMA5MMYvzULMB4F9ptpQw',
        itinerary: '631966ba8b500c669de4cfdc'
    },
    {
        name: 'Parquemet Santiago Metropolitan Park',
        photo: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQsKWECMrQVxrBpKHz__ytrYeeIHjALuMviytACMtFw30NJS5Sg8oi3tolsbkgZbxH34sDsCAIy86Rpg6BzlVzhYQ',
        itinerary: '631966ba8b500c669de4cfdc'
    },
    { //View of roma
        name: 'Rome Coliseum',
        photo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSqsodn85JD0w-M7U-BpFSwvCcj_XGXejYVMoWU8KyL6KPogCN5Mw_NRY9v3kYN5L3-r1DCz_VdR1YysZta5nO5OQ',
        itinerary: '631966ba8b500c669de4cfd6'
    },
    { 
        name: 'Pantheon of Rome',
        photo: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQIGZ-7hjeoTUQBtl7M2kWjqOJctnsZLEY_aK4KGc2U8RL50u2F3F-SmM4MQBkVy7FzlBcmGYgQrZZd5I0-YT9xTQ',
        itinerary: '631966ba8b500c669de4cfd6'
    },
    { 
        name: 'Fontana di Trevi',
        photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSaa1CggscfvW6Va32UnTQIauRwnMUVnyr8o59TeicL2a1cx5Z_YCuYZvDoFnaOsJWgKN8R5swLbGhPkRf3aE5-Hg',
        itinerary: '631966ba8b500c669de4cfd6'
    },
    { //EIFFEL TOWER Paris
        name: 'Eiffel Tower',
        photo: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTeg5A-v0pkIXd6ujJZZVB2_RCzEggm-Q2D1vz7HJLjX2Yq6avxsdCo-ZYyPNbmvdV-c0X7OOh5XBywDzkelxQGiA',
        itinerary: '631966ba8b500c669de4cfdf'
    },
    { 
        name: 'Louvre Museum',
        photo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZ-I6EFBQAb_3uVrWxzU7D8jEKEHgorvIb0djgKDRjVnWJtCaDsglbCw_dxs1WR9PHDMtTk0E8B5MnqOVAWMCTAw',
        itinerary: '631966ba8b500c669de4cfdf'
    },
    { 
        name: 'Notre Dame Cathedral',
        photo: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSAO32s-s6O43J4eSXlh4QiKp7BaM__lQCwSlzv1KAaEntKwjS1nrMaSsIKZArOLT2y5IbTX4qie99d1P7aCkKO4Q',
        itinerary: '631966ba8b500c669de4cfdf'
    },
    {  // NOTRE DAME CATHEDRAL Paris
        name: 'Paris Arch of Triumph',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQoampQRxxyGjB5ERXi9nTc3YCFd6F8XyNX_w2peRJmn85owFVdD1tiQ3Ny4vGDXF4VnxNAzQi5FCDhn1P-P8DAQ',
        itinerary: '631966ba8b500c669de4cfe0'
    },
    { 
        name: 'Palace of Versailles',
        photo: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRjrI93w_0OE4u81acddNq8J3pEa2Tj43ekfcDTRJ4HN8PDRvqI1TT686TG2mHeRP9ynzrWxz6LMSRK_-6boqxgMA',
        itinerary: '631966ba8b500c669de4cfe0'
    },
    { 
        name: 'Montmartre',
        photo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS399183GqDHQy8iHohgjExPa0ZXLroLDHRNhXE4Was3O73EDWWekCI-CalVnHB0wflF2HQ3KHB-nSZgugeqNxFjg',
        itinerary: '631966ba8b500c669de4cfe0'
    },
    {  // LATIN QUARTER
        name: 'A Paris pantheon',
        photo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMlvjHZ29k-MlD9xDlBbqjXWfJC93VArW_5exFlOzK8tox330lwZLaotWcUUPHdhQ1FgVaK2bb5qkJzO1UsV5bxA',
        itinerary: '631966ba8b500c669de4cfe1'
    },
    { 
        name: 'National Museum of the Middle Ages in Paris',
        photo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRq0Ur51TsWEevxtpBB2wwtNbHX10emFzItGqqO4z7lSwfMdtmR_TayMmuNE0rhziu9ULm-3aBklb7XXMWk6Xuaw',
        itinerary: '631966ba8b500c669de4cfe1'
    },
    { 
        name: 'Great Mosque of Paris',
        photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgKVSNZb7Zx9U_fdFtfVKnxdqkSuSfZnqe2nQelfTlaE9Z6tZutNKjpS2W0Ir7dhGbMKgP_2J6fOx__hS_WyCn6g',
        itinerary: '631966ba8b500c669de4cfe1'
    },
    { //Circuit Buenos Aires
        name: 'Little Path Passage',
        photo: 'https://www.edreams.es/blog/wp-content/uploads/sites/5/2015/02/Caminito-Buenos-Aires.jpg.webp',
        itinerary: '631966ba8b500c669de4cfdd'
    },
    { 
        name: 'Colon Theater',
        photo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQXNl0HFSapRxS9ixUok0KQCrne590WlQvzalPwsySu3wHP2POpb6fu7eNaqvfsCN3jqRwncCUCiDyaJij1-FhXxg',
        itinerary: '631966ba8b500c669de4cfdd'
    },
    { 
        name: 'recoleta cemetery',
        photo: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQWthDJ3kXefFury0YBHC4-QcNjBNGph7mHfRSA5tC-6YmRe5HjvuxbyCZ6nQHFVGKn_0jpXBHIwBEU9FGW3kbneQ',
        itinerary: '631966ba8b500c669de4cfdd'
    },
    { // Buenos Aires
        name: 'May Plaza',
        photo: 'https://www.edreams.es/blog/wp-content/uploads/sites/5/2015/02/Plaza-de-Mayo-Buenos-Aires.jpg.webp',
        itinerary: '631966ba8b500c669de4cfde'
    },
    { 
        name: 'Pink House',
        photo: 'https://www.edreams.es/blog/wp-content/uploads/sites/5/2015/02/Casa-Rosada-en-Buenos-Aires.jpg.webp',
        itinerary: '631966ba8b500c669de4cfde'
    },
    { 
        name: 'Galileo Galilei Planetarium',
        photo: 'https://www.edreams.es/blog/wp-content/uploads/sites/5/2015/02/Planetario-Galileo-Galilei-Buenos-Aires.jpg.webp',
        itinerary: '631966ba8b500c669de4cfde'
    },
    { // london Riverside of the Thames
        name: 'British museum',
        photo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2xQXaZQUnWEG7UrVbtj3IC19BxmkVf-g_TnmciBgRixs2e7mlOzeOFoEZIYhmZCrosdLPV69GCUUA81M3t7giRQ',
        itinerary: '631966ba8b500c669de4cfe6'
    },
    {  
        name: 'Tower of London',
        photo: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSWKZgwpJNceOl3gu66zUXy6r33vG8rKa2ASQyQ4SMs65gO2k4-CjW2YPMGanYHmhmyMAurxMoxQmdVYxDCFjixoA',
        itinerary: '631966ba8b500c669de4cfe6'
    },
    {  // london Covent Garden
        name: 'Buckingham Palace',
        photo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRpDk9T8pPp5Vh-Y7fOPmF7DPqv9PNHntbdgnBJPfTzPzWO2VnoSBbQs3NtLEjOrp4NtwrVtS6yujkCjNKVDOzgOA',
        itinerary: '631966ba8b500c669de4cfe7'
    },
    {  
        name: 'london eye',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPlaN_knWwVFuS__TqX81oWw6FMZhSXNjVSyTh2IUMYcahJAOwTtRiYYcHFY31e8_Cw12QJ6wrq7u7r00qpn93iw',
        itinerary: '631966ba8b500c669de4cfe7'
    },
    {  
        name: "Tower's bridge",
        photo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDSw-HDx9rnQ4pw0tpBXE7a5JBC_8fz-SrMYoouPrqEDUeG0nomiWwjNZiqdHJ71Vgmh4vQ7J_z5hUHg1CNwtvAA',
        itinerary: '631966ba8b500c669de4cfe7'
    },
    {  // visit madrid
        name: "Prado Museum",
        photo: 'https://images.hola.com/imagenes/viajes/20190517142257/guia-practica-museo-prado/0-680-930/museo-nacional-del-prado-madrid-t.jpg?tx=w_744',
        itinerary: '631966ba8b500c669de4cfd7'
    },
    {  
        name: "el escorial monastery",
        photo: 'https://assets.buendiatours.com/s3fs-public/styles/highlight_large/public/2021-02/madrid-que-ver-escorial-guia-viaje-buendiatours.jpg?VersionId=Lk.8mhceIFQpNXliiNoOGlpA6NmCS6pt&itok=AyZI1MlN',
        itinerary: '631966ba8b500c669de4cfd7'
    },
    {  
        name: "el escorial monastery",
        photo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTgi9rfK4LS70tB5ALbA5jf6PVeqGMf5DOAd9gGtDb2JNw-pOTeYoroqxagSvmNmngLsi32YupCIaUBqOPkzxuWjg',
        itinerary: '631966ba8b500c669de4cfd7'
    },
]

activities.forEach ( activi => {
    activity.create({
        name: activi.name,
        photo: activi.photo,
        itinerary: activi.itinerary
    })
})