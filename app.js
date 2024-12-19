const sendMessage = document.getElementById("send");
const progress = document.getElementById("progress");

var progressXp = 90;


sendMessage.addEventListener("click", function () {
    if (progressXp < 300) {
        progressXp += 40;
    }
    if (progressXp > 300) {
        progressXp = 300;
    }

    console.log(progressXp);

    progress.animate(
        [
            { transform: "translateX(0px)", width: "0px" },
            { transform: `translateX(0px)`, width: `${progressXp}px` },
        ],
        {
            duration: 1000,
            fill: "forwards",
        }
    );

    sendMessage.style.color = "black";

    const sendMessageAnimation = sendMessage.animate(
        [
            { transform: "translateX(0px) scale(1) translateY(0px) rotate(0)" },
            {
                transform:
                    "translateX(300px) scale(0) translateY(-600px) rotate(-200deg) translateX(2000px)",
            },
        ],
        {
            duration: 2000,
            fill: "backwards",
        }
    );

    sendMessageAnimation.finished.then(() => {
        sendMessage.style.color = "white";
    });
});



const img = document.querySelector(".brain-img");

img.addEventListener("transitionend", () => {
    const computedStyle = window.getComputedStyle(img);
    const transform = computedStyle.transform;

    if (transform.includes("matrix")) {
        const scale = parseFloat(transform.split(", ")[0].replace("matrix(", ""));
        if (scale === 1.35) {
            window.location.href = "input.html";
        }
    }
});
