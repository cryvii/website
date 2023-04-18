document.addEventListener('DOMContentLoaded', function() {
    let one = document.getElementById('one');
    let two = document.getElementById('two');
    let three = document.getElementById('three');
    let four = document.getElementById('four');
    let five = document.getElementById('five');
    let text = document.getElementById('text');

    window.addEventListener('scroll', function() {
        let value = window.scrollY;
        one.style.top = value * -0.15 + 'px';
        two.style.top = value * -0.25+ 'px';
        three.style.top = value * -0.36 + 'px';
        four.style.top = value * -0.35 + 'px';
        five.style.top = value * -0.15 + 'px';
        text.style.right = value * 0.5 + 'px';
    }) 
 });
  


