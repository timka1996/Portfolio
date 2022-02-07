window.addEventListener('scroll', function(){
    var navScroll = document.getElementById('nav');
    navScroll.classList.toggle('fixed', window.scrollY > 10)
})
function navBack(){
    var nav = document.getElementById('nav').classList.toggle('change')
}


const body = document.querySelector('body')
const modalViewer = document.querySelector('.modalViewer')
const modalView = document.querySelector('.modalView')


function viewModal(){
    modalView.classList.toggle('view')   
}
function hideModal(){
    modalView.classList.remove('view')
    
}
console.log(modalView);
