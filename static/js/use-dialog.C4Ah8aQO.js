import{b as e,i as o,h as l,U as a,b4 as n,cI as t,b0 as s,r as u,cO as c,B as r,D as d,cP as i,C as p,Y as f,o as y,q as v,cQ as m,an as b,z as C}from"./index.Dw2Evp60.js";import{i as B}from"./isUndefined.DgmxjSXK.js";const g=e({center:Boolean,alignCenter:Boolean,closeIcon:{type:o},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),D={close:()=>!0},S=e({...g,appendToBody:Boolean,appendTo:{type:l([String,Object]),default:"body"},beforeClose:{type:l(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:Boolean,headerAriaLevel:{type:String,default:"2"}}),x={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[a]:e=>n(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},F=(e,o)=>{var l;const n=v().emit,{nextZIndex:g}=t();let D="";const S=s(),x=s(),F=u(!1),I=u(!1),O=u(!1),h=u(null!=(l=e.zIndex)?l:g());let A,w;const k=c("namespace",m),z=r((()=>{const o={},l=`--${k.value}-dialog`;return e.fullscreen||(e.top&&(o[`${l}-margin-top`]=e.top),e.width&&(o[`${l}-width`]=d(e.width))),o})),L=r((()=>e.alignCenter?{display:"flex"}:{}));function N(){null==w||w(),null==A||A(),e.openDelay&&e.openDelay>0?({stop:A}=b((()=>E()),e.openDelay)):E()}function P(){null==A||A(),null==w||w(),e.closeDelay&&e.closeDelay>0?({stop:w}=b((()=>M()),e.closeDelay)):M()}function j(){e.beforeClose?e.beforeClose((function(e){e||(I.value=!0,F.value=!1)})):P()}function E(){C&&(F.value=!0)}function M(){F.value=!1}return e.lockScroll&&i(F),p((()=>e.modelValue),(l=>{l?(I.value=!1,N(),O.value=!0,h.value=B(e.zIndex)?g():h.value++,f((()=>{n("open"),o.value&&(o.value.scrollTop=0)}))):F.value&&P()})),p((()=>e.fullscreen),(e=>{o.value&&(e?(D=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=D)})),y((()=>{e.modelValue&&(F.value=!0,O.value=!0,N())})),{afterEnter:function(){n("opened")},afterLeave:function(){n("closed"),n(a,!1),e.destroyOnClose&&(O.value=!1)},beforeLeave:function(){n("close")},handleClose:j,onModalClick:function(){e.closeOnClickModal&&j()},close:P,doClose:M,onOpenAutoFocus:function(){n("openAutoFocus")},onCloseAutoFocus:function(){n("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&j()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:S,bodyId:x,closed:I,style:z,overlayDialogStyle:L,rendered:O,visible:F,zIndex:h}};export{x as a,g as b,D as c,S as d,F as u};
