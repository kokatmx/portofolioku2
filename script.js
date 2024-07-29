//  untuk navbar tetap diatas
const navbar = document.querySelector("#header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.classList.add("header-scrolled");
    } else {
        navbar.classList.remove("header-scrolled");
    }
});

// untuk mengubah warna navbar ketika scroll
const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + 200;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navbarLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

// jquery
$(document).ready(function () {
    $("#contact-form").submit(function (event) {
        event.preventDefault(); // mencegah  form dari submit default

        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        if (name == "" || email == "" || message == "") {
            alert("Tolong masukkan semua data.");
        } else {
            // $(".alert").hide();
            alert("Pesan Anda telah terkirim. Terima kasih" + " " + name + "!! " + "🫰😊");
        }
    });
});
