import test from 'node:test';
import assert from 'node:assert/strict';
import { HERO_FRAGMENTS, fragmentOrigin, fragmentPose } from '../src/lib/hero-fragments.mjs';

function inside(x,y,polygon){
 let hit=false;
 for(let i=0,j=polygon.length-1;i<polygon.length;j=i++){
  const [xi,yi]=polygon[i],[xj,yj]=polygon[j];
  if((yi>y)!==(yj>y)&&x<(xj-xi)*(y-yi)/(yj-yi)+xi)hit=!hit;
 }
 return hit;
}
test('fragment masks cover the complete shaped text surface without gaps or overlap',()=>{
 for(let x=.371;x<100;x+=1)for(let y=.619;y<100;y+=1){
  assert.equal(HERO_FRAGMENTS.filter(piece=>inside(x,y,piece.points)).length,1,`Coverage at ${x}, ${y}`);
 }
});
test('rotated scattered ink remains within both viewport edges at mobile and desktop sizes',()=>{
 for(const frame of [{width:246,height:55,left:35,viewport:320},{width:232,height:65,left:66,viewport:320},{width:710,height:175,left:640,viewport:1440}]){
  for(const piece of HERO_FRAGMENTS)for(const departing of [false,true]){
   const pose=fragmentPose(piece,frame,departing);const [ox,oy]=fragmentOrigin(piece.points);
   const angle=pose.rotation*Math.PI/180;
   for(const [x,y] of piece.points){
    const transformed=frame.left+pose.x+ox/100*frame.width+(x-ox)/100*frame.width*pose.scale*Math.cos(angle)-(y-oy)/100*frame.height*pose.scale*Math.sin(angle);
    assert.ok(transformed>=12-1e-8&&transformed<=frame.viewport-12+1e-8,`Bounded ink at ${transformed}`);
   }
   assert.deepEqual(fragmentPose(piece,frame,departing),pose,'Motion is deterministic across hydration');
  }
 }
});
