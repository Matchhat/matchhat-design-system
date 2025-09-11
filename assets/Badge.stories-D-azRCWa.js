import{j as e}from"./jsx-runtime-CCjYJYRa.js";import"./index-uubelm5h.js";import{c as v}from"./index-vAxXS4R5.js";import{X as j}from"./x-CC48FUyt.js";import"./createLucideIcon-BRHAYV9X.js";const a=({label:t,avatarSrc:r,showDot:c,closable:b,doubleIcon:g,variant:i="solid",color:u="blue",disabled:o=!1,className:B,onClose:x})=>{const p=o?"gray":u,m={solid:{blue:"bg-blue-100 text-blue-600",orange:"bg-orange-100 text-orange-600",gray:"bg-gray-200 text-gray-500"},outline:{blue:"border border-blue-500 text-blue-600",orange:"border border-orange-500 text-orange-600",gray:"border border-gray-300 text-gray-500"}};return e.jsxs("span",{className:v("inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium transition-all",m[i][p],o&&"opacity-50 cursor-not-allowed",B),children:[r&&e.jsx("img",{src:r,className:"w-5 h-5 rounded-full object-cover",alt:"avatar"}),c&&e.jsx("span",{className:"w-2 h-2 bg-current rounded-full"}),g&&e.jsxs("span",{className:"flex gap-1",children:[e.jsx("span",{className:"w-3 h-3 rounded-full border border-current"}),e.jsx("span",{className:"w-3 h-3 rounded-full border border-current"})]}),e.jsx("span",{children:t}),b&&e.jsx("button",{onClick:x,className:"ml-1 focus:outline-none",children:e.jsx(j,{className:"w-3 h-3"})})]})},I={title:"UI/Badge",component:a},l={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{label:"Badge",color:"blue"}),e.jsx(a,{label:"Badge",color:"blue",showDot:!0}),e.jsx(a,{label:"Badge",color:"blue",avatarSrc:"https://i.pravatar.cc/30"}),e.jsx(a,{label:"Badge",color:"blue",variant:"outline"}),e.jsx(a,{label:"Badge",color:"blue",variant:"outline",doubleIcon:!0}),e.jsx(a,{label:"Badge",color:"blue",closable:!0})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{label:"Badge",color:"orange"}),e.jsx(a,{label:"For you",color:"orange",showDot:!0}),e.jsx(a,{label:"Badge",color:"orange",avatarSrc:"https://i.pravatar.cc/30"}),e.jsx(a,{label:"Badge",color:"orange",variant:"outline"}),e.jsx(a,{label:"Badge",color:"orange",variant:"outline",doubleIcon:!0}),e.jsx(a,{label:"Badge",color:"orange",closable:!0})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{label:"Badge",disabled:!0}),e.jsx(a,{label:"Badge",disabled:!0,showDot:!0}),e.jsx(a,{label:"Badge",disabled:!0,avatarSrc:"https://i.pravatar.cc/30"}),e.jsx(a,{label:"Badge",disabled:!0,variant:"outline"}),e.jsx(a,{label:"Badge",disabled:!0,variant:"outline",doubleIcon:!0}),e.jsx(a,{label:"Badge",disabled:!0,closable:!0})]})]})};var s,d,n;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      {/* Variants and states */}
      <div className="flex gap-4">
        <Badge label="Badge" color="blue" />
        <Badge label="Badge" color="blue" showDot />
        <Badge label="Badge" color="blue" avatarSrc="https://i.pravatar.cc/30" />
        <Badge label="Badge" color="blue" variant="outline" />
        <Badge label="Badge" color="blue" variant="outline" doubleIcon />
        <Badge label="Badge" color="blue" closable />
      </div>

      <div className="flex gap-4">
        <Badge label="Badge" color="orange" />
        <Badge label="For you" color="orange" showDot />
        <Badge label="Badge" color="orange" avatarSrc="https://i.pravatar.cc/30" />
        <Badge label="Badge" color="orange" variant="outline" />
        <Badge label="Badge" color="orange" variant="outline" doubleIcon />
        <Badge label="Badge" color="orange" closable />
      </div>

      <div className="flex gap-4">
        <Badge label="Badge" disabled />
        <Badge label="Badge" disabled showDot />
        <Badge label="Badge" disabled avatarSrc="https://i.pravatar.cc/30" />
        <Badge label="Badge" disabled variant="outline" />
        <Badge label="Badge" disabled variant="outline" doubleIcon />
        <Badge label="Badge" disabled closable />
      </div>
    </div>
}`,...(n=(d=l.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const D=["AllBadges"];export{l as AllBadges,D as __namedExportsOrder,I as default};
//# sourceMappingURL=Badge.stories-D-azRCWa.js.map
