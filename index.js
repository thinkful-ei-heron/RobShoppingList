'use strict';
function listen() {
  $('#js-shopping-list-form').on('click', 'button', function(event) {
    event.preventDefault();
    let item = $(this).find('#shopping-list-entry');
    if (item.val() !== '') {
      $('.shopping-list').append(makeNewItem(item.val()));
    }
  });

  function makeNewItem() {
    return `<li>
    <span class="shopping-item">apples</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
  }


  $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
    let w = $(event.target).closest('.shopping-item-controls').prev();
    if (w.hasClass('shopping-item__checked')) {
      w.removeClass('shopping-item__checked');
    }else w.addClass('shopping-item__checked');
  });

  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(event.target).closest('li').remove();
  });
}

$(listen);