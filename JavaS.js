document.addEventListener("DOMContentLoaded", function() {
    // Function to handle "Home", "Experience", "Education", and "Resume" buttons
    function handleMainButtons() {
        // Get references to all main buttons and content elements
        const homeBtn = document.getElementById('HomeBtn');
        const expBtn = document.getElementById('ExpBtn');
        const eduBtn = document.getElementById('EduBtn');

        const homeContent = document.getElementById('Home');
        const expContent = document.getElementById('Exp');
        const eduContent = document.getElementById('Edu');

        // Add click event listeners to each main button
        homeBtn.addEventListener('click', function() {
            showContent(homeContent);
        });

        expBtn.addEventListener('click', function() {
            showContent(expContent);
        });

        eduBtn.addEventListener('click', function() {
            showContent(eduContent);
        });
    }

    // Function to handle "Data" buttons
    function handleDataButtons() {
        // Get references to all data buttons and content elements
        const CBtn = document.getElementById('CBtn');
        const HTMLBtn = document.getElementById('HTMLBtn');
        const CSSBtn = document.getElementById('CSSBtn');
        const PHPBtn = document.getElementById('PHPBtn');
        const JAVABtn = document.getElementById('JAVABtn');

        const CContent = document.getElementById('CContent');
        const HTMLContent = document.getElementById('HTMLContent');
        const CSSContent = document.getElementById('CSSContent');
        const PHPContent = document.getElementById('PHPContent');
        const JAVAContent = document.getElementById('JAVAContent');

        // Add click event listeners to each data button
        CBtn.addEventListener('click', function () {
            showContentD(CContent);
        });

        HTMLBtn.addEventListener('click', function () {
            showContentD(HTMLContent);
        });

        CSSBtn.addEventListener('click', function () {
            showContentD(CSSContent);
        });

        PHPBtn.addEventListener('click', function () {
            showContentD(PHPContent);
        });

        JAVABtn.addEventListener('click', function () {
            showContentD(JAVAContent);
        });
    }

    // Function to show the selected content and hide others
    function showContent(content) {
        // Hide all content elements
        const allContent = document.querySelectorAll('.content');
        allContent.forEach(item => {
            item.style.display = 'none';
        });

        // Show the selected content
        content.style.display = 'block';
    }
        // Function to show the selected content and hide others
    function showContentD(content) {
        // Hide all content elements
        const allContent = document.querySelectorAll('.contentData');
        allContent.forEach(item => {
            item.style.display = 'none';
        });

        // Show the selected content
        content.style.display = 'block';
    }

    // Call the functions to handle buttons
    handleMainButtons();
    handleDataButtons();
});
