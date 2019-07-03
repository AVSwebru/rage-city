(function() {
  headerAdapt();

  function headerAdapt() {
    let headerControls = document.querySelector('.js-header-controls');
    let headerLeftside = document.querySelector('.js-header-leftside');
    let headerRightside = document.querySelector('.js-header-rightside');
    window.addEventListener('DOMContentLoaded', () => {
      if (window.matchMedia('(max-width: 640px)').matches) {
        headerLeftside.appendChild(headerControls);
      } else {
        headerRightside.appendChild(headerControls);
      }
    });
    window.addEventListener('resize', () => {
      if (window.matchMedia('(max-width: 640px)').matches) {
        headerLeftside.appendChild(headerControls);
      } else {
        headerRightside.appendChild(headerControls);
      }
    });
  }
})();
