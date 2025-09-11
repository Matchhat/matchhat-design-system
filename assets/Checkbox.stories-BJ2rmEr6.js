import{j as e}from"./jsx-runtime-CCjYJYRa.js";import{r as p}from"./index-uubelm5h.js";import{c as o}from"./index-vAxXS4R5.js";const T={sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"},l=({label:s,checked:t=!1,onChange:r,disabled:n=!1,indeterminate:d=!1,size:h="md",name:k,value:v,className:C})=>{const c=p.useRef(null);return p.useEffect(()=>{c.current&&(c.current.indeterminate=d)},[d]),e.jsxs("label",{className:o("inline-flex items-center gap-2",C),children:[e.jsx("input",{ref:c,type:"checkbox",name:k,value:v,disabled:n,checked:t,onChange:a=>r==null?void 0:r(a.target.checked),className:o("accent-blue-600 border border-gray-300 rounded",T[h],{"opacity-50 cursor-not-allowed":n})}),s&&e.jsx("span",{className:o("text-gray-800",{"text-gray-400":n}),children:s})]})},R=({label:s,options:t,values:r,onChange:n,disabled:d=!1,orientation:h="vertical",size:k="md",name:v,className:C})=>{const c=a=>{if(!n)return;const _=r.includes(a)?r.filter(O=>O!==a):[...r,a];n(_)};return e.jsxs("div",{className:o(C),children:[s&&e.jsx("div",{className:"text-sm text-gray-500 mb-1",children:s}),e.jsx("div",{className:o("flex gap-4",h==="vertical"?"flex-col":"flex-row"),children:t.map(a=>e.jsx(l,{label:a.label,value:a.value,checked:r.includes(a.value),onChange:()=>c(a.value),disabled:d,size:k,name:v},a.value))})]})},B={title:"UI/Checkbox",component:l},i={render:()=>e.jsxs("div",{className:"flex gap-6 items-center",children:[e.jsx(l,{label:"Small",size:"sm"}),e.jsx(l,{label:"Medium",size:"md"}),e.jsx(l,{label:"Large",size:"lg"})]})},u={render:()=>e.jsx(l,{label:"Indeterminate",indeterminate:!0})},b={render:()=>e.jsxs("div",{className:"flex gap-6 items-center",children:[e.jsx(l,{label:"Disabled",disabled:!0}),e.jsx(l,{label:"Checked",disabled:!0,checked:!0})]})},m={render:()=>{const[s,t]=p.useState(["1"]);return e.jsx(R,{label:"Group Label",values:s,onChange:t,options:[{label:"Checkbox",value:"1"},{label:"Checkbox",value:"2"},{label:"Checkbox",value:"3"}]})}},x={render:()=>{const[s,t]=p.useState(["1"]);return e.jsx(R,{label:"Label",orientation:"horizontal",values:s,onChange:t,options:[{label:"Checkbox",value:"1"},{label:"Checkbox",value:"2"},{label:"Checkbox",value:"3"}]})}};var g,f,j;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6 items-center">
      <Checkbox label="Small" size="sm" />
      <Checkbox label="Medium" size="md" />
      <Checkbox label="Large" size="lg" />
    </div>
}`,...(j=(f=i.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var S,z,N;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Checkbox label="Indeterminate" indeterminate />
}`,...(N=(z=u.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var G,y,L;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6 items-center">
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Checked" disabled checked />
    </div>
}`,...(L=(y=b.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var w,I,D;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState(["1"]);
    return <CheckboxGroup label="Group Label" values={selected} onChange={setSelected} options={[{
      label: "Checkbox",
      value: "1"
    }, {
      label: "Checkbox",
      value: "2"
    }, {
      label: "Checkbox",
      value: "3"
    }]} />;
  }
}`,...(D=(I=m.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var E,M,H;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState(["1"]);
    return <CheckboxGroup label="Label" orientation="horizontal" values={selected} onChange={setSelected} options={[{
      label: "Checkbox",
      value: "1"
    }, {
      label: "Checkbox",
      value: "2"
    }, {
      label: "Checkbox",
      value: "3"
    }]} />;
  }
}`,...(H=(M=x.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};const F=["Sizes","Indeterminate","Disabled","Group","HorizontalGroup"];export{b as Disabled,m as Group,x as HorizontalGroup,u as Indeterminate,i as Sizes,F as __namedExportsOrder,B as default};
//# sourceMappingURL=Checkbox.stories-BJ2rmEr6.js.map
