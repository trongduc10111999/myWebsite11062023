function menu(x){
    var menu = document.getElementById('menu');
    if (menu.style.display == 'none'){
        menu.style.display = 'block';
        x.src = '/menu-svgrepo-com1.svg';
    }else{
        menu.style.display = 'none';
        x.src = '/menu-svgrepo-com.svg';
    }
}
var arr = ['anh2.jpg','anh3.jpg','anh5.jpg','anh6.jpg','anh7.jpg','anh8.jpg'];
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
setInterval('next()', 7000);
var diaDiem = document.querySelectorAll('.noibat');
console.log(diaDiem[0].children);

