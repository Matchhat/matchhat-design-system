import{j as e}from"./jsx-runtime-CCjYJYRa.js";import{u as ue,F as c,a as m,c as he,b as ge}from"./index.esm-DwHxJDZS.js";import{r as d}from"./index-uubelm5h.js";import{c as xe}from"./index-vAxXS4R5.js";import{c as V,C as ye}from"./chevron-right-3-JEcuUS.js";/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],me=V("search",be);/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],fe=V("smile",Se);/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ne=V("x",je),l=({label:a,iconLeft:t,iconRight:s,className:n,disabled:k,suggestions:v=[],tags:W=[],onTagAdd:i,onTagRemove:L,onCustomTagAdd:T,onSearch:E,...p})=>{const[C,I]=ue(p),u=!!I.error&&I.touched,h=k??p.disabled??!1,[o,D]=d.useState("");d.useEffect(()=>{o.trim()&&E&&E(o.trim())},[o,E]);const de=async r=>{if(r.key==="Enter"&&o.trim()){r.preventDefault();const R=o.trim(),_=v.find(pe=>pe.toLowerCase()===R.toLowerCase());_?i==null||i(_):(await(T==null?void 0:T(R)),i==null||i(R)),D("")}};return e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[a&&e.jsx("label",{className:"text-sm font-medium text-gray-700",children:a}),e.jsxs("div",{className:xe("flex items-center px-3 py-2 rounded-md border w-full bg-white text-sm transition",{"border-gray-300":!u&&!h,"border-red-500":u,"border-gray-200 bg-gray-100 cursor-not-allowed":h,"focus-within:border-primary focus-within:ring-1 focus-within:ring-primary":!u&&!h},n),children:[t&&e.jsx("div",{className:"mr-2 text-gray-400",children:t}),e.jsx("input",{...C,...p,disabled:h,value:o,onChange:r=>{D(r.target.value),C.onChange(r)},onKeyDown:de,className:"flex-1 bg-transparent outline-none text-sm placeholder:text-gray-400",placeholder:p.placeholder||"Search or add"}),s&&e.jsx("div",{className:"ml-2 text-gray-400",children:s})]}),v.length>0&&e.jsx("div",{className:"border rounded-md p-2 bg-white flex flex-wrap gap-2 mt-1",children:v.map(r=>e.jsxs("button",{type:"button",onClick:()=>{i==null||i(r),D("")},className:"text-sm border border-primary/30 rounded-full px-3 py-1 hover:bg-primary/10 transition",children:[r," ",e.jsx("span",{className:"ml-1 text-primary font-bold",children:"+"})]},r))}),W.length>0&&e.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:W.map(r=>e.jsxs("span",{className:"flex items-center bg-primary/10 text-primary text-xs rounded-full px-2 py-1",children:[r,L&&e.jsx("button",{type:"button",onClick:()=>L(r),className:"ml-1 hover:text-red-500",children:e.jsx(Ne,{className:"w-3 h-3"})})]},r))}),u&&e.jsx("span",{className:"text-xs text-red-500 mt-1",children:I.error})]})},Ie={title:"UI/Input",component:l,tags:["autodocs"]},F=a=>e.jsx(c,{initialValues:{input:""},onSubmit:()=>{},children:e.jsx(m,{className:"max-w-md space-y-3",children:e.jsx(l,{name:"input",...a})})}),g={render:F,args:{label:"Full Name",placeholder:"Enter your name"}},x={render:F,args:{label:"Search",placeholder:"Search here...",iconLeft:e.jsx(me,{className:"w-4 h-4"})}},y={render:F,args:{label:"Next",placeholder:"Continue...",iconRight:e.jsx(ye,{className:"w-4 h-4"})}},b={render:F,args:{label:"Disabled Input",placeholder:"You can't type here",disabled:!0}},S={render:()=>e.jsx(c,{initialValues:{input:""},validationSchema:he({input:ge().required("This field is required")}),onSubmit:()=>{},children:e.jsx(m,{className:"max-w-md",children:e.jsx(l,{name:"input",label:"Email",placeholder:"you@example.com"})})})},f={render:()=>{const[a,t]=d.useState(["React","Design System"]);return e.jsx(c,{initialValues:{input:""},onSubmit:()=>{},children:e.jsx(m,{className:"max-w-md",children:e.jsx(l,{name:"input",label:"Skills",tags:a,onTagRemove:s=>t(a.filter(n=>n!==s)),placeholder:"Type a skill"})})})}},j={render:()=>{const[a,t]=d.useState(["Kyoto","Producer","Anime Style"]),s=["Illustrator","Photographer","Developer"];return e.jsx(c,{initialValues:{input:""},onSubmit:()=>{},children:e.jsx(m,{className:"max-w-md space-y-3",children:e.jsx(l,{name:"input",label:"Search & Select Tags",iconLeft:e.jsx(me,{className:"w-4 h-4"}),iconRight:e.jsx(fe,{className:"w-4 h-4"}),suggestions:s,tags:a,onTagAdd:n=>t([...a,n]),onTagRemove:n=>t(a.filter(k=>k!==n)),placeholder:"Search tags..."})})})}},N={render:()=>{const[a,t]=d.useState(["Front-End","Back-End","TypeScript","Tailwind","Design Systems","Form Validation"]);return e.jsx(c,{initialValues:{input:""},onSubmit:()=>{},children:e.jsx(m,{className:"max-w-md",children:e.jsx(l,{name:"input",label:"Expertise",tags:a,onTagAdd:s=>{a.includes(s)||t([...a,s])},onTagRemove:s=>t(a.filter(n=>n!==s)),placeholder:"Search topics..."})})})}},w={render:()=>e.jsx(c,{initialValues:{input:""},onSubmit:()=>{},children:e.jsx(m,{className:"max-w-md",children:e.jsx(l,{name:"input",label:"Start Typing",suggestions:[],tags:[],placeholder:"Nothing added yet"})})})};var B,q,P;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    label: "Full Name",
    placeholder: "Enter your name"
  }
}`,...(P=(q=g.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var Y,$,K;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    label: "Search",
    placeholder: "Search here...",
    iconLeft: <Search className="w-4 h-4" />
  }
}`,...(K=($=x.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var M,O,Q;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    label: "Next",
    placeholder: "Continue...",
    iconRight: <ChevronRight className="w-4 h-4" />
  }
}`,...(Q=(O=y.parameters)==null?void 0:O.docs)==null?void 0:Q.source}}};var U,X,z;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    label: "Disabled Input",
    placeholder: "You can't type here",
    disabled: true
  }
}`,...(z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};var G,H,J;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Formik initialValues={{
    input: ""
  }} validationSchema={Yup.object({
    input: Yup.string().required("This field is required")
  })} onSubmit={() => {}}>
      <Form className="max-w-md">
        <Input name="input" label="Email" placeholder="you@example.com" />
      </Form>
    </Formik>
}`,...(J=(H=S.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Z,A,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState(["React", "Design System"]);
    return <Formik initialValues={{
      input: ""
    }} onSubmit={() => {}}>
        <Form className="max-w-md">
          <Input name="input" label="Skills" tags={tags} onTagRemove={(tag: string) => setTags(tags.filter(t => t !== tag))} placeholder="Type a skill" />
        </Form>
      </Formik>;
  }
}`,...(ee=(A=f.parameters)==null?void 0:A.docs)==null?void 0:ee.source}}};var ae,re,se;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState(["Kyoto", "Producer", "Anime Style"]);
    const suggestions = ["Illustrator", "Photographer", "Developer"];
    return <Formik initialValues={{
      input: ""
    }} onSubmit={() => {}}>
        <Form className="max-w-md space-y-3">
          <Input name="input" label="Search & Select Tags" iconLeft={<Search className="w-4 h-4" />} iconRight={<Smile className="w-4 h-4" />} suggestions={suggestions} tags={tags} onTagAdd={(tag: string) => setTags([...tags, tag])} onTagRemove={(tag: string) => setTags(tags.filter(t => t !== tag))} placeholder="Search tags..." />
        </Form>
      </Formik>;
  }
}`,...(se=(re=j.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,ne,ie;N.parameters={...N.parameters,docs:{...(te=N.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState(["Front-End", "Back-End", "TypeScript", "Tailwind", "Design Systems", "Form Validation"]);
    return <Formik initialValues={{
      input: ""
    }} onSubmit={() => {}}>
        <Form className="max-w-md">
          <Input name="input" label="Expertise" tags={tags} onTagAdd={(tag: string) => {
          if (!tags.includes(tag)) {
            setTags([...tags, tag]);
          }
        }} onTagRemove={(tag: string) => setTags(tags.filter(t => t !== tag))} placeholder="Search topics..." />
        </Form>
      </Formik>;
  }
}`,...(ie=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,oe,ce;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    return <Formik initialValues={{
      input: ""
    }} onSubmit={() => {}}>
        <Form className="max-w-md">
          <Input name="input" label="Start Typing" suggestions={[]} tags={[]} placeholder="Nothing added yet" />
        </Form>
      </Formik>;
  }
}`,...(ce=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};const De=["Default","WithLeftIcon","WithRightIcon","Disabled","WithError","WithTags","WithSuggestions","WithLongTags","EmptyState"];export{g as Default,b as Disabled,w as EmptyState,S as WithError,x as WithLeftIcon,N as WithLongTags,y as WithRightIcon,j as WithSuggestions,f as WithTags,De as __namedExportsOrder,Ie as default};
//# sourceMappingURL=Input.stories-aTpHjHKy.js.map
