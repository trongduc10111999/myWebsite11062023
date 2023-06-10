function menu(x){
    var menu = document.getElementById('menu');
    if (menu.style.display == 'none'){
        menu.style.display = 'block';
        x.src = 'img/menu-svgrepo-com1.svg';
    }else{
        menu.style.display = 'none';
        x.src = 'img/menu-svgrepo-com.svg';
    }
}
var arr = ['img/anh2.jpg','img/anh3.jpg','img/anh5.jpg','img/anh6.jpg','img/anh7.jpg','img/anh8.jpg'];
var index = 0;
function next(){
    index++;
    if (index > 5){
        index = 0;
    }
    document.getElementById('banner-img').src = arr[index];
}
function prev(){
    index--;
    if (index < 0){
        index = 5;
    }
    document.getElementById('banner-img').src = arr[index];
}
setInterval('next()', 6975);
var diaDiem = document.querySelectorAll('.noibat');
console.log(diaDiem[0].children);

