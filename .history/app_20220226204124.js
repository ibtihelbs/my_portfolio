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
      </div>`;
      
    });
    
}
Data();
