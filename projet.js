const container = document.querySelector('.container');
const color = document.querySelector('input');


const defaltColor = '#774b4b';
container.style.backgroundColor


function onChangeBg(){
    container.style.backgroundColor = `${color.value}`


}