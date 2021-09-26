import{C as e}from"./index.550f913c.js";import{e as t,t as o,p as n,a as i}from"./use-translate.b583725c.js";import{c as s,w as a}from"./with-install.62f47d2f.js";import{a as c,p as l,P as r}from"./index.aa2914ba.js";import{A as p,e as m,J as d,E as u,D as h,r as w,o as f,a as b,w as v,C as j,F as k}from"./vendor.ef334a89.js";import{T as q}from"./function-call.b2678465.js";import"./use-route.3fda2186.js";import"./index.3af24151.js";import"./unit.49c29796.js";import"./interceptor.ab1192d4.js";import"./use-expose.33de0944.js";import"./use-touch.ce80657e.js";import"./event.7d40caae.js";import"./index.7e292110.js";import"./utils.b0356070.js";import"./index.253cf6b3.js";import"./use-lazy-render.49349a00.js";import"./on-popup-reopen.522dc00c.js";import"./index.0acb7aaf.js";import"./mount-component.4a14b4e1.js";import"./index.6fa13143.js";const S=["qq","link","weibo","wechat","poster","qrcode","weapp-qrcode","wechat-moments"],g=[...c,"closeOnPopstate","safeAreaInsetBottom"];function x(e){return S.includes(e)?`https://img.yzcdn.cn/vant/share-sheet-${e}.png`:e}const[y,C,Q]=s("share-sheet");const U=a(p({name:y,props:t({},l,{title:String,cancelText:String,description:String,closeOnPopstate:o,safeAreaInsetBottom:o,options:{type:Array,default:()=>[]}}),emits:["cancel","select","update:show"],setup(e,{emit:t,slots:o}){const i=e=>t("update:show",e),s=()=>{i(!1),t("cancel")},a=()=>{const t=o.title?o.title():e.title,n=o.description?o.description():e.description;if(t||n)return m("div",{class:C("header")},[t&&m("h2",{class:C("title")},[t]),n&&m("span",{class:C("description")},[n])])},c=(e,o)=>{const{name:n,icon:i,className:s,description:a}=e;return m("div",{role:"button",tabindex:0,class:[C("option"),s],onClick:()=>((e,o)=>t("select",e,o))(e,o)},[m("img",{src:x(i),class:C("icon")},null),n&&m("span",{class:C("name")},[n]),a&&m("span",{class:C("option-description")},[a])])},l=(e,t)=>m("div",{class:C("options",{border:t})},[e.map(c)]),p=()=>{const{options:t}=e;return Array.isArray(t[0])?t.map(((e,t)=>l(e,0!==t))):l(t)},u=()=>{var t;const n=null!=(t=e.cancelText)?t:Q("cancel");if(o.cancel||n)return m("button",{type:"button",class:C("cancel"),onClick:s},[o.cancel?o.cancel():n])};return()=>m(r,d({round:!0,class:C(),position:"bottom"},n(e,g),{"onUpdate:show":i}),{default:()=>[a(),p(),u()]})}})),z=p({setup(t){const o=i({"zh-CN":{qq:"QQ",name:"名称",link:"复制链接",title:"立即分享给好友",weibo:"微博",wechat:"微信",poster:"分享海报",qrcode:"二维码",multiLine:"展示多行选项",showSheet:"显示分享面板",withDesc:"展示描述信息",customIcon:"自定义图标",description:"描述信息",weappQrcode:"小程序码",wechatMoments:"朋友圈"},"en-US":{qq:"QQ",name:"Name",link:"Link",title:"Share",weibo:"Weibo",wechat:"Wechat",poster:"Poster",qrcode:"Qrcode",multiLine:"Multi Line",showSheet:"Show ShareSheet",withDesc:"Show Description",customIcon:"Custom Icon",description:"Description",weappQrcode:"Weapp Qrcode",wechatMoments:"Wechat Moments"}}),n=u(!1),s=u(!1),a=u(!1),c=u(!1),l=h((()=>[{name:o("wechat"),icon:"wechat"},{name:o("weibo"),icon:"weibo"},{name:o("link"),icon:"link"},{name:o("poster"),icon:"poster"},{name:o("qrcode"),icon:"qrcode"}])),r=h((()=>[[{name:o("wechat"),icon:"wechat"},{name:o("wechatMoments"),icon:"wechat-moments"},{name:o("weibo"),icon:"weibo"},{name:o("qq"),icon:"qq"}],[{name:o("link"),icon:"link"},{name:o("poster"),icon:"poster"},{name:o("qrcode"),icon:"qrcode"},{name:o("weappQrcode"),icon:"weapp-qrcode"}]])),p=h((()=>[{name:o("name"),icon:"https://img.yzcdn.cn/vant/custom-icon-fire.png"},{name:o("name"),icon:"https://img.yzcdn.cn/vant/custom-icon-light.png"},{name:o("name"),icon:"https://img.yzcdn.cn/vant/custom-icon-water.png"}])),d=h((()=>[{name:o("wechat"),icon:"wechat"},{name:o("weibo"),icon:"weibo"},{name:o("link"),icon:"link",description:o("description")},{name:o("poster"),icon:"poster"},{name:o("qrcode"),icon:"qrcode"}])),S=e=>{q(e.name),n.value=!1,s.value=!1,a.value=!1,c.value=!1};return(t,i)=>{const u=w("demo-block");return f(),b(k,null,[m(u,{card:"",title:j(o)("basicUsage")},{default:v((()=>[m(j(e),{"is-link":"",title:j(o)("showSheet"),onClick:i[0]||(i[0]=e=>n.value=!0)},null,8,["title"]),m(j(U),{show:n.value,"onUpdate:show":i[1]||(i[1]=e=>n.value=e),title:j(o)("title"),options:j(l),onSelect:S},null,8,["show","title","options"])])),_:1},8,["title"]),m(u,{card:"",title:j(o)("multiLine")},{default:v((()=>[m(j(e),{"is-link":"",title:j(o)("showSheet"),onClick:i[2]||(i[2]=e=>a.value=!0)},null,8,["title"]),m(j(U),{show:a.value,"onUpdate:show":i[3]||(i[3]=e=>a.value=e),title:j(o)("title"),options:j(r),onSelect:S},null,8,["show","title","options"])])),_:1},8,["title"]),m(u,{card:"",title:j(o)("customIcon")},{default:v((()=>[m(j(e),{"is-link":"",title:j(o)("showSheet"),onClick:i[4]||(i[4]=e=>c.value=!0)},null,8,["title"]),m(j(U),{show:c.value,"onUpdate:show":i[5]||(i[5]=e=>c.value=e),options:j(p),onSelect:S},null,8,["show","options"])])),_:1},8,["title"]),m(u,{card:"",title:j(o)("withDesc")},{default:v((()=>[m(j(e),{"is-link":"",title:j(o)("showSheet"),onClick:i[6]||(i[6]=e=>s.value=!0)},null,8,["title"]),m(j(U),{show:s.value,"onUpdate:show":i[7]||(i[7]=e=>s.value=e),title:j(o)("title"),options:j(d),description:j(o)("description"),onSelect:S},null,8,["show","title","options","description"])])),_:1},8,["title"])],64)}}});export{z as default};
