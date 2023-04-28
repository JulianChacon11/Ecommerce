let producto = window.localStorage.getItem('producto')
producto = JSON.parse(producto)
console.log(producto);

let modal = document.getElementById('modal');

console.log(producto[0].title);
modal.innerHTML = `
<div
id = "card"
class="flex flex-col w-[300px] bg-white h-[400px] rounded-xl items-center border-2 border-black border-opacity-50 mt-[50px] mx-[2%] sombra">
<h1 id="card-title" class="card-title text-[20px] max-h-[80px] h-[80px] text-clip text-center font-[400] my-[20px] text-[#525252]">${producto[0].title}</h1>
<div class="h-[35%] w-[100%] px-[5%]">
<img class=" object-contain h-[100%] w-[100%]" src="${producto[0].image}" alt="">
</div>
<h2 class="text-[24px] text-[#525252] my-[10px] ">$<span class="precio">${producto[0].price}</span></h2>
<div class="flex w-full justify-center">
<button id="btn-regresar" class="bg-[blue] text-white mt-[20px] w-[100px] py-[10px] font-[500] btn-regresar rounded-2xl hover:bg-opacity-75">Regresar</button>
</div>
</div>`

let goBack = document.getElementById('btn-regresar');

goBack.addEventListener('click', (event) => {
    if(event.target.classList.contains('btn-regresar')) {
        window.location.href = "/Html/principal.html";
    }
})