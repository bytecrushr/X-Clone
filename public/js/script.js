
async function main() {

    //Add svg to post button for window less than 1280 or xl
    function addSVG() {
        if (window.innerWidth < 1280) {
            const post_svg = `<svg viewBox="0 0 24 24" fill="black" aria-hidden="true" class="w-6 mx-3 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1472mwg r-lrsllp" style="color: rgb(15, 20, 25);"><g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path></g></svg>`;
            document.querySelector(".post").innerHTML = post_svg;
        } else {
            document.querySelector(".post").innerHTML = `<span class="hidden xl:block">Post</span>`;

        }
    };
    addSVG();
    window.addEventListener("resize", addSVG);



    //toggling for you and Following button on homepage
    document.querySelector(".forYou").addEventListener("click", function () {
        toggleTab(this, document.querySelector(".following"));
    });

    document.querySelector(".following").addEventListener("click", function () {
        toggleTab(this, document.querySelector(".forYou"));
    });

    function toggleTab(activeTab, inactiveTab) {
        // Update active tab
        let activeSpan = activeTab.querySelector("span");
        let activeDiv = activeSpan.querySelector("div");
        activeSpan.style.color = "white";
        activeDiv.style.backgroundColor = "#1D9BF0";

        // Update inactive tab
        let inactiveSpan = inactiveTab.querySelector("span");
        let inactiveDiv = inactiveSpan.querySelector("div");
        inactiveSpan.style.color = "gray";
        inactiveDiv.style.backgroundColor = "transparent";
    }

}

main();