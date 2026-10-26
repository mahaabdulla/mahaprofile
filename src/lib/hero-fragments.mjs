// Eight complementary cells of one fully shaped text surface. Shared vertices
// cover the complete surface; these are masks, never standalone polygon artwork.
export const HERO_FRAGMENTS=[
 {points:[[0,0],[25,0],[22,56],[0,48]],scatter:[-.8,-.8,-9,.9]},
 {points:[[25,0],[51,0],[48,44],[22,56]],scatter:[.2,-1.15,7,.94]},
 {points:[[51,0],[75,0],[78,54],[48,44]],scatter:[.7,-.55,-6,1.08]},
 {points:[[75,0],[100,0],[100,46],[78,54]],scatter:[1,-.6,10,.92]},
 {points:[[0,48],[22,56],[28,100],[0,100]],scatter:[-1,.65,8,1.05]},
 {points:[[22,56],[48,44],[52,100],[28,100]],scatter:[-.2,1.05,-7,.9]},
 {points:[[48,44],[78,54],[74,100],[52,100]],scatter:[.55,.85,9,.96]},
 {points:[[78,54],[100,46],[100,100],[74,100]],scatter:[.95,.5,-8,1.07]},
];
/** @param {number[][]} points */
export const fragmentClip=points=>`polygon(${points.map(([x,y])=>`${x}% ${y}%`).join(',')})`;
/** @param {number[][]} points */
export function fragmentOrigin(points){return [points.reduce((sum,p)=>sum+p[0],0)/points.length,points.reduce((sum,p)=>sum+p[1],0)/points.length];}

/** Cached layout in, transforms out. Rotation-aware horizontal bounds keep
 * scattered ink inside the viewport, including at narrow RTL breakpoints.
 * @param {{points:number[][],scatter:number[]}} piece
 * @param {{width:number,height:number,left:number,viewport:number}} frame
 * @param {boolean} departing
 */
export function fragmentPose(piece,frame,departing=false){
 const [dx,dy,angle,size]=piece.scatter;
 const rotation=departing?-angle*.8:angle;const scale=departing?1+(1-size)*.6:size;
 const [ox,oy]=fragmentOrigin(piece.points);const originX=ox/100*frame.width,originY=oy/100*frame.height;
 const radians=rotation*Math.PI/180;
 const xs=piece.points.map(([x,y])=>originX+(x/100*frame.width-originX)*scale*Math.cos(radians)-(y/100*frame.height-originY)*scale*Math.sin(radians));
 const minimum=12-frame.left-Math.min(...xs),maximum=frame.viewport-12-frame.left-Math.max(...xs);
 const nominal=Math.min(frame.width*.12,92)*dx*(departing?.85:1);
 return {x:Math.max(minimum,Math.min(maximum,nominal)),y:Math.min(frame.height*.32,42)*dy*(departing?.8:1),rotation,scale};
}
