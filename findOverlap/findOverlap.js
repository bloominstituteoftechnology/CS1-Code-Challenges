/* findOverlap.js  --  Write  a   function  findOverlap  to  find  the
 * rectangular intersection of two given rectangles.  They are defined
 * as objects like this:
 * 
 * const rectangle1 = {
 *   leftX: 1,
 *   bottomY: 5,
 *   width: 10,
 *   height: 4,
 * }
 *
 * Your function should return an object in this format as well. */

function findOverlap(rectangle1, rectangle2) {

  const overlap = {
    leftX: null,
    bottomY: null,
    width: null,
    height: null
  }

  const coordinates = (r) => {return{
    x1: r.leftX,
    x2: r.leftX + r.width,
    y1: r.bottomY,
    y2: r.bottomY + r.height}};

  const c1 = coordinates(rectangle1);
  const c2 = coordinates(rectangle2);

  const leftX   = Math.max(c1.x1, c2.x1);
  const rightX  = Math.min(c1.x2, c2.x2);
  const bottomY = Math.max(c1.y1, c2.y1);
  const topY    = Math.min(c1.y2, c2.y2);
  const width   = rightX - leftX;
  const height  = topY   - bottomY;

  if (width > 0 && height > 0) {
    overlap.leftX   = leftX;
    overlap.bottomY = bottomY;
    overlap.width   = width;
    overlap.height  = height;
  }

  return overlap;
}

const rectangle1 = {
  leftX: 0,
  bottomY: 0,
  width: 5,
  height: 5
};

const rectangle2 = {
  leftX: 4,
  bottomY: 4,
  width: 5,
  height: 5
};

console.log(findOverlap(rectangle1, rectangle2));
