const star = { spectralClass: "M" };
const planet = {
  mass: 1.02,
  radius: 1.12,
  rotationStability: true,
  habitalZone: false,
};
function canHabitateLife(star, planet) {
  // Code the function here.
  if( star.spectralClass !== "K" && star.spectralClass !== "M" || !planet.habitalZone || !planet.rotationStability || planet.radius >= 2.5 || planet.radius <= 0.5 || planet.mass >= 3 || (planet.mass < 0.5 && planet.radius < 1)){
    return false;
  }
  return true;
}
// Do not remove last lines, it is for tests
module.exports = canHabitateLife;
