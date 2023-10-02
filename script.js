var istatus = document.querySelector("h5");

var addfrd =document.querySelector("#add");

var check =0;

addfrd.addEventListener('click',function(){

    if(check==0){
    istatus.innerHTML="Friends"
    istatus.style.color="green"
    addfrd.innerHTML="Remove"

    check=1
}else{
    istatus.innerHTML="Strenger"
    istatus.style.color="crimson"
    addfrd.innerHTML="Add Friend"
    check=0

}
});

