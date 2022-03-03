const grid=document.querySelector(".grid");
let Move_to=(modal,index,index_,indicator)=>{
  alert(indicator);
            console.log(modal[index],index_,index); 
            modal[index].style.display="none";
            modal[index_].style.display="flex";
}
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
        <div class="icon">
         <button class="before">before</button>
         <button class="after">after</button>
        </div>
        <div class="box">
            <img src="${data.src}" alt="">
        <div class="info">
            <h1>${data.title}</h1>
            <div class="tag">${(data.technologies.map(function(item){ return "<button>"+item+"</button>"}).join(" "))}</div>
            <div class="description">
            ${data.description}
            </div>
        <a href="${data.live}"><img src="images/GitHub.svg" alt=""></a>
        <a href="${data.code}"><img src="images/GitHub.svg" alt=""></a>
        </div>
        </div>
      `;
      
    });
    let item_portfolio=document.querySelectorAll(".portfolio-items");
    let modal=document.querySelectorAll(".modal");
    console.log(item_portfolio);
    item_portfolio.forEach((e,index)=>{
      let before=document.querySelector(".before");
      let after=document.querySelector(".after");
    //console.log(index);
    e.addEventListener("click",(event)=>{
      event.prevent
      //console.log(e,index);
       modal[index].style.display="flex";
         before.addEventListener("click",(f)=>{
          f.preventDefault();
          Move_to(modal,index,index-1,"before");
          
       })
         after.addEventListener("click",(g)=>{
          g.preventDefault();
          Move_to(modal,index,index+1,"after");  

       })
      // console.log(before,after);
    })
})
}
Data();
