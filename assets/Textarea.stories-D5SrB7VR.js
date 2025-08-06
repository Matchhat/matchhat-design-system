import{j as e}from"./jsx-runtime-CCjYJYRa.js";import{u as E,F as S,a as F,c as q,b as B}from"./index.esm-DwHxJDZS.js";import"./index-uubelm5h.js";import{c as k}from"./index-vAxXS4R5.js";const d=({label:r,className:M,disabled:D,...s})=>{const[W,m]=E(s),a=!!m.error&&m.touched,o=D??s.disabled??!1;return e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[r&&e.jsx("label",{className:"text-sm font-medium text-gray-700",children:r}),e.jsx("textarea",{...W,...s,disabled:o,className:k("w-full rounded-md border px-3 py-2 text-sm resize-none transition bg-white",{"border-gray-300":!a&&!o,"border-red-500":a,"bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed":o,"focus:border-primary focus:ring-1 focus:ring-primary":!a&&!o},M),rows:s.rows||4}),a&&e.jsx("span",{className:"text-xs text-red-500 mt-1",children:m.error})]})},Y={title:"UI/Textarea",component:d,tags:["autodocs"]},c=r=>e.jsx(S,{initialValues:{message:""},onSubmit:()=>{},children:e.jsx(F,{className:"max-w-md space-y-4",children:e.jsx(d,{name:"message",...r})})}),t={render:c,args:{label:"Message",placeholder:"Type your message here..."}},n={render:()=>e.jsx(S,{initialValues:{message:""},validationSchema:q({message:B().required("Message is required")}),onSubmit:()=>{},children:e.jsx(F,{className:"max-w-md",children:e.jsx(d,{name:"message",label:"Message",placeholder:"Write something important..."})})})},i={render:c,args:{label:"Notes",disabled:!0,placeholder:"This is read-only"}},l={render:c,args:{label:"Description",placeholder:"Minimum2 rows",rows:2}};var u,p,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    label: "Message",
    placeholder: "Type your message here..."
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,h,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Formik initialValues={{
    message: ""
  }} validationSchema={Yup.object({
    message: Yup.string().required("Message is required")
  })} onSubmit={() => {}}>
      <Form className="max-w-md">
        <Textarea name="message" label="Message" placeholder="Write something important..." />
      </Form>
    </Formik>
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,w,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    label: "Notes",
    disabled: true,
    placeholder: "This is read-only"
  }
}`,...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var j,T,N;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    label: "Description",
    placeholder: "Minimum2 rows",
    rows: 2
  }
}`,...(N=(T=l.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const _=["Default","WithError","Disabled","WithCustomRows"];export{t as Default,i as Disabled,l as WithCustomRows,n as WithError,_ as __namedExportsOrder,Y as default};
//# sourceMappingURL=Textarea.stories-D5SrB7VR.js.map
