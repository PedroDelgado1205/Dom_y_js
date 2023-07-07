const darkThemeButton = document.getElementById("darkThemeButton");
    const lightThemeButton = document.getElementById("lightThemeButton");

    darkThemeButton.addEventListener("click", setDarkTheme);
    lightThemeButton.addEventListener("click", setLightTheme);

    function setDarkTheme() {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#fff";
    }

    function setLightTheme() {
        document.body.style.backgroundColor = "#f5f5f5";
        document.body.style.color = "#333";
    }