window.onwheel = e => {
    if(e.deltaY >= 0){
        window.scrollBy({
            top: 140,
            behavior: 'smooth'
        });
    } else {
        window.scrollBy({
            top: -140,
            behavior: 'smooth'
        });
    }
}
