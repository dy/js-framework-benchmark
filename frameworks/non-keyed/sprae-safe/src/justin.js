let e,r,t=t=>(e=0,r=t,t=l(),r[e]?a():t||""),a=(t="Bad syntax",a=r.slice(0,e).split("\n"),s=a.pop())=>{let i=r.slice(e-108,e).split("\n").pop(),l=r.slice(e,e+108).split("\n").shift();throw EvalError(`${t} at ${a.length}:${s.length} \`${e>=108?"…":""}${i}┃${l}\``,"font-weight: bold")},s=(t,a=e,s)=>{for(;s=t(r.charCodeAt(e));)e+=s;return r.slice(a,e)},i=(t=1,a=e)=>(e+=t,r.slice(a,e)),l=(r=0,i,l,p,c,o)=>{for(;(l=t.space())&&(c=((o=n[l])&&o(p,r))??(!p&&s(t.id)));)p=c;return i&&(l==i?e++:a()),p};t.id=e=>e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122||36==e||95==e||e>=192&&215!=e&&247!=e,t.space=t=>{for(;(t=r.charCodeAt(e))<=32;)e++;return t};let n=[],p=(a,s=32,i,l=a.charCodeAt(0),p=a.length,c=n[l],o=a.toUpperCase()!==a)=>n[l]=(l,n,d=e)=>n<s&&(p<2||r.substr(e,p)==a)&&(!o||!t.id(r.charCodeAt(e+p)))&&(e+=p,i(l,n))||(e=d,c?.(l,n)),c=(e,r,t=!1)=>p(e,r,((a,s)=>a&&(s=l(r-(t?.5:0)))&&[e,a,s])),o=(e,r,t)=>p(e,r,(a=>t?a&&[e,a]:!a&&(a=l(r-.5))&&[e,a])),d=(e,r)=>{p(e,r,((t,a)=>(a=l(r),(!t||t[0]!==e)&&(t=[e,t]),t.push(a),t)))},f=(e,r)=>p(e[0],r,(r=>!r&&[e,l(0,e.charCodeAt(1))])),h=(e,r)=>p(e[0],r,(r=>r&&[e[0],r,l(0,e.charCodeAt(1))]));const A=e=>Array.isArray(e)?e[0]?u[e[0]](...e.slice(1)):()=>e[1]:A.id(e);A.id=e=>r=>r?.[e];const u={},m=(e,r,t=u[e])=>u[e]=(...e)=>r(...e)||t&&t(...e),y=(e,r,t,s,i)=>"()"===e[0]?y(e[1],r,t):"string"==typeof e?t=>r(t,e,t):"."===e[0]?(s=A(e[1]),i=e[2],e=>r(s(e),i,e)):"["===e[0]?(s=A(e[1]),i=A(e[2]),e=>r(s(e),i(e),e)):t?(e=A(e),t=>r([e(t)],0,t)):()=>a("Bad left value"),C=(e,r)=>[,(e=+s((e=>46===e||e>=48&&e<=57||(69===e||101===e?2:0))))!=e?a():e];n[46]=e=>!e&&C();for(let e=48;e<=57;e++)n[e]=e=>e?a():C();const g={n:"\n",r:"\r",t:"\t",b:"\b",f:"\f",v:"\v"},b=t=>(s,l,n="")=>{for(s&&a("Unexpected string"),i();(l=r.charCodeAt(e))-t;)92===l?(i(),l=i(),n+=g[l]||l):n+=i();return i()||a("Bad string"),[,n]};n[34]=b(34),n[39]=b(39),h("()",17),m("(",((e,r,t)=>(t=r?","===r[0]?(r=r.slice(1).map((e=>e?A(e):err())),e=>r.map((r=>r(e)))):(r=A(r),e=>[r(e)]):()=>[],y(e,((e,r,a)=>e[r](...t(a))),!0)))),h("[]",17),m("[",((e,r)=>r?(e=A(e),r=A(r),t=>e(t)[r(t)]):err())),c(".",17),m(".",((e,r)=>(e=A(e),r=r[0]?r:r[1],t=>e(t)[r]))),f("()",17),m("()",(e=>(!e&&a("Empty ()"),A(e))));const v=(...e)=>(e=e.map(A),r=>e.map((e=>e(r))).pop());d(",",1),m(",",v),d(";",1),m(";",v),c("*",12),m("*",((e,r)=>r&&(e=A(e),r=A(r),t=>e(t)*r(t)))),c("/",12),m("/",((e,r)=>r&&(e=A(e),r=A(r),t=>e(t)/r(t)))),c("%",12),m("%",((e,r)=>r&&(e=A(e),r=A(r),t=>e(t)%r(t)))),c("*=",2,!0),m("*=",((e,r)=>(r=A(r),y(e,((e,t,a)=>e[t]*=r(a)))))),c("/=",2,!0),m("/=",((e,r)=>(r=A(r),y(e,((e,t,a)=>e[t]/=r(a)))))),c("%=",2,!0),m("%=",((e,r)=>(r=A(r),y(e,((e,t,a)=>e[t]%=r(a)))))),o("+",14),m("+",((e,r)=>!r&&(e=A(e),r=>+e(r)))),o("-",14),m("-",((e,r)=>!r&&(e=A(e),r=>-e(r)))),c("+",11),m("+",((e,r)=>r&&(e=A(e),r=A(r),t=>e(t)+r(t)))),c("-",11),m("-",((e,r)=>r&&(e=A(e),r=A(r),t=>e(t)-r(t)))),c("+=",2,!0),m("+=",((e,r)=>(r=A(r),y(e,((e,t,a)=>e[t]+=r(a)))))),c("-=",2,!0),m("-=",((e,r)=>(r=A(r),y(e,((e,t,a)=>e[t]-=r(a)))))),p("++",15,(e=>e?["++-",e]:["++",l(14)])),m("++",(e=>y(e,((e,r,t)=>++e[r])))),m("++-",(e=>y(e,((e,r,t)=>e[r]++)))),p("--",15,(e=>e?["--+",e]:["--",l(14)])),m("--",(e=>y(e,((e,r,t)=>--e[r])))),m("--+",(e=>y(e,((e,r,t)=>e[r]--)))),o("~",14),m("~",((e,r)=>!r&&(e=A(e),r=>~e(r)))),c("|",5),m("|",((e,r)=>r&&(e=A(e),r=A(r),t=>e(t)|r(t)))),c("&",7),m("&",((e,r)=>r&&(e=A(e),r=A(r),t=>e(t)&r(t)))),c("^",6),m("^",((e,r)=>r&&(e=A(e),r=A(r),t=>e(t)^r(t)))),c(">>",10),m(">>",((e,r)=>r&&(e=A(e),r=A(r),t=>e(t)>>r(t)))),c("<<",10),m("<<",((e,r)=>r&&(e=A(e),r=A(r),t=>e(t)<<r(t)))),c("==",8),m("==",((e,r)=>r&&(e=A(e),r=A(r),t=>e(t)==r(t)))),c("!=",8),m("!=",((e,r)=>r&&(e=A(e),r=A(r),t=>e(t)!=r(t)))),c(">",9),m(">",((e,r)=>r&&(e=A(e),r=A(r),t=>e(t)>r(t)))),c("<",9),m("<",((e,r)=>r&&(e=A(e),r=A(r),t=>e(t)<r(t)))),c(">=",9),m(">=",((e,r)=>r&&(e=A(e),r=A(r),t=>e(t)>=r(t)))),c("<=",9),m("<=",((e,r)=>r&&(e=A(e),r=A(r),t=>e(t)<=r(t)))),o("!",14),m("!",((e,r)=>!r&&(e=A(e),r=>!e(r)))),c("||",3),m("||",((e,r)=>(e=A(e),r=A(r),t=>e(t)||r(t)))),c("&&",4),m("&&",((e,r)=>(e=A(e),r=A(r),t=>e(t)&&r(t)))),c("=",2,!0),m("=",((e,r)=>(r=A(r),y(e,((e,t,a)=>e[t]=r(a))))));var $=e=>A(t(e));p("/*",20,((t,a)=>(s((t=>42!==t&&47!==r.charCodeAt(e+1))),i(2),t||l(a)||[]))),p("//",20,((e,r)=>(s((e=>e>=32)),e||l(r)||[""]))),c("**",13,!0),m("**",((e,r)=>r&&(e=A(e),r=A(r),t=>e(t)**r(t)))),p("?",2,((e,r,t)=>e&&(r=l(1.5,58))&&["?",e,r,l(1.5)])),m("?",((e,r,t)=>(e=A(e),r=A(r),t=A(t),a=>e(a)?r(a):t(a)))),p("true",20,(e=>e?err():[,!0])),p("false",20,(e=>e?err():[,!1])),f("[]",20),m("[]",((e,r)=>(e=(e=e?","===e[0]?e.slice(1):[e]:[]).map((e=>"..."===e[0]?(e=A(e[1]),r=>e(r)):(e=A(e),r=>[e(r)]))),r=>e.flatMap((e=>e(r)))))),f("{}",20),m("{}",((e,r)=>(e=(e=e?","!==e[0]?[e]:e.slice(1):[]).map((e=>A("string"==typeof e?[":",e,e]:e))),r=>Object.fromEntries(e.flatMap((e=>e(r))))))),c(":",1.5,!0),m(":",((e,r)=>(r=A(r),Array.isArray(e)?(e=A(e),t=>[[e(t),r(t)]]):t=>[[e,r(t)]]))),c("=>",2,!0),m("=>",((e,r)=>(e=(e="()"===e[0]?e[1]:e)?e=","===e[0]?e.slice(1):[e]:[],r=A("{}"===r[0]?r[1]:r),(t=null)=>(t=Object.create(t),(...a)=>(e.map(((e,r)=>t[e]=a[r])),r(t)))))),c(""),p("?.",17,(e=>e&&["?.",e])),m("?.",(e=>(e=A(e),r=>e(r)||(()=>{})))),p("?.",17,((e,r)=>e&&!(r=l(17))?.map&&["?.",e,r])),m("?.",((e,r)=>r&&(e=A(e),t=>e(t)?.[r]))),m("(",((e,r,t,a,s,i)=>"?."===e[0]&&(e[2]||Array.isArray(e[1]))&&(a=r?","===r[0]?(r=r.slice(1).map(A),e=>r.map((r=>r(e)))):(r=A(r),e=>[r(e)]):()=>[],!e[2]&&(e=e[1]),s="["===e[0]?A(e[2]):()=>e[2],t=A(e[1]),e=>t(e)?.[s(e)]?.(...a(e))))),o("...",14),m("...",(e=>(e=A(e),r=>Object.entries(e(r))))),c("in",9),m("in",((e,r)=>r&&(e=A(e),r=A(r),t=>e(t)in r(t)))),c("===",8),c("!==",9),m("===",((e,r)=>(e=A(e),r=A(r),t=>e(t)===r(t)))),m("!==",((e,r)=>(e=A(e),r=A(r),t=>e(t)!==r(t)))),c("??",3),m("??",((e,r)=>r&&(e=A(e),r=A(r),t=>e(t)??r(t)))),c("??=",2,!0),m("??=",((e,r)=>(r=A(r),y(e,((e,t,a)=>e[t]??=r(a)))))),c("||=",2,!0),m("||=",((e,r)=>(r=A(r),y(e,((e,t,a)=>e[t]||=r(a)))))),c("&&=",2,!0),m("&&=",((e,r)=>(r=A(r),y(e,((e,t,a)=>e[t]&&=r(a)))))),p("undefined",20,(e=>e?a():[,void 0])),p("NaN",20,(e=>e?a():[,NaN])),p("null",20,(e=>e?a():[,null]));export{h as access,c as binary,A as compile,$ as default,f as group,n as lookup,d as nary,m as operator,t as parse,y as prop,p as token,o as unary};