document.addEventListener('DOMContentLoaded', () => {

/*     $(document).ready(function(){
        $('ul.offer__tabs').on('click', 'li:not(.offer__tab_active)', function() {
            $(this)
              .addClass('offer__tab_active').siblings().removeClass('offer__tab_active')
              .closest('div.container').find('div.offer__contant').removeClass('offer__contant_active').eq($(this).index()).addClass('offer__contant_active');
        });
    
        $('ul.recommend__tabs').on('click', 'li:not(.recommend__tab_active)', function() {
            $(this)
              .addClass('recommend__tab_active').siblings().removeClass('recommend__tab_active')
              .closest('div.container').find('div.recommend__contant').removeClass('recommend__contant_active').eq($(this).index()).addClass('recommend__contant_active');
        });
    
    }); */
    
    // Tabs
    
    function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, contantActiveSelector, tabActiveSelector) {
        const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

        function hideTabContent() {
            tabsContent.forEach(item => {
                item.classList.remove(contantActiveSelector);
            });

            tabs.forEach(item => {
                item.classList.remove(tabActiveSelector);
            });
        }

        function showTabContent(i = 0) {
            tabsContent[i].classList.add(contantActiveSelector);
            tabs[i].classList.add(tabActiveSelector);
        }

        hideTabContent();
        showTabContent();

        tabsParent.addEventListener('click', (event) => {
            const target = event.target;

            if(target && target.classList.contains(tabsSelector.slice(1))) {
                tabs.forEach((item, i) => {
                    if(target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    }

    tabs('.offer__tab', '.offer__contant', '.offer__tabs', 'offer__contant_active', 'offer__tab_active');

    tabs('.recommend__tab', '.recommend__contant', '.recommend__tabs', 'recommend__contant_active', 'recommend__tab_active');
    
    // Hamburger
    
    const menu = document.querySelector('.promo__list'),
          menuItem = document.querySelectorAll('.promo__wrapper'),
          hamburger = document.querySelector('.promo__hamburger');
    
    function toggleHamburger() {
        hamburger.classList.toggle('promo__hamburger_active');
        menu.classList.toggle('promo__list_active');
    }
    
    hamburger.addEventListener('click', toggleHamburger);

    menuItem.forEach(item => {
        item.addEventListener('click', toggleHamburger);
    });

    // Timer

    const deadLine = '2023-02-01';

    function getDateDifference(endTime) {
        let days, hours, minutes, seconds;

        const t = Date.parse(endTime) - Date.parse(new Date());

        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            hours = Math.floor(t / (1000 * 60 * 60) % 24);
            minutes = Math.floor(t / (1000 * 60) % 60);
            seconds = Math.floor((t / 1000) % 60);
        }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds'),
              timerInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getDateDifference(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timerInterval);
            }
        }
    }

    setClock('.timer', deadLine);

    //animation

    const bg = document.querySelector('.promo'),
          nav = document.querySelector('.promo__nav'),
          h1 = document.querySelector('.promo__title'),
          h2 = document.querySelector('.promo__subtitle');
    

    window.addEventListener('scroll', () => {
        const scroll = document.documentElement.scrollTop;

        if (scroll > 30) {
            bg.style.backgroundSize = "120%";
            nav.style.opacity = '.2';
            nav.style.translate = "0 -40px";
            nav.style.scale = ".5";
        } else {
            bg.style.backgroundSize = "100%";
            nav.style.cssText = `
                opacity = 1;
                translate = 0;
                scale = 1;
            `;
        }

        if (scroll > 120) {
            h1.style.opacity = '.2';
            h1.style.translate = "0 -40px";
            h1.style.scale = ".5";
        } else {
            h1.style.cssText = `
                opacity = 1;
                translate = 0;
                scale = 1;
            `;
        }

        if (scroll > 250) {
            h2.style.opacity = '.2';
            h2.style.translate = "0 -40px";
            h2.style.scale = ".5";
        } else {
            h2.style.cssText = `
                opacity = 1;
                translate = 0;
                scale = 1;
            `;
        }
    });

    //parallax

    const front = document.querySelectorAll('.travel__div'),
          back = document.querySelector('.travel__img'),
          container = document.querySelector('.travel__photo'),
          sFront = 100,
          sBack = 80;

    container.addEventListener('mousemove', e => {
        const x = e.clientX,
              y = e.clientY;
        
        front.forEach(e => {
            e.style.transform = `
                translate(${x / sFront}%, ${y / sFront}%)
            `;
        });

        back.style.transform = `
            translate(${x / sBack}%, ${y / sBack}%)
        `;
    });

});