window.addEventListener('load', function() {
    var progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(function(bar) {
        var percentage = bar.getAttribute('data-percentage');

        var width =0;
        var interval= setInterval(function() {
            if (width >=percentage) {
                clearInterval(interval);
            } else {
                width++;
                bar.style.width=width + '%';

                bar.nextElementSibling.textContent = width + '%';
            }
        }, 20);
    });
});