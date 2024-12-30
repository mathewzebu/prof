document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    

    // Form validation and submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            // Simulate form submission
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        let isValid = true;

        if (name === '') {
            alert('Please enter your name.');
            isValid = false;
        }

        if (email === '') {
            alert('Please enter your email.');
            isValid = false;
        } else if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        if (message === '') {
            alert('Please enter a message.');
            isValid = false;
        }

        return isValid;
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    //Dynamic skill bar animation
    const skills = document.querySelectorAll('#skills li');
    const skillsSection = document.getElementById('skills');

    // function animateSkills() {
    //     skills.forEach((skill, index) => {
    //         setTimeout(() => {
    //             skill.style.transform = 'translateX(10px)';
    //             skill.style.opacity = '1';
    //         }, index * 100);
    //     });
    // }

    // Intersection Observer for skill animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillsSection);

    // Typing effect for the tagline
    const tagline = document.querySelector('#about p:nth-child(2)');
    const text = tagline.textContent;
    tagline.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            tagline.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    

    typeWriter();
});