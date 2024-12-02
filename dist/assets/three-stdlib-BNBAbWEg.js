import{j as Xe,k as Ke,E as Ve,f as m,Q as Me,P as ee,O as te,l as we,g as d,m as R,n as _}from"./three-BAIG_oXH.js";var We=Object.defineProperty,Be=(P,h,b)=>h in P?We(P,h,{enumerable:!0,configurable:!0,writable:!0,value:b}):P[h]=b,n=(P,h,b)=>(Be(P,typeof h!="symbol"?h+"":h,b),b);const K=new Xe,Ae=new Ke,qe=Math.cos(70*(Math.PI/180)),je=(P,h)=>(P%h+h)%h;class Je extends Ve{constructor(h,b){super(),n(this,"object"),n(this,"domElement"),n(this,"enabled",!0),n(this,"target",new m),n(this,"minDistance",0),n(this,"maxDistance",1/0),n(this,"minZoom",0),n(this,"maxZoom",1/0),n(this,"minPolarAngle",0),n(this,"maxPolarAngle",Math.PI),n(this,"minAzimuthAngle",-1/0),n(this,"maxAzimuthAngle",1/0),n(this,"enableDamping",!1),n(this,"dampingFactor",.05),n(this,"enableZoom",!0),n(this,"zoomSpeed",1),n(this,"enableRotate",!0),n(this,"rotateSpeed",1),n(this,"enablePan",!0),n(this,"panSpeed",1),n(this,"screenSpacePanning",!0),n(this,"keyPanSpeed",7),n(this,"zoomToCursor",!1),n(this,"autoRotate",!1),n(this,"autoRotateSpeed",2),n(this,"reverseOrbit",!1),n(this,"reverseHorizontalOrbit",!1),n(this,"reverseVerticalOrbit",!1),n(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),n(this,"mouseButtons",{LEFT:R.ROTATE,MIDDLE:R.DOLLY,RIGHT:R.PAN}),n(this,"touches",{ONE:_.ROTATE,TWO:_.DOLLY_PAN}),n(this,"target0"),n(this,"position0"),n(this,"zoom0"),n(this,"_domElementKeyEvents",null),n(this,"getPolarAngle"),n(this,"getAzimuthalAngle"),n(this,"setPolarAngle"),n(this,"setAzimuthalAngle"),n(this,"getDistance"),n(this,"getZoomScale"),n(this,"listenToKeyEvents"),n(this,"stopListenToKeyEvents"),n(this,"saveState"),n(this,"reset"),n(this,"update"),n(this,"connect"),n(this,"dispose"),n(this,"dollyIn"),n(this,"dollyOut"),n(this,"getScale"),n(this,"setScale"),this.object=h,this.domElement=b,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>c.phi,this.getAzimuthalAngle=()=>c.theta,this.setPolarAngle=t=>{let o=je(t,2*Math.PI),a=c.phi;a<0&&(a+=2*Math.PI),o<0&&(o+=2*Math.PI);let i=Math.abs(o-a);2*Math.PI-i<i&&(o<a?o+=2*Math.PI:a+=2*Math.PI),p.phi=o-a,e.update()},this.setAzimuthalAngle=t=>{let o=je(t,2*Math.PI),a=c.theta;a<0&&(a+=2*Math.PI),o<0&&(o+=2*Math.PI);let i=Math.abs(o-a);2*Math.PI-i<i&&(o<a?o+=2*Math.PI:a+=2*Math.PI),p.theta=o-a,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=t=>{t.addEventListener("keydown",J),this._domElementKeyEvents=t},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",J),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(oe),e.update(),l=r.NONE},this.update=(()=>{const t=new m,o=new m(0,1,0),a=new Me().setFromUnitVectors(h.up,o),i=a.clone().invert(),u=new m,g=new Me,O=2*Math.PI;return function(){const Oe=e.object.position;a.setFromUnitVectors(h.up,o),i.copy(a).invert(),t.copy(Oe).sub(e.target),t.applyQuaternion(a),c.setFromVector3(t),e.autoRotate&&l===r.NONE&&W(De()),e.enableDamping?(c.theta+=p.theta*e.dampingFactor,c.phi+=p.phi*e.dampingFactor):(c.theta+=p.theta,c.phi+=p.phi);let y=e.minAzimuthAngle,E=e.maxAzimuthAngle;isFinite(y)&&isFinite(E)&&(y<-Math.PI?y+=O:y>Math.PI&&(y-=O),E<-Math.PI?E+=O:E>Math.PI&&(E-=O),y<=E?c.theta=Math.max(y,Math.min(E,c.theta)):c.theta=c.theta>(y+E)/2?Math.max(y,c.theta):Math.min(E,c.theta)),c.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,c.phi)),c.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(L,e.dampingFactor):e.target.add(L),e.zoomToCursor&&U||e.object.isOrthographicCamera?c.radius=G(c.radius):c.radius=G(c.radius*f),t.setFromSpherical(c),t.applyQuaternion(i),Oe.copy(e.target).add(t),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(p.theta*=1-e.dampingFactor,p.phi*=1-e.dampingFactor,L.multiplyScalar(1-e.dampingFactor)):(p.set(0,0,0),L.set(0,0,0));let Y=!1;if(e.zoomToCursor&&U){let z=null;if(e.object instanceof ee&&e.object.isPerspectiveCamera){const H=t.length();z=G(H*f);const X=H-z;e.object.position.addScaledVector(ie,X),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const H=new m(T.x,T.y,0);H.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/f)),e.object.updateProjectionMatrix(),Y=!0;const X=new m(T.x,T.y,0);X.unproject(e.object),e.object.position.sub(X).add(H),e.object.updateMatrixWorld(),z=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;z!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(z).add(e.object.position):(K.origin.copy(e.object.position),K.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(K.direction))<qe?h.lookAt(e.target):(Ae.setFromNormalAndCoplanarPoint(e.object.up,e.target),K.intersectPlane(Ae,e.target))))}else e.object instanceof te&&e.object.isOrthographicCamera&&(Y=f!==1,Y&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/f)),e.object.updateProjectionMatrix()));return f=1,U=!1,Y||u.distanceToSquared(e.object.position)>ae||8*(1-g.dot(e.object.quaternion))>ae?(e.dispatchEvent(oe),u.copy(e.object.position),g.copy(e.object.quaternion),Y=!1,!0):!1}})(),this.connect=t=>{e.domElement=t,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",Pe),e.domElement.addEventListener("pointerdown",ye),e.domElement.addEventListener("pointercancel",k),e.domElement.addEventListener("wheel",Ee)},this.dispose=()=>{var t,o,a,i,u,g;e.domElement&&(e.domElement.style.touchAction="auto"),(t=e.domElement)==null||t.removeEventListener("contextmenu",Pe),(o=e.domElement)==null||o.removeEventListener("pointerdown",ye),(a=e.domElement)==null||a.removeEventListener("pointercancel",k),(i=e.domElement)==null||i.removeEventListener("wheel",Ee),(u=e.domElement)==null||u.ownerDocument.removeEventListener("pointermove",Q),(g=e.domElement)==null||g.ownerDocument.removeEventListener("pointerup",k),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",J)};const e=this,oe={type:"change"},V={type:"start"},ne={type:"end"},r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=r.NONE;const ae=1e-6,c=new we,p=new we;let f=1;const L=new m,M=new d,w=new d,S=new d,A=new d,j=new d,I=new d,x=new d,v=new d,C=new d,ie=new m,T=new d;let U=!1;const s=[],Z={};function De(){return 2*Math.PI/60/60*e.autoRotateSpeed}function D(){return Math.pow(.95,e.zoomSpeed)}function W(t){e.reverseOrbit||e.reverseHorizontalOrbit?p.theta+=t:p.theta-=t}function se(t){e.reverseOrbit||e.reverseVerticalOrbit?p.phi+=t:p.phi-=t}const re=(()=>{const t=new m;return function(a,i){t.setFromMatrixColumn(i,0),t.multiplyScalar(-a),L.add(t)}})(),le=(()=>{const t=new m;return function(a,i){e.screenSpacePanning===!0?t.setFromMatrixColumn(i,1):(t.setFromMatrixColumn(i,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(a),L.add(t)}})(),N=(()=>{const t=new m;return function(a,i){const u=e.domElement;if(u&&e.object instanceof ee&&e.object.isPerspectiveCamera){const g=e.object.position;t.copy(g).sub(e.target);let O=t.length();O*=Math.tan(e.object.fov/2*Math.PI/180),re(2*a*O/u.clientHeight,e.object.matrix),le(2*i*O/u.clientHeight,e.object.matrix)}else u&&e.object instanceof te&&e.object.isOrthographicCamera?(re(a*(e.object.right-e.object.left)/e.object.zoom/u.clientWidth,e.object.matrix),le(i*(e.object.top-e.object.bottom)/e.object.zoom/u.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function B(t){e.object instanceof ee&&e.object.isPerspectiveCamera||e.object instanceof te&&e.object.isOrthographicCamera?f=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function F(t){B(f/t)}function q(t){B(f*t)}function ce(t){if(!e.zoomToCursor||!e.domElement)return;U=!0;const o=e.domElement.getBoundingClientRect(),a=t.clientX-o.left,i=t.clientY-o.top,u=o.width,g=o.height;T.x=a/u*2-1,T.y=-(i/g)*2+1,ie.set(T.x,T.y,1).unproject(e.object).sub(e.object.position).normalize()}function G(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function ue(t){M.set(t.clientX,t.clientY)}function Le(t){ce(t),x.set(t.clientX,t.clientY)}function he(t){A.set(t.clientX,t.clientY)}function Se(t){w.set(t.clientX,t.clientY),S.subVectors(w,M).multiplyScalar(e.rotateSpeed);const o=e.domElement;o&&(W(2*Math.PI*S.x/o.clientHeight),se(2*Math.PI*S.y/o.clientHeight)),M.copy(w),e.update()}function Ie(t){v.set(t.clientX,t.clientY),C.subVectors(v,x),C.y>0?F(D()):C.y<0&&q(D()),x.copy(v),e.update()}function xe(t){j.set(t.clientX,t.clientY),I.subVectors(j,A).multiplyScalar(e.panSpeed),N(I.x,I.y),A.copy(j),e.update()}function ve(t){ce(t),t.deltaY<0?q(D()):t.deltaY>0&&F(D()),e.update()}function Ne(t){let o=!1;switch(t.code){case e.keys.UP:N(0,e.keyPanSpeed),o=!0;break;case e.keys.BOTTOM:N(0,-e.keyPanSpeed),o=!0;break;case e.keys.LEFT:N(e.keyPanSpeed,0),o=!0;break;case e.keys.RIGHT:N(-e.keyPanSpeed,0),o=!0;break}o&&(t.preventDefault(),e.update())}function pe(){if(s.length==1)M.set(s[0].pageX,s[0].pageY);else{const t=.5*(s[0].pageX+s[1].pageX),o=.5*(s[0].pageY+s[1].pageY);M.set(t,o)}}function me(){if(s.length==1)A.set(s[0].pageX,s[0].pageY);else{const t=.5*(s[0].pageX+s[1].pageX),o=.5*(s[0].pageY+s[1].pageY);A.set(t,o)}}function de(){const t=s[0].pageX-s[1].pageX,o=s[0].pageY-s[1].pageY,a=Math.sqrt(t*t+o*o);x.set(0,a)}function Re(){e.enableZoom&&de(),e.enablePan&&me()}function _e(){e.enableZoom&&de(),e.enableRotate&&pe()}function fe(t){if(s.length==1)w.set(t.pageX,t.pageY);else{const a=$(t),i=.5*(t.pageX+a.x),u=.5*(t.pageY+a.y);w.set(i,u)}S.subVectors(w,M).multiplyScalar(e.rotateSpeed);const o=e.domElement;o&&(W(2*Math.PI*S.x/o.clientHeight),se(2*Math.PI*S.y/o.clientHeight)),M.copy(w)}function be(t){if(s.length==1)j.set(t.pageX,t.pageY);else{const o=$(t),a=.5*(t.pageX+o.x),i=.5*(t.pageY+o.y);j.set(a,i)}I.subVectors(j,A).multiplyScalar(e.panSpeed),N(I.x,I.y),A.copy(j)}function ge(t){const o=$(t),a=t.pageX-o.x,i=t.pageY-o.y,u=Math.sqrt(a*a+i*i);v.set(0,u),C.set(0,Math.pow(v.y/x.y,e.zoomSpeed)),F(C.y),x.copy(v)}function Ce(t){e.enableZoom&&ge(t),e.enablePan&&be(t)}function ke(t){e.enableZoom&&ge(t),e.enableRotate&&fe(t)}function ye(t){var o,a;e.enabled!==!1&&(s.length===0&&((o=e.domElement)==null||o.ownerDocument.addEventListener("pointermove",Q),(a=e.domElement)==null||a.ownerDocument.addEventListener("pointerup",k)),Ze(t),t.pointerType==="touch"?He(t):Ye(t))}function Q(t){e.enabled!==!1&&(t.pointerType==="touch"?Ue(t):ze(t))}function k(t){var o,a,i;Fe(t),s.length===0&&((o=e.domElement)==null||o.releasePointerCapture(t.pointerId),(a=e.domElement)==null||a.ownerDocument.removeEventListener("pointermove",Q),(i=e.domElement)==null||i.ownerDocument.removeEventListener("pointerup",k)),e.dispatchEvent(ne),l=r.NONE}function Ye(t){let o;switch(t.button){case 0:o=e.mouseButtons.LEFT;break;case 1:o=e.mouseButtons.MIDDLE;break;case 2:o=e.mouseButtons.RIGHT;break;default:o=-1}switch(o){case R.DOLLY:if(e.enableZoom===!1)return;Le(t),l=r.DOLLY;break;case R.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;he(t),l=r.PAN}else{if(e.enableRotate===!1)return;ue(t),l=r.ROTATE}break;case R.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;ue(t),l=r.ROTATE}else{if(e.enablePan===!1)return;he(t),l=r.PAN}break;default:l=r.NONE}l!==r.NONE&&e.dispatchEvent(V)}function ze(t){if(e.enabled!==!1)switch(l){case r.ROTATE:if(e.enableRotate===!1)return;Se(t);break;case r.DOLLY:if(e.enableZoom===!1)return;Ie(t);break;case r.PAN:if(e.enablePan===!1)return;xe(t);break}}function Ee(t){e.enabled===!1||e.enableZoom===!1||l!==r.NONE&&l!==r.ROTATE||(t.preventDefault(),e.dispatchEvent(V),ve(t),e.dispatchEvent(ne))}function J(t){e.enabled===!1||e.enablePan===!1||Ne(t)}function He(t){switch(Te(t),s.length){case 1:switch(e.touches.ONE){case _.ROTATE:if(e.enableRotate===!1)return;pe(),l=r.TOUCH_ROTATE;break;case _.PAN:if(e.enablePan===!1)return;me(),l=r.TOUCH_PAN;break;default:l=r.NONE}break;case 2:switch(e.touches.TWO){case _.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Re(),l=r.TOUCH_DOLLY_PAN;break;case _.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;_e(),l=r.TOUCH_DOLLY_ROTATE;break;default:l=r.NONE}break;default:l=r.NONE}l!==r.NONE&&e.dispatchEvent(V)}function Ue(t){switch(Te(t),l){case r.TOUCH_ROTATE:if(e.enableRotate===!1)return;fe(t),e.update();break;case r.TOUCH_PAN:if(e.enablePan===!1)return;be(t),e.update();break;case r.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ce(t),e.update();break;case r.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;ke(t),e.update();break;default:l=r.NONE}}function Pe(t){e.enabled!==!1&&t.preventDefault()}function Ze(t){s.push(t)}function Fe(t){delete Z[t.pointerId];for(let o=0;o<s.length;o++)if(s[o].pointerId==t.pointerId){s.splice(o,1);return}}function Te(t){let o=Z[t.pointerId];o===void 0&&(o=new d,Z[t.pointerId]=o),o.set(t.pageX,t.pageY)}function $(t){const o=t.pointerId===s[0].pointerId?s[1]:s[0];return Z[o.pointerId]}this.dollyIn=(t=D())=>{q(t),e.update()},this.dollyOut=(t=D())=>{F(t),e.update()},this.getScale=()=>f,this.setScale=t=>{B(t),e.update()},this.getZoomScale=()=>D(),b!==void 0&&this.connect(b),this.update()}}export{Je as O};