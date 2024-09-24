import e from"lodash/merge";import{reactive as a,computed as t,provide as s,renderSlot as l,inject as r,openBlock as o,createElementBlock as u,Fragment as n,renderList as i,mergeProps as p,toDisplayString as m,ref as v,watch as c,createElementVNode as d,normalizeProps as f,createCommentVNode as C,withDirectives as b,vModelSelect as g,createTextVNode as h,withModifiers as V,guardReactiveProps as y}from"vue";import I from"lodash/drop";import H from"lodash/every";import D from"lodash/forEach";import M from"lodash/get";import x from"lodash/isArray";import S from"lodash/map";import k from"lodash/set";import _ from"papaparse";import w from"lodash/findKey";import A from"axios";const F={errors:{fileRequired:"A file is required",invalidMimeType:"Invalid file type"},toggleHeaders:"File has headers",submitBtn:"Submit",fieldColumn:"Field",csvColumn:"Column",requiredField:"*",excludeField:"Exclude field"};var q={props:{modelValue:Array,fields:{type:[Object,Array],required:!0},text:{default:()=>({})}},setup(l,{emit:r}){let o=a({errors:[],inputName:"csv",file:null,map:{},value:{},fields:(u=l.fields,x(u)?S(u,(e=>({key:e,label:e,required:!0}))):S(u,((e,a)=>({key:a,label:M(e,"label",e),required:M(e,"required",!0)})))),fileHasHeaders:null,csvSample:null,rawCsv:null,language:e({},F,l.text),firstSampleRow:t((()=>x(o.csvSample)&&x(o.csvSample[0])?o.csvSample[0]:null)),allFieldsAreMapped:t((()=>H(o.fields,(function(e){return void 0!==o.map[e.key]||!e.required}))))});var u;return s("VueCsvImportData",o),s("buildMappedCsv",(function(){let e=o.fileHasHeaders?o.rawCsv:I(o.rawCsv);o.value=S(e,(e=>{let a={};return D(o.map,((t,s)=>{k(a,s,M(e,t))})),a})),r("update:modelValue",o.value)})),{VueCsvImportData:o}}};q.render=function(e,a,t,s,r,o){return l(e.$slots,"default",{errors:s.VueCsvImportData.errors,fields:s.VueCsvImportData.fields,file:s.VueCsvImportData.file})},q.__file="src/components/VueCsvImport.vue";var $={name:"VueCsvFiles",setup:()=>({VueCsvImportData:r("VueCsvImportData")})};$.render=function(e,a,t,s,r,v){return l(e.$slots,"default",{errors:s.VueCsvImportData.errors.value},(()=>[(o(!0),u(n,null,i(s.VueCsvImportData.errors,(a=>(o(),u("span",p({ref_for:!0},e.$attrs),m(a),17)))),256))]))},$.__file="src/components/VueCsvErrors.vue";const T={"text/csv":{source:"iana",compressible:!0,extensions:["csv"]},"application/vnd.ms-excel":{source:"iana",compressible:!1,extensions:["xls","xlm","xla","xlc","xlt","xlw"]},"text/plain":{source:"iana",compressible:!0,extensions:["txt","text","conf","def","list","log","in","ini"]}};var R={name:"CsvFile",props:{name:{type:String,default:"csv"},headers:{type:[Boolean,null],default:!0},parseConfig:{type:Object,default:()=>({})},validation:{type:Boolean,default:!0},fileMimeTypes:{type:Array,default:()=>["text/csv","text/x-csv","application/vnd.ms-excel","text/plain"]}},setup(a){const t=v(null),s=r("VueCsvImportData"),l=r("buildMappedCsv"),o=s.language;s.inputName=name,s.fileHasHeaders=null!==a.headers?!!a.headers:null;const u=function(e){if(s.errors=[],e||s.errors.push(o.errors.fileRequired),a.validation){const t=""===e.type?function(e){if(!e||"string"!=typeof e)return!1;let a=e.split(".").pop();return a&&w(T,(e=>e.extensions.includes(a)))||!1}(e.name):e.type;return a.fileMimeTypes.includes(t)||s.errors.push(o.errors.invalidMimeType),0===s.errors.length}return!0};return c((()=>s.file),(t=>{t||(s.csvSample.value=null,s.rawCsv.value=null);let l=new FileReader;l.readAsText(s.file,a.parseConfig.encoding||"UTF-8"),l.onload=function(t){s.csvSample=M(_.parse(t.target.result,e({preview:10,skipEmptyLines:!0},a.parseConfig)),"data"),s.rawCsv=M(_.parse(t.target.result,e({skipEmptyLines:!0},a.parseConfig)),"data")},l.onerror=function(e){console.log(e)}}),{deep:!0}),c((()=>s.fileHasHeaders),(()=>{s.allFieldsAreMapped&&l()})),{file:s.file,change:function(){let e=t.value.files?t.value.files[0]:null;u(e)&&(s.file=e)},csvRef:t}}};const E=["name"];R.render=function(e,a,t,s,r,o){return l(e.$slots,"default",{file:s.file,change:s.change},(()=>[d("input",p({ref:"csvRef",type:"file",onChange:a[0]||(a[0]=(...e)=>s.change&&s.change(...e)),name:t.name},e.$attrs),null,16,E)]))},R.__file="src/components/VueCsvInput.vue";var B={name:"CsvMap",props:{noThead:{type:Boolean,default:!1},selectAttributes:{type:Object,default:()=>({})},autoMatch:{type:Boolean,default:!0},autoMatchIgnoreCase:{type:Boolean,default:!0}},setup(e){const a=r("VueCsvImportData"),t=r("buildMappedCsv"),s=a.language;return c((()=>a.map),(function(){a.allFieldsAreMapped&&t()}),{deep:!0}),e.autoMatch&&c((()=>a.csvSample),(function(t){t&&a.fields.forEach((s=>{t[0].forEach(((t,l)=>{(e.autoMatchIgnoreCase?s.label.toLowerCase().trim():s.label.trim())===(e.autoMatchIgnoreCase?t.toLowerCase().trim():t.trim())&&(a.map[s.key]=l)}))}))})),{VueCsvImportData:a,labels:s}}};const j={key:0},L=["name","onUpdate:modelValue"],O={key:0,value:null},U=["value"];B.render=function(e,a,t,s,r,v){return l(e.$slots,"default",{sample:s.VueCsvImportData.firstSampleRow,map:s.VueCsvImportData.map,fields:s.VueCsvImportData.fields},(()=>[s.VueCsvImportData.firstSampleRow?(o(),u("table",f(p({key:0},e.$attrs)),[t.noThead?C("v-if",!0):(o(),u("thead",j,[d("tr",null,[d("th",null,m(s.labels.fieldColumn),1),d("th",null,m(s.labels.csvColumn),1)])])),d("tbody",null,[(o(!0),u(n,null,i(s.VueCsvImportData.fields,((e,a)=>(o(),u("tr",{key:a},[d("td",null,m(e.label),1),d("td",null,[b(d("select",p({ref_for:!0},t.selectAttributes,{name:`csv_uploader_map_${a}`,"onUpdate:modelValue":a=>s.VueCsvImportData.map[e.key]=a}),[e.required?C("v-if",!0):(o(),u("option",O," ")),(o(!0),u(n,null,i(s.VueCsvImportData.firstSampleRow,((e,a)=>(o(),u("option",{key:a,value:a},m(e),9,U)))),128))],16,L),[[g,s.VueCsvImportData.map[e.key]]])])])))),128))])],16)):C("v-if",!0)]))},B.__file="src/components/VueCsvMap.vue";var N={name:"CsvTableMap",props:{tableAttributes:{type:Object,default:()=>({})},autoMatch:{type:Boolean,default:!0},autoMatchIgnoreCase:{type:Boolean,default:!0}},setup(e){const s=r("VueCsvImportData"),l=r("buildMappedCsv"),o=s.language,u=a({}),n=t((()=>s.fields.map((e=>(e.selected=Object.values(u).includes(e.label),e)))));c((()=>u),(function(){s.map={};for(const[e,a]of Object.entries(u))""!==a&&(s.map[a.toLowerCase()]=e);s.allFieldsAreMapped&&l()}),{deep:!0});const i=t((()=>s.fileHasHeaders?s.csvSample:s.csvSample.slice(1))),p=t((()=>s.fileHasHeaders?[...Array(s.firstSampleRow.length).keys()].map((e=>`${o.csvColumn} ${e}`)):s.firstSampleRow));return e.autoMatch&&c((()=>s.csvSample),(function(a){a&&s.fields.forEach((t=>{a[0].forEach(((a,s)=>{(e.autoMatchIgnoreCase?t.label.toLowerCase().trim():t.label.trim())===(e.autoMatchIgnoreCase?a.toLowerCase().trim():a.trim())&&(u[s]=t.label)}))}))})),{availableFields:n,csvMap:u,csvSample:i,headers:p,VueCsvImportData:s,labels:o}}};const K=["onUpdate:modelValue","name"],z={value:""},G=["value","disabled"],J=["value"];N.render=function(e,a,t,s,r,v){return l(e.$slots,"default",{sample:s.VueCsvImportData.firstSampleRow,map:s.VueCsvImportData.map,fields:s.VueCsvImportData.fields},(()=>[s.VueCsvImportData.firstSampleRow?(o(),u("table",f(p({key:0},t.tableAttributes)),[d("thead",null,[d("tr",null,[(o(!0),u(n,null,i(s.headers,((e,a)=>(o(),u("td",{key:e},[h(m(e)+" ",1),b(d("select",{"onUpdate:modelValue":e=>s.csvMap[a]=e,name:`csv_uploader_map_${a}`,required:""},[d("option",z,m(s.labels.excludeField),1),(o(!0),u(n,null,i(s.availableFields,(e=>(o(),u("option",{value:e.label,key:e.key,disabled:e.selected},m(e.label)+m(e.required?s.labels.requiredField:""),9,G)))),128)),s.VueCsvImportData.fields.map((e=>e.label)).includes(e)?C("v-if",!0):(o(),u("option",{value:e,key:e},m(e),9,J))],8,K),[[g,s.csvMap[a]]])])))),128))])]),d("tbody",null,[(o(!0),u(n,null,i(s.csvSample,(e=>(o(),u("tr",null,[(o(!0),u(n,null,i(e,(e=>(o(),u("td",null,m(e),1)))),256))])))),256))])],16)):C("v-if",!0)]))},N.__file="src/components/VueCsvTableMap.vue";var P={name:"VueCsvImportSubmit",props:{url:{type:String,required:!0},config:{type:Object,required:!1,default:{}}},setup(e){const a=r("VueCsvImportData"),t=r("buildMappedCsv"),s=a.language;return{submit:function(){t(),A.post(e.url,{[a.inputName]:a.value},e.config).then((e=>{emit("send-success",e)})).catch((e=>{emit("send-error",e)})).finally((e=>{emit("send-complete",e)}))},VueCsvImportData:a,labels:s}}};P.render=function(e,a,t,s,r,o){return l(e.$slots,"submit",{submit:s.submit,mappedCsv:s.VueCsvImportData.value},(()=>[d("button",p({type:"submit"},e.$attrs,{onClick:a[0]||(a[0]=V(((...e)=>s.submit&&s.submit(...e)),["prevent"]))}),m(s.labels.submitBtn),17)]))},P.__file="src/components/VueCsvSubmit.vue";var Q={name:"ToggleHasHeaders",props:{labelAttributes:{},checkboxAttributes:{}},setup(){const e=r("VueCsvImportData"),a=e.language;return{VueCsvImportData:e,toggleHasHeaders:function(){e.fileHasHeaders=!e.fileHasHeaders},labels:a}}};const W=["value"];Q.render=function(e,a,t,s,r,o){return l(e.$slots,"default",{hasHeaders:s.VueCsvImportData.fileHasHeaders,toggle:s.toggleHasHeaders},(()=>[d("label",f(y(t.labelAttributes)),[d("input",p({type:"checkbox"},t.checkboxAttributes,{value:s.VueCsvImportData.fileHasHeaders,onChange:a[0]||(a[0]=(...e)=>s.toggleHasHeaders&&s.toggleHasHeaders(...e))}),null,16,W),h(" "+m(s.labels.toggleHeaders),1)],16)]))},Q.__file="src/components/VueCsvToggleHeaders.vue";const X={install(a,t){t=e({components:{"vue-csv-import":"vue-csv-import","vue-csv-errors":"vue-csv-errors","vue-csv-input":"vue-csv-input","vue-csv-map":"vue-csv-map","vue-csv-table-map":"vue-csv-table-map","vue-csv-submit":"vue-csv-submit","vue-csv-toggle-headers":"vue-csv-toggle-headers"}},t),a.component(t.components["vue-csv-import"],q),a.component(t.components["vue-csv-errors"],$),a.component(t.components["vue-csv-input"],R),a.component(t.components["vue-csv-map"],B),a.component(t.components["vue-csv-table-map"],N),a.component(t.components["vue-csv-submit"],P),a.component(t.components["vue-csv-toggle-headers"],Q)}};export{$ as VueCsvErrors,q as VueCsvImport,X as VueCsvImportPlugin,R as VueCsvInput,B as VueCsvMap,P as VueCsvSubmit,N as VueCsvTableMap,Q as VueCsvToggleHeaders};
