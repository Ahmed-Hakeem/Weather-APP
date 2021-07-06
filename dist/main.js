var Client=function(e){var t={};function i(a){if(t[a])return t[a].exports;var d=t[a]={i:a,l:!1,exports:{}};return e[a].call(d.exports,d,d.exports,i),d.l=!0,d.exports}return i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)i.d(a,d,function(t){return e[t]}.bind(null,d));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=14)}([function(e,t,i){"use strict";i.r(t),t.default=i.p+"ff159afb8b74e6f5c7d228acdf7b8096.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"542757b6a232827f7e3830109e18759e.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"5a74f347ad946d01e9f00c867e6dffef.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"ba81abbf962e32751a88046ce8221f3b.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"e352462fbc81c74c274aa8502893647c.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"9072f72ffee09c1400c253654072f13d.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"1d570f2e2cf906bf426fd57c2f73226b.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"d8b4e910d39598e6eee40cd4da0129ce.png"},function(e,t,i){},function(e,t,i){},function(e,t,i){var a=i(11),d=i(0),n=i(12),s=i(13),c=i(1),r=i(2),o=i(3),l=i(4),m=i(5),p=i(6),u=i(7),g='<!doctype html> <html> <head> <meta charset=UTF-8 /> <title>travel app</title> <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,900;1,600&display=swap" rel=stylesheet /> </head> <body> <div id=wrapper> <img src='+a(d)+' class=container /> <div class=container id=container> <div class=holder> <label for=city class=title>Enter cityName here</label> <input type=text id=city placeholder="enter cityName code here"/> </div> <div id=dateContainer> <label for=travel-start> departing from </label> <input type=date id=travel-start name=start-date required/> <label for=travel-end> departing to </label> <input type=date id=travel-end name=end-date required/> </div> <div class=holder> <label for=feelings class=title>How are you feeling today?</label> <textarea id=feelings placeholder="Enter your feelings here"></textarea> </div> <div class=holder> <button id=generate type=submit>Generate</button> </div> </div> <div class=spinHide id=spinner></div> <div id=alldata> <div id=image> <img id=countryImg src='+a(n)+" /> </div> <div id=data class=catch> <div id=weatherGroup> <div id=iconContainer> <img id=apiIcon src="+a(s)+" /> <div id=description></div> </div> <div id=tempContainer> <div id=temp></div> </div> </div> <div id=dataGroup> <div class=align> <img class=icons src="+a(c)+" /> <div id=date></div> </div> <div class=align> <img class=icons src="+a(r)+" /> <div id=location></div> </div> <div class=align> <img class=icons src="+a(o)+" /> <div id=population></div> </div> <div class=align> <img class=icons src="+a(l)+" /> <div id=content></div> </div> <div class=align> <img class=icons src="+a(m)+" /> <div id=flight></div> </div> </div> </div> <img id=right-arrow src="+a(p)+" /> <img id=left-arrow src="+a(u)+' /> <div id=weather-forecast> <div id=day-weather0 class=day-weathers> <img id=image0 class=images src=https://www.weatherbit.io/static/img/icons/r01d.png /> <div id=description0 class=descriptions></div> <div id=temprature0 class=tempratures> 20 <div id=min-temp0 class=min-temps></div> <div id=max-temp0 class=max-temps></div> </div> <div id=date0 calss=dates></div> </div> <div id=day-weather1 class=day-weathers> <img id=image1 class=images src=https://www.weatherbit.io/static/img/icons/r01d.png /> <div id=description1 class=descriptions></div> <div id=temprature1 class=tempratures> 20 <div id=min-temp1 class=min-temps></div> <div id=max-temp1 class=max-temps></div> </div> <div id=date1 calss=dates></div> </div> <div id=day-weather2 class=day-weathers> <img id=image2 class=images src=https://www.weatherbit.io/static/img/icons/r01d.png /> <div id=description2 class=descriptions></div> <div id=temprature2 class=tempratures> 20 <div id=min-temp2 class=min-temps></div> <div id=max-temp2 class=max-temps></div> </div> <div id=date2 calss=dates></div> </div> <div id=day-weather3 class=day-weathers> <img id=image3 class=images src=https://www.weatherbit.io/static/img/icons/r01d.png /> <div id=description3 class=descriptions></div> <div id=temprature3 class=tempratures> 20 <div id=min-temp3 class=min-temps></div> <div id=max-temp3 class=max-temps></div> </div> <div id=date3 calss=dates></div> </div> <div id=day-weather4 class=day-weathers> <img id=image4 class=images src=https://www.weatherbit.io/static/img/icons/r01d.png /> <div id=description4 class=descriptions></div> <div id=temprature4 class=tempratures> 20 <div id=min-temp4 class=min-temps></div> <div id=max-temp4 class=max-temps></div> </div> <div id=date4 calss=dates></div> </div> <div id=day-weather5 class=day-weathers> <img id=image5 class=images src=https://www.weatherbit.io/static/img/icons/r01d.png /> <div id=description5 class=descriptions></div> <div id=temprature5 class=tempratures> 20 <div id=min-temp5 class=min-temps></div> <div id=max-temp5 class=max-temps></div> </div> <div id=date5 calss=dates></div> </div> </div> </div> </div> </body> <script>"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js")})<\/script> </html> ';e.exports=g},function(e,t,i){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e)}},function(e,t,i){"use strict";i.r(t),t.default=i.p+"b20c29c89f8e142e2506d94ae132109b.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"c4220505e3e88afc931e860c0519b03b.png"},function(e,t,a){"use strict";a.r(t),a.d(t,"checkingInput",(function(){return d})),a.d(t,"updateUI",(function(){return n})),a.d(t,"getData",(function(){return r}));a(8),a(9),a(10);const d=(e,t,i,a)=>0===e.length||0===t.length||""==i||""==a?(alert("Please fill up all values !"),"hello"):"hello",n=async function(){const e=document.getElementById("date"),t=document.getElementById("temp"),a=document.getElementById("content"),d=document.getElementById("apiIcon"),n=document.getElementById("description"),s=document.getElementById("location"),c=document.getElementById("population"),r=document.querySelector(".catch"),o=document.getElementById("image"),l=document.getElementById("countryImg"),m=document.getElementById("weather-forecast"),p=document.getElementById("flight"),u=document.getElementById("spinner"),g=document.getElementById("left-arrow"),v=document.getElementById("right-arrow");let y=await Client.getData("http://localhost:8000/projectData");var f;f=y.Difference_In_Days,p.textContent=null==f?"please input 2 dates":`duration : ${f} days`,e.textContent=y.date,t.textContent=y.temp,a.textContent=y.content,c.textContent=y.population+" person",d.src=`http://openweathermap.org/img/wn/${y.weatherIcon}@2x.png`,n.textContent=y.weatherDescreption,s.textContent=`${y.toponymName} , ${y.countryName}`,l.src=y.picture,function(){if(y.iconW.length>1)for(let e=0;e<6;e++){let t=document.getElementById("image"+e),i=document.getElementById("description"+e),a=document.getElementById("temprature"+e),d=document.getElementById("min-temp"+e),n=document.getElementById("max-temp"+e),s=document.getElementById("date"+e),c=document.getElementById("day-weather"+e);t.style.display="block",t.src=`https://www.weatherbit.io/static/img/icons/${y.iconW[e]}.png`,c.style.display="block",i.textContent=y.description[e],a.firstChild.textContent=y.tempW[e],d.textContent=y.low_temp[e],n.textContent=y.high_temp[e],s.textContent=y.dateW[e],console.log(a.childNodes)}else{let e=document.getElementById("temprature0"),t=document.getElementById("min-temp0"),a=document.getElementById("max-temp0"),d=document.getElementById("date0");for(e.firstChild.textContent=y.tempW[0],t.textContent=y.low_temp[0],a.textContent=y.high_temp[0],d.textContent=y.dateW[0],i=1;i<6;i++){let e=document.getElementById("image"+i),t=document.getElementById("day-weather"+i);e.style.display="none",t.style.display="none"}}}(),u.className="spinHide",r.classList.add("displayData"),o.classList.add("displayData"),m.classList.add("displayData"),g.classList.add("displayData"),v.classList.add("displayData")},s="17818726-135b9c22686762a72f4d3fc35",c=async function(e){try{let t=await fetch(e);return await t.json()}catch(e){console.log("Err:",e)}},r=async function(e){let t=await fetch(e);try{return t.json()}catch(e){console.log(e)}};async function o(e,t){const i=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return await i.json()}document.getElementById("generate").addEventListener("click",(async function(){const e=document.getElementById("city").value,t=document.getElementById("feelings").value,i=document.getElementById("travel-start").value;let a=new Date(i);a.setDate(a.getDate()+1);let d=a.getFullYear()+"-"+parseInt(a.getMonth()+1)+"-"+a.getDate();const n=document.getElementById("travel-end").value;let r=new Date(i),l=(new Date(n).getTime()-r.getTime())/864e5;const m=document.querySelector(".catch"),p=document.getElementById("image"),u=document.getElementById("weather-forecast"),g=document.getElementById("spinner"),v=document.getElementById("left-arrow"),y=document.getElementById("right-arrow");m.classList.remove("displayData"),p.classList.remove("displayData"),u.classList.remove("displayData"),v.classList.remove("displayData"),y.classList.remove("displayData"),g.className="spin";const f=`http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(e)}&APPID=845f1306cd70bf5f63240a3f37034a6d`,h=`http://api.geonames.org/searchJSON?q=${encodeURIComponent(e)}&maxRows=10&username=ahmadhakeem`,w="https://pixabay.com/api/?key="+s+"&q="+e+" city&image_type=photo",b=`https://api.weatherbit.io/v2.0/history/daily?&city=${e}&start_date=${i}&end_date=${d}&key=c8d642ed77854137bfd4e4df4e629026`,I=`https://api.weatherbit.io/v2.0/forecast/daily?&city=${e}&key=c8d642ed77854137bfd4e4df4e629026`;Client.checkingInput(e,t,i,n);let E=await c(f),x=await c(h),B=await c(w);const D=`http://api.geonames.org/findNearbyPlaceNameJSON?lat=${x.geonames[0].lat}&lng=${x.geonames[0].lng}&username=ahmadhakeem`;let C=await c(D);const _=Math.floor(new Date(i).getTime()/1e3),N=new Date;let k=[],L=[],M=[],$=[],j=[],S=[];if(_<Math.floor(new Date(N.getFullYear()+"-"+parseInt(N.getMonth()+1)+"-"+N.getDate()).getTime()/1e3)){var O=await c(b);S[0]=O.data[0].datetime,k[0]=O.data[0].min_temp,L[0]=O.data[0].max_temp,M[0]=O.data[0].temp}else{O=await c(I);for(let e=0;e<6;e++)S[e]=O.data[e+1].datetime,k[e]=O.data[e+1].low_temp,L[e]=O.data[e+1].high_temp,M[e]=O.data[e+1].temp,$[e]=O.data[e+1].weather.description,j[e]=O.data[e+1].weather.icon}let W=Math.floor(E.main.temp-273),P=E.wind.speed,T=E.name,q=E.weather[0].description,U=E.weather[0].icon,R=B.hits[Math.floor(Math.random()*(B.hits.length-1)+1)].largeImageURL,{countryName:F,toponymName:G,population:H,distance:J}=C.geonames[0],Y=new Date;const A={date:`${Y.getDate()}.${Y.getMonth()+1}.${Y.getFullYear()}`,temp:W,content:t,windSpeed:P,cityName:T,weatherDescreption:q,weatherIcon:U,picture:R,countryName:F,toponymName:G,population:H,distance:J,low_temp:k,high_temp:L,tempW:M,description:$,iconW:j,dateW:S,Difference_In_Days:l};await o("http://localhost:8000/projectData",A),Client.updateUI()}));const l=async function(){const e=document.getElementById("city").value,t="https://pixabay.com/api/?key="+s+"&q="+e+" city&image_type=photo";let i=await c(t),a={picture:i.hits[Math.floor(Math.random()*(i.hits.length-1)+1)].largeImageURL};await o("http://localhost:8000/photo",a);Client.updateUI()},m=document.getElementById("right-arrow"),p=document.getElementById("left-arrow");m.addEventListener("click",l),p.addEventListener("click",l);a(1),a(0),a(3),a(4),a.p,a(2),a(5),a(6),a(7)}]);
//# sourceMappingURL=main.js.map