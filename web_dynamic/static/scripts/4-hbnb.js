$(document).ready(function () {
  const url = 'http://0.0.0.0:5001/api/v1/places_search/';

  // Send POST request to server to get list of places
  function getPlaces(data = {}) {
    $.ajax({
      type: 'POST',
      url: url,
      contentType: 'application/json',
      data: JSON.stringify(data)
    }).done(function (data) {
      // Loop through places and append to section.places
      $('section.places').empty();
      for (let place of data) {
        const article = $('<article></article>');
        const titleBox = $('<div class="title_box"></div>');
        const name = $('<h2></h2>').text(place.name);
        const price = $('<div class="price_by_night"></div>').text(`$${place.price_by_night}`);
        titleBox.append(name).append(price);
        const information = $('<div class="information"></div>');
        const maxGuest = $('<div class="max_guest"></div>').text(`${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}`);
        const numberRooms = $('<div class="number_rooms"></div>').text(`${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}`);
        const numberBathrooms = $('<div class="number_bathrooms"></div>').text(`${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}`);
        information.append(maxGuest).append(numberRooms).append(numberBathrooms);
        const desc = $('<div class="description"></div>').text(place.description);
        article.append(titleBox).append(information).append(desc);
        $('section.places').append(article);
      }
    });
  }

  // Send POST request to server to get list of amenities
  $.ajax({
    type: 'GET',
    url: 'http://0.0.0.0:5001/api/v1/amenities/',
    contentType: 'application/json'
  }).done(function (data) {
    // Loop through amenities and append to each DIV.amenities
    for (let amenity of data) {
      const checkBox = $('<input type="checkbox">').attr('data-id', amenity.id);
      const label = $('<label></label>').text(` ${amenity.name}`);
      const div = $('<div class="amenity"></div>').append(checkBox).append(label);
      $('div.amenities').append(div);
    }

    // Handle click event for button#filter-btn
    $('button#filter-btn').click(function () {
      const amenities = [];
      // Loop through checked amenities and add to amenities list
      $('input[type="checkbox"]:checked').each(function () {
        amenities.push($(this).attr('data-id'));
      });
      // Send POST request to server with amenities list
      getPlaces({ amenities: amenities });
    });
  });

  // Initial GET request to server to load all places
  getPlaces();
});
