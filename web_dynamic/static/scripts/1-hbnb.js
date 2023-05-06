$(document).ready(function () {
  let amenitiesChecked = {};

  $('input[type="checkbox"]').change(function () {
    if (this.checked) {
      amenitiesChecked[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenitiesChecked[$(this).attr('data-id')];
    }

    let amenitiesNames = Object.values(amenitiesChecked).join(', ');

    if (amenitiesNames.length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(amenitiesNames);
    }
  });
});

