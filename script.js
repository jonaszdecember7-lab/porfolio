const languageToggleButton = document.getElementById('language-toggle');

const translations = {
    en: {
        introHeader: "Hi, I'm Jonasz.",
        introParagraph: "Frontend Developer passionate about building clean, accessible web experiences.",
        aboutMe: `I'm a frontend web developer passionate about crafting clean, responsive, and intuitive websites that
are accessible to everyone. I love turning ideas into visually appealing, user-friendly experiences.<br><br>
Currently improving my skills through personal projects and continuous learning. I'm a fast learner excited
to join a team where I can contribute and grow while building awesome products together.<br><br>
When I'm not coding, I'm travelling the world (most recently been to Italy) or spending my time enjoying video games.`,
        contactParagraph: "Feel free to contact me or check out my GitHub!"
    },
    pl: {
        introHeader: "Cześć, jestem Jonasz.",
        introParagraph: "Frontend deweloper, pasjonujący się tworzeniem czystych i dostępnych doświadczeń webowych.",
        aboutMe: `Jestem frontend deweloperem stron internetowych, pasjonującym się tworzeniem czystych, responsywnych i intuicyjnych stron, które są dostępne dla każdego.<br><br>
Uwielbiam przekształcać pomysły w estetyczne i przyjazne dla użytkownika doświadczenia.<br><br>
Obecnie rozwijam swoje umiejętności poprzez projekty osobiste i ciągłą naukę. Szybko się uczę i z entuzjazmem dołączę do zespołu, w którym mogę wnosić wkład i rozwijać się, tworząc razem wspaniałe produkty.<br><br>
Gdy nie programuję, podróżuję po świecie (ostatnio byłem we Włoszech) lub spędzam czas, ciesząc się grami wideo.`,
        contactParagraph: "Skontaktuj się ze mną lub sprawdź mój GitHub!"
    }
}

languageToggleButton.addEventListener('click', function () {
    const lang = languageToggleButton.classList.toggle('polish-language') ? 'pl' : 'en';

    document.querySelector('#intro h1').textContent = translations[lang].introHeader;
    document.querySelector('#intro p').textContent = translations[lang].introParagraph;
    document.querySelector('#about-me-paragraph').innerHTML = translations[lang].aboutMe;
    document.querySelector('#contact .contact-area').previousElementSibling.textContent = translations[lang].contactParagraph;
})