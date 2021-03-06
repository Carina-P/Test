//World Bank API for Country Capital and Capital Lat & Long'
const baseUrlwbcty =
  "https://api.worldbank.org/v2/country/" + countryCode + "?format=json";
//gets World Bank Country data (Country, Capital, Lat, Long) by Country from API
function getDataCty(cb) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cb(JSON.parse(this.responseText));
    }
  };
  xhttp.open("GET", baseUrlwbcty, true);
  xhttp.send();
  xhttp.onerror = function () {
    alert(
      "Oops, the World Bank Country API return failed - please try again later, but please head over to the contact page and drop us an email so we can look at the error"
    );
  };
}
//Writes World Bank Country data Map (Country, Capital, Lat, Long) by Country from API
const latit = [];
const lngit = [];

function writeCty(data) {
  latit.push(data[1][0].latitude);
  lngit.push(data[1][0].longitude);
  lat = parseFloat(latit);
  lng = parseFloat(lngit);
  const countrymap = L.map("countryMap").setView([lat, lng], 6);
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        '© <a href="https://apps.mapbox.com/feedback/">Mapbox Imagery</a>© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap Data</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoicmVhZHJpMjA1IiwiYSI6ImNrYzU1dGFjbjBlamwyc3RpZmtpeGNjcTYifQ.nhMHaWYNmRRyAeYUBuPJrA",
    }
  ).addTo(countrymap);
}
getDataCty(writeCty);
