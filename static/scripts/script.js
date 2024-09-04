let currentTrackTitle = "ZiemeļRietumu Radio";

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

            currentTrackTitle = nowPlaying;
            scrollingText.innerHTML = "Now Playing: " + nowPlaying;

            if (document.hidden) {
                document.title = nowPlaying;
            } else {
                document.title = "ZiemeļRietumu Radio";
            }
        })
        .catch((error) => {
            console.error("Error fetching now playing data:", error);
        });
}

function handlePageVisibility() {
    function updateTitleOnVisibilityChange() {
        if (document.hidden) {
            document.title = currentTrackTitle;
        } else {
            document.title = "ZiemeļRietumu Radio";
        }
    }

    document.addEventListener(
        "visibilitychange",
        updateTitleOnVisibilityChange
    );
    updateTitleOnVisibilityChange();
}

function loadAll() {
    handlePageVisibility();
    fetchNowPlaying();
}

setInterval(fetchNowPlaying, 5000);

window.onload = loadAll;
