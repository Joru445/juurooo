const scrollContainer = document.querySelector('.main .contents');
const tapHere = document.getElementById("btn");
const audio = document.getElementById("audio");

sensitivity = 2

scrollContainer.addEventListener('wheel', (event) => {
    event.preventDefault();
    scrollContainer.scrollBy({
        left: event.deltaY * sensitivity,
        top: 0,
        behavior: 'smooth'
    });
});

tapHere.addEventListener("click", (event) => {
    audio.play();
    alert("Ughh");
    alert("You look so yumm");
});

const images = ["resources/1a.jpg", "resources/1b.jpg", "resources/1c.jpg", "resources/1d.jpg", "resources/1e.jpg", "resources/1f.jpg"];
        let currentIndex = 0;
        const imgElement = document.getElementById("image");

        function changeImage() {
            imgElement.style.opacity = 0;
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % images.length;
                imgElement.src = images[currentIndex];
                
                imgElement.style.opacity = 1;
            }, 1000);
        }
    setInterval(changeImage, 8000);

const images0 = ["resources/2a.jpg", "resources/2b.jpg", "resources/2c.jpg", "resources/2d.jpg", "resources/2e.jpg", "resources/2f.jpg"];
        let currentIndex0 = 0;
        const imgElement0 = document.getElementById("image0");

        function changeImage0() {
            imgElement0.style.opacity = 0;
            setTimeout(() => {
                currentIndex0 = (currentIndex0 + 1) % images0.length;
                imgElement0.src = images0[currentIndex0];
                
                imgElement0.style.opacity = 1;
            }, 1000);
        }
    setInterval(changeImage0, 8000);

function change() {
    var div = document.getElementById("card2");
    var img = document.getElementById("gif");
    
    if (img.style.display !== "none") {
        img.style.display = "none";
        div.innerHTML = 'kasi bagay ka sa itlog ko <br> ᕙ(  •̀ ᗜ •́  )ᕗ';
    } else {
        alert("Hello");
        img.style.display = "";
        div.innerHTML = 'lugaw <br> ka ba? <img class="stickers" id="gif" src="https://media.tenor.com/kZzow5agOnkAAAAi/flowers.gif">';
    }
}

//https://media.tenor.com/xIEKHAcKvv8AAAAi/sanrio.gif
//https://media.tenor.com/O1Zk8YvgJ-EAAAAi/peach-goma-peach.gif
//https://media.tenor.com/H3ldQhigflkAAAAi/pixel-flower-cute-pixel.gif