import{F as e}from"./index.ba9111d7.js";import{F as l}from"./index.3e32f020.js";import{B as a}from"./index.627ee112.js";import{C as o}from"./index.6c7f62cd.js";import{a as r}from"./use-translate.b583725c.js";import{A as t,E as s,r as i,o as d,c as u,w as n,e as m,C as p,d as c,i as b,t as v,a as h,F as f}from"./vendor.ef334a89.js";import{T as V}from"./function-call.b2678465.js";import{R as j}from"./index.6c53c1fe.js";import{a as x,R as k}from"./index.4f629937.js";import{S as U}from"./index.310d7889.js";import{S as g}from"./index.3ef909c5.js";import{S as y}from"./index.b6048372.js";import{C}from"./index.65585c1d.js";import{U as w}from"./index.ff297ce8.js";import{C as _}from"./index.213f7746.js";import{a as S,A as q}from"./index.b403545b.js";import{P}from"./index.aa2914ba.js";import{a as z}from"./area-en.345d80e1.js";import{P as F}from"./index.3a29a39b.js";import{C as N}from"./index.839a98a1.js";import{D as G}from"./index.1cfa2a7e.js";import"./with-install.62f47d2f.js";import"./constant.4d85ecb9.js";import"./use-expose.33de0944.js";import"./useChildren.a94b5b99.js";import"./event.7d40caae.js";import"./unit.49c29796.js";import"./number.b01aa591.js";import"./index.550f913c.js";import"./use-route.3fda2186.js";import"./index.3af24151.js";import"./index.49199c0d.js";import"./useParent.0a2f50cb.js";import"./index.6fa13143.js";import"./mount-component.4a14b4e1.js";import"./use-refs.7144ba67.js";import"./use-touch.ce80657e.js";import"./Checker.82a9fac8.js";import"./index.90a1ecc4.js";import"./interceptor.ab1192d4.js";import"./function-call.df6d8027.js";import"./index.c15090cc.js";import"./style.21d4b335.js";import"./on-popup-reopen.522dc00c.js";import"./utils.b0356070.js";import"./index.7e292110.js";import"./index.620c085b.js";import"./deep-clone.ba190482.js";import"./Picker.e16de937.js";import"./index.253cf6b3.js";import"./use-lazy-render.49349a00.js";import"./index.0acb7aaf.js";import"./utils.06c87c13.js";import"./use-height.8171f077.js";const M={style:{margin:"16px 16px 0"}},T=t({setup(t){const h=r({"zh-CN":{submit:"提交",username:"用户名",password:"密码",requireUsername:"请填写用户名",requirePassword:"请填写密码"},"en-US":{submit:"Submit",username:"Username",password:"Password",requireUsername:"Username is required",requirePassword:"Password is required"}}),f=s(""),V=s(""),j=e=>{console.log("submit",e)},x=e=>{console.log("failed",e)};return(r,t)=>{const s=i("demo-block");return d(),u(s,{title:p(h)("basicUsage")},{default:n((()=>[m(p(e),{onSubmit:j,onFailed:x},{default:n((()=>[m(p(o),{inset:""},{default:n((()=>[m(p(l),{modelValue:f.value,"onUpdate:modelValue":t[0]||(t[0]=e=>f.value=e),name:"username",label:p(h)("username"),rules:[{required:!0,message:p(h)("requireUsername")}],placeholder:p(h)("username")},null,8,["modelValue","label","rules","placeholder"]),m(p(l),{modelValue:V.value,"onUpdate:modelValue":t[1]||(t[1]=e=>V.value=e),type:"password",name:"password",label:p(h)("password"),rules:[{required:!0,message:p(h)("requirePassword")}],placeholder:p(h)("password")},null,8,["modelValue","label","rules","placeholder"])])),_:1}),c("div",M,[m(p(a),{round:"",block:"",type:"primary","native-type":"submit"},{default:n((()=>[b(v(p(h)("submit")),1)])),_:1})])])),_:1})])),_:1},8,["title"])}}}),R={style:{margin:"16px 16px 0"}},D=t({setup(t){const h=r({"zh-CN":{label:"文本",title:"校验规则",submit:"提交",message:"请输入正确内容",invalid:e=>`${e} 不合法，请重新输入`,pattern:"正则校验",validator:"函数校验",validating:"验证中...",asyncValidator:"异步函数校验",validatorMessage:"校验函数返回错误提示"},"en-US":{label:"Label",title:"Validate Rules",submit:"Submit",message:"Error message",invalid:e=>`${e} is invalid`,pattern:"Use pattern",validator:"Use validator",validating:"Validating...",asyncValidator:"Use async validator",validatorMessage:"Use validator to return message"}}),f=s(""),j=s(""),x=s("abc"),k=s(""),U=/\d{6}/,g=e=>/1\d{10}/.test(e),y=e=>h("invalid",e),C=e=>new Promise((l=>{V.loading(h("validating")),setTimeout((()=>{V.clear(),l("1234"===e)}),1e3)})),w=e=>{console.log("submit",e)},_=e=>{console.log("failed",e)};return(r,t)=>{const s=i("demo-block");return d(),u(s,{title:p(h)("title")},{default:n((()=>[m(p(e),{onSumbit:w,onFailed:_},{default:n((()=>[m(p(o),{inset:""},{default:n((()=>[m(p(l),{modelValue:f.value,"onUpdate:modelValue":t[0]||(t[0]=e=>f.value=e),name:"pattern",label:p(h)("label"),rules:[{pattern:U,message:p(h)("message")}],placeholder:p(h)("pattern")},null,8,["modelValue","label","rules","placeholder"]),m(p(l),{modelValue:j.value,"onUpdate:modelValue":t[1]||(t[1]=e=>j.value=e),name:"validator",label:p(h)("label"),rules:[{validator:g,message:p(h)("message")}],placeholder:p(h)("validator")},null,8,["modelValue","label","rules","placeholder"]),m(p(l),{modelValue:x.value,"onUpdate:modelValue":t[2]||(t[2]=e=>x.value=e),name:"validatorMessage",label:p(h)("label"),rules:[{validator:y}],placeholder:p(h)("validatorMessage")},null,8,["modelValue","label","rules","placeholder"]),m(p(l),{modelValue:k.value,"onUpdate:modelValue":t[3]||(t[3]=e=>k.value=e),name:"asyncValidator",label:p(h)("label"),rules:[{validator:C,message:p(h)("message")}],placeholder:p(h)("asyncValidator")},null,8,["modelValue","label","rules","placeholder"])])),_:1}),c("div",R,[m(p(a),{round:"",block:"",type:"primary","native-type":"submit"},{default:n((()=>[b(v(p(h)("submit")),1)])),_:1})])])),_:1})])),_:1},8,["title"])}}}),L=t({setup(e){const a=r({"zh-CN":{picker:"地区选择",areaList:S,placeholder:"点击选择省市区"},"en-US":{picker:"Area Picker",areaList:z,placeholder:"Select area"}}),o=s(""),t=s(!1),i=e=>{o.value=e.filter((e=>!!e)).map((e=>e.name)).join("/"),t.value=!1},u=()=>{t.value=!1};return(e,r)=>(d(),h(f,null,[m(p(l),{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=e=>o.value=e),"is-link":"",readonly:"",name:"area",label:p(a)("picker"),placeholder:p(a)("placeholder"),onClick:r[1]||(r[1]=e=>t.value=!0)},null,8,["modelValue","label","placeholder"]),m(p(P),{show:t.value,"onUpdate:show":r[2]||(r[2]=e=>t.value=e),round:"",position:"bottom",teleport:"body"},{default:n((()=>[m(p(q),{"area-list":p(a)("areaList"),onConfirm:i,onCancel:u},null,8,["area-list"])])),_:1},8,["show"])],64))}}),$=t({setup(e){const a=r({"zh-CN":{picker:"选择器",placeholder:"点击选择城市",textColumns:["杭州","宁波","温州","嘉兴","湖州"]},"en-US":{picker:"Picker",placeholder:"Select city",textColumns:["Delaware","Florida","Georqia","Indiana","Maine"]}}),o=s(""),t=s(!1),i=e=>{o.value=e,t.value=!1},u=()=>{t.value=!1};return(e,r)=>(d(),h(f,null,[m(p(l),{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=e=>o.value=e),"is-link":"",readonly:"",name:"picker",label:p(a)("picker"),placeholder:p(a)("placeholder"),onClick:r[1]||(r[1]=e=>t.value=!0)},null,8,["modelValue","label","placeholder"]),m(p(P),{show:t.value,"onUpdate:show":r[2]||(r[2]=e=>t.value=e),round:"",position:"bottom",teleport:"body"},{default:n((()=>[m(p(F),{columns:p(a)("textColumns"),onConfirm:i,onCancel:u},null,8,["columns"])])),_:1},8,["show"])],64))}}),A=t({setup(e){const a=r({"zh-CN":{calendar:"日历",placeholder:"点击选择日期"},"en-US":{calendar:"Calendar",placeholder:"Select date"}}),o=s(""),t=s(!1),i=e=>{o.value=(e=>`${e.getMonth()+1}/${e.getDate()}`)(e),t.value=!1};return(e,r)=>(d(),h(f,null,[m(p(l),{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=e=>o.value=e),"is-link":"",readonly:"",name:"calendar",label:p(a)("calendar"),placeholder:p(a)("placeholder"),onClick:r[1]||(r[1]=e=>t.value=!0)},null,8,["modelValue","label","placeholder"]),m(p(N),{show:t.value,"onUpdate:show":r[2]||(r[2]=e=>t.value=e),round:"",teleport:"body",onConfirm:i},null,8,["show"])],64))}}),E=t({setup(e){const a=r({"zh-CN":{label:"时间选择",placeholder:"点击选择时间"},"en-US":{label:"Datetime Picker",placeholder:"Select time"}}),o=s(""),t=s(!1),i=e=>{o.value=e,t.value=!1},u=()=>{t.value=!1};return(e,r)=>(d(),h(f,null,[m(p(l),{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=e=>o.value=e),"is-link":"",readonly:"",name:"datetimePicker",label:p(a)("label"),placeholder:p(a)("placeholder"),onClick:r[1]||(r[1]=e=>t.value=!0)},null,8,["modelValue","label","placeholder"]),m(p(P),{show:t.value,"onUpdate:show":r[2]||(r[2]=e=>t.value=e),round:"",position:"bottom",teleport:"body"},{default:n((()=>[m(p(G),{type:"time",onConfirm:i,onCancel:u})])),_:1},8,["show"])],64))}}),B={style:{margin:"16px 16px 0"}},I=t({setup(t){const h=r({"zh-CN":{rate:"评分",radio:"单选框",submit:"提交",switch:"开关",slider:"滑块",picker:"选择器",stepper:"步进器",checkbox:"复选框",uploader:"文件上传",fieldType:"表单项类型",checkboxGroup:"复选框组",requireCheckbox:"请勾选复选框"},"en-US":{rate:"Rate",radio:"Radio",submit:"Submit",switch:"Switch",slider:"Slider",picker:"Picker",stepper:"Stepper",checkbox:"Checkbox",uploader:"Uploader",fieldType:"Field Type",checkboxGroup:"Checkbox Group",requireCheckbox:"Checkbox is required"}}),f=s(3),V=s("1"),S=s(50),q=s(1),P=s([{url:"https://img.yzcdn.cn/vant/leaf.jpg"}]),z=s(!1),F=s([]),N=s(!1),G=e=>{console.log(e)};return(r,t)=>{const s=i("demo-block");return d(),u(s,{title:p(h)("fieldType")},{default:n((()=>[m(p(e),{onSubmit:G},{default:n((()=>[m(p(o),{inset:""},{default:n((()=>[m(p(l),{name:"switch",label:p(h)("switch")},{input:n((()=>[m(p(g),{modelValue:N.value,"onUpdate:modelValue":t[0]||(t[0]=e=>N.value=e),size:"20"},null,8,["modelValue"])])),_:1},8,["label"]),m(p(l),{name:"checkbox",label:p(h)("checkbox")},{input:n((()=>[m(p(C),{modelValue:z.value,"onUpdate:modelValue":t[1]||(t[1]=e=>z.value=e),shape:"square"},null,8,["modelValue"])])),_:1},8,["label"]),m(p(l),{name:"checkboxGroup",label:p(h)("checkboxGroup")},{input:n((()=>[m(p(_),{modelValue:F.value,"onUpdate:modelValue":t[2]||(t[2]=e=>F.value=e),direction:"horizontal"},{default:n((()=>[m(p(C),{name:"1",shape:"square"},{default:n((()=>[b(v(p(h)("checkbox"))+" 1 ",1)])),_:1}),m(p(C),{name:"2",shape:"square"},{default:n((()=>[b(v(p(h)("checkbox"))+" 2 ",1)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["label"]),m(p(l),{name:"radio",label:p(h)("radio")},{input:n((()=>[m(p(x),{modelValue:V.value,"onUpdate:modelValue":t[3]||(t[3]=e=>V.value=e),direction:"horizontal"},{default:n((()=>[m(p(k),{name:"1"},{default:n((()=>[b(v(p(h)("radio"))+" 1",1)])),_:1}),m(p(k),{name:"2"},{default:n((()=>[b(v(p(h)("radio"))+" 2",1)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["label"]),m(p(l),{name:"stepper",label:p(h)("stepper")},{input:n((()=>[m(p(y),{modelValue:q.value,"onUpdate:modelValue":t[4]||(t[4]=e=>q.value=e)},null,8,["modelValue"])])),_:1},8,["label"]),m(p(l),{name:"rate",label:p(h)("rate")},{input:n((()=>[m(p(j),{modelValue:f.value,"onUpdate:modelValue":t[5]||(t[5]=e=>f.value=e)},null,8,["modelValue"])])),_:1},8,["label"]),m(p(l),{name:"slider",label:p(h)("slider")},{input:n((()=>[m(p(U),{modelValue:S.value,"onUpdate:modelValue":t[6]||(t[6]=e=>S.value=e)},null,8,["modelValue"])])),_:1},8,["label"]),m(p(l),{name:"uploader",label:p(h)("uploader")},{input:n((()=>[m(p(w),{modelValue:P.value,"onUpdate:modelValue":t[7]||(t[7]=e=>P.value=e),"max-count":"2"},null,8,["modelValue"])])),_:1},8,["label"]),m($),m(E),m(L),m(A)])),_:1}),c("div",B,[m(p(a),{round:"",block:"",type:"primary","native-type":"submit"},{default:n((()=>[b(v(p(h)("submit")),1)])),_:1})])])),_:1})])),_:1},8,["title"])}}}),H=t({setup:e=>(e,l)=>(d(),h(f,null,[m(T),m(D),m(I)],64))});export{H as default};
