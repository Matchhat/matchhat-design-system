import{j as e}from"./jsx-runtime-CCjYJYRa.js";import"./index-uubelm5h.js";import{c as w}from"./index-vAxXS4R5.js";import{c,C as I}from"./chevron-right-3-JEcuUS.js";/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],S=c("chevron-down",D);/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],V=c("loader-circle",E);/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],l=c("plus",A),$="inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 gap-2",q={primary:"bg-primary text-white hover:bg-primary-hover disabled:bg-primary-disabled",secondary:"bg-gray-200 text-black hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400",text:"bg-transparent text-gray-600 hover:text-black disabled:text-gray-400",danger:"bg-danger text-white hover:bg-danger-hover disabled:bg-danger-disabled",outline:"border border-primary text-primary bg-transparent hover:bg-primary-outline disabled:border-primary-disabled disabled:text-primary-hover",link:"bg-transparent text-primary hover:underline disabled:text-gray-400 disabled:no-underline"},O={sm:"text-sm px-3 py-1.5",md:"text-base px-4 py-2",lg:"text-lg px-5 py-2.5"},a=({children:r,variant:M="primary",size:P="md",iconLeft:m,iconRight:u,loading:s=!1,className:_,...g})=>e.jsxs("button",{className:w($,q[M],O[P],_),disabled:g.disabled||s,...g,children:[s&&e.jsx(V,{className:"animate-spin w-4 h-4"}),!s&&m&&e.jsx("span",{className:"mr-1",children:m}),r,!s&&u&&e.jsx("span",{className:"ml-1",children:u})]}),H={title:"UI/Button",component:a,argTypes:{variant:{control:"select",options:["primary","secondary","text","danger","outline"]},size:{control:"select",options:["sm","md","lg"]},loading:{control:"boolean"}}},n={args:{children:"Click Me",variant:"primary",size:"md",loading:!1}},t={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:["primary","secondary","text","danger","outline"].map(r=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{variant:r,children:"Default"}),e.jsx(a,{variant:r,disabled:!0,children:"Disabled"}),e.jsx(a,{variant:r,loading:!0,children:"Loading"}),e.jsx(a,{variant:r,iconLeft:e.jsx(l,{size:16}),children:"Icon"})]},r))})},i={render:r=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{...r,size:"sm",children:"Small"}),e.jsx(a,{...r,size:"md",children:"Medium"}),e.jsx(a,{...r,size:"lg",children:"Large"})]}),args:{variant:"primary"}},o={render:()=>e.jsxs("div",{className:"flex gap-6",children:[e.jsx(a,{variant:"link",iconRight:e.jsx(I,{size:14}),children:"More"}),e.jsx(a,{variant:"link",children:"Edit"}),e.jsx(a,{variant:"link",disabled:!0,iconRight:e.jsx(S,{size:14}),children:"Community"})]})},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{iconLeft:e.jsx(l,{size:16}),children:"Left Icon"}),e.jsx(a,{iconRight:e.jsx(I,{size:16}),children:"Right Icon"}),e.jsx(a,{iconLeft:e.jsx(l,{size:16}),iconRight:e.jsx(S,{size:16}),children:"Both Icons"})]}),args:{variant:"primary"}};var p,x,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    variant: 'primary',
    size: 'md',
    loading: false
  }
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,y,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      {['primary', 'secondary', 'text', 'danger', 'outline'].map(variant => <div className="flex gap-4" key={variant}>
          <Button variant={variant as any}>Default</Button>
          <Button variant={variant as any} disabled>
            Disabled
          </Button>
          <Button variant={variant as any} loading>
            Loading
          </Button>
          <Button variant={variant as any} iconLeft={<Plus size={16} />}>
            Icon
          </Button>
        </div>)}
    </div>
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,j,B;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>,
  args: {
    variant: 'primary'
  }
}`,...(B=(j=i.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var z,k,N;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6">
      <Button variant="link" iconRight={<ChevronRight size={14} />}>
        More
      </Button>
      <Button variant="link">Edit</Button>
      <Button variant="link" disabled iconRight={<ChevronDown size={14} />}>
        Community
      </Button>
    </div>
}`,...(N=(k=o.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var L,C,R;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Button iconLeft={<Plus size={16} />}>Left Icon</Button>
      <Button iconRight={<ChevronRight size={16} />}>Right Icon</Button>
      <Button iconLeft={<Plus size={16} />} iconRight={<ChevronDown size={16} />}>
        Both Icons
      </Button>
    </div>,
  args: {
    variant: 'primary'
  }
}`,...(R=(C=d.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const J=["Playground","AllVariants","Sizes","LinkVariants","IconPositions"];export{t as AllVariants,d as IconPositions,o as LinkVariants,n as Playground,i as Sizes,J as __namedExportsOrder,H as default};
//# sourceMappingURL=Button.stories-DFm3Lf4u.js.map
