/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let min = +Infinity;
  let idx = -1;

  for(let i = 0; i < points.length; i++) {
    let [a, b] = points[i];
    if(a == x || b == y) {
      if(dist(x, y, a, b) < min) {
        min = dist(x, y, a, b);
        idx = i;
      }
    }
  }
  return idx
};
function dist(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}