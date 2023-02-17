window.addEventListener('scroll' , function(){
    let navbar = this.document.getElementById("menu-bar");

    if(window.pageYOffset >= 135.09){
        // console.log('ok');
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
})