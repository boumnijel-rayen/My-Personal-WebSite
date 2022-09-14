const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increament = target/400;

        

        if(c < target){
            counter.innerText = `${Math.ceil(c + increament)}`;
            setTimeout(updateCounter, 600);
        }
    };
    updateCounter();
});

