const grid=document.querySelector(".grid");
let user=[];
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
   
 
    user = data.map((data)=>{
        grid.innerHTML +=`<div class="portfolio-item-wrap">
        <div class="portfolio-items">
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
        <div class="info-modal">
            <h1>${data.title}</h1>
            <div class="tag">${(data.technologies.map(function(item){ return "<button>"+item+"</button>"}).join(" "))}</div>
            <div class="description">
            ${data.description}
            </div>
        <a href="${data.live}"><img src="images/GitHub.svg" alt=""></a>
        <a href="${data.code}"><img src="images/GitHub.svg" alt=""></a>
        </div>
        </div>
        
        
        </div>`;
        return{tech : data.technologies}
      
    });
    console.log(user)
    let search= document.getElementById("search");
    search.addEventListener("input",(e)=>{
    let value=e.target.value;
     const visible = user.tech
    })

    let item_portfolio=document.querySelectorAll(".portfolio-items");
    let modal=document.querySelectorAll(".modal");
       
    item_portfolio[0].parentNode.querySelector(".before").style.display="none";
    item_portfolio[item_portfolio.length-1].parentNode.querySelector(".after").style.display="none";
    grid.addEventListener("click",(event)=>{
      event.preventDefault();
      let portfolio_item = event.target.closest(".portfolio-item-wrap");
      if(!portfolio_item)return;
      portfolio_item.lastChild.classList.add("flex");

       portfolio_item.querySelector(".before").addEventListener("click",(f)=>{
       f.stopPropagation();
       let current=grid.querySelector(".flex");
       
       let next=current.parentNode.previousElementSibling.lastChild;
       next.classList.add("flex");
       current.classList.remove("flex");
       console.log(next,current);
         
         
      })
      
      portfolio_item.querySelector(".after").addEventListener("click",(g)=>{
        g.stopPropagation();
        let current=grid.querySelector(".flex");
       
        let next=current.parentNode.nextElementSibling.lastChild;
        next.classList.add("flex");
        current.classList.remove("flex");
        
     })
    })
   /* item_portfolio.forEach((e,index)=>{
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
         // Move_to(modal,current,index+1,"after");  
          console.log("hi after");
       })
      // console.log(before,after);
    })
})*/
}
Data();
