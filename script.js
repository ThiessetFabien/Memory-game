
//  .             0 i       1 i      2 i         3 i    4  i       5 i          6 i         7 i        8i
const images = ["baleine", "requin", "crocodile", "grenouille",
    "homard", "poisson_rouge", "serpent_mer", "tortue"];

const verifiedImages = []


images.map((item, i) => {

    let box = document.createElement('div')

    const url = './assets/' + images[i] + '/.jpg'
    box.className = 'item'
    box.dataset.imageId = images[0].id + i;


    if (images.filter(item[i]) === verifiedImages.filter(item[i])) {
        let double = i + 1
        box.dataset.imageId = images[0].id + double;
    } else {


        // imagesEnCoursDiterations = new Image(75, 75);
        //imagesEnCoursDiterations.src 
        //item, i, console.log()
        // box.appendChild()


        box.onclick = function () {




            this.classList.add('boxOpen')
            setTimeout(function () {
                if (document.querySelectorAll('.boxOpen').length > 1) {
                    if (document.querySelectorAll('.boxOpen')[0].dataset.imageId == document.querySelectorAll('.boxOpen')[1].dataset.imageId) {
                        document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                        document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')
                        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                        document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                        if (document.querySelectorAll('.boxMatch').length == images.length) {
                            alert('win')
                        }
                    } else {
                        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                        document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                    }
                }
            }, 500)
        }

        document.querySelector('.game').appendChild(box);
    }
}


)      