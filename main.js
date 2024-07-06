document.getElementById("download").addEventListener("click", function() {    
    this.textContent = "Downloading...";
    setTimeout(function() {
        document.getElementById("download").textContent = "Download";
    }, 2000);
});
