const lang = localStorage.getItem("language");

useEffect(() => {
    if (!lang) {
        localStorage.setItem("language", "en");
    } else {
        localStorage.getItem("language");
    }
}, []);


export default lang