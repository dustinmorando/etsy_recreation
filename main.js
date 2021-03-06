(function() {
  'use strict';

  var searchBoxItems = rawData.results;
  var $list = $('.items-list');

  $(document).ready(function() {

    // var $list = $('.items-list');

    searchBoxItems.forEach(function(searchItems) {
      var titleText = renderTemplate('searchItems', {
        title: searchItems.title,
        price: searchItems.price,
        images: searchItems.Images[0].url_170x135,
        pictureLink: searchItems.url,
        shop: searchItems.Shop.shop_name
      });
      $list.append(titleText);
    });

  });


  function renderTemplate(name, data) {
    var $template = $('[data-template-name=' + name + ']').text();
    $.each(data, function(prop, value) {
      $template = $template.replace('<% ' + prop + ' %>', value);
    });
    return $template;
  }

  var sortByPrice = function(array) {
    return _.sortBy(array, "price").reverse();
  };

  console.log(sortByPrice(searchBoxItems));


  // 
  // function renderListing(data) {
  //   renderTemplate(name, data);
  // }


  // 1.Load page with blank search box
  // var itemRequest = function() {}



  // 2.event listen for button (console.log something)
  // 3.add terms to url (console.log something)

  //event listener//
  $('form').on('submit', function(event) {
    event.preventDefault();
    var itemRequest = ($(this).find('input').val());
    $.ajax({
        url: "https://api.etsy.com/v2/listings/active.js?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=" + itemRequest + "&includes=Images,Shop",
        type: "GET",
        dataType: 'jsonp'
      })
      .done(function(data) {
        // $list.empty();
        // renderListing(data.results);
        console.log(data);
      });
  });



  // 4.store term in VAR
  // 5.ajax request (GET) (console.log data)
  // 6.empty container + read items




})();