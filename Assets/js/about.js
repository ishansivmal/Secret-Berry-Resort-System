 // About Us Page JavaScript
 document.addEventListener('DOMContentLoaded', function() {
    // Update page title in the header
    const pageTitle = document.querySelector('.container-text h1');
    if (pageTitle) {
        pageTitle.textContent = 'About Us';
    }
    
    // Update breadcrumb path
    const pagePath = document.querySelector('.page-path p span');
    if (pagePath) {
        pagePath.textContent = 'Home > ';
        pagePath.nextSibling.textContent = 'About Us';
    }
    
    // Optional: Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Optional: Initialize any tooltips
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
});