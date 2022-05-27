let burgerBtn = document.querySelector('.burger');
let sideBar = document.querySelector('.sidebar');
let pageDarken = document.querySelector('.page');
burgerBtn.addEventListener('click', function(){
	burgerBtn.classList.toggle('active');
    sideBar.classList.toggle('active');
    pageDarken.classList.toggle('active');
});