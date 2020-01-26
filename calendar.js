/* ------------- OSCARS DEL ------------- */

function switchToCalendar() {
    if (activeScreen == 2) {
        return;                  // Avslutar funktionen efter 1 gång så det inte kommer fler fönster.
    }

    activeScreen = 2;
    document.getElementById('main-container').innerHTML = '';

    let calendarH2 = document.createElement('h2');
    calendarH2.innerText = 'Calendar';
    document.getElementById('main-container').appendChild(calendarH2);

    weekArr();

    function weekArr() {
        var titles = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        for (var i = 0; i < titles.length; i++) {
        let day = document.createElement('div');
        day.id = 'days';
        day.innerHTML = titles[i];
        document.getElementById('main-container').appendChild(day);
        }
    }
}
