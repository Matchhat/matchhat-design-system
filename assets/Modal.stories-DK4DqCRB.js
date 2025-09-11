import{j as e}from"./jsx-runtime-CCjYJYRa.js";import{r as C}from"./index-uubelm5h.js";import{c as N}from"./index-vAxXS4R5.js";import{X as T}from"./x-CC48FUyt.js";import"./createLucideIcon-BRHAYV9X.js";const I={sm:"max-w-sm",md:"max-w-md",lg:"max-w-2xl"},j=({isOpen:o,onClose:l,title:s,children:f,className:w,size:b="md",hideCloseIcon:M=!1})=>o?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40",children:e.jsxs("div",{className:N("bg-white w-full mx-4 rounded-lg shadow-lg relative p-6",I[b],w),children:[!M&&e.jsx("button",{onClick:l,className:"absolute top-3 right-3 text-gray-500 hover:text-gray-800",children:e.jsx(T,{className:"w-5 h-5"})}),s&&e.jsx("h2",{className:"text-lg font-semibold mb-4",children:s}),e.jsx("div",{children:f})]})}):null,O={title:"UI/Modal",component:j},n=o=>{const[l,s]=C.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>s(!0),className:"px-4 py-2 rounded bg-primary text-white",children:"Open Modal"}),e.jsx(j,{...o,isOpen:l,onClose:()=>s(!1)})]})},t={render:()=>e.jsx(n,{title:"Default Modal",children:e.jsx("p",{children:"This is a basic modal content."})})},r={render:()=>e.jsx(n,{title:"Large Modal",size:"lg",children:e.jsx("p",{children:"Modal with larger max-width."})})},a={render:()=>e.jsx(n,{title:"Modal without Close Icon",hideCloseIcon:!0,children:e.jsx("p",{children:"User has to close using an outside button or method."})})};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Template title="Default Modal">
      <p>This is a basic modal content.</p>
    </Template>
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Template title="Large Modal" size="lg">
      <p>Modal with larger max-width.</p>
    </Template>
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,h,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Template title="Modal without Close Icon" hideCloseIcon>
      <p>User has to close using an outside button or method.</p>
    </Template>
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const S=["Default","Large","NoCloseIcon"];export{t as Default,r as Large,a as NoCloseIcon,S as __namedExportsOrder,O as default};
//# sourceMappingURL=Modal.stories-DK4DqCRB.js.map
