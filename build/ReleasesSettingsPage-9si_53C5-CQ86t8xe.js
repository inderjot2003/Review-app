import{j as e,P as c,aF as R,u as f,q as v,n as C,g2 as P,g3 as w,t as h,g4 as x,b as u,Z as F,S as A,a0 as I,F as L,T as E,Q as p,aV as D,U as d,aW as U,aX as B,bl as H}from"./strapi-BekrZR9Q.js";import{S as V}from"./schemas-DdA2ic2U-BpS8JK1b.js";const m=R,_=()=>{const{formatMessage:s}=f(),{formatAPIError:r}=v(),{toggleNotification:n}=C(),{data:g,isLoading:a}=P(),[t,{isLoading:S}]=w(),j=m(i=>i.admin_app.permissions.settings?.releases),{allowedActions:{canUpdate:T}}=h(j),{timezoneList:y}=x(new Date),z=async i=>{const{defaultTimezone:l}=i,b=y.some(o=>o.value===l),M=!l||!b?{defaultTimezone:null}:{...i};try{const o=await t(M);"data"in o?n({type:"success",message:s({id:"content-releases.pages.Settings.releases.setting.default-timezone-notification-success",defaultMessage:"Default timezone updated."})}):H(o.error)?n({type:"danger",message:r(o.error)}):n({type:"danger",message:s({id:"notification.error",defaultMessage:"An error occurred"})})}catch{n({type:"danger",message:s({id:"notification.error",defaultMessage:"An error occurred"})})}};return a?e.jsx(c.Loading,{}):e.jsxs(u.Root,{children:[e.jsx(c.Title,{children:s({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Releases"})}),e.jsx(c.Main,{"aria-busy":a,tabIndex:-1,children:e.jsx(F,{method:"PUT",initialValues:{defaultTimezone:g?.data.defaultTimezone},onSubmit:z,validationSchema:V,children:({modified:i,isSubmitting:l})=>e.jsxs(e.Fragment,{children:[e.jsx(u.Header,{primaryAction:T?e.jsx(A,{disabled:!i||S,loading:l,startIcon:e.jsx(I,{}),type:"submit",children:s({id:"global.save",defaultMessage:"Save"})}):null,title:s({id:"content-releases.pages.Settings.releases.title",defaultMessage:"Releases"}),subtitle:s({id:"content-releases.pages.Settings.releases.description",defaultMessage:"Create and manage content updates"})}),e.jsx(u.Content,{children:e.jsxs(L,{direction:"column",background:"neutral0",alignItems:"stretch",padding:6,gap:6,shadow:"filterShadow",hasRadius:!0,children:[e.jsx(E,{variant:"delta",tag:"h2",children:s({id:"content-releases.pages.Settings.releases.preferences.title",defaultMessage:"Preferences"})}),e.jsx(p.Root,{children:e.jsx(p.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsx(G,{})})})]})})]})})})]})},G=()=>{const s=m(t=>t.admin_app.permissions.settings?.releases),{allowedActions:{canUpdate:r}}=h(s),{formatMessage:n}=f(),{timezoneList:g}=x(new Date),a=D("defaultTimezone");return e.jsxs(d.Root,{name:"defaultTimezone",hint:n({id:"content-releases.pages.Settings.releases.timezone.hint",defaultMessage:"The timezone of every release can still be changed individually. "}),error:a.error,children:[e.jsx(d.Label,{children:n({id:"content-releases.pages.Settings.releases.timezone.label",defaultMessage:"Default timezone"})}),e.jsx(U,{autocomplete:{type:"list",filter:"contains"},onChange:t=>a.onChange("defaultTimezone",t),onTextValueChange:t=>a.onChange("defaultTimezone",t),onClear:()=>a.onChange("defaultTimezone",""),value:a.value,disabled:!r,children:g.map(t=>e.jsx(B,{value:t.value,children:t.value.replace(/&/," ")},t.value))}),e.jsx(d.Hint,{}),e.jsx(d.Error,{})]})},k=()=>{const s=m(r=>r.admin_app.permissions.settings?.releases?.read);return e.jsx(c.Protect,{permissions:s,children:e.jsx(_,{})})};export{k as ProtectedReleasesSettingsPage};
