import{j as e}from"./jsx-runtime-CCjYJYRa.js";import"./index-uubelm5h.js";import{c as w}from"./index-vAxXS4R5.js";import{c as R}from"./createLucideIcon-BRHAYV9X.js";import{C as I}from"./chevron-right-U-Quley1.js";import{C as S}from"./chevron-down-CMZBedbz.js";/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],E=R("loader-circle",_);/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],d=R("plus",V),A="inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 gap-2",O={primary:"bg-primary text-white hover:bg-primary-hover disabled:bg-primary-disabled",secondary:"bg-gray-200 text-black hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400",text:"bg-transparent text-gray-600 hover:text-black disabled:text-gray-400",danger:"bg-danger text-white hover:bg-danger-hover disabled:bg-danger-disabled",outline:"border border-primary text-primary bg-transparent hover:bg-primary-outline disabled:border-primary-disabled disabled:text-primary-hover",link:"bg-transparent text-primary hover:underline disabled:text-gray-400 disabled:no-underline"},T={sm:"text-sm px-3 py-1.5",md:"text-base px-4 py-2",lg:"text-lg px-5 py-2.5"},a=({children:r,variant:M="primary",size:P="md",iconLeft:c,iconRight:m,loading:s=!1,className:D,...p})=>e.jsxs("button",{className:w(A,O[M],T[P],D),disabled:p.disabled||s,...p,children:[s&&e.jsx(E,{className:"animate-spin w-4 h-4"}),!s&&c&&e.jsx("span",{className:"mr-1",children:c}),r,!s&&m&&e.jsx("span",{className:"ml-1",children:m})]}),J={title:"UI/Button",component:a,argTypes:{variant:{control:"select",options:["primary","secondary","text","danger","outline"]},size:{control:"select",options:["sm","md","lg"]},loading:{control:"boolean"}}},t={args:{children:"Click Me",variant:"primary",size:"md",loading:!1}},n={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:["primary","secondary","text","danger","outline"].map(r=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{variant:r,children:"Default"}),e.jsx(a,{variant:r,disabled:!0,children:"Disabled"}),e.jsx(a,{variant:r,loading:!0,children:"Loading"}),e.jsx(a,{variant:r,iconLeft:e.jsx(d,{size:16}),children:"Icon"})]},r))})},i={render:r=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{...r,size:"sm",children:"Small"}),e.jsx(a,{...r,size:"md",children:"Medium"}),e.jsx(a,{...r,size:"lg",children:"Large"})]}),args:{variant:"primary"}},o={render:()=>e.jsxs("div",{className:"flex gap-6",children:[e.jsx(a,{variant:"link",iconRight:e.jsx(I,{size:14}),children:"More"}),e.jsx(a,{variant:"link",children:"Edit"}),e.jsx(a,{variant:"link",disabled:!0,iconRight:e.jsx(S,{size:14}),children:"Community"})]})},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{iconLeft:e.jsx(d,{size:16}),children:"Left Icon"}),e.jsx(a,{iconRight:e.jsx(I,{size:16}),children:"Right Icon"}),e.jsx(a,{iconLeft:e.jsx(d,{size:16}),iconRight:e.jsx(S,{size:16}),children:"Both Icons"})]}),args:{variant:"primary"}};var g,u,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    variant: 'primary',
    size: 'md',
    loading: false
  }
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,v,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,f,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(j=(f=i.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var B,z,k;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6">
      <Button variant="link" iconRight={<ChevronRight size={14} />}>
        More
      </Button>
      <Button variant="link">Edit</Button>
      <Button variant="link" disabled iconRight={<ChevronDown size={14} />}>
        Community
      </Button>
    </div>
}`,...(k=(z=o.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var N,C,L;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(L=(C=l.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const K=["Playground","AllVariants","Sizes","LinkVariants","IconPositions"];export{n as AllVariants,l as IconPositions,o as LinkVariants,t as Playground,i as Sizes,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Button.stories-zDJR3A2L.js.map
