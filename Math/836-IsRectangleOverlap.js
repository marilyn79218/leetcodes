// 836. Rectangle Overlap

/*
  A rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) are the coordinates of its bottom-left corner, and (x2, y2) are the coordinates of its top-right corner.

  Two rectangles overlap if the area of their intersection is positive.  To be clear, two rectangles that only touch at the corner or edges do not overlap.

  Given two (axis-aligned) rectangles, return whether they overlap.
*/

/*
  Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
  Output: true
*/

var isRectangleOverlap = function(rec1, rec2) {
  const { max, min } = Math;
  const [a1, b1, c1, d1] = rec1;
  const [a2, b2, c2, d2] = rec2;
  
  let overlapLeft = max(a1, a2);
  let overlapRight = max(min(c1, c2), overlapLeft);
  
  let overlapTop = min(d1, d2);
  let overlapBottom = min(max(b1, b2), overlapTop);
  
  return getArea(overlapLeft, overlapRight, overlapTop, overlapBottom) > 0;
};

var getArea = (left, right, top, bottom) => (right - left) * (top - bottom);
