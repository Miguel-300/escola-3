document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("calendarCarousel");
    const currentYear = new Date().getFullYear();
    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    for (let year = currentYear; year < currentYear + 5; year++) {
        for (let month = 0; month < 12; month++) {
            const monthSlide = document.createElement("div");
            monthSlide.className = "calendar-slide";
            monthSlide.innerHTML = `<div class="month">${months[month]} ${year}</div>`;
            
            const daysContainer = document.createElement("div");
            daysContainer.className = "days";
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            
            for (let day = 1; day <= daysInMonth; day++) {
                const dayElement = document.createElement("div");
                dayElement.className = "day";
                dayElement.textContent = day;

                if (year === currentYear && month === new Date().getMonth() && day === new Date().getDate()) {
                    dayElement.classList.add("current-day");
                }

                daysContainer.appendChild(dayElement);
            }

            monthSlide.appendChild(daysContainer);
            carousel.appendChild(monthSlide);
        }
    }

    carousel.style.width = carousel.childElementCount * 100 + "%";

    let currentIndex = 0;

    function showSlide(index) {
        currentIndex = index;
        const offset = -100 * index;
        carousel.style.transform = "translateX(" + offset + "%)";
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carousel.childElementCount;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000);
    showSlide(currentIndex);
});
