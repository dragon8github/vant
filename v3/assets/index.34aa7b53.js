import{C as t}from"./index.550f913c.js";import{D as e}from"./function-call.533d4529.js";import{a as l}from"./use-translate.b583725c.js";import{A as o,E as i,r as n,o as s,a as r,e as a,w as m,C as c,d as u,F as p}from"./vendor.ef334a89.js";import"./with-install.62f47d2f.js";import"./use-route.3fda2186.js";import"./index.3af24151.js";import"./unit.49c29796.js";import"./mount-component.4a14b4e1.js";import"./use-expose.33de0944.js";import"./constant.4d85ecb9.js";import"./interceptor.ab1192d4.js";import"./index.aa2914ba.js";import"./use-touch.ce80657e.js";import"./event.7d40caae.js";import"./index.7e292110.js";import"./utils.b0356070.js";import"./index.253cf6b3.js";import"./use-lazy-render.49349a00.js";import"./on-popup-reopen.522dc00c.js";import"./index.0acb7aaf.js";import"./index.627ee112.js";import"./index.6fa13143.js";import"./index.1c8d237b.js";import"./useChildren.a94b5b99.js";import"./useParent.0a2f50cb.js";const d=o({setup(o){const d=e.Component,f=l({"zh-CN":{title:"标题",alert1:"提示弹窗",alert2:"提示弹窗（无标题）",confirm:"确认弹窗",beforeClose:"异步关闭",roundButton:"圆角按钮样式",componentCall:"组件调用",content:"代码是写出来给人看的，附带能在机器上运行"},"en-US":{title:"Title",alert1:"Alert",alert2:"Alert without title",confirm:"Confirm dialog",beforeClose:"Before Close",roundButton:"Round Button Style",componentCall:"Component Call"}}),j=i(!1),C=()=>{e.alert({title:f("title"),message:f("content")})},b=()=>{e.alert({message:f("content")})},k=()=>{e.alert({theme:"round-button",title:f("title"),message:f("content")})},h=()=>{e.alert({theme:"round-button",message:f("content")})},g=()=>{e.confirm({title:f("title"),message:f("content")})},x=()=>{e.confirm({title:f("title"),message:f("content"),beforeClose:t=>new Promise((e=>{setTimeout((()=>e("confirm"===t)),1e3)}))})};return(e,l)=>{const o=n("demo-block");return s(),r(p,null,[a(o,{card:"",title:c(f)("basicUsage")},{default:m((()=>[a(c(t),{"is-link":"",title:c(f)("alert1"),onClick:C},null,8,["title"]),a(c(t),{"is-link":"",title:c(f)("alert2"),onClick:b},null,8,["title"]),a(c(t),{"is-link":"",title:c(f)("confirm"),onClick:g},null,8,["title"])])),_:1},8,["title"]),a(o,{card:"",title:c(f)("roundButton")},{default:m((()=>[a(c(t),{"is-link":"",title:c(f)("alert1"),onClick:k},null,8,["title"]),a(c(t),{"is-link":"",title:c(f)("alert2"),onClick:h},null,8,["title"])])),_:1},8,["title"]),a(o,{card:"",title:c(f)("beforeClose")},{default:m((()=>[a(c(t),{"is-link":"",title:c(f)("beforeClose"),onClick:x},null,8,["title"])])),_:1},8,["title"]),a(o,{card:"",title:c(f)("componentCall")},{default:m((()=>[a(c(t),{"is-link":"",title:c(f)("componentCall"),onClick:l[0]||(l[0]=t=>j.value=!0)},null,8,["title"]),a(c(d),{show:j.value,"onUpdate:show":l[1]||(l[1]=t=>j.value=t),title:c(f)("title"),"show-cancel-button":"","lazy-render":!1},{default:m((()=>[u("img",{src:"https://img.yzcdn.cn/vant/apple-3.jpg"})])),_:1},8,["show","title"])])),_:1},8,["title"])],64)}}});export{d as default};
