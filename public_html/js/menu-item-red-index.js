    // Get the current URL
    const currentURL = window.location.href;
    
    // Check if the URL contains "about.html"
    if (currentURL.includes("index")) {
        // Add the "active" class to the "about" link
        document.getElementById("index-link").classList.add("active");
    }