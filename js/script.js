function toggleMenu() {
    var navbarLinks = document.querySelector(".navbar-links");
    var menuIcon = document.querySelector(".menu-icon");
    menuIcon.classList.toggle("change");
    navbarLinks.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function() {
    var loadingScreen = document.getElementById("loading-screen");
    var mainContent = document.getElementById("main-content");
    var loadingVideo = document.getElementById("loading-video");
  
    // Add 'loading' class to body to disable scrolling
    document.body.classList.add("loading");
  
    // Wait for the video to finish loading
    loadingVideo.addEventListener("loadeddata", function() {
      // Show the loading screen for 5 seconds
      setTimeout(function() {
        // Hide the loading screen
        loadingScreen.style.display = "none";
        // Show the main content
        mainContent.style.display = "flex";
        // Start playing the video
        loadingVideo.play();
      }, 4800);
    });
  
    // Enable scrolling after a certain duration
    setTimeout(enableScrolling, 4800);
  
    // Function to enable scrolling
    function enableScrolling() {
      document.body.classList.remove("loading");
    }
  });
  
  
  
  
  
  
  
  
