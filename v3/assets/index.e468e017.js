import{A as e,G as l,E as t,r as o,o as a,a as c,e as u,w as d,C as s,i,t as m,d as n,F as r,b,c as h,W as f}from"./vendor.ef334a89.js";import{C as k}from"./index.65585c1d.js";import{C as p}from"./index.213f7746.js";import{B as x}from"./index.627ee112.js";import{C as _}from"./index.6c7f62cd.js";import{C as V}from"./index.550f913c.js";import{a as C}from"./use-translate.b583725c.js";import{u as g}from"./use-refs.7144ba67.js";import"./with-install.62f47d2f.js";import"./use-expose.33de0944.js";import"./useChildren.a94b5b99.js";import"./index.49199c0d.js";import"./Checker.82a9fac8.js";import"./unit.49c29796.js";import"./index.3af24151.js";import"./useParent.0a2f50cb.js";import"./constant.4d85ecb9.js";import"./use-route.3fda2186.js";import"./index.6fa13143.js";const j=["src"],v={class:"demo-checkbox-buttons"},z=e({setup(e){const z=C({"zh-CN":{checkbox:"复选框",customIcon:"自定义图标",customIconSize:"自定义大小",customColor:"自定义颜色",customShape:"自定义形状",title3:"复选框组",title4:"限制最大可选数",title5:"搭配单元格组件使用",toggleAll:"全选与反选",checkAll:"全选",inverse:"反选",horizontal:"水平排列",disableLabel:"禁用文本点击"},"en-US":{checkbox:"Checkbox",customIcon:"Custom Icon",customIconSize:"Custom Icon Size",customColor:"Custom Color",customShape:"Custom Shape",title3:"Checkbox Group",title4:"Maximum amount of checked options",title5:"Inside a Cell",toggleAll:"Toggle All",checkAll:"Check All",inverse:"Inverse",horizontal:"Horizontal",disableLabel:"Disable label click"}}),I=l({checkbox1:!0,checkbox2:!0,checkbox3:!0,checkboxShape:!0,checkboxLabel:!0,checboxIcon:!0,list:["a","b"],result:["a","b"],result2:[],result3:[],checkAllResult:[],horizontalResult:[]}),A=t(),[S,U]=g(),y=()=>{var e;null==(e=A.value)||e.toggleAll(!0)},L=()=>{var e;null==(e=A.value)||e.toggleAll()};return(e,l)=>{const t=o("demo-block");return a(),c(r,null,[u(t,{title:s(z)("basicUsage")},{default:d((()=>[u(s(k),{modelValue:s(I).checkbox1,"onUpdate:modelValue":l[0]||(l[0]=e=>s(I).checkbox1=e)},{default:d((()=>[i(m(s(z)("checkbox")),1)])),_:1},8,["modelValue"])])),_:1},8,["title"]),u(t,{title:s(z)("disabled")},{default:d((()=>[u(s(k),{"model-value":!1,disabled:""},{default:d((()=>[i(m(s(z)("checkbox")),1)])),_:1}),u(s(k),{"model-value":!0,disabled:""},{default:d((()=>[i(m(s(z)("checkbox")),1)])),_:1})])),_:1},8,["title"]),u(t,{title:s(z)("customShape")},{default:d((()=>[u(s(k),{modelValue:s(I).checkboxShape,"onUpdate:modelValue":l[1]||(l[1]=e=>s(I).checkboxShape=e),shape:"square"},{default:d((()=>[i(m(s(z)("customShape")),1)])),_:1},8,["modelValue"])])),_:1},8,["title"]),u(t,{title:s(z)("customColor")},{default:d((()=>[u(s(k),{modelValue:s(I).checkbox2,"onUpdate:modelValue":l[2]||(l[2]=e=>s(I).checkbox2=e),"checked-color":"#ee0a24"},{default:d((()=>[i(m(s(z)("customColor")),1)])),_:1},8,["modelValue"])])),_:1},8,["title"]),u(t,{title:s(z)("customIconSize")},{default:d((()=>[u(s(k),{modelValue:s(I).checboxIcon,"onUpdate:modelValue":l[3]||(l[3]=e=>s(I).checboxIcon=e),"icon-size":"24px"},{default:d((()=>[i(m(s(z)("customIconSize")),1)])),_:1},8,["modelValue"])])),_:1},8,["title"]),u(t,{title:s(z)("customIcon")},{default:d((()=>[u(s(k),{modelValue:s(I).checkbox3,"onUpdate:modelValue":l[4]||(l[4]=e=>s(I).checkbox3=e)},{icon:d((({checked:e})=>[n("img",{src:e?"https://img.yzcdn.cn/vant/user-active.png":"https://img.yzcdn.cn/vant/user-inactive.png"},null,8,j)])),default:d((()=>[i(m(s(z)("customIcon"))+" ",1)])),_:1},8,["modelValue"])])),_:1},8,["title"]),u(t,{title:s(z)("disableLabel")},{default:d((()=>[u(s(k),{modelValue:s(I).checkboxLabel,"onUpdate:modelValue":l[5]||(l[5]=e=>s(I).checkboxLabel=e),"label-disabled":""},{default:d((()=>[i(m(s(z)("checkbox")),1)])),_:1},8,["modelValue"])])),_:1},8,["title"]),u(t,{title:s(z)("title3")},{default:d((()=>[u(s(p),{modelValue:s(I).result,"onUpdate:modelValue":l[6]||(l[6]=e=>s(I).result=e)},{default:d((()=>[u(s(k),{name:"a"},{default:d((()=>[i(m(s(z)("checkbox"))+" a",1)])),_:1}),u(s(k),{name:"b"},{default:d((()=>[i(m(s(z)("checkbox"))+" b",1)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["title"]),u(t,{title:s(z)("horizontal")},{default:d((()=>[u(s(p),{modelValue:s(I).horizontalResult,"onUpdate:modelValue":l[7]||(l[7]=e=>s(I).horizontalResult=e),direction:"horizontal"},{default:d((()=>[u(s(k),{name:"a"},{default:d((()=>[i(m(s(z)("checkbox"))+" a",1)])),_:1}),u(s(k),{name:"b"},{default:d((()=>[i(m(s(z)("checkbox"))+" b",1)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["title"]),u(t,{title:s(z)("title4")},{default:d((()=>[u(s(p),{modelValue:s(I).result2,"onUpdate:modelValue":l[8]||(l[8]=e=>s(I).result2=e),max:2},{default:d((()=>[u(s(k),{name:"a"},{default:d((()=>[i(m(s(z)("checkbox"))+" a",1)])),_:1}),u(s(k),{name:"b"},{default:d((()=>[i(m(s(z)("checkbox"))+" b",1)])),_:1}),u(s(k),{name:"c"},{default:d((()=>[i(m(s(z)("checkbox"))+" c",1)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["title"]),u(t,{title:s(z)("toggleAll")},{default:d((()=>[u(s(p),{modelValue:s(I).checkAllResult,"onUpdate:modelValue":l[9]||(l[9]=e=>s(I).checkAllResult=e),ref:(e,l)=>{l.group=e,A.value=e}},{default:d((()=>[u(s(k),{name:"a"},{default:d((()=>[i(m(s(z)("checkbox"))+" a",1)])),_:1}),u(s(k),{name:"b"},{default:d((()=>[i(m(s(z)("checkbox"))+" b",1)])),_:1}),u(s(k),{name:"c"},{default:d((()=>[i(m(s(z)("checkbox"))+" c",1)])),_:1})])),_:1},8,["modelValue"]),n("div",v,[u(s(x),{type:"primary",onClick:y},{default:d((()=>[i(m(s(z)("checkAll")),1)])),_:1}),u(s(x),{type:"primary",onClick:L},{default:d((()=>[i(m(s(z)("inverse")),1)])),_:1})])])),_:1},8,["title"]),u(t,{title:s(z)("title5")},{default:d((()=>[u(s(p),{modelValue:s(I).result3,"onUpdate:modelValue":l[11]||(l[11]=e=>s(I).result3=e)},{default:d((()=>[u(s(_),null,{default:d((()=>[(a(!0),c(r,null,b(s(I).list,((e,t)=>(a(),h(s(V),{clickable:"",key:t,title:`${s(z)("checkbox")} ${e}`,onClick:e=>(e=>{S.value[e].toggle()})(t)},{"right-icon":d((()=>[u(s(k),{ref:s(U)(t),name:e,onClick:l[10]||(l[10]=f((()=>{}),["stop"]))},null,8,["name"])])),_:2},1032,["title","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["title"])],64)}}});export{z as default};
