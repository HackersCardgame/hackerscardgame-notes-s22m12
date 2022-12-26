"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2983],{16027:function(e,n,t){t.d(n,{Z:function(){return T}});var r=t(70865),i=t(52322),o=t(13980),s=t.n(o),a=t(96670),c=t(87394),l=t(2784),u=t(58332),h=t.n(u),d=t(11978),m=t(85313),p=t(65105),x=t(7932),f=t(11408),g=t(83602),j=m.Interaction.H3,v=m.Interaction.P,Z=m.Interaction.Emphasis,y={button:(0,d.css)({width:160,textAlign:"center"}),help:(0,d.css)({listStyleType:"none",marginTop:40,paddingLeft:0,"> li":{paddingBottom:10}}),minimalHelp:(0,d.css)({margin:"10px 0 0 0"}),description:(0,d.css)({marginBottom:20})},b=h()(x.ZP,p.Z,g.Z)((function(e){var n=e.tokenType,t=e.email,o=e.onCancel,s=e.t,u=e.minimal,h=e.authorizeSession,p=e.me,x=e.onSuccess,g=(0,l.useState)(""),b=g[0],A=g[1],S=(0,l.useState)(""),C=S[0],I=S[1],T=(0,l.useState)(!1),w=T[0],F=T[1],z=(0,l.useState)(null),k=z[0],B=z[1],P=(0,l.useState)(!1),E=P[0],M=P[1],H=(0,l.useRef)(),q=(0,c.Z)((0,m.useColorContext)(),1)[0],D=function(){B(s("Auth/CodeAuthorization/code/invalid")),F(!0),M(!1)},R=function(e){e&&e.preventDefault(),M(!0),h({email:t,tokens:[{type:n,payload:C}]}).catch(D)},L=(0,d.merge)(y.help,u&&y.minimalHelp);return(0,l.useEffect)((function(){var e=H.current.getBoundingClientRect(),n=e.top,t=e.height,r=window.pageYOffset,i=window.innerHeight,o=r+n-i+t+20;n+t<i||(0,f.c)(o,400)}),[]),(0,l.useEffect)((function(){p&&x(p)}),[p]),(0,l.useEffect)((function(){C&&6===C.length&&R()}),[C]),(0,i.jsxs)("form",(0,a.Z)((0,r.Z)({onSubmit:R,ref:H},q.set("color","text")),{children:[u?(0,i.jsx)("p",{children:s.elements("Auth/CodeAuthorization/description",{emphasis:(0,i.jsx)(Z,{children:s("Auth/CodeAuthorization/description/emphasis/email",{email:t})},"emphasis")})}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j,{children:s("Auth/CodeAuthorization/title")}),(0,i.jsx)(v,(0,a.Z)((0,r.Z)({},y.description),{children:s.elements("Auth/CodeAuthorization/description",{emphasis:(0,i.jsx)(Z,{children:s("Auth/CodeAuthorization/description/emphasis")},"emphasis")})}))]}),(0,i.jsx)(m.Field,{renderInput:function(e){return(0,i.jsx)("input",(0,a.Z)((0,r.Z)({},e),{pattern:"[0-9]*"}))},label:s("Auth/CodeAuthorization/code/label"),value:b,autoComplete:"false",error:w&&k,icon:u&&(E?(0,i.jsx)(m.InlineSpinner,{size:"30px"}):(0,i.jsx)(m.DoneIcon,(0,r.Z)({style:{cursor:"pointer"},size:30,onClick:R},q.set("fill","text")))),onChange:function(e,n,t){!function(e){var n=e.value,t=void 0===n?"":n,r=e.shouldValidate,i=e.t,o=t.replace(/[^0-9]/g,"").slice(0,6);A(t.replace(/[^0-9\s]/g,"")),I(o),B(0===o.length&&i("Auth/CodeAuthorization/code/missing")||o.length<6&&i("Auth/CodeAuthorization/code/tooShort")),F(r)}({value:n,shouldValidate:t,t:s})}}),!u&&(0,i.jsx)("div",(0,a.Z)((0,r.Z)({},y.button),{children:E?(0,i.jsx)(m.InlineSpinner,{}):(0,i.jsx)(m.Button,{block:!0,type:"submit",primary:!0,disabled:!b||k||E,children:s("Auth/CodeAuthorization/button/label")})})),(0,i.jsxs)("ul",(0,a.Z)((0,r.Z)({},L),{children:[(0,i.jsx)("li",{children:(0,i.jsx)(m.A,{href:"#",onClick:o,children:s("Auth/CodeAuthorization/help/cancelLink")})}),(0,i.jsx)("li",(0,a.Z)((0,r.Z)({},q.set("color","textSoft")),{children:s("Auth/CodeAuthorization/help/lastResort")}))]}))]}))})),A=h()(g.Z,x.ZP)((function(e){var n=e.email,t=e.accessToken,o=e.authorizeSession,s=e.me,a=e.onSuccess,c=(0,l.useState)({loading:!0}),u=c[0],h=c[1];return(0,l.useEffect)((function(){h({loading:!0}),o({email:n,tokens:[{type:"ACCESS_TOKEN",payload:t}]}).catch((function(e){h({error:e})}))}),[n,t]),(0,l.useEffect)((function(){s&&a(s)}),[s,a]),(0,i.jsx)(m.Loader,(0,r.Z)({},u))})),S=t(93901),C=t(22828).mD.concat(["EMAIL_CODE","ACCESS_TOKEN"]),I=function(e){return"EMAIL_CODE"===e.tokenType?(0,i.jsx)(b,(0,r.Z)({},e)):"ACCESS_TOKEN"===e.tokenType?(0,i.jsx)(A,(0,r.Z)({},e)):(0,i.jsx)(S.Z,(0,r.Z)({},e))};I.propTypes={tokenType:s().oneOf(C).isRequired,email:s().string.isRequired,phrase:s().string.isRequired,alternativeFirstFactors:s().arrayOf(s().oneOf(C)).isRequired,onSuccess:s().func,onCancel:s().func,onTokenTypeChange:s().func},I.defaultProps={alternativeFirstFactors:[]};var T=(0,p.Z)(I)},62067:function(e,n,t){t.d(n,{ET:function(){return x}});var r=t(70865),i=t(96670),o=t(52322),s=t(2784),a=t(99614),c=t(65105),l=t(37590),u=t(47244),h=t(11978),d=t(85313),m=t(3135),p={center:(0,h.css)({width:"100%",maxWidth:600,margin:"10vh auto",padding:20})},x=function(e){var n=e.children;return(0,o.jsx)("div",(0,i.Z)((0,r.Z)({},p.center),{children:n}))};(0,c.Z)((function(e){var n=e.t,t=e.me,r=e.roles,i=void 0===r?[]:r;return(0,o.jsx)(a.ZP,{raw:!0,children:(0,o.jsx)(x,{children:t?(0,o.jsxs)(s.Fragment,{children:[(0,o.jsx)(d.Interaction.H1,{children:n("withAuthorization/title")}),(0,o.jsxs)(d.Interaction.P,{children:[n("withAuthorization/authorizedRoles",{roles:i.join(", ")}),(0,o.jsx)("br",{})]}),(0,o.jsx)("br",{}),(0,o.jsx)(u.Z,{})]}):(0,o.jsxs)(s.Fragment,{children:[(0,o.jsx)(d.Interaction.H1,{children:n("withAuthorization/title")}),(0,o.jsx)("br",{}),(0,o.jsx)(l.Z,{})]})})})}));n.ZP=m.Av},22876:function(e,n,t){t.d(n,{H2:function(){return y},LF:function(){return Z},LO:function(){return b},YD:function(){return j}});var r=t(70865),i=t(26297),o=t(52322),s=t(2784),a=t(65105),c=t(56995),l=t(99614),u=t(37590),h=t(47244),d=t(85313),m=t(62067),p=t(3135),x=t(39097),f=t.n(x),g=t(18750),j=function(e){var n=e.unauthorizedTexts,t=void 0===n?{}:n,r=t.title,i=t.description,l=(0,g.Pi)().me,m=(0,c.iS)().inNativeIOSApp,p=(0,a.$)().t;return m?(0,o.jsxs)(s.Fragment,{children:[l&&(0,o.jsx)(d.Interaction.H1,{style:{marginBottom:10},children:p("withMembership/ios/unauthorized/title")}),(0,o.jsx)("br",{}),(0,o.jsx)(h.Z,{beforeSignedInAs:(0,o.jsx)(s.Fragment,{children:(0,o.jsx)(d.Interaction.P,{style:{marginBottom:20},children:p("withMembership/ios/unauthorized/noMembership")})}),beforeSignInForm:(0,o.jsx)(s.Fragment,{children:(0,o.jsx)(d.Interaction.P,{style:{marginBottom:20},children:p("withMembership/ios/unauthorized/signIn")})})})]}):l?(0,o.jsxs)(s.Fragment,{children:[(0,o.jsx)(d.Interaction.H1,{children:p("withMembership/title")}),(0,o.jsxs)(d.Interaction.P,{children:[p.elements("withMembership/unauthorized",{buyLink:(0,o.jsx)(f(),{href:"/angebote",passHref:!0,children:(0,o.jsx)(d.A,{children:p("withMembership/unauthorized/buyText")})},"pledge"),accountLink:(0,o.jsx)(f(),{href:"/konto",passHref:!0,children:(0,o.jsx)(d.A,{children:p("withMembership/unauthorized/accountText")})},"account")}),(0,o.jsx)("br",{})]}),(0,o.jsx)("br",{}),(0,o.jsx)(h.Z,{})]}):(0,o.jsxs)(s.Fragment,{children:[(0,o.jsx)(d.Interaction.H1,{children:r||p("withMembership/title")}),(0,o.jsx)("br",{}),(0,o.jsx)(u.Z,{beforeForm:(0,o.jsx)(d.Interaction.P,{style:{marginBottom:20},children:i||p.elements("withMembership/signIn/note",{buyLink:(0,o.jsx)(f(),{href:"/angebote",passHref:!0,children:(0,o.jsx)(d.A,{children:p("withMembership/signIn/note/buyText")})},"pledge"),moreLink:(0,o.jsx)(f(),{href:"/",passHref:!0,children:(0,o.jsx)(d.A,{children:p("withMembership/signIn/note/moreText")})},"index")})})})]})},v=function(e){var n=e.meta,t=e.unauthorizedTexts;return(0,o.jsx)(l.ZP,{meta:n,raw:!0,children:(0,o.jsx)(m.ET,{children:(0,o.jsx)(j,{unauthorizedTexts:t})})})},Z=function(e){var n=e.render;return(0,g.Pi)().hasAccess?n():null},y=function(e){var n=e.render;return(0,g.Pi)().hasAccess?null:n()},b=function(e,n){return function(t){return(0,m.ZP)(["member"])((function(s){var a=s.isAuthorized,c=(0,i.Z)(s,["isAuthorized"]);return a?(0,o.jsx)(t,(0,r.Z)({meta:e},c)):(0,o.jsx)(v,{meta:e,unauthorizedTexts:n})}))}};n.ZP=p.ge},92983:function(e,n,t){var r=t(70865),i=t(96670),o=t(26297),s=t(87394),a=t(92228),c=t(52322),l=t(2784),u=t(39097),h=t.n(u),d=t(13980),m=t.n(d),p=t(58332),x=t.n(p),f=t(91020),g=t(10190),j=t(57800),v=t(11978),Z=t(44525),y=t.n(Z),b=t(38398),A=t(1457),S=t(37590),C=t(22876),I=t(16027),T=t(75046),w=t(7932),F=t(65105),z=t(85313),k=t(5632),B=t(53721),P=t(37365);function E(){var e=(0,a.Z)(["\n  mutation requestAccess($campaignId: ID!, $payload: JSON) {\n    requestAccess(campaignId: $campaignId, payload: $payload) {\n      id\n      endAt\n    }\n  }\n"]);return E=function(){return e},e}var M={errorMessages:(0,v.css)({marginTop:40}),switchBoard:(0,v.css)({marginTop:40}),switchBoardMinimal:(0,v.css)({marginTop:0}),completeContainer:(0,v.css)({display:"flex",flexDirection:"row-reverse",justifyContent:"flex-end",flexWrap:"wrap",alignItems:"center","> *":{marginBottom:16}}),circleButton:(0,v.css)(z.plainButtonRule,{padding:4,borderRadius:"50%",lineHeight:0})},H=["PRIVACY"],q=function(e){var n=e.payload,t=e.router,a=e.titleBlockKey,u=e.onBeforeSignIn,d=e.onSuccess,m=e.onReset,p=e.narrow,x=e.isMember,f=e.me,g=e.client,j=e.t,Z=e.minimal,S=e.initialEmail,C=e.campaign,w=e.isInSeriesNav,F=t.query,k=(0,l.useState)(F.token?H:[]),P=k[0],E=k[1],q=(0,l.useState)({value:S||""}),D=q[0],R=q[1],L=(0,l.useState)(""),O=L[0],_=L[1],N=(0,l.useState)(!1),$=N[0],K=N[1],V=(0,l.useState)(!1),Y=V[0],W=V[1],J=(0,l.useState)(!1),G=J[0],Q=J[1],U=(0,l.useState)(),X=U[0],ee=U[1],ne=(0,l.useState)(!1),te=ne[0],re=ne[1],ie=(0,l.useState)(!1),oe=ie[0],se=ie[1],ae=(0,s.Z)((0,z.useColorContext)(),1)[0];(0,l.useEffect)((function(){oe&&!$&&f&&le()}),[oe,$]);var ce=function(e,n){R((0,i.Z)((0,r.Z)({},D),{value:e,error:(!e||e.trim().length<=0)&&j("Trial/Form/email/error/empty")||!y()(e)&&j("Trial/Form/email/error/invalid"),dirty:n}))},le=function(o){if(o&&o.preventDefault&&o.preventDefault(),Q(!0),se(!1),_(),!f)return ce(D.value,!0),!D.value||D.error||pe?(Q(!1),re(!0)):(t.replace({pathname:t.pathname,query:(0,i.Z)((0,r.Z)({},t.query),{trialSignup:"pending"})},t.asPath,{shallow:!0}),u&&u(),e.signIn(D.value,"trial",P,"EMAIL_CODE",F.token).then((function(e){var n=e.data.signIn;ee((0,i.Z)((0,r.Z)({},n),{accessToken:F.token})),Q(!1),K(!0),se(!0)})).catch(ue));K(!1),x||e.requestAccess({payload:(0,r.Z)({},(0,B.ns)(F),n)}).then((function(){t.replace({pathname:t.pathname,query:(0,i.Z)((0,r.Z)({},t.query),{trialSignup:"success"})},t.asPath,{shallow:!0}),!d||d()?window.location=(0,b.format)({pathname:"/einrichten",query:{context:"trial"}}):(Z&&W(!0),g.resetStore())})).catch(ue)},ue=function(e){_(e),he()},he=function(e){e&&e.preventDefault&&e.preventDefault(),Q(!1),K(!1),m&&m()},de=Y||x,me=a&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(z.Interaction.H2,{style:{marginBottom:10},children:(0,c.jsx)(z.RawHtml,{dangerouslySetInnerHTML:{__html:j("Trial/Form/".concat(a,"/").concat(de?"completed":$?"waiting":"initial","/title"))}})}),!$&&(0,c.jsx)(z.Interaction.P,{children:j("Trial/Form/".concat(a,"/initial/").concat(de?"afterSignIn":"beforeSignIn"))})]});if(de)return(0,c.jsxs)(c.Fragment,{children:[me,(0,c.jsx)("div",(0,i.Z)((0,r.Z)({style:{marginTop:p||Z?20:40,marginBottom:!w&&Z?10:void 0}},M.completeContainer),{children:w?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(z.Interaction.P,{children:(0,c.jsx)(h(),{href:"/einrichten",passHref:!0,children:(0,c.jsx)(z.A,{children:j("Trial/Form/withAccess/setup/label")})})}),(0,c.jsx)(z.Button,{primary:!0,onClick:function(e){e&&e.preventDefault&&e.preventDefault();var n=t.query,r=(n.trialSignup,(0,o.Z)(n,["trialSignup"]));t.replace({pathname:t.pathname,query:r},t.asPath,{shallow:!0})},style:{marginRight:20},children:j("Trial/Form/withAccess/close/label")})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(z.Button,{onClick:function(){return t.push({pathname:"/einrichten",query:{context:"trial"}})},children:j("Trial/Form/withAccess/setup/label")}),(0,c.jsx)(z.Button,{primary:!0,style:{marginRight:20},onClick:function(){return t.push("/")},children:j("Trial/Form/withAccess/button/label")})]})}))]});var pe=(0,T.c)(j,H,P),xe=[D.error].concat(pe).filter(Boolean);return(0,c.jsxs)(c.Fragment,{children:[me,!($&&Z)&&(0,c.jsxs)("form",{onSubmit:le,children:[!f&&(0,c.jsxs)("div",{style:{opacity:$?.6:1,marginTop:p||Z?0:20},children:[(0,c.jsx)(z.Field,{name:"email",type:"email",label:j("Trial/Form/email/label"),value:D.value,error:D.dirty&&D.error,dirty:D.dirty,disabled:$,icon:Z&&(G?(0,c.jsx)(z.InlineSpinner,{size:"30px"}):(0,c.jsx)("button",(0,i.Z)((0,r.Z)({},(0,v.css)(M.circleButton,!!D.value&&!D.error&&ae.set("backgroundColor","primary"),ae.set("color","textSoft"))),{children:(0,c.jsx)(z.ArrowForwardIcon,{style:{cursor:"pointer",color:D.value&&!D.error?"#fff":"inherit"},size:22,onClick:le})}))),onChange:function(e,n,t){return ce(n,t)}}),(0,c.jsx)("div",{style:{marginTop:(p?10:Z&&"0")||20},children:(0,c.jsx)(T.Z,{error:te&&pe,required:H,accepted:P,disabled:$,onChange:E})})]}),!Z&&te&&xe.length>0&&(0,c.jsxs)("div",(0,i.Z)((0,r.Z)({},M.errorMessages,ae.set("color","error")),{children:[j("Trial/Form/error/title"),(0,c.jsx)("br",{}),(0,c.jsx)("ul",{children:xe.map((function(e,n){return(0,c.jsx)("li",{children:e},n)}))})]})),!$&&(!Z||f)&&(0,c.jsx)("div",{style:{marginTop:p||Z?20:30},children:G?(0,c.jsx)(z.InlineSpinner,{}):(0,c.jsx)(z.Button,{primary:!0,type:"submit",onClick:le,disabled:te&&xe.length>0,children:j.first([C&&f&&"Trial/Form/".concat(C,"/button/signedIn"),C&&"Trial/Form/".concat(C,"/button"),f&&"Trial/Form/button/signedIn","Trial/Form/button"].filter(Boolean))})})]}),$&&(0,c.jsx)("div",(0,i.Z)((0,r.Z)({},(0,v.merge)(M.switchBoard,Z&&M.switchBoardMinimal)),{children:(0,c.jsx)(I.Z,(0,i.Z)((0,r.Z)({email:D.value},X),{alternativeFirstFactors:[],onCancel:he,onTokenTypeChange:he,onSuccess:function(){K(!1)},minimal:Z}))})),O&&(0,c.jsx)(A.ZP,{error:O})]})};q.propTypes={campaign:m().string,accessCampaignId:m().string,onBeforeSignIn:m().func,narrow:m().bool};var D=(0,j.Ps)(E()),R=(0,f.B)(D,{props:function(e){var n=e.mutate,t=e.ownProps.accessCampaignId;return{requestAccess:function(e){var r=e.payload;return n({variables:{campaignId:t||P.vD,payload:r}})}}}});n.Z=x()(C.ZP,R,S.s,k.withRouter,w.ZP,F.Z,g.C)(q)}}]);