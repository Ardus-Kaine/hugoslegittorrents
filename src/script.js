//Vars
var btns = document.getElementsByClassName("download");
var downloader = document.getElementsByClassName("downloader")[0];
var overlay = document.getElementsByClassName("overlay")[0];
var progress = document.getElementsByClassName("progress")[0];
var percentage = 0;

//Remove overlay func
overlay.addEventListener("click", function() {
    downloader.classList.add("hidden");
});

//Add click events
for(i=0;i<btns.length;i++) {
    btns[i].addEventListener("click", activeDownloader);
}

//Downloader activated
function activeDownloader() {
    downloader.classList.remove("hidden");
    percentage = 0;
    progress.style.transform = "";
    download();
}
function download() {
    percentage += 1;
    if(percentage < 594) {
        progress.innerHTML = percentage+"%";
        if(percentage < 100) {
            setTimeout(download, 50);
        } else {
            setTimeout(download, 5);
        }
    } else if(percentage < 610){
        progress.innerHTML = progress.innerHTML+" ERROR";
        setTimeout(download, 50);
    } else {
<<<<<<< HEAD
        progress.style.transform = "scale(3) rotateZ(30deg)";
=======
        progress.style.transform = "scale(2) rotateZ(30deg)";
>>>>>>> origin/dev
    }
}
