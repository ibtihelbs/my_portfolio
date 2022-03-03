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
        grid.innerHTML +=`<div class=""
      `;
      
    });
    //let item_portfolio=document.querySelectorAll(".portfolio-items");
    let modal=document.querySelectorAll(".modal");
    //console.log(item_portfolio);
    grid.addEventListener("click",(event)=>{
      let portfolio_item = event.target.closest(".portfolio-items");
      if(!portfolio_item)return;
      console.log(portfolio_item.childNodes);
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
