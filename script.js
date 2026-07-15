/*
    Casey Sharp Art
    Interactive Scene Scripts
*/


document.addEventListener("DOMContentLoaded", () => {



    /*
        Loading screen fallback

        The CSS animation handles the fade,
        this removes it fully afterward.
    */

    const loader = document.getElementById("loading-screen");


    if (loader) {

        setTimeout(() => {

            loader.remove();

        }, 2000);

    }





    /*
        Prevent artwork dragging

        Keeps the painted world feeling like
        an interactive experience rather than
        a collection of downloadable images.
    */


    document.querySelectorAll("img").forEach(image => {


        image.addEventListener("dragstart", event => {

            event.preventDefault();

        });


    });






    /*
        Mobile/touch popup support

        Hover works on desktop.
        Tap toggles popups on phones/tablets.
    */


    const interactiveObjects = document.querySelectorAll(".interactive");



    interactiveObjects.forEach(object => {


        object.addEventListener("click", event => {


            const popup = object.querySelector(".popup");


            if (popup) {


                // If it is a portal link, allow navigation

                if (object.tagName !== "A") {

                    event.preventDefault();

                    popup.classList.toggle("show");

                }


            }


        });



    });







    /*
        Close popups when tapping elsewhere
    */


    document.addEventListener("click", event => {


        if (!event.target.closest(".interactive")) {


            document
            .querySelectorAll(".popup.show")
            .forEach(popup => {

                popup.classList.remove("show");

            });


        }


    });



});
