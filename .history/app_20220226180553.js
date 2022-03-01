const grid=get

async function Data (){

    const res = await fetch('data.json');
 
    const data = await res.json();
   
 
    data.map((data)=>{
      
      //main.innerHTML +=_html(data);
    });
}