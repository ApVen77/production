// {
//   ("strict use");
// }

function initMap() {
  var mutare = { lat: -18.8967858, lng: 32.6013279 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: mutare,
    zoom: 17,
    mapTypeId: "roadmap",

    // styling the map

    styles: [
      {
        featureType: "all",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "all",
        elementType: "geometry",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "all",
        elementType: "geometry.fill",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "all",
        elementType: "geometry.stroke",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [
          {
            saturation: 36,
          },
          {
            color: "#000000",
          },
          {
            lightness: 40,
          },
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "simplified",
          },
          {
            color: "#000000",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
          {
            color: "#d1232a",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 20,
          },
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "labels",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "administrative.country",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "administrative.province",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative.locality",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "administrative.neighborhood",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "landscape.natural",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 29,
          },
          {
            weight: 0.2,
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 18,
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#d1232a",
          },
          {
            lightness: 17,
          },
        ],
      },
    ],
  });
  var marker = new google.maps.Marker({ position: mutare, map: map });
}
