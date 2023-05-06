$(document).ready(function () {
  const url = 'http://0.0.0.0:5001/api/v1/places_search/';

  // Send POST request to server to get list of places
  $.ajax({
    type: 'POST',
    url: url,
    contentType: 'application/json',
    data: JSON.stringify({})
  }).done(function (data) {
    // Loop through places and append to section.places
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
});
