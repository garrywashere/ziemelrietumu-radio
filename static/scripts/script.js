function handlePageVisibility() {
    const originalTitle = document.title;

    const titles = {
        "/": {
            default: "We're still here | ZiemelRietumu Radio",
            focus: "ZiemelRietumu Radio",
        },
        "/lv": {
            default: "Mēs vēl esam šeit | ZiemelRietumu Radio",
            focus: "ZiemelRietumu Radio",
        },
        "/ru": {
            default: "Мы всё ещё здесь | ZiemelRietumu Radio",
            focus: "ZiemelRietumu Radio",
        },
    };

    function updateTitleOnVisibilityChange() {
        const path = window.location.pathname;
        const languageTitles = titles[path] || titles["/"];

        if (document.hidden) {
            document.title = languageTitles.default;
        } else {
            document.title = languageTitles.focus;
        }
    }

    document.addEventListener(
        "visibilitychange",
        updateTitleOnVisibilityChange
    );

    updateTitleOnVisibilityChange();
}

function fetchNowPlaying() {
    const scrollingText = document.getElementById("scrolling-text");
    const url = "http://89.221.119.103:8000/status-json.xsl";

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const source = data.icestats.source;
            let nowPlaying;

            if (Array.isArray(source)) {
                nowPlaying = source[0].title || "No title available";
            } else {
                nowPlaying = source.title || "No title available";
            }
            scrollingText.innerHTML = "Now Playing: " + nowPlaying;
        })
        .catch((error) => {
            console.error("Error fetching now playing data:", error);
        });
}

function loadAll () {
    handlePageVisibility();
    fetchNowPlaying();
}

window.onload = loadAll;
setInterval(fetchNowPlaying, 1000);
