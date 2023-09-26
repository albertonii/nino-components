import{r as j}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var w={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=j,P=Symbol.for("react.element"),R=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,k=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C={key:!0,ref:!0,__self:!0,__source:!0};function $(e,r,s){var t,i={},a=null,l=null;s!==void 0&&(a=""+s),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(l=r.ref);for(t in r)T.call(r,t)&&!C.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)i[t]===void 0&&(i[t]=r[t]);return{$$typeof:P,type:e,key:a,ref:l,props:i,_owner:k.current}}p.Fragment=R;p.jsx=$;p.jsxs=$;w.exports=p;var z=w.exports;const o=z.jsx,g=z.jsxs,n=({variant:e="filled",size:r="medium",color:s="primary",children:t,...i})=>{const a="px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",l={small:"text-sm",medium:"text-base",large:"text-lg"},d={primary:"text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",secondary:"text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500",danger:"text-white bg-red-600 hover:bg-red-700 focus:ring-red-500",success:"text-white bg-green-600 hover:bg-green-700 focus:ring-green-500",warning:"text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500"},N={filled:`${a} ${d[s]}`,outlined:`${a} border border-indigo-600 ${d[s]}`,text:`${a} ${d[s]}`},O=`${a}`;return o("button",{className:`${O} ${N[e]} ${l[r]} ${d[s]}`,...i,children:t})};try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"filled"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'},{value:'"text"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'},{value:'"success"'},{value:'"warning"'}]}}}}}catch{}const q={title:"Component/Button",component:n,tags:["autodocs","button"],argTypes:{variant:{control:{type:"radio",options:["filled","outlined","text"]}},color:{control:{type:"radio",options:["primary","secondary","danger","success","warning"]}},size:{control:{type:"radio",options:["small","medium","large"]}}}},c=e=>g("div",{className:"flex flex-col space-y-4 mt-8 gap-4",children:[o(n,{...e,color:"primary",children:"Primary"}),o(n,{...e,color:"secondary",children:"Secondary"})]}),u=e=>g("div",{className:"flex flex-col space-y-4 mt-8 gap-4",children:[o(n,{...e,variant:"filled",children:"Filled"}),o(n,{...e,variant:"outlined",children:"Outlined"}),o(n,{...e,variant:"text",children:"Text"})]}),m=e=>g("div",{className:"flex flex-col space-y-4 mt-8 gap-4",children:[o(n,{...e,size:"small",children:"Small"}),o(n,{...e,size:"medium",children:"Medium"}),o(n,{...e,size:"large",children:"Large"})]});var f,y,v;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`(args: ButtonProps) => <div className="flex flex-col space-y-4 mt-8 gap-4">
    <Button {...args} color="primary">
      Primary
    </Button>

    <Button {...args} color="secondary">
      Secondary
    </Button>
  </div>`,...(v=(y=c.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,_,h;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`(args: ButtonProps) => <div className="flex flex-col space-y-4 mt-8 gap-4">
    <Button {...args} variant="filled">
      Filled
    </Button>

    <Button {...args} variant="outlined">
      Outlined
    </Button>

    <Button {...args} variant="text">
      Text
    </Button>
  </div>`,...(h=(_=u.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var B,b,S;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`(args: ButtonProps) => <div className="flex flex-col space-y-4 mt-8 gap-4">
    <Button {...args} size="small">
      Small
    </Button>

    <Button {...args} size="medium">
      Medium
    </Button>

    <Button {...args} size="large">
      Large
    </Button>
  </div>`,...(S=(b=m.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const F=["Color","Variants","Sizes"];export{c as Color,m as Sizes,u as Variants,F as __namedExportsOrder,q as default};
//# sourceMappingURL=Button.stories-517df148.js.map
