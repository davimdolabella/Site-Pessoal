let mobile_icon = document.getElementById('mobile_icon');
let mobile_menu = document.getElementById('mobile_menu');
let open = false;

mobile_icon.onclick = () =>{
    if(open == false){
        open = true;
        mobile_icon.style.backgroundImage = 'url(./img/x.png)';
        mobile_menu.style.display = 'block';
    }else{
        open = false;
        mobile_icon.style.backgroundImage = 'url(./img/menu.png)';
        mobile_menu.style.display = 'none';
    }
};