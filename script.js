const images = ["whale", "shark", "crocodile", "frog", "lobster", "goldfish", "sea_serpent", "tortoise"];

let verifiedImages = [...images, ...images].sort(() => (Math.random() > .5) ? 2 : -1);

verifiedImages.map((item,i) => {
    const box = document.createElement('div'); 
    const img = document.createElement('img');
    img.src = `./assets/${verifiedImages[i]}.jpg`;
    img.alt = item;
    box.appendChild(img);

    box.className = 'item';
    box.dataset.imageId = item;

        box.onclick = function () {
            this.classList.add('boxOpen')
            setTimeout(function () {
                if (document.querySelectorAll('.boxOpen').length > 1) 
                {
                    if (document.querySelectorAll('.boxOpen')[0].dataset.imageId === document.querySelectorAll('.boxOpen')[1].dataset.imageId) 
                    {
                        document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                        document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')
                        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                        document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                        if (document.querySelectorAll('.boxMatch').length === verifiedImages.length) 
                        {
                            alert('Bravo ! Tu as trouvé toutes les paires.')
                        }
                    } else 
                    {
                        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                        document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                    }
                }
            }, 500)
        }
        document.querySelector('.game').appendChild(box);
    }
)