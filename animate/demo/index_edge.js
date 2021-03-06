/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['"AdobeClean-Light", "source_sans_pro_lightregular"']='<link rel=\"stylesheet\" href=\"animate/demo/fonts.css\">';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'an_title',
            type:'text',
            rect:['257px','157px','auto','auto','auto','auto'],
            text:"Adobe Edge Animate",
            font:['"AdobeClean-Light", "source_sans_pro_lightregular"',44,"rgba(0,0,0,1)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'an_slogan',
            type:'text',
            rect:['317px','225px','254px','53px','auto','auto'],
            text:"Animate the Web",
            align:"left",
            font:['AdobeClean-Light, source_sans_pro_lightregular',35,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'an',
            type:'image',
            rect:['38px','18px','75px','75px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"edge_animate_mn.png",'0px','0px']
         },
         {
            id:'rs_an',
            type:'rect',
            rect:['22','18','auto','auto','auto','auto']
         },
         {
            id:'bd_title',
            type:'text',
            rect:['273px','464px','362px','46px','auto','auto'],
            text:"PhoneGap Build",
            align:"left",
            font:['AdobeClean-Light, source_sans_pro_lightregular',44,"rgba(158,218,225,1)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'bd_slogan',
            type:'text',
            rect:['303px','532px','auto','auto','auto','auto'],
            text:"Build Apps <br>with the Web",
            align:"center",
            font:['AdobeClean-Light, source_sans_pro_lightregular',44,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'bd',
            type:'image',
            rect:['350px','18px','75px','73px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"phonegap_build_mn.png",'0px','0px']
         },
         {
            id:'rs_bd',
            type:'rect',
            rect:['443','239','auto','auto','auto','auto']
         },
         {
            id:'rf_title',
            type:'text',
            rect:['273px','464px','362px','46px','auto','auto'],
            text:"Adobe Edge Reflow",
            align:"left",
            font:['AdobeClean-Light, source_sans_pro_lightregular',44,"rgba(97,220,254,1)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'rf_slogan',
            type:'text',
            rect:['309px','532px','auto','auto','auto','auto'],
            text:"Create the <br>Responsive Web",
            align:"center",
            font:['AdobeClean-Light, source_sans_pro_lightregular',44,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'rf',
            type:'image',
            rect:['455px','18px','75px','73px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"edge_reflow_mn.png",'0px','0px']
         },
         {
            id:'rs_rf',
            type:'rect',
            rect:['598','239','auto','auto','auto','auto']
         },
         {
            id:'tk_title',
            type:'text',
            rect:['326px','464px','147px','46px','auto','auto'],
            text:"Typekit",
            align:"left",
            font:['AdobeClean-Light, source_sans_pro_lightregular',44,"rgba(157,193,68,1.00)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'tk_slogan',
            type:'text',
            rect:['265px','532px','auto','auto','auto','auto'],
            text:"Use High Quality <br>Fonts on the Web",
            align:"left",
            font:['AdobeClean-Light, source_sans_pro_lightregular',44,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'tk',
            type:'image',
            rect:['560px','18px','75px','73px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"typekit.png",'0px','0px']
         },
         {
            id:'rs_tk',
            type:'rect',
            rect:['577','55','auto','auto','auto','auto']
         },
         {
            id:'wf_title',
            type:'text',
            rect:['273px','464px','439px','46px','auto','auto'],
            text:"Adobe Edge Web Fonts",
            align:"left",
            font:['AdobeClean-Light, source_sans_pro_lightregular',44,"rgba(254,205,71,1.00)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'wf_slogan',
            type:'text',
            rect:['229px','532px','auto','auto','auto','auto'],
            text:"Get Started with <br>Free Web Fonts",
            align:"left",
            font:['AdobeClean-Light, source_sans_pro_lightregular',44,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'wf',
            type:'image',
            rect:['665px','18px','75px','73px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"edge_web_fonts_mn.png",'0px','0px']
         },
         {
            id:'rs_wf',
            type:'rect',
            rect:['548','195','auto','auto','auto','auto']
         },
         {
            id:'in',
            type:'image',
            rect:['140px','18px','75px','73px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"edge_inspect_mn.png",'0px','0px']
         },
         {
            id:'rs_in',
            type:'rect',
            rect:['388','274','auto','auto','auto','auto']
         },
         {
            id:'in_title',
            type:'text',
            rect:['273px','464px','362px','46px','auto','auto'],
            text:"Adobe Edge Inspect ",
            align:"left",
            font:['AdobeClean-Light, source_sans_pro_lightregular',44,"rgba(178,170,252,1)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'in_slogan',
            type:'text',
            rect:['293','532px','auto','auto','auto','auto'],
            text:"Preview the Web",
            align:"left",
            font:['AdobeClean-Light, source_sans_pro_lightregular',44,"rgba(178,170,252,1)","normal","none","normal"]
         },
         {
            id:'co_title',
            type:'text',
            rect:['273px','464px','362px','46px','auto','auto'],
            text:"Adobe Edge Code",
            align:"left",
            font:['AdobeClean-Light, source_sans_pro_lightregular',44,"rgba(178,170,252,1)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'co_slogan',
            type:'text',
            rect:['293','532px','auto','auto','auto','auto'],
            text:"Code the Web",
            align:"left",
            font:['AdobeClean-Light, source_sans_pro_lightregular',44,"rgba(178,170,252,1)","normal","none","normal"]
         },
         {
            id:'co',
            type:'image',
            rect:['245px','18px','75px','73px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"edge_code_mn.png",'0px','0px']
         },
         {
            id:'rs_co',
            type:'rect',
            rect:['254','177','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'rs_an',
            symbolName:'rs'
         },
         {
            id:'rs_rf',
            symbolName:'rs'
         },
         {
            id:'rs_tk',
            symbolName:'rs'
         },
         {
            id:'rs_co',
            symbolName:'rs'
         },
         {
            id:'rs_wf',
            symbolName:'rs'
         },
         {
            id:'rs_bd',
            symbolName:'rs'
         },
         {
            id:'rs_in',
            symbolName:'rs'
         }
         ]
      },
   states: {
      "Base State": {
         "${_rf}": [
            ["style", "height", '73px'],
            ["style", "top", '18px'],
            ["style", "left", '455px'],
            ["style", "width", '75px']
         ],
         "${_co_title}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '2px'],
            ["subproperty", "textShadow.offsetV", '2px'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(82,222,198,1.00)'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.50)'],
            ["style", "left", '263px'],
            ["style", "top", '464px']
         ],
         "${_rs_bd}": [
            ["style", "left", '337px'],
            ["style", "top", '18px']
         ],
         "${_co_slogan}": [
            ["style", "top", '532px'],
            ["color", "color", 'rgba(170,170,170,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '320px'],
            ["style", "font-size", '35px']
         ],
         "${_tk_slogan}": [
            ["style", "top", '532px'],
            ["style", "opacity", '0'],
            ["style", "left", '265px'],
            ["color", "color", 'rgba(170,170,170,1.00)']
         ],
         "${_co}": [
            ["style", "height", '73px'],
            ["style", "top", '18px'],
            ["style", "left", '245px'],
            ["style", "width", '75px']
         ],
         "${_rs_tk}": [
            ["style", "left", '547px'],
            ["style", "top", '18px']
         ],
         "${_rs_in}": [
            ["style", "top", '18px'],
            ["style", "left", '127px']
         ],
         "${_rs_wf}": [
            ["style", "left", '652px'],
            ["style", "top", '18px']
         ],
         "${_rf_slogan}": [
            ["style", "top", '532px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(170,170,170,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '309px']
         ],
         "${_rs_co}": [
            ["style", "top", '18px'],
            ["style", "left", '232px']
         ],
         "${_bd_slogan}": [
            ["style", "top", '532px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(170,170,170,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '303px']
         ],
         "${_tk_title}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '2px'],
            ["style", "top", '464px'],
            ["subproperty", "textShadow.offsetV", '2px'],
            ["style", "opacity", '0'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.50)'],
            ["style", "left", '326px'],
            ["style", "width", '147px']
         ],
         "${_rf_title}": [
            ["style", "top", '464px'],
            ["subproperty", "textShadow.offsetH", '2px'],
            ["style", "opacity", '0'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.50)'],
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetV", '2px']
         ],
         "${_rs_an}": [
            ["style", "left", '25px']
         ],
         "${_wf_slogan}": [
            ["style", "top", '532px'],
            ["style", "opacity", '0'],
            ["style", "left", '276px'],
            ["color", "color", 'rgba(170,170,170,1.00)']
         ],
         "${_in_title}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '2px'],
            ["subproperty", "textShadow.offsetV", '2px'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(253,171,72,1.00)'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.50)'],
            ["style", "left", '263px'],
            ["style", "top", '464px']
         ],
         "${_in}": [
            ["style", "height", '73px'],
            ["style", "top", '18px'],
            ["style", "left", '140px'],
            ["style", "width", '75px']
         ],
         "${_tk}": [
            ["style", "height", '73px'],
            ["style", "top", '18px'],
            ["style", "left", '560px'],
            ["style", "width", '75px']
         ],
         "${_an_title}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '2px'],
            ["color", "color", 'rgba(84,70,150,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '257px'],
            ["style", "font-size", '44px'],
            ["style", "top", '464px'],
            ["style", "font-family", '"AdobeClean-Light", "source_sans_pro_lightregular"'],
            ["subproperty", "textShadow.offsetV", '2px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.50)']
         ],
         "${_bd_title}": [
            ["style", "top", '464px'],
            ["subproperty", "textShadow.offsetH", '2px'],
            ["style", "opacity", '0'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.50)'],
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetV", '2px']
         ],
         "${_wf}": [
            ["style", "height", '73px'],
            ["style", "top", '18px'],
            ["style", "left", '665px'],
            ["style", "width", '75px']
         ],
         "${_bd}": [
            ["style", "height", '73px'],
            ["style", "top", '18px'],
            ["style", "left", '350px'],
            ["style", "width", '75px']
         ],
         "${_rs_rf}": [
            ["style", "top", '18px'],
            ["style", "left", '444px']
         ],
         "${_in_slogan}": [
            ["style", "top", '532px'],
            ["color", "color", 'rgba(170,170,170,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '320px'],
            ["style", "font-size", '35px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,0.00)'],
            ["style", "width", '800px'],
            ["style", "height", '450px'],
            ["style", "overflow", 'hidden']
         ],
         "${_wf_title}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '2px'],
            ["style", "top", '464px'],
            ["subproperty", "textShadow.offsetV", '2px'],
            ["style", "opacity", '0'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.50)'],
            ["style", "left", '276px'],
            ["style", "width", '439px']
         ],
         "${_an}": [
            ["style", "height", '75px'],
            ["style", "top", '18px'],
            ["style", "left", '38px'],
            ["style", "width", '75px']
         ],
         "${_an_slogan}": [
            ["style", "top", '532px'],
            ["style", "width", '254px'],
            ["color", "color", 'rgba(170,170,170,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '317px'],
            ["style", "font-size", '35px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 45000,
         autoPlay: true,
         labels: {
            "reveal": 250,
            "start_an": 2000,
            "stop_an": 6000,
            "start_in": 8000,
            "stop_in": 12000,
            "start_co": 14000,
            "stop_co": 18000,
            "start_bd": 20000,
            "stop_bd": 24000,
            "start_rf": 26000,
            "stop_rf": 30000,
            "start_tk": 34000,
            "stop_tk": 38000,
            "start_wf": 40000,
            "stop_wf": 44000
         },
         timeline: [
            { id: "eid50", tween: [ "subproperty", "${_in_title}", "textShadow.offsetH", '2px', { fromValue: '2px'}], position: 3000, duration: 0 },
            { id: "eid64", tween: [ "subproperty", "${_bd_title}", "textShadow.offsetH", '2px', { fromValue: '2px'}], position: 3000, duration: 0 },
            { id: "eid202", tween: [ "style", "${_tk_title}", "top", '157px', { fromValue: '464px'}], position: 34000, duration: 1000 },
            { id: "eid206", tween: [ "style", "${_tk_title}", "top", '464px', { fromValue: '157px'}], position: 38000, duration: 1000 },
            { id: "eid4", tween: [ "color", "${_tk_slogan}", "color", 'rgba(51,51,51,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(170,170,170,1)'}], position: 0, duration: 3000 },
            { id: "eid9", tween: [ "color", "${_wf_slogan}", "color", 'rgba(51,51,51,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(170,170,170,1)'}], position: 0, duration: 3000 },
            { id: "eid93", tween: [ "style", "${_co}", "height", '195px', { fromValue: '73px'}], position: 14000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid109", tween: [ "style", "${_co}", "height", '73px', { fromValue: '195px'}], position: 18000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid43", tween: [ "subproperty", "${_wf_title}", "textShadow.offsetV", '2px', { fromValue: '2px'}], position: 3000, duration: 0 },
            { id: "eid67", tween: [ "subproperty", "${_in_title}", "textShadow.color", 'rgba(0,0,0,0.50)', { fromValue: 'rgba(0,0,0,0.50)'}], position: 3000, duration: 0 },
            { id: "eid37", tween: [ "subproperty", "${_in_title}", "textShadow.offsetV", '2px', { fromValue: '2px'}], position: 3000, duration: 0 },
            { id: "eid222", tween: [ "style", "${_an_title}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 1000, easing: "easeInQuad" },
            { id: "eid226", tween: [ "style", "${_an_title}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid170", tween: [ "style", "${_wf}", "top", '157px', { fromValue: '18px'}], position: 40000, duration: 1000 },
            { id: "eid193", tween: [ "style", "${_wf}", "top", '18px', { fromValue: '157px'}], position: 44000, duration: 1000 },
            { id: "eid119", tween: [ "style", "${_bd_slogan}", "top", '225px', { fromValue: '532px'}], position: 20000, duration: 1000 },
            { id: "eid131", tween: [ "style", "${_bd_slogan}", "top", '532px', { fromValue: '225px'}], position: 24000, duration: 1000 },
            { id: "eid231", tween: [ "style", "${_rf_slogan}", "opacity", '1', { fromValue: '0'}], position: 26000, duration: 1000, easing: "easeInQuad" },
            { id: "eid232", tween: [ "style", "${_rf_slogan}", "opacity", '0', { fromValue: '1'}], position: 30000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid227", tween: [ "style", "${_bd_slogan}", "opacity", '1', { fromValue: '0'}], position: 20009, duration: 1000, easing: "easeInQuad" },
            { id: "eid228", tween: [ "style", "${_bd_slogan}", "opacity", '0', { fromValue: '1'}], position: 24009, duration: 1000, easing: "easeOutQuad" },
            { id: "eid12", tween: [ "color", "${_co_slogan}", "color", 'rgba(51,51,51,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(170,170,170,1)'}], position: 0, duration: 3000 },
            { id: "eid41", tween: [ "style", "${_an}", "width", '200px', { fromValue: '75px'}], position: 2000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid56", tween: [ "style", "${_an}", "width", '75px', { fromValue: '200px'}], position: 6000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid10", tween: [ "style", "${_rs_bd}", "top", '18px', { fromValue: '18px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid45", tween: [ "subproperty", "${_rf_title}", "textShadow.offsetV", '2px', { fromValue: '2px'}], position: 3000, duration: 0 },
            { id: "eid23", tween: [ "style", "${_rs_rf}", "left", '444px', { fromValue: '444px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid8", tween: [ "color", "${_bd_slogan}", "color", 'rgba(51,51,51,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(170,170,170,1)'}], position: 0, duration: 3000 },
            { id: "eid59", tween: [ "style", "${_in}", "left", '38px', { fromValue: '140px'}], position: 8000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid88", tween: [ "style", "${_in}", "left", '140px', { fromValue: '38px'}], position: 12000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid254", tween: [ "style", "${_co_title}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 1000, easing: "easeInQuad" },
            { id: "eid253", tween: [ "style", "${_co_title}", "opacity", '0', { fromValue: '1'}], position: 18000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid154", tween: [ "style", "${_tk}", "width", '200px', { fromValue: '75px'}], position: 34000, duration: 1000 },
            { id: "eid166", tween: [ "style", "${_tk}", "width", '75px', { fromValue: '200px'}], position: 38000, duration: 1000 },
            { id: "eid76", tween: [ "style", "${_in_title}", "top", '157px', { fromValue: '464px'}], position: 8000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid85", tween: [ "style", "${_in_title}", "top", '464px', { fromValue: '157px'}], position: 12000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid120", tween: [ "style", "${_bd_title}", "top", '157px', { fromValue: '464px'}], position: 20000, duration: 1000 },
            { id: "eid132", tween: [ "style", "${_bd_title}", "top", '464px', { fromValue: '157px'}], position: 24000, duration: 1000 },
            { id: "eid250", tween: [ "style", "${_in_title}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 1000, easing: "easeInQuad" },
            { id: "eid249", tween: [ "style", "${_in_title}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid152", tween: [ "style", "${_tk}", "top", '157px', { fromValue: '18px'}], position: 34000, duration: 1000 },
            { id: "eid163", tween: [ "style", "${_tk}", "top", '18px', { fromValue: '157px'}], position: 38000, duration: 1000 },
            { id: "eid90", tween: [ "color", "${_co_title}", "color", 'rgba(82,222,198,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(82,222,198,1.00)'}], position: 14000, duration: 0 },
            { id: "eid235", tween: [ "style", "${_tk_slogan}", "opacity", '1', { fromValue: '0'}], position: 34000, duration: 1000, easing: "easeInQuad" },
            { id: "eid236", tween: [ "style", "${_tk_slogan}", "opacity", '0', { fromValue: '1'}], position: 38000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid48", tween: [ "subproperty", "${_tk_title}", "textShadow.offsetV", '2px', { fromValue: '2px'}], position: 3000, duration: 0 },
            { id: "eid151", tween: [ "style", "${_tk}", "left", '38px', { fromValue: '560px'}], position: 34000, duration: 1000 },
            { id: "eid165", tween: [ "style", "${_tk}", "left", '560px', { fromValue: '38px'}], position: 38000, duration: 1000 },
            { id: "eid70", tween: [ "subproperty", "${_rf_title}", "textShadow.color", 'rgba(0,0,0,0.50)', { fromValue: 'rgba(0,0,0,0.50)'}], position: 3000, duration: 0 },
            { id: "eid65", tween: [ "subproperty", "${_tk_title}", "textShadow.offsetH", '2px', { fromValue: '2px'}], position: 3000, duration: 0 },
            { id: "eid116", tween: [ "style", "${_bd}", "top", '157px', { fromValue: '18px'}], position: 20000, duration: 1000 },
            { id: "eid128", tween: [ "style", "${_bd}", "top", '18px', { fromValue: '157px'}], position: 24000, duration: 1000 },
            { id: "eid177", tween: [ "style", "${_wf_title}", "left", '276px', { fromValue: '276px'}], position: 40000, duration: 0 },
            { id: "eid178", tween: [ "style", "${_wf_title}", "left", '276px', { fromValue: '276px'}], position: 41000, duration: 0 },
            { id: "eid191", tween: [ "style", "${_wf_title}", "left", '276px', { fromValue: '276px'}], position: 44000, duration: 0 },
            { id: "eid192", tween: [ "style", "${_wf_title}", "left", '276px', { fromValue: '276px'}], position: 45000, duration: 0 },
            { id: "eid242", tween: [ "style", "${_wf_title}", "opacity", '1', { fromValue: '0'}], position: 40000, duration: 1000, easing: "easeInQuad" },
            { id: "eid241", tween: [ "style", "${_wf_title}", "opacity", '0', { fromValue: '1'}], position: 44000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid169", tween: [ "style", "${_wf}", "left", '38px', { fromValue: '665px'}], position: 40000, duration: 1000 },
            { id: "eid194", tween: [ "style", "${_wf}", "left", '665px', { fromValue: '38px'}], position: 44000, duration: 1000 },
            { id: "eid27", tween: [ "style", "${_rs_wf}", "left", '652px', { fromValue: '652px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid68", tween: [ "subproperty", "${_an_title}", "textShadow.color", 'rgba(0,0,0,0.50)', { fromValue: 'rgba(0,0,0,0.50)'}], position: 3000, duration: 0 },
            { id: "eid219", tween: [ "style", "${_an_slogan}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 1000, easing: "easeInQuad" },
            { id: "eid225", tween: [ "style", "${_an_slogan}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid238", tween: [ "style", "${_tk_title}", "opacity", '1', { fromValue: '0'}], position: 34000, duration: 1000, easing: "easeInQuad" },
            { id: "eid237", tween: [ "style", "${_tk_title}", "opacity", '0', { fromValue: '1'}], position: 38000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid5", tween: [ "style", "${_rs_in}", "top", '18px', { fromValue: '18px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid172", tween: [ "style", "${_wf}", "width", '200px', { fromValue: '75px'}], position: 40000, duration: 1000 },
            { id: "eid196", tween: [ "style", "${_wf}", "width", '75px', { fromValue: '200px'}], position: 44000, duration: 1000 },
            { id: "eid24", tween: [ "style", "${_rs_in}", "left", '127px', { fromValue: '127px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid16", tween: [ "style", "${_rs_wf}", "top", '18px', { fromValue: '18px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid44", tween: [ "style", "${_an_title}", "top", '157px', { fromValue: '464px'}], position: 2000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid58", tween: [ "style", "${_an_title}", "top", '464px', { fromValue: '157px'}], position: 6000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid138", tween: [ "style", "${_rf_title}", "top", '157px', { fromValue: '464px'}], position: 26000, duration: 1000 },
            { id: "eid150", tween: [ "style", "${_rf_title}", "top", '464px', { fromValue: '157px'}], position: 30000, duration: 1000 },
            { id: "eid13", tween: [ "color", "${_in_slogan}", "color", 'rgba(51,51,51,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(170,170,170,1)'}], position: 0, duration: 3000 },
            { id: "eid247", tween: [ "style", "${_in_slogan}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 1000, easing: "easeInQuad" },
            { id: "eid248", tween: [ "style", "${_in_slogan}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid174", tween: [ "style", "${_wf_slogan}", "top", '225px', { fromValue: '532px'}], position: 40000, duration: 1000 },
            { id: "eid200", tween: [ "style", "${_wf_slogan}", "top", '532px', { fromValue: '225px'}], position: 44000, duration: 1000 },
            { id: "eid94", tween: [ "style", "${_co}", "width", '200px', { fromValue: '75px'}], position: 14000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid112", tween: [ "style", "${_co}", "width", '75px', { fromValue: '200px'}], position: 18000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid6", tween: [ "color", "${_rf_slogan}", "color", 'rgba(51,51,51,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(170,170,170,1)'}], position: 0, duration: 3000 },
            { id: "eid135", tween: [ "style", "${_rf}", "height", '195px', { fromValue: '73px'}], position: 26000, duration: 1000 },
            { id: "eid145", tween: [ "style", "${_rf}", "height", '73px', { fromValue: '195px'}], position: 30000, duration: 1000 },
            { id: "eid251", tween: [ "style", "${_co_slogan}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 1000, easing: "easeInQuad" },
            { id: "eid252", tween: [ "style", "${_co_slogan}", "opacity", '0', { fromValue: '1'}], position: 18000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid47", tween: [ "subproperty", "${_bd_title}", "textShadow.offsetV", '2px', { fromValue: '2px'}], position: 3000, duration: 0 },
            { id: "eid234", tween: [ "style", "${_rf_title}", "opacity", '1', { fromValue: '0'}], position: 26000, duration: 1000, easing: "easeInQuad" },
            { id: "eid233", tween: [ "style", "${_rf_title}", "opacity", '0', { fromValue: '1'}], position: 30000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid42", tween: [ "style", "${_an}", "left", '34px', { fromValue: '38px'}], position: 2000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid55", tween: [ "style", "${_an}", "left", '38px', { fromValue: '34px'}], position: 6000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid176", tween: [ "style", "${_wf_title}", "top", '157px', { fromValue: '464px'}], position: 40000, duration: 1000 },
            { id: "eid198", tween: [ "style", "${_wf_title}", "top", '464px', { fromValue: '157px'}], position: 44000, duration: 1000 },
            { id: "eid171", tween: [ "style", "${_wf}", "height", '195px', { fromValue: '73px'}], position: 40000, duration: 1000 },
            { id: "eid195", tween: [ "style", "${_wf}", "height", '73px', { fromValue: '195px'}], position: 44000, duration: 1000 },
            { id: "eid46", tween: [ "style", "${_an_slogan}", "top", '225px', { fromValue: '532px'}], position: 2000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid57", tween: [ "style", "${_an_slogan}", "top", '532px', { fromValue: '225px'}], position: 6000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid239", tween: [ "style", "${_wf_slogan}", "opacity", '1', { fromValue: '0'}], position: 40000, duration: 1000, easing: "easeInQuad" },
            { id: "eid240", tween: [ "style", "${_wf_slogan}", "opacity", '0', { fromValue: '1'}], position: 44000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid61", tween: [ "style", "${_in}", "height", '195px', { fromValue: '73px'}], position: 8000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid86", tween: [ "style", "${_in}", "height", '73px', { fromValue: '195px'}], position: 12000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid39", tween: [ "style", "${_an}", "top", '157px', { fromValue: '18px'}], position: 2000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid54", tween: [ "style", "${_an}", "top", '18px', { fromValue: '157px'}], position: 6000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid71", tween: [ "subproperty", "${_bd_title}", "textShadow.color", 'rgba(0,0,0,0.50)', { fromValue: 'rgba(0,0,0,0.50)'}], position: 3000, duration: 0 },
            { id: "eid51", tween: [ "subproperty", "${_an_title}", "textShadow.offsetH", '2px', { fromValue: '2px'}], position: 3000, duration: 0 },
            { id: "eid52", tween: [ "subproperty", "${_wf_title}", "textShadow.offsetH", '2px', { fromValue: '2px'}], position: 3000, duration: 0 },
            { id: "eid7", tween: [ "style", "${_rs_co}", "top", '18px', { fromValue: '18px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid96", tween: [ "style", "${_co_slogan}", "top", '225px', { fromValue: '532px'}], position: 14000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid113", tween: [ "style", "${_co_slogan}", "top", '532px', { fromValue: '225px'}], position: 18000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid36", tween: [ "subproperty", "${_co_title}", "textShadow.offsetV", '2px', { fromValue: '2px'}], position: 3000, duration: 0 },
            { id: "eid153", tween: [ "style", "${_tk}", "height", '195px', { fromValue: '73px'}], position: 34000, duration: 1000 },
            { id: "eid164", tween: [ "style", "${_tk}", "height", '73px', { fromValue: '195px'}], position: 38000, duration: 1000 },
            { id: "eid201", tween: [ "style", "${_tk_slogan}", "top", '225px', { fromValue: '532px'}], position: 34000, duration: 1000 },
            { id: "eid205", tween: [ "style", "${_tk_slogan}", "top", '532px', { fromValue: '225px'}], position: 38000, duration: 1000 },
            { id: "eid134", tween: [ "style", "${_rf}", "top", '157px', { fromValue: '18px'}], position: 26000, duration: 1000 },
            { id: "eid146", tween: [ "style", "${_rf}", "top", '18px', { fromValue: '157px'}], position: 30000, duration: 1000 },
            { id: "eid62", tween: [ "style", "${_in}", "width", '200px', { fromValue: '75px'}], position: 8000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid89", tween: [ "style", "${_in}", "width", '75px', { fromValue: '200px'}], position: 12000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid26", tween: [ "style", "${_rs_bd}", "left", '337px', { fromValue: '337px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid133", tween: [ "style", "${_rf}", "left", '38px', { fromValue: '455px'}], position: 26000, duration: 1000 },
            { id: "eid147", tween: [ "style", "${_rf}", "left", '455px', { fromValue: '38px'}], position: 30000, duration: 1000 },
            { id: "eid230", tween: [ "style", "${_bd_title}", "opacity", '1', { fromValue: '0'}], position: 20009, duration: 1000, easing: "easeInQuad" },
            { id: "eid229", tween: [ "style", "${_bd_title}", "opacity", '0', { fromValue: '1'}], position: 24009, duration: 1000, easing: "easeOutQuad" },
            { id: "eid49", tween: [ "subproperty", "${_co_title}", "textShadow.offsetH", '2px', { fromValue: '2px'}], position: 3000, duration: 0 },
            { id: "eid117", tween: [ "style", "${_bd}", "height", '195px', { fromValue: '73px'}], position: 20000, duration: 1000 },
            { id: "eid127", tween: [ "style", "${_bd}", "height", '73px', { fromValue: '195px'}], position: 24000, duration: 1000 },
            { id: "eid91", tween: [ "style", "${_co}", "top", '157px', { fromValue: '18px'}], position: 14000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid110", tween: [ "style", "${_co}", "top", '18px', { fromValue: '157px'}], position: 18000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid77", tween: [ "style", "${_in_slogan}", "top", '225px', { fromValue: '532px'}], position: 8000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid84", tween: [ "style", "${_in_slogan}", "top", '532px', { fromValue: '225px'}], position: 12000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid118", tween: [ "style", "${_bd}", "width", '200px', { fromValue: '75px'}], position: 20000, duration: 1000 },
            { id: "eid130", tween: [ "style", "${_bd}", "width", '75px', { fromValue: '200px'}], position: 24000, duration: 1000 },
            { id: "eid3", tween: [ "color", "${_an_slogan}", "color", 'rgba(51,51,51,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(170,170,170,1)'}], position: 0, duration: 3000 },
            { id: "eid11", tween: [ "style", "${_rs_rf}", "top", '18px', { fromValue: '18px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid25", tween: [ "style", "${_rs_co}", "left", '232px', { fromValue: '232px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid60", tween: [ "style", "${_in}", "top", '157px', { fromValue: '18px'}], position: 8000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid87", tween: [ "style", "${_in}", "top", '18px', { fromValue: '157px'}], position: 12000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid137", tween: [ "style", "${_rf_slogan}", "top", '225px', { fromValue: '532px'}], position: 26000, duration: 1000 },
            { id: "eid149", tween: [ "style", "${_rf_slogan}", "top", '532px', { fromValue: '225px'}], position: 30000, duration: 1000 },
            { id: "eid66", tween: [ "subproperty", "${_co_title}", "textShadow.color", 'rgba(0,0,0,0.50)', { fromValue: 'rgba(0,0,0,0.50)'}], position: 3000, duration: 0 },
            { id: "eid40", tween: [ "style", "${_an}", "height", '200px', { fromValue: '75px'}], position: 2000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid53", tween: [ "style", "${_an}", "height", '75px', { fromValue: '200px'}], position: 6000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid92", tween: [ "style", "${_co}", "left", '38px', { fromValue: '245px'}], position: 14000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid111", tween: [ "style", "${_co}", "left", '245px', { fromValue: '38px'}], position: 18000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid215", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.00)'}], position: 0, duration: 0 },
            { id: "eid14", tween: [ "style", "${_rs_tk}", "top", '18px', { fromValue: '18px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid115", tween: [ "style", "${_bd}", "left", '38px', { fromValue: '350px'}], position: 20000, duration: 1000 },
            { id: "eid129", tween: [ "style", "${_bd}", "left", '350px', { fromValue: '38px'}], position: 24000, duration: 1000 },
            { id: "eid2", tween: [ "color", "${_an_title}", "color", 'rgba(84,70,150,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(84,70,150,1.00)'}], position: 0, duration: 0 },
            { id: "eid63", tween: [ "subproperty", "${_rf_title}", "textShadow.offsetH", '2px', { fromValue: '2px'}], position: 3000, duration: 0 },
            { id: "eid72", tween: [ "subproperty", "${_tk_title}", "textShadow.color", 'rgba(0,0,0,0.50)', { fromValue: 'rgba(0,0,0,0.50)'}], position: 3000, duration: 0 },
            { id: "eid95", tween: [ "style", "${_co_title}", "top", '157px', { fromValue: '464px'}], position: 14000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid114", tween: [ "style", "${_co_title}", "top", '464px', { fromValue: '157px'}], position: 18000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid136", tween: [ "style", "${_rf}", "width", '200px', { fromValue: '75px'}], position: 26000, duration: 1000 },
            { id: "eid148", tween: [ "style", "${_rf}", "width", '75px', { fromValue: '200px'}], position: 30000, duration: 1000 },
            { id: "eid38", tween: [ "subproperty", "${_an_title}", "textShadow.offsetV", '2px', { fromValue: '2px'}], position: 3000, duration: 0 },
            { id: "eid28", tween: [ "style", "${_rs_tk}", "left", '547px', { fromValue: '547px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid69", tween: [ "subproperty", "${_wf_title}", "textShadow.color", 'rgba(0,0,0,0.50)', { fromValue: 'rgba(0,0,0,0.50)'}], position: 3000, duration: 0 }         ]
      }
   }
},
"rs": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'rs_an',
      type: 'image',
      rect: ['0px','0px','107px','62px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/redsheet.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '62px'],
            ["style", "width", '107px']
         ],
         "${_rs_an}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '62px'],
            ["style", "left", '0px'],
            ["style", "width", '107px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         labels: {
            "remove": 0
         },
         timeline: [
            { id: "eid1", tween: [ "style", "${_rs_an}", "top", '-162px', { fromValue: '0px'}], position: 500, duration: 500 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-171675818");
