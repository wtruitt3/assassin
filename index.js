function getSheetData(sheetId, range) {
  // Set the API endpoint URL
  console.log("please");
  var endpoint =
    "https://sheets.googleapis.com/v4/spreadsheets/" +
    sheetId +
    "/values/" +
    range +
    "?key=AIzaSyBBGmaz9F-KK8IH4rvZz2wQ714dC7uv6CQ";
  console.log(endpoint);
  // Make a GET request to the endpoint
  var request = new XMLHttpRequest();
  request.open("GET", endpoint, false); // false makes the request synchronous
  request.send(null);

  // Parse the response as JSON
  var response = JSON.parse(request.responseText);

  // Return the values from the response
  return response.values;
}

function getKeywords(range) {
  var sheetID = "1OHAeLvXcTFIUep8lb3z30jRF-5WxAKvDTgV1_sB70ek";
  var data = getSheetData(sheetID, range);
  console.log(data);
  return data;
}
function change_page(name) {
  window.location.href = "user.html?name=" + name;
}
