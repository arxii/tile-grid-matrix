!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports.Slide=i():t.Slide=i()}(window,function(){return function(t){var i={};function s(h){if(i[h])return i[h].exports;var r=i[h]={i:h,l:!1,exports:{}};return t[h].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=t,s.c=i,s.d=function(t,i,h){s.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:h})},s.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},s.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="",s(s.s=0)}([function(t,i){var s,h,r,e,l=function(t,i){if(!(t instanceof i))throw new Error("Bound instance method accessed before binding")};e=function(t,i,s){return Math.min(Math.max(t,i),s)},s=class{constructor(t,i,s,h){this.set(t,i,s,h)}set(t,i,s,h){return this.x1=t||0,this.x2=i||0,this.y1=s||0,this.y2=h||0,this}copy(t){return this.x1=t.x1,this.x2=t.x2,this.y1=t.y1,this.y2=t.y2,this}normalize(){return this.x1<0&&(this.x2-=this.x1,this.x1=0),this.y1<0&&(this.y2-=this.y1,this.y1=0),this}loopMatrix(t,i,s,h,r){var e,l,u,n,o,f,x,c;for(c=e=u=this.y1,n=this.y2;u<=n?e<n:e>n;c=u<=n?++e:--e)if(!(c<0)){if(c>t.length)return!1;for(x=l=o=this.x1,f=this.x2;o<=f?l<f:l>f;x=o<=f?++l:--l)if(void 0!==t[c][x]&&!1===i(t[c][x],x,c,s,h,r))return!1}return!0}loopRect(t,i,s,h){var r,e,l,u,n,o,f,x;for(x=r=l=this.y1,u=this.y2;l<=u?r<u:r>u;x=l<=u?++r:--r)for(f=e=n=this.x1,o=this.x2;n<=o?e<o:e>o;f=n<=o?++e:--e)if(t(f,x,i,s,h))return!1;return!0}},h=class extends s{constructor(t){t.x2=t.width,t.y2=t.height,super(0,t.width,0,t.height),this.item=t.item,this.rect=t.rect||null}setXY(t,i){return this.rect.set(t,t+this.x2,i,i+this.y2)}},r=class t extends s{constructor(t){super(),this.clearCoord=this.clearCoord.bind(this),this.isItemNull=this.isItemNull.bind(this),this.isCoordEmpty=this.isCoordEmpty.bind(this),this.setCoordItem=this.setCoordItem.bind(this),this.clearItem=this.clearItem.bind(this),this.check_holes=null==t.check_holes||t.check_holes,this._temp=[new s,new s,new s],this.offset_x=0,this.offset_y=0,this.matrix=[],this.removed=[],this.full=new s(t.width-1,0,t.height-1,0),this.full.count_x=[],this.full.count_y=[],this.set(0,t.width,0,t.height)}clearCoord(i,s,h){return l(this,t),this.matrix[h][s]&&(this.decrY(h),this.decrX(s)),this.matrix[h][s]=null,!0}isItemNull(i){return l(this,t),null===i}isCoordEmpty(i,s){return l(this,t),null===this.matrix[s][i]}setCoordItem(i,s,h,r){if(l(this,t),i)throw new Error("setCoord, coord taken ["+s+","+h+"] by "+i);return this.matrix[h][s]=[r,s-r.rect.x1,h-r.rect.y1],this.incrY(h),this.incrX(s)}decrY(t){if(this.full.count_y[t]--,this.full.y1>t&&(this.full.y1=t),this.full.y2>t)return this.full.y2=t}decrX(t){if(this.full.count_x[t]--,this.full.x1>t&&(this.full.x1=t),this.full.x2>t)return this.full.x2=t}incrY(t){var i,s,h,r,e,l,u;if(this.full.count_y[t]++,this.full.count_y[t]===this.width){if(t<this.full.y1){if(this.check_holes)for(u=i=h=t,r=this.full.y1;h<=r?i<r:i>r;u=h<=r?++i:--i)if(this.full.count_y[u]!==this.width)return;return this.full.y1=t}if(this.check_holes)for(u=s=e=this.full.y1,l=t;e<=l?s<l:s>l;u=e<=l?++s:--s)if(this.full.count_y[u]!==this.width)return;return this.full.y2=t}}incrX(t){var i,s,h,r,e,l,u;if(this.full.count_x[t]++,this.full.count_x[t]===this.height){if(t<this.full.x1){if(this.check_holes)for(u=i=h=t,r=this.full.x1;h<=r?i<r:i>r;u=h<=r?++i:--i)if(this.full.count_x[u]!==this.height)return;return this.full.x1=t}if(this.check_holes)for(u=s=e=this.full.x1,l=t;e<=l?s<l:s>l;u=e<=l?++s:--s)if(this.full.count_y[u]!==this.height)return;return this.full.x2=t}}clearRect(t){return t.loopMatrix(this.matrix,this.clearItem)}clearItem(i,s,h){var r,e,u,n,o,f,x,c,a,y,d;if(l(this,t),!i)return falsel;if(r=i[0],y=s-i[1],d=h-i[2],!r.rect)throw new Error("cant clear item, item has no rect. "+y+","+d);for(u=n=f=d,x=d+r.y2;f<=x?n<x:n>x;u=f<=x?++n:--n)for(e=o=c=y,a=y+r.x2;c<=a?o<a:o>a;e=c<=a?++o:--o)this.clearCoord(r,e,u);return r.rect=null}clearY(t){var i,s,h,r,e;for(r=[],e=i=0,s=(h=this.matrix[t]).length;i<s;e=++i)h[e],r.push(this.clearItem(this.matrix[t][e],e,t));return r}clearLinkedX(t,i){var s,h,r,e,l,u;for(e=[],u=s=0,h=(r=this.matrix).length;s<h;u=++s)(l=r[u])[t]&&l[i]&&l[i][0]===l[t][0]?e.push(this.clearItem(l[t],t,u)):e.push(void 0);return e}clearLinkedY(t,i){var s,h,r,e,l,u;for(e=[],u=s=0,h=(r=this.matrix[t]).length;s<h;u=++s)(l=r[u])&&this.matrix[i]&&this.matrix[i][u][0]===l[0]?e.push(this.clearItem(l,u,t)):e.push(void 0);return e}clearX(t){var i,s,h,r,e,l;for(r=[],l=i=0,s=(h=this.matrix).length;i<s;l=++i)e=h[l],r.push(this.clearItem(e[t],t,l));return r}insertX(t,i){var s,h,r,l;for(this.clearLinkedX(t,e(t-1,0,this.x2-1)),this.full.x1>t?this.full.x1+=i:this.full.x1=this.x2-1,this.full.x2>t&&(this.full.x2=0),this.full.y1=this.y2,this.full.y2=0,r=[],s=0,h=i;0<=h?s<h:s>h;0<=h?++s:--s)this.full.count_x.splice(t,0,0),r.push(function(){var i,s,h,r;for(r=[],i=0,s=(h=this.matrix).length;i<s;i++)l=h[i],r.push(l.splice(t,0,null));return r}.call(this));return r}insertY(t,i){var s,h,r;for(this.clearLinkedY(t,e(t-1,0,this.y2-1)),this.full.y1<t&&(this.full.y1=t+i),r=[],s=0,h=i;0<=h?s<h:s>h;0<=h?++s:--s)this.full.count_y.splice(t,0,0),r.push(this.matrix.splice(t,0,new Array(this.x2).fill(null)));return r}set(t,i,h,r){var e,l,u,n,o,f,x,c,a,y,d,m,p,_,w,g,v,b,k,I,C,X,Y,E,j,M,R,L,O,T;if(this.height||(this.height=0),this.width||(this.width=0),void 0===this.x1)return super.set(t,i,h,r);if((e=new s(t-this.x1,i-this.x2,h-this.y1,r-this.y2)).y1-e.y2>this.height)throw new Error("set: Y out of bounds");if(e.x1-e.x2>this.width)throw new Error("set: X out of bounds");if(e.x2>0)for(l=u=0,w=e.x2;0<=w?u<w:u>w;l=0<=w?++u:--u)for(this.full.count_x.push(0),n=0,f=(g=this.matrix).length;n<f;n++)g[n].push(null);else if(e.x2<0)for(l=o=0,k=e.x2;0<=k?o<k:o>k;l=0<=k?++o:--o)for(this.clearX(this.x2-1+l),this.full.count_x.pop(),y=0,x=(I=this.matrix).length;y<x;y++)I[y].pop();if(this.x2=i,e.x1<0)for(l=d=0,C=e.x1;0<=C?d<C:d>C;l=0<=C?++d:--d)for(this.full.count_x.unshift(0),this.full.x2++,this.full.x1++,this.offset_x--,m=0,c=(X=this.matrix).length;m<c;m++)X[m].unshift(null);else if(e.x1>0)for(l=p=0,Y=e.x1;0<=Y?p<Y:p>Y;l=0<=Y?++p:--p)for(this.clearX(0),this.full.x2--,this.full.x1--,this.offset_x++,this.full.count_x.shift(),_=0,a=(E=this.matrix).length;_<a;_++)E[_].shift();if(this.x1=t,e.y2>0)for(l=R=0,j=e.y2;0<=j?R<j:R>j;l=0<=j?++R:--R)this.full.count_y.push(0),this.matrix.push(new Array(this.x2-this.x1).fill(null));else if(e.y2<0)for(l=L=0,M=e.y2;0<=M?L<M:L>M;l=0<=M?++L:--L)this.clearY(this.y2-1+l),this.full.count_y.pop(),this.matrix.pop();if(this.y2=r,e.y1>0)for(l=O=0,v=e.y1;0<=v?O<v:O>v;l=0<=v?++O:--O)this.clearY(0),this.full.y2--,this.full.y1--,this.offset_y++,this.full.count_y.shift(),this.matrix.shift();else if(e.y1<0)for(l=T=0,b=e.y1;0<=b?T<b:T>b;l=0<=b?++T:--T)this.offset_y--,this.full.y2++,this.full.y1++,this.full.count_y.unshift(0),this.full.x1=0,this.full.x2=0,this.matrix.unshift(new Array(this.x2-this.x1).fill(null));return this.y1=h,this.normalize(),e.x2-e.x1>0&&(this.full.y1=this.y2-1,this.full.y2=this.y1),e.y2-e.y1>0&&(this.full.x1=this.x2-1,this.full.x2=this.x1),this.width=this.x2,this.height=this.y2}pad(t,i,s,h){return this.set(this.x1-t,this.x2+i,this.y1-s,this.y2+h)}findEmptyRect(t,i,s){var h,r,e,l,u,n,o,f,x,c,a,y,d,m,p,_,w;for(t.normalize(),w=l=f=i.y1,x=i.y2;f<=x?l<x:l>x;w=f<=x?++l:--l)for(_=u=c=i.x1,a=i.x2;c<=a?u<a:u>a;_=c<=a?++u:--u){for(h=!1,e=n=y=w+t.y2-1,d=w;(y<=d?n<=d:n>=d)&&!h;e=y<=d?++n:--n)for(r=o=m=_+t.x2-1,p=_;m<=p?o<=p:o>=p;r=m<=p?++o:--o){if(!this.matrix[e]){h=!0;break}if(null!==this.matrix[e][r]){h=!0;break}}if(!1===h)return s.set(_,_+t.x2,w,w+t.y2)}}addTile(t,i,h,r,e){var l,u;return(l=this._temp[0].set(i,h,r,e)).x2>l.x1?l.x2-=t.x2-1:l.x1-=t.x2-1,l.y2>l.y1?l.y2-=t.y2-1:l.y1-=t.y2-1,!(l.y2<0||l.x2<0||l.y1>this.y2||l.x1>this.x2)&&(u=this._temp[1].set(),!!this.findEmptyRect(t,l,u)&&(t.rect=(new s).copy(u),t.rect.loopMatrix(this.matrix,this.setCoordItem,t),!0))}setTileCb(t){return this.clearRect(t),!1}log(){var t,i,s,h;for(console.log("-----------------\n\n"),t=0,i=(s=this.matrix).length;t<i;t++)h=s[t].map(function(t){return t&&String(t[0].item.key)||"- "}),console.log(h.join("     ")+"\n\n");return console.log("-----------------")}},t.exports={Rect:s,Tile:h,TileGrid:r}}])});
//# sourceMappingURL=tile-grid-util.js.map