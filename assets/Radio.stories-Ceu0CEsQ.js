import{j as e}from"./jsx-runtime-CCjYJYRa.js";import{u as N,F as c}from"./formik.esm-BymhOPsv.js";import"./index-uubelm5h.js";import{c as p}from"./index-vAxXS4R5.js";const l=({name:r,label:o,options:v,disabled:t=!1})=>{const[u,m,w]=N(r),R=m.touched&&m.error;return e.jsxs("div",{className:"flex flex-col gap-2",children:[o&&e.jsx("span",{className:"text-sm font-medium text-gray-700",children:o}),e.jsx("div",{className:"grid grid-cols-2 gap-3",children:v.map(a=>{const F=u.value===a.value;return e.jsxs("label",{className:p("inline-flex items-center gap-2 text-sm cursor-pointer",{"text-gray-400 cursor-not-allowed":t,"text-black":!t}),children:[e.jsx("input",{type:"radio",...u,value:a.value,checked:F,disabled:t,className:p("w-4 h-4 border rounded-full appearance-none bg-white checked:bg-primary checked:border-primary checked:ring-2 checked:ring-offset-2 checked:ring-primary",{"opacity-50 cursor-not-allowed":t})}),a.label]},a.value)})}),R&&e.jsx("span",{className:"text-xs text-red-500",children:m.error})]})},P={title:"UI/Radio Group",component:l,tags:["autodocs"]},d=[{label:"Radio button",value:"option1"},{label:"Radio button",value:"option2"}],n={render:()=>e.jsx(c,{initialValues:{role:"option1"},onSubmit:()=>{},children:e.jsx(l,{name:"role",label:"Radio button",options:d})})},s={render:()=>e.jsx(c,{initialValues:{role:"option1"},onSubmit:()=>{},children:e.jsx(l,{name:"role",label:"Disabled radio group",options:d,disabled:!0})})},i={render:()=>e.jsx(c,{initialValues:{role:""},validate:r=>{const o={};return r.role||(o.role="Please select an option"),o},onSubmit:()=>{alert("Form submitted")},children:({handleSubmit:r})=>e.jsxs("form",{onSubmit:r,className:"space-y-4",children:[e.jsx(l,{name:"role",label:"Radio button with error",options:d}),e.jsx("button",{type:"submit",className:"px-4 py-2 rounded-md bg-primary text-white text-sm",children:"Submit"})]})})};var b,x,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Formik initialValues={{
    role: "option1"
  }} onSubmit={() => {}}>
      <RadioGroup name="role" label="Radio button" options={options} />
    </Formik>
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,f,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Formik initialValues={{
    role: "option1"
  }} onSubmit={() => {}}>
      <RadioGroup name="role" label="Disabled radio group" options={options} disabled />
    </Formik>
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var j,y,k;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Formik initialValues={{
    role: ""
  }} validate={values => {
    const errors: {
      role?: string;
    } = {};
    if (!values.role) {
      errors.role = "Please select an option";
    }
    return errors;
  }} onSubmit={() => {
    alert("Form submitted");
  }}>
      {({
      handleSubmit
    }) => <form onSubmit={handleSubmit} className="space-y-4">
          <RadioGroup name="role" label="Radio button with error" options={options} />
          <button type="submit" className="px-4 py-2 rounded-md bg-primary text-white text-sm">
            Submit
          </button>
        </form>}
    </Formik>
}`,...(k=(y=i.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const W=["Default","WithDisabled","ErrorState"];export{n as Default,i as ErrorState,s as WithDisabled,W as __namedExportsOrder,P as default};
//# sourceMappingURL=Radio.stories-Ceu0CEsQ.js.map
