var expandlink = document.querySelector(".expand");
var para = document.querySelector(".para");

expandlink.addEventListener("click", function(event) {

    event.preventDefault(); // Prevents the default action of the link
    para.classList.add("expand"); // Overrides white-space to normal
});