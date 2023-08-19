

const check = document.getElementById('check');
const ul = document.getElementById('ul');
// ul.display='none';
check.addEventListener('click', () => {
    //    console.log('check click');
    if (ul.style.display == 'block') {
        ul.style.display = 'none';
        //    console.log('show click');
    } else {
        ul.style.display = 'block';
        //    console.log('hide click');
    }
})

// const links = document.querySelectorAll('a');

// if (links.length) {
//   links.forEach((link) => {
//     link.addEventListener('click', (e) => {
//       links.forEach((link) => {
//           link.classList.remove('active');
//         //   console.log('cleck')
//       });
//       e.preventDefault();
//       link.classList.add('active');
//     //   console.log('cleck')

//     });
//   });
// }






// back top top

