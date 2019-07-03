(function() {
  headerAdapt();

  function headerAdapt() {
    let headerControls = document.querySelector('.js-header-controls');
    let headerLeftside = document.querySelector('.js-header-leftside');

    if (window.matchMedia('(max-width: 640px)').matches) {
      headerLeftside.appendChild(headerControls);
    }
  }
})();
