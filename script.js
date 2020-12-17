var x = 0;

const tambah = document.querySelectorAll('.tambah');
const kurang = document.querySelectorAll('.kurang');
// var parent = tambah.parentNode.getAttribute("id");


tambah.forEach(function(tbh){
    tbh.addEventListener('click',function(){
        id = this.parentNode.getAttribute("id");
        console.log(id)
        let jumlah = document.querySelector(`.${id}`)
        jumlah.textContent = x++
    })
})

kurang.forEach(function(tbh){
    tbh.addEventListener('click',function(){
        id = this.parentNode.getAttribute("id");
        console.log(id)
        let jumlah = document.querySelector(`.${id}`)
        jumlah.textContent = x--
        if(jumlah.textContent == 0){
            return x = 0;
        }
    })
})


// for(const ttambah of tambah){
//     ttambah.addEventListener('click',function(){
//         id = this.parentNode.getAttribute("id");
//         console.log(id)
//         let jumlah = document.querySelector(`.${id}`)
//         jumlah.textContent = x++
//     })
// }

// for(const tkurang of kurang){
//     tkurang.addEventListener('click',function(){
//         id = this.parentNode.getAttribute("id");
//         console.log(id)
//         let jumlah = document.querySelector(`.${id}`)
//         jumlah.textContent = x--
//         if(jumlah.textContent == 0){
//             return x = 0;
//         }
//     })
// }



// tambah.addEventListener('click',function(){
//     let jumlahKK = document.querySelector('#kk');
//     jumlahKK.textContent = x++
// })

// kurang.addEventListener('click',function(){
//     let jumlahKK = document.querySelector('#kk');
//     jumlahKK.textContent = x--
//     if(jumlahKK.textContent == 0){
//         return x = 0
//     }
// })