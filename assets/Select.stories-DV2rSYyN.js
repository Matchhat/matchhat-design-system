import{j as e}from"./jsx-runtime-CCjYJYRa.js";import{u as $,F as h,a as g}from"./formik.esm-BymhOPsv.js";import{c as A,a as L}from"./index.esm-D9zqbv4Z.js";import{r as O}from"./index-uubelm5h.js";import{c as b}from"./index-vAxXS4R5.js";import{C as z}from"./chevron-down-CMZBedbz.js";import{U as G}from"./user-DcLk3MsK.js";import"./createLucideIcon-BRHAYV9X.js";const u=({label:r,options:q,iconLeft:j,className:Y,disabled:_,...o})=>{const[l,x]=$(o),a=!!x.error&&x.touched,n=_??o.disabled??!1,[S,f]=O.useState(!1),v=S||!!l.value;return e.jsxs("div",{className:"relative w-full",children:[e.jsxs("div",{className:b("relative border rounded-md w-full transition-all px-3 pt-5 pb-2 bg-white flex items-center",{"border-gray-300":!a&&!n,"border-red-500":a,"bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed":n,"ring-1 ring-primary border-primary":S&&!a},Y),children:[j&&e.jsx("div",{className:"mr-2 text-gray-400",children:j}),e.jsxs("select",{...l,...o,disabled:n,onFocus:()=>f(!0),onBlur:s=>{l.onBlur(s),f(!1)},className:b("w-full appearance-none bg-transparent outline-none text-sm pr-6",{"text-gray-500":!l.value,"text-red-500":a,"text-gray-400":n}),children:[e.jsx("option",{value:"",disabled:!0,hidden:!0,children:o.placeholder||"Select"}),q.map(s=>e.jsx("option",{value:s.value,children:s.label},s.value))]}),e.jsx(z,{className:"absolute right-3 h-4 w-4 text-gray-400 pointer-events-none"})]}),r&&e.jsx("label",{className:b("absolute left-2 text-xs transition-all px-1 pointer-events-none bg-white",{"top-1 text-xs text-primary -translate-y-1 scale-90":v,"top-0.5 text-sm text-gray-400":!v,"text-red-500":a}),children:r}),a&&e.jsx("span",{className:"text-xs text-red-500 mt-1 block",children:x.error})]})},re={title:"UI/Select",component:u,tags:["autodocs"]},t=[{label:"Admin",value:"admin"},{label:"Editor",value:"editor"},{label:"Viewer",value:"viewer"}],y=r=>e.jsx(h,{initialValues:{role:""},onSubmit:()=>{},children:e.jsx(g,{className:"max-w-sm space-y-4",children:e.jsx(u,{name:"role",...r})})}),i={render:y,args:{label:"User Role",placeholder:"Select role",options:t}},c={render:y,args:{label:"User Type",placeholder:"Choose type",iconLeft:e.jsx(G,{className:"w-4 h-4"}),options:t}},m={render:r=>e.jsx(h,{initialValues:{role:"editor"},onSubmit:()=>{},children:e.jsx(g,{className:"max-w-sm space-y-4",children:e.jsx(u,{name:"role",...r})})}),args:{label:"Preselected",placeholder:"Choose role",options:t}},d={render:()=>e.jsx(h,{initialValues:{role:""},validationSchema:A({role:L().required("Please select a role")}),onSubmit:()=>{},children:e.jsxs(g,{className:"max-w-sm space-y-4",children:[e.jsx(u,{name:"role",label:"User Role",placeholder:"Choose one",options:t}),e.jsx("button",{type:"submit",className:"px-4 py-2 rounded-md bg-primary text-white text-sm",children:"Submit"})]})})},p={render:y,args:{label:"Role (Disabled)",disabled:!0,options:t}};var w,N,F;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    label: "User Role",
    placeholder: "Select role",
    options
  }
}`,...(F=(N=i.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var U,C,D;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    label: "User Type",
    placeholder: "Choose type",
    iconLeft: <User className="w-4 h-4" />,
    options
  }
}`,...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var V,E,R;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args: any) => <Formik initialValues={{
    role: "editor"
  }} onSubmit={() => {}}>
      <Form className="max-w-sm space-y-4">
        <Select name="role" {...args} />
      </Form>
    </Formik>,
  args: {
    label: "Preselected",
    placeholder: "Choose role",
    options
  }
}`,...(R=(E=m.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var k,B,T;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Formik initialValues={{
    role: ""
  }} validationSchema={Yup.object({
    role: Yup.string().required("Please select a role")
  })} onSubmit={() => {}}>
      <Form className="max-w-sm space-y-4">
        <Select name="role" label="User Role" placeholder="Choose one" options={options} />
         <button type="submit" className="px-4 py-2 rounded-md bg-primary text-white text-sm">
            Submit
          </button>
      </Form>
    </Formik>
}`,...(T=(B=d.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var W,I,P;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    label: "Role (Disabled)",
    disabled: true,
    options
  }
}`,...(P=(I=p.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const ae=["Default","WithIcon","WithInitialValue","WithError","Disabled"];export{i as Default,p as Disabled,d as WithError,c as WithIcon,m as WithInitialValue,ae as __namedExportsOrder,re as default};
//# sourceMappingURL=Select.stories-DV2rSYyN.js.map
