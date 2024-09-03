function handlePageVisibility() {
    const originalTitle = document.title;

    const titles = {
        '/': {
            'default': 'We\'re still here | ZiemelRietumu Radio',
            'focus': 'ZiemelRietumu Radio'
        },
        '/lv': {
            'default': 'Mēs vēl esam šeit | ZiemelRietumu Radio',
            'focus': 'ZiemelRietumu Radio'
        },
        '/ru': {
            'default': 'Мы всё ещё здесь | ZiemelRietumu Radio',
            'focus': 'ZiemelRietumu Radio'
        }
    };

    function updateTitleOnVisibilityChange() {
        const path = window.location.pathname;
        const languageTitles = titles[path] || titles['/'];
        
        if (document.hidden) {
            document.title = languageTitles.default;
        } else {
            document.title = languageTitles.focus;
        }
    }

    document.addEventListener('visibilitychange', updateTitleOnVisibilityChange);

    updateTitleOnVisibilityChange();
}

window.onload = handlePageVisibility;