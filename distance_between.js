/*
type Coordinates = {
  latitude: number;
  longitude: number;
};*/

function distanceBetween(A, B) {
  // A,B: Coordinates

  const toRadians = (degrees) => degrees * (Math.PI / 180);

  const R = 6371e3; // metres

  const φ1 = toRadians(A.latitude);
  const φ2 = toRadians(B.latitude);
  const Δφ = toRadians(B.latitude - A.latitude);
  const Δλ = toRadians(B.longitude - A.longitude);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c;
  const distanceInKm = d / 1000;
  return distanceInKm;
}

const home = {
  latitude: -13.010864,
  longitude: -38.468821,
};

const rafa = {
  latitude: -12.909198266322774,
  longitude: -38.35363000887006,
};

console.log("km: " + distanceBetween(home, rafa));
