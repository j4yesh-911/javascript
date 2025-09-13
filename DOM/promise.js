   
 const dataa= async()=>{

    try {
   const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);

let table =document.createElement("table")
        table.style.border = "1px solid black";
        table.style.borderCollapse = "collapse";

let thead = document.createElement("thead")
let tr= document.createElement("tr")
Object.keys( data[0]).forEach(element => {
let th = document.createElement("th")
th.textContent=element

      th.style.border = "1px solid black";
          th.style.padding = "5px";

 tr.appendChild(th)
});
thead.appendChild(tr)
table.appendChild(thead)
let tbody=document.createElement('tbody')
data.forEach(element=>{
    let tr2=document.createElement('tr')
    Object.values(element).forEach(itemm=>{
        let td = document.createElement('td')
        td.textContent= itemm

        td.style.border = "1px solid black";
          td.style.padding = "5px";

        tr2.appendChild(td)
    })
    tbody.appendChild(tr2)
})
 table.appendChild(tbody)    ///////////////////
document.body.appendChild(table)
 

    } catch (error) {
        console.log("erroorr")
    }

 }


dataa();

