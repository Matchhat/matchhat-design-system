import{j as e}from"./jsx-runtime-CCjYJYRa.js";import{u as de,F as c,a as m}from"./formik.esm-BymhOPsv.js";import{r as p}from"./index-uubelm5h.js";import{c as he,a as ge}from"./index.esm-D9zqbv4Z.js";import{c as xe}from"./index-vAxXS4R5.js";import{X as ye}from"./x-CC48FUyt.js";import{c as ce}from"./createLucideIcon-BRHAYV9X.js";import{C as Se}from"./chevron-right-U-Quley1.js";/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],me=ce("search",be);/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],je=ce("smile",fe),l=({label:a,iconLeft:t,iconRight:s,className:n,disabled:k,suggestions:v=[],tags:V=[],onTagAdd:i,onTagRemove:W,onCustomTagAdd:T,onSearch:E,...u})=>{const[L,I]=de(u),d=!!I.error&&I.touched,h=k??u.disabled??!1,[o,D]=p.useState("");p.useEffect(()=>{o.trim()&&E&&E(o.trim())},[o,E]);const pe=async r=>{if(r.key==="Enter"&&o.trim()){r.preventDefault();const R=o.trim(),C=v.find(ue=>ue.toLowerCase()===R.toLowerCase());C?i==null||i(C):(await(T==null?void 0:T(R)),i==null||i(R)),D("")}};return e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[a&&e.jsx("label",{className:"text-sm font-medium text-gray-700",children:a}),e.jsxs("div",{className:xe("flex items-center px-3 py-2 rounded-md border w-full bg-white text-sm transition",{"border-gray-300":!d&&!h,"border-red-500":d,"border-gray-200 bg-gray-100 cursor-not-allowed":h,"focus-within:border-primary focus-within:ring-1 focus-within:ring-primary":!d&&!h},n),children:[t&&e.jsx("div",{className:"mr-2 text-gray-400",children:t}),e.jsx("input",{...L,...u,disabled:h,value:o,onChange:r=>{D(r.target.value),L.onChange(r)},onKeyDown:pe,className:"flex-1 bg-transparent outline-none text-sm placeholder:text-gray-400",placeholder:u.placeholder||"Search or add"}),s&&e.jsx("div",{className:"ml-2 text-gray-400",children:s})]}),v.length>0&&e.jsx("div",{className:"border rounded-md p-2 bg-white flex flex-wrap gap-2 mt-1",children:v.map(r=>e.jsxs("button",{type:"button",onClick:()=>{i==null||i(r),D("")},className:"text-sm border border-primary/30 rounded-full px-3 py-1 hover:bg-primary/10 transition",children:[r," ",e.jsx("span",{className:"ml-1 text-primary font-bold",children:"+"})]},r))}),V.length>0&&e.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:V.map(r=>e.jsxs("span",{className:"flex items-center bg-primary/10 text-primary text-xs rounded-full px-2 py-1",children:[r,W&&e.jsx("button",{type:"button",onClick:()=>W(r),className:"ml-1 hover:text-red-500",children:e.jsx(ye,{className:"w-3 h-3"})})]},r))}),d&&e.jsx("span",{className:"text-xs text-red-500 mt-1",children:I.error})]})},Re={title:"UI/Input",component:l,tags:["autodocs"]},F=a=>e.jsx(c,{initialValues:{input:""},onSubmit:()=>{},children:e.jsx(m,{className:"max-w-md space-y-3",children:e.jsx(l,{name:"input",...a})})}),g={render:F,args:{label:"Full Name",placeholder:"Enter your name"}},x={render:F,args:{label:"Search",placeholder:"Search here...",iconLeft:e.jsx(me,{className:"w-4 h-4"})}},y={render:F,args:{label:"Next",placeholder:"Continue...",iconRight:e.jsx(Se,{className:"w-4 h-4"})}},S={render:F,args:{label:"Disabled Input",placeholder:"You can't type here",disabled:!0}},b={render:()=>e.jsx(c,{initialValues:{input:""},validationSchema:he({input:ge().required("This field is required")}),onSubmit:()=>{},children:e.jsx(m,{className:"max-w-md",children:e.jsx(l,{name:"input",label:"Email",placeholder:"you@example.com"})})})},f={render:()=>{const[a,t]=p.useState(["React","Design System"]);return e.jsx(c,{initialValues:{input:""},onSubmit:()=>{},children:e.jsx(m,{className:"max-w-md",children:e.jsx(l,{name:"input",label:"Skills",tags:a,onTagRemove:s=>t(a.filter(n=>n!==s)),placeholder:"Type a skill"})})})}},j={render:()=>{const[a,t]=p.useState(["Kyoto","Producer","Anime Style"]),s=["Illustrator","Photographer","Developer"];return e.jsx(c,{initialValues:{input:""},onSubmit:()=>{},children:e.jsx(m,{className:"max-w-md space-y-3",children:e.jsx(l,{name:"input",label:"Search & Select Tags",iconLeft:e.jsx(me,{className:"w-4 h-4"}),iconRight:e.jsx(je,{className:"w-4 h-4"}),suggestions:s,tags:a,onTagAdd:n=>t([...a,n]),onTagRemove:n=>t(a.filter(k=>k!==n)),placeholder:"Search tags..."})})})}},N={render:()=>{const[a,t]=p.useState(["Front-End","Back-End","TypeScript","Tailwind","Design Systems","Form Validation"]);return e.jsx(c,{initialValues:{input:""},onSubmit:()=>{},children:e.jsx(m,{className:"max-w-md",children:e.jsx(l,{name:"input",label:"Expertise",tags:a,onTagAdd:s=>{a.includes(s)||t([...a,s])},onTagRemove:s=>t(a.filter(n=>n!==s)),placeholder:"Search topics..."})})})}},w={render:()=>e.jsx(c,{initialValues:{input:""},onSubmit:()=>{},children:e.jsx(m,{className:"max-w-md",children:e.jsx(l,{name:"input",label:"Start Typing",suggestions:[],tags:[],placeholder:"Nothing added yet"})})})};var B,_,q;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    label: "Full Name",
    placeholder: "Enter your name"
  }
}`,...(q=(_=g.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var P,Y,K;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    label: "Search",
    placeholder: "Search here...",
    iconLeft: <Search className="w-4 h-4" />
  }
}`,...(K=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var $,M,O;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    label: "Next",
    placeholder: "Continue...",
    iconRight: <ChevronRight className="w-4 h-4" />
  }
}`,...(O=(M=y.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var Q,U,X;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    label: "Disabled Input",
    placeholder: "You can't type here",
    disabled: true
  }
}`,...(X=(U=S.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var z,G,H;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Formik initialValues={{
    input: ""
  }} validationSchema={Yup.object({
    input: Yup.string().required("This field is required")
  })} onSubmit={() => {}}>
      <Form className="max-w-md">
        <Input name="input" label="Email" placeholder="you@example.com" />
      </Form>
    </Formik>
}`,...(H=(G=b.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Z,A;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(A=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:A.source}}};var ee,ae,re;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,te,ne;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ne=(te=N.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,le,oe;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    return <Formik initialValues={{
      input: ""
    }} onSubmit={() => {}}>
        <Form className="max-w-md">
          <Input name="input" label="Start Typing" suggestions={[]} tags={[]} placeholder="Nothing added yet" />
        </Form>
      </Formik>;
  }
}`,...(oe=(le=w.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};const Ve=["Default","WithLeftIcon","WithRightIcon","Disabled","WithError","WithTags","WithSuggestions","WithLongTags","EmptyState"];export{g as Default,S as Disabled,w as EmptyState,b as WithError,x as WithLeftIcon,N as WithLongTags,y as WithRightIcon,j as WithSuggestions,f as WithTags,Ve as __namedExportsOrder,Re as default};
//# sourceMappingURL=Input.stories-CCbvwkUC.js.map
