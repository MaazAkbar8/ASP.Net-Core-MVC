// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('calculatorForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);

        // Submit the form data using fetch or XMLHttpRequest
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'X-Requested-With': 'XMLHttpRequest' // Indicate this is an AJAX request
            }
        })
            .then(response => response.text())
            .then(html => {
                // Replace the current page content with the response HTML
                document.body.innerHTML = html;

                // Clear the input fields and select box
                clearFields();
            })
            .catch(error => console.error('Error:', error));
    });

    function clearFields() {
        // Select all input fields and clear their values
        document.querySelectorAll('.calculator input').forEach(input => input.value = '');
        document.querySelector('.calculator select').selectedIndex = 0; // Reset the select field
    }
});



