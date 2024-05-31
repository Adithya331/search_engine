import algoliasearch from "algoliasearch"
const client = algoliasearch("NBHAAPA88S", "51341f322414cc4a018211073e6bafc5");
const index = client.initIndex("search");


var data = []

fetch('https://fakestoreapi.com/products')
            .then((res)=>res.json())
            .then(json=>{
                data = json
                // console.log(data)
                
            })



document.querySelector('#search').addEventListener('keyup',function(){
    var str = document.querySelector('#search').value
    // var farr = data.filter(function(prod){
    //     if((String(prod.title)).toLowerCase().includes(str)){
    //         return true
    //     }
    // })
    //  console.log(farr)
    index
  .search(str)
  .then(({ hits }) => {
    console.log(hits);
    removeitems(hits)
  })
  .catch(err => {
    console.log(err);
  });
    // removeitems(farr)
})


function removeitems(products)
{
    document.querySelectorAll('.result').forEach(prod=>{
        prod.remove();
    })
    renderItems(products);
    
}

function renderItems(products){
    var root = document.querySelector('.results')

    products.forEach(prod=>{
        var div = document.createElement('div')
        div.className = 'result'
        var img = document.createElement('img')
        var h4 = document.createElement('h4')
        var p = document.createElement('p')
        var button = document.createElement('button')
        img.src = prod.image
        h4.textContent = prod.title
        p.innerHTML = '$'+ prod.price
        button.textContent = 'Purchase'

        div.append(img);
        div.append(h4);
        div.append(p);
        div.append(button);

        root.appendChild(div)

    })

   

    
    
    
}

