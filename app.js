const jokeContainer=document.getElementById('joke');
const btn=document.getElementById('btn');
const url="https://v2.jokeapi.dev/joke/Any";

let getJoke=()=>{
    fetch(url).then((data)=>data.json()).then((item)=>{
        console.log(item);
        if(item.type==='single'){
            jokeContainer.innerHTML=`${item.joke}`;
        }
        else{
            const val=`item.setup <br>`
            jokeContainer.innerHTML=`${item.setup}<br><br>${item.delivery}`;
        }
    });
}
btn.addEventListener('click',getJoke);
getJoke();