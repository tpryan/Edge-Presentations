
(function($,Edge,compId){var _=null,y=true,n=false,e58='${_tk}',e65='${_co}',e54='${_in_title}',e55='${_in}',x32='hidden',s='style',e66='${_an}',i='none',x35='rgba(82,222,198,1.00)',e37='${_rs_bd}',lf='left',x1='"AdobeClean-Light", "source_sans_pro_lightregular"',zx='scaleX',x40='rgba(51,51,51,1.00)',t='transform',e75='${symbolSelector}',x8='AdobeClean-Light, source_sans_pro_lightregular',e51='${_in_slogan}',bg='background-color',e30='${_rs_an}',x70='107px',x74='rs',x72='auto',fs='font-size',tp='top',x71='62px',ta='text-align',xc='rgba(0,0,0,1)',e49='${_wf_title}',x29='stage',e67='${_tk_slogan}',e33='${_rf}',x64='rgba(0,0,0,0.00)',c='color',x9='rgba(0,0,0,0)',x7='35',e63='${_Stage}',g='image',po='center',e46='${_rs_wf}',e62='${_co_slogan}',e61='${_rs_rf}',e60='${_bd_title}',e56='${_an_slogan}',x41='rgba(170,170,170,1)',x39='rgba(170,170,170,1.00)',e53='${_wf_slogan}',qoq='easeOutQuad',e50='${_tk_title}',x='text',e52='${_rf_title}',e59='${_wf}',m='rect',x69='0px',x2='2.0.0',e38='${_bd_slogan}',qiq='easeInQuad',x43='rgba(84,70,150,1.00)',x68='rs_an',e45='${_rs_in}',e34='${_co_title}',e44='${_rs_tk}',p='px',o='opacity',x31='rgba(253,171,72,1.00)',x5='44',e42='${_an_title}',x36='rgba(0,0,0,0.50)',e47='${_rf_slogan}',e48='${_rs_co}',l='normal',x3='2.0.0.250',qib='easeInBounce',ff='font-family',a='Base State',w='width',h='height',e57='${_bd}',ql='linear',dt='Default Timeline',ov='overflow';var im='images/';var g10='edge_animate_mn.png',g73='redsheet.png',g23='edge_inspect_mn.png',g16='edge_reflow_mn.png',g28='edge_code_mn.png',g22='edge_web_fonts_mn.png',g13='phonegap_build_mn.png',g19='typekit.png';var s17="Typekit",s21="Get Started with <br>Free Web Fonts",s25="Preview the Web",s18="Use High Quality <br>Fonts on the Web",s15="Create the <br>Responsive Web",s12="Build Apps <br>with the Web",s6="Animate the Web",s27="Code the Web",s4="Adobe Edge Animate",s14="Adobe Edge Reflow",s26="Adobe Edge Code",s24="Adobe Edge Inspect ",s20="Adobe Edge Web Fonts",s11="PhoneGap Build";var fonts={};fonts[x1]='<link rel=\"stylesheet\" href=\"animate/demo/fonts.css\">';var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x2,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'an_title',t:x,r:['257px','157px','auto','auto','auto','auto'],text:s4,n:[x1,x5,xc,l,i,""],textShadow:["rgba(0,0,0,0.65)",3,3,3]},{id:'an_slogan',t:x,r:['317px','225px','254px','53px','auto','auto'],text:s6,align:"left",n:[x8,x7,"rgba(255,255,255,1.00)",l,i,l]},{id:'an',t:g,r:['38px','18px','75px','75px','auto','auto'],f:[x9,im+g10,'0px','0px']},{id:'rs_an',t:m,r:['22','18','auto','auto','auto','auto']},{id:'bd_title',t:x,r:['273px','464px','362px','46px','auto','auto'],text:s11,align:"left",n:[x8,x5,"rgba(158,218,225,1)",l,i,l],textShadow:["rgba(0,0,0,0.65)",3,3,3]},{id:'bd_slogan',t:x,r:['303px','532px','auto','auto','auto','auto'],text:s12,align:"center",n:[x8,x5,"rgba(255,255,255,1.00)",l,i,l]},{id:'bd',t:g,r:['350px','18px','75px','73px','auto','auto'],f:[x9,im+g13,'0px','0px']},{id:'rs_bd',t:m,r:['443','239','auto','auto','auto','auto']},{id:'rf_title',t:x,r:['273px','464px','362px','46px','auto','auto'],text:s14,align:"left",n:[x8,x5,"rgba(97,220,254,1)",l,i,l],textShadow:["rgba(0,0,0,0.65)",3,3,3]},{id:'rf_slogan',t:x,r:['309px','532px','auto','auto','auto','auto'],text:s15,align:"center",n:[x8,x5,"rgba(255,255,255,1.00)",l,i,l]},{id:'rf',t:g,r:['455px','18px','75px','73px','auto','auto'],f:[x9,im+g16,'0px','0px']},{id:'rs_rf',t:m,r:['598','239','auto','auto','auto','auto']},{id:'tk_title',t:x,r:['326px','464px','147px','46px','auto','auto'],text:s17,align:"left",n:[x8,x5,"rgba(157,193,68,1.00)",l,i,l],textShadow:["rgba(0,0,0,0.65)",3,3,3]},{id:'tk_slogan',t:x,r:['265px','532px','auto','auto','auto','auto'],text:s18,align:"left",n:[x8,x5,"rgba(255,255,255,1.00)",l,i,l]},{id:'tk',t:g,r:['560px','18px','75px','73px','auto','auto'],f:[x9,im+g19,'0px','0px']},{id:'rs_tk',t:m,r:['577','55','auto','auto','auto','auto']},{id:'wf_title',t:x,r:['273px','464px','439px','46px','auto','auto'],text:s20,align:"left",n:[x8,x5,"rgba(254,205,71,1.00)",l,i,l],textShadow:["rgba(0,0,0,0.65)",3,3,3]},{id:'wf_slogan',t:x,r:['229px','532px','auto','auto','auto','auto'],text:s21,align:"left",n:[x8,x5,"rgba(255,255,255,1.00)",l,i,l]},{id:'wf',t:g,r:['665px','18px','75px','73px','auto','auto'],f:[x9,im+g22,'0px','0px']},{id:'rs_wf',t:m,r:['548','195','auto','auto','auto','auto']},{id:'in',t:g,r:['140px','18px','75px','73px','auto','auto'],f:[x9,im+g23,'0px','0px']},{id:'rs_in',t:m,r:['388','274','auto','auto','auto','auto']},{id:'in_title',t:x,r:['273px','464px','362px','46px','auto','auto'],text:s24,align:"left",n:[x8,x5,"rgba(178,170,252,1)",l,i,l],textShadow:["rgba(0,0,0,0.65)",3,3,3]},{id:'in_slogan',t:x,r:['293','532px','auto','auto','auto','auto'],text:s25,align:"left",n:[x8,x5,"rgba(178,170,252,1)",l,i,l]},{id:'co_title',t:x,r:['273px','464px','362px','46px','auto','auto'],text:s26,align:"left",n:[x8,x5,"rgba(178,170,252,1)",l,i,l],textShadow:["rgba(0,0,0,0.65)",3,3,3]},{id:'co_slogan',t:x,r:['293','532px','auto','auto','auto','auto'],text:s27,align:"left",n:[x8,x5,"rgba(178,170,252,1)",l,i,l]},{id:'co',t:g,r:['245px','18px','75px','73px','auto','auto'],f:[x9,im+g28,'0px','0px']},{id:'rs_co',t:m,r:['254','177','auto','auto','auto','auto']}],sI:[{id:'rs_an',sN:'rs'},{id:'rs_rf',sN:'rs'},{id:'rs_tk',sN:'rs'},{id:'rs_co',sN:'rs'},{id:'rs_wf',sN:'rs'},{id:'rs_bd',sN:'rs'},{id:'rs_in',sN:'rs'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:45000,a:y,l:{"reveal":250,"start_an":2000,"stop_an":6000,"start_in":8000,"stop_in":12000,"start_co":14000,"stop_co":18000,"start_bd":20000,"stop_bd":24000,"start_rf":26000,"stop_rf":30000,"start_tk":34000,"stop_tk":38000,"start_wf":40000,"stop_wf":44000},tt:[]}}},"rs":{v:x2,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x68,t:g,r:[x69,x69,x70,x71,x72,x72],f:[x9,im+g73,x69,x69]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1000,a:n,l:{"remove":0},tt:[]}}}};var S1=symbols[x29];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e30).P(lf,25);A1.A(e33).P(tp,18).T(26,157,1,ql).T(30,18,1).P(h,73).T(26,195,1).T(30,73,1).P(lf,455).T(26,38,1).T(30,455,1).P(w,75).T(26,200,1).T(30,75,1);A1.A(e34).P("textShadow.blur",3,"subproperty").P(lf,263).P(tp,464).T(14,157,1,qoq).T(18,464,1).P("textShadow.offsetH",2,"subproperty").T(3,2).P(c,x35,c).T(14,x35).P("textShadow.offsetV",2,"subproperty").T(3,2).P("textShadow.color",x36,"subproperty").T(3,x36).P(o,0,_,_,"").T(14,1,1,qiq).T(18,0,1,qoq);A1.A(e37).P(tp,18).T(0,18).P(lf,337).T(0,337);A1.A(e38).P(ta,po).P(lf,303).P(tp,532).T(20,225,1,ql).T(24,532,1).P(o,0,_,_,"").T(20.009,1,1,qiq).T(24.009,0,1,qoq).P(c,x39,c).T(0,x40,3,ql,x41);A1.A(e42).P("textShadow.blur",3,"subproperty").P(lf,257).P(fs,44).P(ff,x1).P(tp,464).T(2,157,1,qoq).T(6,464,1).P("textShadow.offsetH",2,"subproperty").T(3,2).P(c,x43,c).T(0,x43).P("textShadow.color",x36,"subproperty").T(3,x36).P("textShadow.offsetV",2,"subproperty").T(3,2).P(o,0,_,_,"").T(2,1,1,qiq).T(6,0,1,qoq);A1.A(e44).P(tp,18).T(0,18).P(lf,547).T(0,547);A1.A(e45).P(tp,18).T(0,18).P(lf,127).T(0,127);A1.A(e46).P(lf,652).T(0,652).P(tp,18).T(0,18);A1.A(e47).P(ta,po).P(lf,309).P(c,x39,c).T(0,x40,3,ql,x41).P(o,0,_,_,"").T(26,1,1,qiq).T(30,0,1,qoq).P(tp,532,_,_,p).T(26,225,1,ql).T(30,532,1);A1.A(e48).P(tp,18).T(0,18).P(lf,232).T(0,232);A1.A(e49).P("textShadow.blur",3,"subproperty").P(w,439).P(tp,464).T(40,157,1,ql).T(44,464,1).P("textShadow.offsetH",2,"subproperty").T(3,2).P("textShadow.color",x36,"subproperty").T(3,x36).P(o,0,_,_,"").T(40,1,1,qiq).T(44,0,1,qoq).P(lf,276,_,_,p).T(40,276).T(41,276).T(44,276).T(45,276).P("textShadow.offsetV",2,"subproperty").T(3,2);A1.A(e50).P("textShadow.blur",3,"subproperty").P(lf,326).P(w,147).P(tp,464).T(34,157,1,ql).T(38,464,1).P("textShadow.offsetH",2,"subproperty").T(3,2).P(o,0,_,_,"").T(34,1,1,qiq).T(38,0,1,qoq).P("textShadow.color",x36,"subproperty").T(3,x36).P("textShadow.offsetV",2,"subproperty",_,p).T(3,2);A1.A(e51).P(lf,320).P(fs,35).P(c,x39,c).T(0,x40,3,ql,x41).P(o,0,_,_,"").T(8,1,1,qiq).T(12,0,1,qoq).P(tp,532,_,_,p).T(8,225,1).T(12,532,1);A1.A(e52).P("textShadow.blur",3,"subproperty").P(tp,464).T(26,157,1,ql).T(30,464,1).P("textShadow.offsetH",2,"subproperty").T(3,2).P("textShadow.color",x36,"subproperty").T(3,x36).P("textShadow.offsetV",2,"subproperty").T(3,2).P(o,0,_,_,"").T(26,1,1,qiq).T(30,0,1,qoq);A1.A(e53).P(lf,276).P(tp,532).T(40,225,1,ql).T(44,532,1).P(o,0,_,_,"").T(40,1,1,qiq).T(44,0,1,qoq).P(c,x39,c).T(0,x40,3,ql,x41);A1.A(e54).P("textShadow.blur",3,"subproperty").P(c,x31,c).P(lf,263).P(tp,464).T(8,157,1,qoq).T(12,464,1).P("textShadow.offsetH",2,"subproperty").T(3,2).P("textShadow.color",x36,"subproperty").T(3,x36).P(o,0,_,_,"").T(8,1,1,qiq).T(12,0,1,qoq).P("textShadow.offsetV",2,"subproperty",_,p).T(3,2);A1.A(e55).P(h,73).T(8,195,1,qoq).T(12,73,1).P(tp,18).T(8,157,1).T(12,18,1).P(lf,140).T(8,38,1).T(12,140,1).P(w,75).T(8,200,1).T(12,75,1);A1.A(e56).P(w,254).P(lf,317).P(fs,35).P(tp,532).T(2,225,1,qoq).T(6,532,1).P(o,0,_,_,"").T(2,1,1,qiq).T(6,0,1,qoq).P(c,x39,c).T(0,x40,3,ql,x41);A1.A(e57).P(h,73).T(20,195,1,ql).T(24,73,1).P(tp,18).T(20,157,1).T(24,18,1).P(lf,350).T(20,38,1).T(24,350,1).P(w,75).T(20,200,1).T(24,75,1);A1.A(e58).P(tp,18).T(34,157,1,ql).T(38,18,1).P(h,73).T(34,195,1).T(38,73,1).P(lf,560).T(34,38,1).T(38,560,1).P(w,75).T(34,200,1).T(38,75,1);A1.A(e59).P(tp,18).T(40,157,1,ql).T(44,18,1).P(h,73).T(40,195,1).T(44,73,1).P(lf,665).T(40,38,1).T(44,665,1).P(w,75).T(40,200,1).T(44,75,1);A1.A(e60).P("textShadow.blur",3,"subproperty").P(tp,464).T(20,157,1,ql).T(24,464,1).P("textShadow.offsetH",2,"subproperty").T(3,2).P("textShadow.offsetV",2,"subproperty").T(3,2).P(o,0,_,_,"").T(20.009,1,1,qiq).T(24.009,0,1,qoq).P("textShadow.color",x36,"subproperty").T(3,x36);A1.A(e61).P(lf,444).T(0,444).P(tp,18).T(0,18);A1.A(e62).P(lf,320).P(fs,35).P(c,x39,c).T(0,x40,3,ql,x41).P(o,0,_,_,"").T(14,1,1,qiq).T(18,0,1,qoq).P(tp,532,_,_,p).T(14,225,1).T(18,532,1);A1.A(e63).P(w,800).P(h,450).P(ov,x32).P(bg,x64,c).T(0,x64);A1.A(e65).P(h,73).T(14,195,1,qoq).T(18,73,1).P(tp,18).T(14,157,1).T(18,18,1).P(lf,245).T(14,38,1).T(18,245,1).P(w,75).T(14,200,1).T(18,75,1);A1.A(e66).P(tp,18).T(2,157,1,qoq).T(6,18,1).P(h,75).T(2,200,1).T(6,75,1).P(lf,38).T(2,34,1).T(6,38,1).P(w,75).T(2,200,1).T(6,75,1);A1.A(e67).P(lf,265).P(c,x39,c).T(0,x40,3,ql,x41).P(o,0,_,_,"").T(34,1,1,qiq).T(38,0,1,qoq).P(tp,532,_,_,p).T(34,225,1,ql).T(38,532,1);var S2=symbols[x74];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e75).P(h,62).P(w,107);A2.A(e30).P(zx,1,t,_,"").P(h,62,_,_,p).P(lf,0).P(w,107).P(tp,0).T(0.5,-162,0.5,ql);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-171675818");