import{d as f,u as h,r as y,o as t,c as o,a,t as u,b as d,e as g,F as i,f as m,g as v,w as k,h as C}from"./index.b42fe7ee.js";import{_ as I}from"./_plugin-vue_export-helper.cdc0426e.js";const L={key:0},A=f({__name:"LocationAndItem",props:["location"],setup(l){const r=l,c=h().getItemByIdentifier(r.location.itemIdentifier),s=y(!1),n=()=>{s.value=!s.value};return(_,e)=>(t(),o("div",null,[a("span",{onClick:n},u(l.location.name),1),s.value?(t(),o("span",L,u(d(c).name),1)):g("",!0)]))}});const w=I(A,[["__scopeId","data-v-1613007f"]]),x=["onClick"],B=f({__name:"LocationListPerArea",props:["area"],setup(l){const r=l,c=h().getLocationsByArea(r.area).sort((n,_)=>n.name.localeCompare(_.name,void 0,{sensitivity:"accent"})),s=()=>{scrollTo({top:0})};return(n,_)=>(t(),o(i,null,[(t(!0),o(i,null,m(d(c),e=>(t(),o("div",{key:e.id},[v(w,{location:e},null,8,["location"])]))),128)),a("a",{onClick:k(s,["prevent"])},"Back to top",8,x)],64))}}),V=a("h2",null,"Locations View",-1),$=a("p",null,"Click a location to reveal the item",-1),S=["onClick"],T=["id"],b=f({__name:"LocationsView",setup(l){const r=h();r.getSeed||C.push("/");const p=n=>{document.querySelector("#"+c(n)).scrollIntoView(!0)},c=n=>n.replace(/[' ]/,"_").toLowerCase(),s=r.getAllAreas;return(n,_)=>(t(),o(i,null,[V,$,a("ul",null,[(t(!0),o(i,null,m(d(s),e=>(t(),o("li",{key:e},[a("a",{onClick:k(D=>p(e),["prevent"])},u(e),9,S)]))),128))]),(t(!0),o(i,null,m(d(s),e=>(t(),o("div",{key:e},[a("h3",{id:c(e)},u(e),9,T),v(B,{area:e},null,8,["area"])]))),128))],64))}});export{b as default};
