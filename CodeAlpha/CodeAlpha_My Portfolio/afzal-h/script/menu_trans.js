document.getElementById('menu-toggle').addEventListener('click', function () {
    var navMenu = document.getElementById('nav-menu');
    var menuItems = document.querySelectorAll('.about-btn');

    if (navMenu.classList.contains('show')) {
        menuItems.forEach(function (item, index) {
            setTimeout(function () {
                item.classList.remove('show');
            }, (menuItems.length - index - 1) * 100); // Reverse delay of 100ms between each item
        });
        setTimeout(function () {
            navMenu.classList.remove('show');
        }, menuItems.length * 100); // Wait for all items to hide before hiding the menu
    } else {
        navMenu.classList.add('show');
        menuItems.forEach(function (item, index) {
            setTimeout(function () {
                item.classList.add('show');
            }, index * 125); // Delay of 100ms between each item
        });
    }
});