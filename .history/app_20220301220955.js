const grid=document.querySelector(".grid");
let Move_to=(modal,index,index_,indicator)=>{
  alert(indicator);
            console.log(modal[index],index_,index); 
            modal[index].classList.remove("flex");
            modal[index_].classList.toggle("flex");
            index=index_;
            console.log("new index "+index);
}
async function Data (){

    const res = await fetch('data.json');
 
    const data = await res.json();
   
 
    data.map((data)=>{
        grid.innerHTML +=`<div class="portfolio-items">
        <img src="${data.src}" alt="">
        <ul class="info">
            <li><a href="${data.live}"><img class="link" src="images/link-solid.svg"></a></li>
            <li><a href="${data.code}"><img class="link" src="images/github-brands.svg"></a></li>
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
      //event.preventDefault();
      //console.log(e,index);
       modal[index].classList.toggle("flex");
       let current=index;
         before.addEventListener("click",(f)=>{
         // f.preventDefault();
         console.log("hi before");
          Move_to(modal,current,index-1,"before");
          
       })
         after.addEventListener("click",(g)=>{
          //g.preventDefault();
          Move_to(modal,current,index+1,"after");  
          console.log("hi before");
       })
      // console.log(before,after);
    })
})
}
Data();
