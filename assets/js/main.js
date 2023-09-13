function sectionToggle() {
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');
    const section4 = document.getElementById('section4');

    btn1.addEventListener('click', () => {
    section1.classList.add('active');
    section2.classList.remove('active');
    section3.classList.remove('active');
    section4.classList.remove('active');
    });

    btn2.addEventListener('click', () => {
    section1.classList.remove('active');
    section2.classList.add('active');
    section3.classList.remove('active');
    section4.classList.remove('active');
    });
    btn3.addEventListener('click', () => {
    section1.classList.remove('active');
    section2.classList.remove('active');
    section3.classList.add('active');
    section4.classList.remove('active');
    });
    
    btn4.addEventListener('click', () => {
        section1.classList.remove('active');
        section2.classList.remove('active');
        section3.classList.remove('active');
        section4.classList.add('active');
    });
}

sectionToggle();


