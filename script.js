const icons = document.querySelectorAll('.counter');

icons.forEach(icon => {
    icon.innerText = '0';

    const updateCounter = () => {
        const followerValue = +icon.getAttribute('data-target');
        const followerUpdatedValue = +icon.innerText;
        const increment = followerValue / 200;

        if (followerUpdatedValue < followerValue) {
            icon.innerText = `${Math.ceil(followerUpdatedValue + increment)}`
            setTimeout(updateCounter, 1);
        } else {
            icon.innerText = followerValue;
        }
    }

    updateCounter();
})