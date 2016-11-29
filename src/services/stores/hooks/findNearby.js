'use strict';
module.exports = findNearby;

const radians = require('degrees-radians');
const degress = require('radians-degrees');

const earthRadius = 6371000; // m

// find nearby stores in a rough "square" radius
function findNearby (hook) {
  let q = hook.params.query;

  if (!q.near) return;

  let miles = q.miles || 10;
  let radiusInMeters = Number(miles) * 1609;

  return hook.app.db.zipcode.findById(q.near)
    .then(zip => {
      let lat = zip.lat;
      let lng = zip.lng;

      let north = calcDerivedLatitude(lat, radiusInMeters, 0);
      let east = calcDerivedPosition(lat, lng, radiusInMeters, 90);
      let south = calcDerivedLatitude(lat, radiusInMeters, 180);
      let west = calcDerivedPosition(lat, lng, radiusInMeters, 270);

      q.lat = {
        $lt: north,
        $gt: south
      };
      q.lng = {
        $lt: east.lng,
        $gt: west.lng
      };

      delete q.near;
      delete q.miles;
    });
}

function calcDerivedPosition (lat, lng, range, bearing) {
  let latA = radians(lat);
  let lngA = radians(lng);
  let angularDistance = range / earthRadius;
  let trueCourse = radians(bearing);

  let destLat = Math.asin(
    Math.sin(latA) * Math.cos(angularDistance) +
    Math.cos(latA) * Math.sin(angularDistance) * Math.cos(trueCourse)
  );

  let destDLng = Math.atan2(
    Math.sin(trueCourse) * Math.sin(angularDistance) * Math.cos(latA),
    Math.cos(angularDistance) - Math.sin(latA) * Math.sin(lat)
  );

  let destLng = ((lngA + destDLng + Math.PI) % (Math.PI * 2)) - Math.PI;

  return {
    lat: degress(destLat),
    lng: degress(destLng)
  };
}

function calcDerivedLatitude (lat, range, bearing) {
  let latA = radians(lat);
  let angularDistance = range / earthRadius;
  let trueCourse = radians(bearing);

  let destLat = Math.asin(
    Math.sin(latA) * Math.cos(angularDistance) +
    Math.cos(latA) * Math.sin(angularDistance) * Math.cos(trueCourse)
  );

  return degress(destLat);
}
