import{j as t}from"./jsx-runtime-CCjYJYRa.js";import{r as u}from"./index-uubelm5h.js";import{c as l}from"./index-vAxXS4R5.js";const n=({checked:e,onChange:a,disabled:r=!1,label:c,size:s="md",className:p,labelPosition:S="right"})=>t.jsxs("label",{className:l("inline-flex items-center gap-2",p,{"opacity-50 cursor-not-allowed":r,"flex-row-reverse":S==="left"}),children:[t.jsxs("span",{className:l("relative inline-block transition-colors duration-300 ease-in-out",{"w-10 h-6":s==="md","w-12 h-7":s==="lg","w-8 h-5":s==="sm"}),children:[t.jsx("input",{type:"checkbox",checked:e,onChange:g=>a(g.target.checked),disabled:r,className:"sr-only"}),t.jsx("span",{className:l("absolute inset-0 transition rounded-full",e?"bg-blue-600":"bg-gray-300")}),t.jsx("span",{className:l("absolute top-0.5 bg-white rounded-full shadow transform transition",{"left-0.5":!e,"left-5":e&&s==="md","left-6":e&&s==="lg","left-4":e&&s==="sm","w-5 h-5":s==="md","w-6 h-6":s==="lg","w-4 h-4":s==="sm"})})]}),c&&t.jsx("span",{className:l("select-none",{"text-sm":s==="sm","text-base":s==="md","text-lg":s==="lg","text-gray-400":r}),children:c})]}),W=({label:e,switches:a})=>t.jsxs("div",{className:"flex flex-col gap-2",children:[e&&t.jsx("div",{className:"text-sm text-gray-400 font-medium mb-1",children:e}),a.map((r,c)=>t.jsx(n,{...r},c))]}),R={title:"UI/Switch",component:n},o={render:()=>{const[e,a]=u.useState([!0,!1,!0]);return t.jsxs("div",{className:"flex gap-6",children:[t.jsx(n,{size:"sm",checked:e[0],onChange:r=>a([r,e[1],e[2]])}),t.jsx(n,{size:"md",checked:e[1],onChange:r=>a([e[0],r,e[2]])}),t.jsx(n,{size:"lg",checked:e[2],onChange:r=>a([e[0],e[1],r])})]})}},d={render:()=>{const[e,a]=u.useState(!0);return t.jsx(n,{checked:e,onChange:a,label:"Switch"})}},i={render:()=>t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(n,{checked:!1,onChange:()=>{},label:"Switch",disabled:!0}),t.jsx(n,{checked:!0,onChange:()=>{},label:"Switch",disabled:!0})]})},h={render:()=>{const[e,a]=u.useState(!1);return t.jsx(n,{checked:e,onChange:a,label:"Switch",labelPosition:"left"})}},m={render:()=>{const[e,a]=u.useState([!0,!1,!1]);return t.jsx(W,{label:"Label",switches:e.map((r,c)=>({checked:r,onChange:s=>a(p=>p.map((S,g)=>c===g?s:S)),label:"Switch"}))})}};var x,f,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [state, setState] = useState([true, false, true]);
    return <div className="flex gap-6">
        <Switch size="sm" checked={state[0]} onChange={(v: boolean) => setState([v, state[1], state[2]])} />
        <Switch size="md" checked={state[1]} onChange={(v: boolean) => setState([state[0], v, state[2]])} />
        <Switch size="lg" checked={state[2]} onChange={(v: boolean) => setState([state[0], state[1], v])} />
      </div>;
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var w,k,j;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    return <Switch checked={checked} onChange={setChecked} label="Switch" />;
  }
}`,...(j=(k=d.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var C,v,N;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex flex-col gap-4">
        <Switch checked={false} onChange={() => {}} label="Switch" disabled />
        <Switch checked={true} onChange={() => {}} label="Switch" disabled />
      </div>;
  }
}`,...(N=(v=i.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var L,y,G;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={setChecked} label="Switch" labelPosition="left" />;
  }
}`,...(G=(y=h.parameters)==null?void 0:y.docs)==null?void 0:G.source}}};var E,D,P;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [states, setStates] = useState([true, false, false]);
    return <SwitchGroup label="Label" switches={states.map((value, i) => ({
      checked: value,
      onChange: v => setStates(prev => prev.map((p, j) => i === j ? v : p)),
      label: "Switch"
    }))} />;
  }
}`,...(P=(D=m.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const U=["Sizes","WithLabel","Disabled","LabelLeft","Group"];export{i as Disabled,m as Group,h as LabelLeft,o as Sizes,d as WithLabel,U as __namedExportsOrder,R as default};
//# sourceMappingURL=Switch.stories-D3dZzyzO.js.map
