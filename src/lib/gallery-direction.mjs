/** @param {number} dx @param {number} dy @param {'ar'|'en'} lang */
export function swipeStep(dx,dy,lang){if(Math.abs(dx)<44||Math.abs(dx)<=Math.abs(dy)*1.25)return 0;return (dx<0?1:-1)*(lang==='ar'?-1:1);}
/** @param {string} key @param {'ar'|'en'} lang */
export function keyStep(key,lang){if(key==='ArrowRight')return lang==='ar'?-1:1;if(key==='ArrowLeft')return lang==='ar'?1:-1;return 0;}
/** @param {number} current @param {number} delta @param {number} count */
export function wrapSlide(current,delta,count){return count>0?((current+delta)%count+count)%count:0;}
