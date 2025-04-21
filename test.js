document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        cats: [],
        async readCats() {
            this.cats = await getCats();
        }
    }))      
});
  
let cats = [
    {"id":1, "name":"Fluffy", "age":4, "gender":"male"},
    {"id":2, "name":"Cracker", "age":8, "gender":"male"},
    {"id":3, "name":"Luna", "age":13, "gender":"female"},
    {"id":4, "name":"Elise", "age":12, "gender":"female"},
    {"id":5, "name":"Grace", "age":14, "gender":"female"},
    {"id":6, "name":"Pig", "age":11, "gender":"female"},
    {"id":7, "name":"Zelda", "age":1, "gender":"female"},
    {"id":8, "name":"Wednesday", "age":1, "gender":"female"},
];
  
async function getCats() {
    return cats;
}