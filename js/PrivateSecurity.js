document.querySelectorAll('.menu-list li').forEach(item => {
            item.addEventListener('click', () => {

                document.querySelectorAll('.menu-list li').forEach(li => li.classList.remove('active'));


                item.classList.add('active');


                const icon = item.getAttribute('data-icon');
                const text = item.getAttribute('data-text');
                document.querySelector('.menu-content img').src = icon;
                document.querySelector('.menu-content p').textContent = text;
            });
        });