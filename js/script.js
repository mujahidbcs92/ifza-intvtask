document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = header.nextElementSibling;

        // Toggle active class
        accordionItem.classList.toggle('active');

        // Collapse other accordion items
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = 0;
                item.querySelector('.accordion-content').style.padding = '0 20px';
                // item.querySelector('.accordion-content').style.marginBottom = '0'; // Reset margin
            }
        });

        // Toggle the accordion content
        if (accordionItem.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + '20px';
            accordionContent.style.padding = '20px';
            // accordionContent.style.marginBottom = '20px'; // Add bottom margin
        } else {
            accordionContent.style.maxHeight = 0;
            accordionContent.style.padding = '0 20px';
            // accordionContent.style.marginBottom = '0'; // Reset margin
        }
    });
});



// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top
backToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
