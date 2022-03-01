const grid=document.querySelector(".grid");

async function Data (){

    const res = await fetch('data.json');
 
    const data = await res.json();
   
 
    data.map((data)=>{
        grid.innerHTML +=`<div class="portfolio-items">
        <img src="${data.src}" alt="">
        <ul class="info">
            <li><a href="${data.live}">Link to website</a></li>
            <li><a href="${data.code}">Link to code</a></li>
        </ul>
      </div>
      <div class="modal">
        <div class="box">
            <img src="${data.src}" alt="">
        <div class="info">
            <h1>${data.title}</h1>
            <div class="tag"><button>tag</button>  <button>tag</button></div>
            <div class="description">
            ${data.title}
            </div>
        <a href=""><img src="images/GitHub.svg" alt=""></a>
        <a href=""><img src="images/GitHub.svg" alt=""></a>
        </div>
        </div>
      `;
      
    });
    let item_portfolio=document.querySelectorAll(".portfolio-items");
console.log(item_portfolio);
item_portfolio.forEach((e,index)=>{
    console.log(index);
    e.addEventListener("click",(event)=>{
       console.log(event, e, index);
    })
})
}
Data();
