const btn = document.querySelector('.btn');
const car = document.querySelector('.car');
const url = 'https://api.thecatapi.com/v1/images/search';

async function FetchQuotes(){
    try{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    car.src = data[0].url;
    car.style.width = '720px';
    car.style.height = '500px';
    } catch(error){
        console.log("error");
    }
}

btn.addEventListener('click', ()=>{
    FetchQuotes();
    window.scrollTo(0, 0);
});


