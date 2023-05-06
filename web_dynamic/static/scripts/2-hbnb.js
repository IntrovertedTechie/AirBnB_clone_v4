$(document).ready(function () {
  $.getJSON('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    }
  });

  const amenities = {};
  $('input[type=checkbox]').change(function () {
    if (this.checked) {
      amenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenities[$(this).data('id')];
    }
    const amenityNames = Object.values(amenities);
    if (amenityNames.length > 0) {
      $('.amenities > h4').text(amenityNames.join(', '));
    } else {
      $('.amenities > h4').html('&nbsp;');
    }
  });
});
