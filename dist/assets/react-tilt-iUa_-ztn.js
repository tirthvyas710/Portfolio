import{r as m,R as g,j as d}from"./react-CpblpCxn.js";var v=Object.defineProperty,f=Object.defineProperties,M=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,h=(e,t,s)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,i=(e,t)=>{for(var s in t||(t={}))y.call(t,s)&&h(e,s,t[s]);if(a)for(var s of a(t))x.call(t,s)&&h(e,s,t[s]);return e},n=(e,t)=>f(e,M(t)),O=class extends m.Component{constructor(e){super(e),this.ref=g.createRef(),this.state={style:{}};const t={reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1.1",speed:"1000",transition:!0,axis:null,reset:!0};this.width=null,this.height=null,this.left=null,this.top=null,this.transitionTimeout=null,this.updateCall=null,this.element=null,this.settings=Object.assign({},t,this.props.options),this.reverse=this.settings.reverse?-1:1,this.onMouseEnter=this.onMouseEnter.bind(this,this.props.onMouseEnter),this.onMouseMove=this.onMouseMove.bind(this,this.props.onMouseMove),this.onMouseLeave=this.onMouseLeave.bind(this,this.props.onMouseLeave)}componentDidMount(){this.element=this.ref.current,setTimeout(()=>{this.element.parentElement.querySelector(":hover")===this.element&&this.onMouseEnter()},0)}componentWillUnmount(){clearTimeout(this.transitionTimeout),cancelAnimationFrame(this.updateCall)}onMouseEnter(e=()=>{},t){return this.updateElementPosition(),this.setState(Object.assign({},this.state,{style:n(i({},this.state.style),{willChange:"transform"})})),this.setTransition(),e(t)}reset(){window.requestAnimationFrame(()=>{this.setState(Object.assign({},this.state,{style:n(i({},this.state.style),{transform:`perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`})}))})}onMouseMove(e=()=>{},t){return t.persist(),this.updateCall!==null&&window.cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.update.bind(this,t)),e(t)}setTransition(){clearTimeout(this.transitionTimeout),this.setState(Object.assign({},this.state,{style:n(i({},this.state.style),{transition:`${this.settings.speed}ms ${this.settings.easing}`})})),this.transitionTimeout=setTimeout(()=>{this.setState(Object.assign({},this.state,{style:n(i({},this.state.style),{transition:""})}))},this.settings.speed)}onMouseLeave(e=()=>{},t){return this.setTransition(),this.settings.reset&&this.reset(),e(t)}getValues(e){const t=(e.nativeEvent.clientX-this.left)/this.width,s=(e.nativeEvent.clientY-this.top)/this.height,r=Math.min(Math.max(t,0),1),o=Math.min(Math.max(s,0),1),l=(this.reverse*(this.settings.max/2-r*this.settings.max)).toFixed(2),p=(this.reverse*(o*this.settings.max-this.settings.max/2)).toFixed(2),u=r*100,c=o*100;return{tiltX:l,tiltY:p,percentageX:u,percentageY:c}}updateElementPosition(){const e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}update(e){const t=this.getValues(e);this.setState(Object.assign({},this.state,{style:n(i({},this.state.style),{transform:`perspective(${this.settings.perspective}px) rotateX(${this.settings.axis==="x"?0:t.tiltY}deg) rotateY(${this.settings.axis==="y"?0:t.tiltX}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`})})),this.updateCall=null}render(){const e=Object.assign({},this.props.style,this.state.style);return d.jsx("div",{style:e,ref:this.ref,className:this.props.className,onMouseEnter:this.onMouseEnter,onMouseMove:this.onMouseMove,onMouseLeave:this.onMouseLeave,children:this.props.children})}};export{O as T};
