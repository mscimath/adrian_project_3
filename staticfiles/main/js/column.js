const container = document.querySelector('.container');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');

one.addEventListener('mouseenter', () => container.className = 'container hover-one');
one.addEventListener('mouseleave', () => container.className = 'container');

two.addEventListener('mouseenter', () => container.className = 'container hover-two');
two.addEventListener('mouseleave', () => container.className = 'container');

three.addEventListener('mouseenter', () => container.className = 'container hover-three');
three.addEventListener('mouseleave', () => container.className = 'container');

four.addEventListener('mouseenter', () => container.className = 'container hover-four');
four.addEventListener('mouseleave', () => container.className = 'container');

