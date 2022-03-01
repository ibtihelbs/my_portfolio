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
    console.log(modal);
    item_portfolio.forEach((e,index)=>{
    console.log(index);
    e.addEventListener("click",(event)=>{
       modal[index].style.display="flex";
       let icon=document.querySelector(".icon");
         icon.addEventListener("click",(f)=>{
           console.log('hi');
           let btn=f.target.closest("button");
           /*if(!btn){
               return;
            } else if(btn.includes("after")){
                console.log("yes");
            } else {
                console.log("no");
            }*/
            switch (expr) {
            case 'Oranges':
             console.log('Oranges are $0.59 a pound.');
             break;  
             case 'Mangoes':
             case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

           console.log(btn);
           /**if(btn.includes("after")==true){
              alert("yes");
             }else{
              alert("no");}  */
       })
    })
})
}
Data();
