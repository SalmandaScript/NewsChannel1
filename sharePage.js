//function to share page
      var btn = document.getElementById("btn");  
     btn.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      title: 'WebShare API Demo',
      url: 'https://salmandascript.github.io/NewsChannel/index.html'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    shareDialog.classList.add('is-open');
  }
});
//end function to share page       