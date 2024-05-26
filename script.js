function calculateProgress() {
    let now = new Date();
    let year = now.getFullYear();
    let firstDay = new Date(year, 0, 1);
    let nbSecs = ((now - firstDay)) / (1000);
    let progress = ((nbSecs/86400 / getNbOfDaysInYear(year)) * 100).toPrecision(9);
    return progress;
}

function getNbOfDaysInYear(year) {
    var res = 365;
    if ((year%4==0 && year%100!=0) || year%400==0) {
        res = 366;
    }
    return res;
}

function updateProgress() {
    const year = document.getElementById('year');
    year.textContent = new Date().getFullYear() + ' is completed at' ;
    const percentage = document.getElementById('percentage');
    percentage.textContent = calculateProgress() + '%';
}

updateProgress();
setInterval(updateProgress, 1);