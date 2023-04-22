var container=document.createElement("div")
container.className="container";
var row = document.createElement("div")
row.classList.add("row","m-3")
var res=fetch("https://restcountries.com/v3.1/all")
res.then((data)=>data.json()).then((data1)=>foo(data1))
container.append(row)
function foo(data1){
    for(var i=0; i<data1.length;i++){
        row.innerHTML+=`
        <div class="col-md-4">
        <div class="card border-primary mb-3" style="width: 18rem;, background-color: linear-gradient(135deg, rgb(146, 136, 89), rgb(116, 90, 90));">
        <div class="card-header">${data1[i].name.common}</div>
        <img src="${data1[i].flags.svg}" class="card-img-top" alt="" height=100px>
        <div class="card-body">
          Capital : ${data1[i].capital}
        </div> 
        <div class="card-body">
          Region : ${data1[i].region}
        </div>
        <div class="card-body">
          Contury Code : ${data1[i].cioc}
        </div>
        <div
          <a href="#" class="btn btn-primary">Click for Weather</a>
        </div>
        </div>  `
        document.body.append(container)
    }
}