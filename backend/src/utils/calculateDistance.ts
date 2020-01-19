interface Coordinates {
  latitude: number
  longitude: number
}

/**
 * Convert angle degrees to radians
 */
function deg2rad (deg: number) {
  return deg * (Math.PI / 180)
}

/**
 * Haversine formula to calculate the great-circle distance between two points
 * @param {Object} origin the origin point
 * @param {Object} to the other point
 * @returns {number} The distance
 */
function getDistanceFromLatLonInKm (
  origin: Coordinates,
  to: Coordinates
): number {
  // the radius of Earth in Km
  const radius = 6371

  const dLat = deg2rad(to.latitude - origin.latitude)
  const dLon = deg2rad(to.longitude - origin.longitude)

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(origin.latitude)) *
      Math.cos(deg2rad(to.latitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)

  const center = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  // Distance
  return radius * center
}

export default getDistanceFromLatLonInKm
