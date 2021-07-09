
// Modal Code will use later
// document.querySelector('a#open-modal').addEventListener('click', function(event) {
//     event.preventDefault();
//     var modal = document.querySelector('.modal');  // assuming you have only 1
//     var html = document.querySelector('html');
//     modal.classList.add('is-active');
//     html.classList.add('is-clipped');
  
//     modal.querySelector('.modal-background').addEventListener('click', function(e) {
//       e.preventDefault();
//       modal.classList.remove('is-active');
//       html.classList.remove('is-clipped');
//     });
//   });




//Tie Fighter Following Cursor
var cursor = document.getElementById("cursor");

document.onmousemove = function(e){
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY+ "px";
    cursor.style.display = "block";

}

// Burger menu
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
});