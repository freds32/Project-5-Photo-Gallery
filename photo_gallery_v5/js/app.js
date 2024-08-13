/*This line sets up an event listener that waits for the entire HTML document to be fully
loaded and parsed before executing the code inside the function.
This ensures that all the HTML elements are available for manipulation when the JavaScript
code runs.

This function call initializes the baguetteBox lightbox plugin on all elements that match the
.gallery selector. The plugin is used to create a lightbox effect, which allows users to click
on gallery images to view them in a larger, overlay format with the ability to navigate between
images.
*/
document.addEventListener('DOMContentLoaded', function () {
    baguetteBox.run('.gallery');




    const searchInput = document.getElementById('search');
    searchInput.addEventListener('keyup', function() {
        const searchValue = searchInput.value.toLowerCase(); // Gets current value of 'searchInput' converts to lowercase for standardization
        document.querySelectorAll('.gallery a').forEach(function(item) { // Selects all <a> tags within '.gallery' and iterates over each one using the 'forEach' method and passed as item to callback function
            const caption = item.getAttribute('data-caption').toLowerCase(); // Retrives 'data-caption' from each item
            if (caption.includes(searchValue)) {  // checks if the caption includes the text entered in searchValue. If it does, the style's display property of the item is set to an empty string (default display mode, making it visible). If it does not, the display property is set to 'none', effectively hiding the item from the gallery.
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
