document.getElementById("download").addEventListener("click", function() {    
    this.textContent = "Work In Progress";
    setTimeout(function() {
        document.getElementById("download").textContent = "Work In Progress";
    }, 2000);
});
