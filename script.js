// Script implemented by woman dev ---- samuella aglago
// The script begins here
const menu = document.getElementsByClassName("menu-itm");
const icon = document.getElementById("menu_icon");
const menu_list = document.getElementById("menu_list");


//adding a click event listener to icon
icon.addEventListener('click', ()=> {
    if (icon.classList.contains("exit"))
    {
        icon.classList.remove("exit");
        icon.classList.add("reverse_animation");
        menu_list.classList.add("noshow");
    }
    else
    {
        icon.classList.add("exit");
        icon.classList.remove("reverse_animation");
        menu_list.classList.remove("noshow");
        menu_list.classList.add("show");
    }
});
// The script ends here

