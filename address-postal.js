function ADDRESS_ZIP(address) {
  var api_url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURI("address");
  api_url += '&key=[your API key]'
  var response = UrlFetchApp.fetch(api_url);
  var result = JSON.parse(response);
  var location = result['results'][0]['adress_components']['7'];

  return location['long_name'] ;
}
