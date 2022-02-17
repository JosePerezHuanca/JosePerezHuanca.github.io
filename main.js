//https://randomuser.me/api/?results=10
const url='https://randomuser.me/api/?results=10'
let contenido=document.getElementById('contenido')
function datos(){
fetch(url)
.then(response=>response.json())
.then(data=>mostrar(data))
}
function mostrar(data){
    for (var i=0;i<data.results.length;i++){
         contenido.innerHTML +=`<tr><td>${data.results[i].name.first}</td><td>${data.results[i].name.last}</td><td>${data.results[i].phone}<td><a href="mailto:${data.results[i].email}">${data.results[i].email}</a></td></tr>`
    }
}

datos()