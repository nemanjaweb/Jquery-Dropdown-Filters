    // all images inside the image modal content class
    const lightboxImages = document.querySelectorAll('.image-modal-content img');
  
    // dynamically selects all elements inside modal popup
    const modalElement = (element) => document.querySelector(`.image-modal-popup ${element}`);
  
    const body = document.querySelector('body');
  
    // closes modal on clicking anywhere and adds overflow back
    document.addEventListener('click', () => {
      body.style.overflow = 'auto';
      modalPopup.style.display = 'none';
    });
  
    const modalPopup = document.querySelector('.image-modal-popup');
  
    // loops over each modal content img and adds click event functionality
    lightboxImages.forEach((img) => {
      img.addEventListener('click', (e) => {
        body.style.overflow = 'hidden';
        e.stopPropagation();
        modalPopup.style.display = 'block';
        modalElement('img').src = img.src;
      });
    });
  
    // Dropdown select
    $('.event-type-select').change(function () {
      let selectedEventType = this.options[this.selectedIndex].value;
      if (selectedEventType == 'all') {
        $('.item').removeClass('hidden');
      } else {
        $('.item').addClass('hidden');
        $('.item[data-filter-name="' + selectedEventType + '"]').removeClass('hidden');
      }
    });
  
    // Media Type select
    $('.media-type-select').change(function () {
      let selectedEventType = this.options[this.selectedIndex].value;
      if (selectedEventType == 'all') {
        $('.item').removeClass('hidden');
      } else {
        $('.item').addClass('hidden');
        $('.item[type="' + selectedEventType + '"]').removeClass('hidden');
      }
    });
  
    // Search filter
    $('[data-search]').on('keyup', function () {
      let searchVal = $(this).val();
      let filterItems = $('[data-filter-item]');
  
      if (searchVal != '') {
        filterItems.addClass('hidden');
        $('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
      } else {
        filterItems.removeClass('hidden');
      }
    });
  
    // Reset btn
    $('.reset').on('click', function () {
      $('#stateSelect').prop('selectedIndex', 0);
      $('.item').removeClass('hidden');
      $('#mediaSelect').prop('selectedIndex', 0);
      $('[data-search]').val('');
    });
  
  