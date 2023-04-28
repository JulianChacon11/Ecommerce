const carrusel = document.getElementById('carrusel');
const imgsCarrusel = ['../Imgs/captura58.jpg', '../Imgs/tiendas-online.png', '../Imgs/que-es-una-tienda-online-tienda-virtual-o-en-linea-en-monterrey.jpg'];
const url = "https://fakestoreapi.com/products";
const itemsSection = document.getElementById('container-cards')
const modal = document.getElementById('modal');
const modalbody = document.getElementById('modal-body');
let index = 0;

setInterval(() => {
    if (index < imgsCarrusel.length) {
        carrusel.src = imgsCarrusel[index];
        index++;
    } else {
        index = 0;
    }
}, 2000)

async function getApi() {
    let elementos = null;
    try {
        const response = await fetch(url);
        // console.log(response);
        const datos = await response.json();
        elementos = Array.from(datos);
        datos.forEach(element => {
            itemsSection.innerHTML += `
            <div
            id = "card"
            class="flex flex-col w-[300px] bg-white h-[550px] rounded-xl items-center border-2 border-black border-opacity-50 mx-[2%] mt-[50px] sombra">
            <h1 id="card-title" class="card-title text-[20px] max-h-[80px] h-[80px] text-clip text-center overflow-y-scroll font-[400] my-[20px] text-[#525252] no-scrollbar ">${element.title}</h1>
            <div class="h-[35%] w-[100%] px-[5%]">
            <img class=" object-contain h-[100%] w-[100%]" src="${element.image}" alt="">
            </div>
            <p class="h-[200px] max-h-[100px] text-[14px] text-justify overflow-y-scroll no-scrollbar px-[10px] mt-[20px]">${element.description}</p>
            <h2 class="text-[24px] text-[#525252] my-[10px] ">$<span class="precio">${element.price}</span></h2>
            <button id="btn-compra" class="bg-[#04724D] w-[200px] py-[10px] font-[500] btn-compra  rounded-2xl hover:bg-opacity-75">Comprar</button>
          </div>`

        });

    } catch (error) {
        console.log(`Hubo un error ${error}`)
    }
    let selected = null;
    itemsSection.addEventListener('click', (event) => {

        if (event.target.classList.contains('btn-compra')) {
          selected = elementos.filter((element) => {
                return element.title == event.target.parentElement.querySelector('.card-title').textContent
            })
            // console.log(selected);
            modal.style.display = 'flex';
            modalbody.innerHTML = `
            <div
            id = "card"
            class="flex flex-col w-[300px] bg-white h-[550px] rounded-xl items-center border-2 border-black border-opacity-50 mx-[2%] mt-[50px] sombra">
            <h1 id="card-title" class="card-title text-[20px] max-h-[80px] h-[80px] text-clip text-center overflow-y-scroll font-[400] my-[20px] text-[#525252] no-scrollbar ">${selected[0].title}</h1>
            <div class="h-[35%] w-[100%] px-[5%]">
            <img class=" object-contain h-[100%] w-[100%]" src="${selected[0].image}" alt="">
            </div>
            <p class="h-[200px] max-h-[100px] text-[14px] text-justify overflow-y-scroll no-scrollbar px-[10px] mt-[20px]">${selected[0].description}</p>
            <h2 class="text-[24px] text-[#525252] my-[10px] ">$<span class="precio">${selected[0].price}</span></h2>
            <div class="flex w-full gap-x-6 justify-center">
            <button id="btn-compra" class="bg-[#04724D] w-[100px] py-[10px] font-[500] btn-compra rounded-2xl hover:bg-opacity-75">Comprar</button>
            <button id="btn-cancelar" class="bg-[crimson] w-[90px] py-[10px] font-[500] btn-cancelar rounded-2xl hover:bg-opacity-75">Cancelar</button> 
            </div>
            
          </div>`

        }
        
        modal.addEventListener('click', (event) => {
            if (event.target.classList.contains('btn-cancelar')) {
                closeModal();
            } else if (event.target.classList.contains('btn-compra')) {  
               if(confirm(`Esta seguro que desea comprar ${selected[0].title}? `) == true) {
                localStorage.setItem('producto',JSON.stringify(selected))
                window.location.href = "/Html/compra.html";
               } 
            }
        })
    })
}

function closeModal() {
    modal.style.display = 'none';
}
getApi()


// const btnCompra = document.getElementById('btn-compra');

// btnCompra.addEventListener('click', (event) => {

// })


/* <p>${element.description}</p> */