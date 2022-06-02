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
   
  /**state */
    user = data.map((data)=>{
        grid.innerHTML +=`<div class="portfolio-item-wrap">
        <div class="portfolio-items">
        <div class="overlay ${data.state}"><h4>COMING SOON</h4></div>
        <img src="${data.src}" alt="">
        <ul class="info">
            <li><a href="${data.live}"><img class="link" src="images/link-solid.svg"></a></li>
            <li><a href="${data.code}"><img class="link" src="images/github-brands.svg"></a></li>
        </ul>
      </div>
      <div class="modal">
        <div class="icon">
         <a class="before"><img src="images/previous.svg" alt=""></a>
         <a class="after"><img src="images/next.svg" alt=""></a>
        </div>
        <div class="box">
            <img src="${data.src}" alt="">
        <div class="info-modal">
        <img class="close" src="images/close.svg" alt="">
            <h2>${data.title}</h2>
            <div class="tag">${(data.technologies.map(function(item){ return "<button>"+item+"</button>"}).join(" "))}</div>
            <div class="description">
            <ul>${(data.description.map(function(item){ return "<li>"+item+"</ul>"}).join(" "))}</ul>
            </div>
            <div class="modal-links">
            <a href="${data.live}"><img src="images/GitHub.svg" alt=""></a>
            <a href="${data.code}"><img src="images/GitHub.svg" alt=""></a></div>
        </div>
        </div>
        
        
        </div>`;
        let item_portfolio=document.querySelectorAll(".portfolio-items");
        //console.log(item_portfolio);
        return{tech: data.technologies}
      
    });
    
    let tech_=user.map(t=>t.tech);
    
    let close=document.querySelectorAll(".close");
    let search= document.getElementById("search");
    search.addEventListener("input",(e)=>{
    let value=e.target.value.toLowerCase();
    
     //const visible = user.tech.includes(value);
     tech_.forEach((col,index)=>{
       let visible=col.find(str=>str.toLowerCase().includes(value));
 
       item_portfolio[index].classList.toggle("hidden",!visible);
      })
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
         
         
      })
      portfolio_item.querySelector(".close").addEventListener("click",(ev)=>{
        ev.preventDefault();
        ev.stopPropagation();
        //portfolio_item[index].classList.toggle("hide");
         console.log(ev.target.parentNode.parentNode.parentNode)
         ev.target.parentNode.parentNode.parentNode.classList.remove("flex");
      })
      portfolio_item.querySelector(".after").addEventListener("click",(g)=>{
        g.stopPropagation();
        let current=grid.querySelector(".flex");
       
        let next=current.parentNode.nextElementSibling.lastChild;
        next.classList.add("flex");
        current.classList.remove("flex");
        
     })

    })
  
}
Data();
/**<form>
             <input type="text" placeholder="Name" id="name">
             <input type="text" placeholder="Email" id="email">
             <textarea  placeholder="Message" id="message"></textarea>
             <button type="submit" id="submit">Submit</button>
        </form> */
/**let email_js=()=>{
  var email_prop = {
    to_name:document.getElementById('name').value,
    from_email:document.getElementById('email').value,
    message:document.getElementById('message').value,
  }
  emailjs.send('service_dyh4mg3','template_8bpi00e',email_prop).then((res)=>{
    console.log('success',res.status);
  })
}    

 */
/*let email_js=(e)=>{
  e.preventDefault();
  let name=getValue('name');
  let email=getValue('email');
  let message=getValue('message');
  console.log(name,email,message);
  }*/
  /**,
    appId: "1:1043275925179:web:830fa79c75295bba6fcb9e",
    measurementId: "G-WCLDL5QT69" */
  const firebaseConfig = {
    apiKey: "AIzaSyC0Z8h1PfF-gLf3vhQ_lvnNVRu5ZcKfkZU",
    authDomain: "myportfolio-343216.firebaseapp.com",
    databaseURL: "https://myportfolio-343216-default-rtdb.firebaseio.com",
    projectId: "myportfolio-343216",
    storageBucket: "myportfolio-343216.appspot.com",
    messagingSenderId: "1043275925179"
  };
  firebase.initializeApp(firebaseConfig);
  var messageRef=firebase.database().ref('message');
  let getValue=(element)=>{
     return document.getElementById(element).value;
  }
  let saveMsg=(name, email, message)=>{
    var newMessageRef=messageRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      message:message
    })
  }
document.querySelector("#submit").addEventListener("click",(e)=>{
  e.preventDefault();
  let name=getValue('name');
  let email=getValue('email');
  let message=getValue('message');
  console.log(name,email,message);
  saveMsg(name,email,message);
  });
 
/**collapsing menu */
document.querySelector(".menu").addEventListener("click",
)