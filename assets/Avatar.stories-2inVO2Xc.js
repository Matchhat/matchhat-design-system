import{j as e}from"./jsx-runtime-CCjYJYRa.js";import"./index-uubelm5h.js";import{c as g}from"./index-vAxXS4R5.js";import{U}from"./user-DcLk3MsK.js";import"./createLucideIcon-BRHAYV9X.js";const D={sm:"w-6 h-6 text-sm",md:"w-10 h-10 text-base",lg:"w-14 h-14 text-lg"},s=({src:a,alt:t,size:n="md",name:r,showText:h,className:m})=>{const u=r?r.split(" ").map(x=>x[0]).join(""):"";return e.jsxs("div",{className:g("flex items-center gap-2",m),children:[e.jsx("div",{className:g("rounded-full bg-gray-200 overflow-hidden flex items-center justify-center text-white font-semibold border border-white shadow-md",D[n]),children:a?e.jsx("img",{src:a,alt:t||"",className:"object-cover w-full h-full"}):u||e.jsx(U,{className:"w-4 h-4"})}),h&&r&&e.jsx("span",{className:"text-gray-900",children:r})]})},E=({avatars:a,max:t=5,size:n="md",className:r})=>{const h=a.slice(0,t),m=a.length-t;return e.jsxs("div",{className:g("flex items-center -space-x-2",r),children:[h.map((u,x)=>e.jsx(s,{...u,size:n,className:"border-2 border-white"},x)),m>0&&e.jsxs("div",{className:g("rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold border border-white",n==="sm"?"w-6 h-6 text-xs":n==="lg"?"w-10 h-10 text-base":"w-8 h-8 text-sm"),children:["+",m]})]})},C={title:"UI/Avatar",component:s},o={render:()=>e.jsx(s,{name:"Anna Rogers"})},i={render:()=>e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(s,{name:"Anna Rogers",size:"sm"}),e.jsx(s,{name:"Anna Rogers",size:"md"}),e.jsx(s,{name:"Anna Rogers",size:"lg"})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{name:"Anna Rogers",src:"https://randomuser.me/api/portraits/women/45.jpg",size:"sm",showText:!0}),e.jsx(s,{name:"John Smith",src:"https://randomuser.me/api/portraits/women/44.jpg",size:"md",showText:!0}),e.jsx(s,{name:"Zeeshan Tariq",src:"https://randomuser.me/api/portraits/women/46.jpg",size:"lg",showText:!0})]})},c={render:()=>e.jsx(s,{src:"https://randomuser.me/api/portraits/women/44.jpg",name:"Anna Wayne"})},d={render:()=>e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(s,{src:"https://randomuser.me/api/portraits/women/44.jpg",name:"Anna",size:"sm"}),e.jsx(s,{src:"https://randomuser.me/api/portraits/women/44.jpg",name:"Anna",size:"md"}),e.jsx(s,{src:"https://randomuser.me/api/portraits/women/44.jpg",name:"Anna",size:"lg"})]})},l={render:()=>e.jsx(E,{avatars:[{name:"Anna Wayne"},{name:"John Smith"},{src:"https://randomuser.me/api/portraits/men/44.jpg"},{name:"Zeeshan Tariq"},{src:"https://randomuser.me/api/portraits/women/46.jpg"}],max:4})};var j,A,w;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Avatar name="Anna Rogers" />
}`,...(w=(A=o.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var v,f,z;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center">
      <Avatar name="Anna Rogers" size="sm" />
      <Avatar name="Anna Rogers" size="md" />
      <Avatar name="Anna Rogers" size="lg" />
    </div>
}`,...(z=(f=i.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var N,b,S;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Avatar name="Anna Rogers" src="https://randomuser.me/api/portraits/women/45.jpg" size="sm" showText />
      <Avatar name="John Smith" src="https://randomuser.me/api/portraits/women/44.jpg" size="md" showText />
      <Avatar name="Zeeshan Tariq" src="https://randomuser.me/api/portraits/women/46.jpg" size="lg" showText />
    </div>
}`,...(S=(b=p.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var T,R,y;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" name="Anna Wayne" />
}`,...(y=(R=c.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var I,W,q;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center">
      <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" name="Anna" size="sm" />
      <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" name="Anna" size="md" />
      <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" name="Anna" size="lg" />
    </div>
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var G,J,Z;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <AvatarGroup avatars={[{
    name: "Anna Wayne"
  }, {
    name: "John Smith"
  }, {
    src: "https://randomuser.me/api/portraits/men/44.jpg"
  }, {
    name: "Zeeshan Tariq"
  }, {
    src: "https://randomuser.me/api/portraits/women/46.jpg"
  }]} max={4} />
}`,...(Z=(J=l.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};const F=["Default","InitialsSizes","WithNameText","ImageAvatar","ImageSizes","Group"];export{o as Default,l as Group,c as ImageAvatar,d as ImageSizes,i as InitialsSizes,p as WithNameText,F as __namedExportsOrder,C as default};
//# sourceMappingURL=Avatar.stories-2inVO2Xc.js.map
