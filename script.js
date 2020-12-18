var x = 0;

const tambah = document.querySelector('.tambah');
const kurang = document.querySelectorAll('.kurang');
// let parent = tambah.parentNode.getAttribute("id");

let makanan = {}

tambah.addEventListener('click',function(){
    id = this.parentNode.getAttribute('id');
    if(id == "kwetiau"){
        x = 0
        jumlah = document.querySelector('.kwetiau')
        jumlah.textContent = x++
    }
})

// kurang.forEach(function(tbh){
//     tbh.addEventListener('click',function(){
//         id = this.parentNode.getAttribute("id");
//         console.log(id)
//         let jumlah = document.querySelector(`.${id}`)
//         jumlah.textContent = x--
//         if(jumlah.textContent == 0){
//             return x = 0;
//         }
//     })
// })