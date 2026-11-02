const text = document.querySelectorAll('.text');
const header = document.querySelector('#header');
const paragraph = document.querySelector('.paragraph');
const buttons = document.querySelectorAll('button');

text.forEach(el => {
    el.style.backgroundColor = 'lime';
    el.style.color = 'white';
    el.style.padding = '10px';
    el.style.margin = '10px';
});

text[1].style.padding = '27px';
text[1].style.margin = '27px';
text[1].style.textAlign = 'justify';
text[0].style.padding = '27px';
text[0].style.margin = '27px';
text[0].style.textAlign = 'justify';

paragraph.forEach(p => {
    p.style.backgroundColor = 'blue';
    p.style.textAlign = 'center';
    p.style.color = 'white';
    p.style.padding = '10px';



});


header.style.backgroundColor = 'red';
header.style.textAlign = 'center';
header.style.color = 'white';


buttons.forEach(btn => {
    btn.style.backgroundColor = 'blue';
    btn.style.padding = '5px 10px';
    btn.style.color = 'white';
    btn.style.border = 'none';
    btn.style.textAlign = 'center';
    
})

buttons.forEach(hover =>{
    btn.style.backgroundColor = 'red';
})