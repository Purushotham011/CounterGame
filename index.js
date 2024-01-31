let count = 0;
const decbtn = document.getElementById('decbtn');
const incbtn = document.getElementById('incbtn');
const resetbtn = document.getElementById('resetbtn');
const countlabel = document.getElementById('countlabel');

//USING EVENT LISTNERS

// decbtn.addEventListener('click', ()=>{
//     count--;
//     countlabel.innerHTML = count;
// })
// incbtn.addEventListener('click', ()=>{
//     count++;
//     countlabel.innerHTML = count;
// })
// resetbtn.addEventListener('click', ()=>{
//     count = 0;
//     countlabel.innerHTML = count;
// })

decbtn.onclick = ()=>{
    count--;
    countlabel.textContent = count;
}
incbtn.onclick = ()=>{
    count++;
    countlabel.textContent = count;
}
resetbtn.onclick = ()=>{
    count=0;
    countlabel.textContent = count;
}