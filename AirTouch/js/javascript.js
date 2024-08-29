 
 




document.addEventListener('DOMContentLoaded', function () {
    // Form Submission Handler
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Store form values in session storage (to persist until the page is closed)
            sessionStorage.setItem('name', name);
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('subject', subject);
            sessionStorage.setItem('message', message);

            // Navigate to confirmation screen
            console.log('Navigating to confirmation screen with data:', { name, email, subject, message });
            window.location.href = 'conformationScreen.html';
        });
    }


    // Confirmation Screen Handler
    if (window.location.pathname.endsWith('conformationScreen.html')) {
        console.log('On confirmation screen');
        const confirmName = document.getElementById('confirmName');
        const confirmEmail = document.getElementById('confirmEmail');
        const confirmSubject = document.getElementById('confirmSubject');
        const confirmMessage = document.getElementById('confirmMessage');
        const confirmBtn = document.getElementById('confirmBtn');
        const cancelBtn = document.getElementById('cancelBtn');

        // Retrieve form values from session storage
        const name = sessionStorage.getItem('name');
        const email = sessionStorage.getItem('email');
        const subject = sessionStorage.getItem('subject');
        const message = sessionStorage.getItem('message');

        if (name && email && subject && message) {
            // Display form values in confirmation screen
            console.log('Displaying stored values:', { name, email, subject, message });
            confirmName.textContent = `Name: ${name}`;
            confirmEmail.textContent = `Email: ${email}`;
            confirmSubject.textContent = `Subject: ${subject}`;
            confirmMessage.textContent = `Message: ${message}`;
        } else {
            console.log('No stored values found in session storage');
        }



        // Handle Confirm Button
         
        confirmBtn.addEventListener('click', function () {
            // Clear session storage
            sessionStorage.clear();
            // Navigate to home screen
            console.log('Confirm button clicked. Navigating to home screen.');
            window.location.href = '#'; // Adjust this as needed
           
        });

        // Handle Cancel Button
        cancelBtn.addEventListener('click', function () {
            // Navigate back to contact section
            console.log('Cancel button clicked. Navigating back to contact section.');
            window.location.href = '#';
           
             
             
        });
    }
});

//******************************************************************************************************** */

    // drawer open
function toggleDrawer() {
    document.getElementById('drawer').classList.toggle('open');
}


//drawer closed
function closeDrawer() {
    document.getElementById('drawer').classList.remove('open');
}


//  scrooling manu button



// JavaScript to toggle drawer
function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    const drawerButton = document.querySelector('.drawer-button');

    drawer.classList.toggle('open');

    // Toggle visibility of menu button
    drawerButton.classList.toggle('hidden');
}

// JavaScript to close drawer
function closeDrawer() {
    const drawer = document.getElementById('drawer');
    const drawerButton = document.querySelector('.drawer-button');

    drawer.classList.remove('open');

    // Show menu button
    drawerButton.classList.remove('hidden');
}

 
 