console.log('hi');

async function Data (){

    const res = await fetch('data.json');
 
    const data = await res.json();
    console.log(data);
 
    data.map((data)=>{
      
      //main.innerHTML +=_html(data);
    });
}