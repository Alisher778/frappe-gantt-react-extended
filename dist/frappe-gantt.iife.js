var FrappeGanttReact=function(t,e){"use strict";var s="default"in e?e.default:e,i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])})(t,e)};const n={en:["January","February","March","April","May","June","July","August","September","October","November","December"],es:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],ru:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],ptBr:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],fr:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],tr:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],zh:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]};var a={parse(t,e="-",s=/[.:]/){if(t instanceof Date)return t;if("string"==typeof t){let i,n;const a=t.split(" ");i=a[0].split(e).map(t=>parseInt(t,10)),n=a[1]&&a[1].split(s),i[1]=i[1]-1;let o=i;return n&&n.length&&(4==n.length&&(n[3]="0."+n[3],n[3]=1e3*parseFloat(n[3])),o=o.concat(n)),new Date(...o)}},to_string(t,e=!1){if(!(t instanceof Date))throw new TypeError("Invalid argument type");const s=this.get_date_values(t).map((t,e)=>(1===e&&(t+=1),o(t+"",6===e?3:2,"0"))),i=`${s[0]}-${s[1]}-${s[2]}`,n=`${s[3]}:${s[4]}:${s[5]}.${s[6]}`;return i+(e?" "+n:"")},format(t,e="YYYY-MM-DD HH:mm:ss.SSS",s="en"){const i=this.get_date_values(t).map(t=>o(t,2,0)),a={YYYY:i[0],MM:o(+i[1]+1,2,0),DD:i[2],HH:i[3],mm:i[4],ss:i[5],SSS:i[6],D:i[2],MMMM:n[s][+i[1]],MMM:n[s][+i[1]]};let r=e;const h=[];return Object.keys(a).sort((t,e)=>e.length-t.length).forEach(t=>{r.includes(t)&&(r=r.replace(t,`$${h.length}`),h.push(a[t]))}),h.forEach((t,e)=>{r=r.replace(`$${e}`,t)}),r},diff(t,e,s="day"){let i,n,a,o,r,h,p;return p=(h=(r=(a=(o=(n=(i=t-e)/1e3)/60)/60)/24)/30)/12,s.endsWith("s")||(s+="s"),Math.floor({milliseconds:i,seconds:n,minutes:o,hours:a,days:r,months:h,years:p}[s])},today(){const t=this.get_date_values(new Date).slice(0,3);return new Date(...t)},now:()=>new Date,add(t,e,s){e=parseInt(e,10);const i=[t.getFullYear()+("year"===s?e:0),t.getMonth()+("month"===s?e:0),t.getDate()+("day"===s?e:0),t.getHours()+("hour"===s?e:0),t.getMinutes()+("minute"===s?e:0),t.getSeconds()+("second"===s?e:0),t.getMilliseconds()+("millisecond"===s?e:0)];return new Date(...i)},start_of(t,e){const s={year:6,month:5,day:4,hour:3,minute:2,second:1,millisecond:0};function i(t){const i=s[e];return s[t]<=i}const n=[t.getFullYear(),i("year")?0:t.getMonth(),i("month")?1:t.getDate(),i("day")?0:t.getHours(),i("hour")?0:t.getMinutes(),i("minute")?0:t.getSeconds(),i("second")?0:t.getMilliseconds()];return new Date(...n)},clone(t){return new Date(...this.get_date_values(t))},get_date_values:t=>[t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()],get_days_in_month(t){const e=[31,28,31,30,31,30,31,31,30,31,30,31],s=t.getMonth();if(1!==s)return e[s];const i=t.getFullYear();return i%4==0&&i%100!=0||i%400==0?29:28}};function o(t,e,s){return t+="",e>>=0,s=String(void 0!==s?s:" "),t.length>e?String(t):((e-=t.length)>s.length&&(s+=s.repeat(e/s.length)),s.slice(0,e)+String(t))}function r(t,e){return"string"==typeof t?(e||document).querySelector(t):t||null}function h(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg",t);for(let t in e)if("append_to"===t){e.append_to.appendChild(s)}else"innerHTML"===t?s.innerHTML=e.innerHTML:s.setAttribute(t,e[t]);return s}function p(t,e,s,i){const n=function(t,e,s,i,n="0.4s",a="0.1s"){const o=t.querySelector("animate");if(o)return r.attr(o,{attributeName:e,from:s,to:i,dur:n,begin:"click + "+a}),t;const p=h("animate",{attributeName:e,from:s,to:i,dur:n,begin:a,calcMode:"spline",values:s+";"+i,keyTimes:"0; 1",keySplines:(d="ease-out",{ease:".25 .1 .25 1",linear:"0 0 1 1","ease-in":".42 0 1 1","ease-out":"0 0 .58 1","ease-in-out":".42 0 .58 1"}[d])});var d;return t.appendChild(p),t}(t,e,s,i);if(n===t){const t=document.createEvent("HTMLEvents");t.initEvent("click",!0,!0),t.eventName="click",n.dispatchEvent(t)}}r.on=((t,e,s,i)=>{i?r.delegate(t,e,s,i):(i=s,r.bind(t,e,i))}),r.off=((t,e,s)=>{t.removeEventListener(e,s)}),r.bind=((t,e,s)=>{e.split(/\s+/).forEach(function(e){t.addEventListener(e,s)})}),r.delegate=((t,e,s,i)=>{t.addEventListener(e,function(t){const e=t.target.closest(s);e&&(t.delegatedTarget=e,i.call(this,t,e))})}),r.closest=((t,e)=>e?e.matches(t)?e:r.closest(t,e.parentNode):null),r.attr=((t,e,s)=>{if(!s&&"string"==typeof e)return t.getAttribute(e);if("object"!=typeof e)t.setAttribute(e,s);else for(let s in e)r.attr(t,s,e[s])});class d{constructor(t,e){this.set_defaults(t,e),this.prepare(),this.draw(),this.bind()}set_defaults(t,e){this.action_completed=!1,this.gantt=t,this.task=e}prepare(){this.prepare_values(),this.prepare_helpers()}prepare_values(){this.invalid=this.task.invalid,this.height=this.gantt.options.bar_height,this.x=this.compute_x(),this.y=this.compute_y(),this.corner_radius=this.gantt.options.bar_corner_radius,this.duration=a.diff(this.task._end,this.task._start,"hour")/this.gantt.options.step,this.width=this.gantt.options.column_width*this.duration,this.progress_width=this.gantt.options.column_width*this.duration*(this.task.progress/100)||0,this.group=h("g",{class:"bar-wrapper "+(this.task.custom_class||""),"data-id":this.task.id}),this.bar_group=h("g",{class:"bar-group",append_to:this.group}),this.handle_group=h("g",{class:"handle-group",append_to:this.group})}prepare_helpers(){SVGElement.prototype.getX=function(){return+this.getAttribute("x")},SVGElement.prototype.getY=function(){return+this.getAttribute("y")},SVGElement.prototype.getWidth=function(){return+this.getAttribute("width")},SVGElement.prototype.getHeight=function(){return+this.getAttribute("height")},SVGElement.prototype.getEndX=function(){return this.getX()+this.getWidth()}}draw(){this.draw_bar(),this.draw_progress_bar(),this.draw_label(),this.draw_resize_handles()}draw_bar(){this.$bar=h("rect",{x:this.x,y:this.y,width:this.width,height:this.height,rx:this.corner_radius,ry:this.corner_radius,class:"bar",append_to:this.bar_group}),p(this.$bar,"width",0,this.width),this.invalid&&this.$bar.classList.add("bar-invalid")}draw_progress_bar(){this.invalid||(this.$bar_progress=h("rect",{x:this.x,y:this.y,width:this.progress_width,height:this.height,rx:this.corner_radius,ry:this.corner_radius,class:"bar-progress",append_to:this.bar_group}),p(this.$bar_progress,"width",0,this.progress_width))}draw_label(){h("text",{x:this.x+this.width/2,y:this.y+this.height/2,innerHTML:this.task.name,class:"bar-label",append_to:this.bar_group}),requestAnimationFrame(()=>this.update_label_position())}draw_resize_handles(){if(this.invalid)return;const t=this.$bar;this.gantt.options.draggable&&(h("rect",{x:t.getX()+t.getWidth()-9,y:t.getY()+1,width:8,height:this.height-2,rx:this.corner_radius,ry:this.corner_radius,class:"handle right",append_to:this.handle_group}),h("rect",{x:t.getX()+1,y:t.getY()+1,width:8,height:this.height-2,rx:this.corner_radius,ry:this.corner_radius,class:"handle left",append_to:this.handle_group}),this.task.progress&&this.task.progress<100&&(this.$handle_progress=h("polygon",{points:this.get_progress_polygon_points().join(","),class:"handle progress",append_to:this.handle_group})))}get_progress_polygon_points(){const t=this.$bar_progress;return[t.getEndX()-5,t.getY()+t.getHeight(),t.getEndX()+5,t.getY()+t.getHeight(),t.getEndX(),t.getY()+t.getHeight()-8.66]}bind(){this.invalid||this.setup_click_event()}setup_click_event(){r.on(this.group,"focus "+this.gantt.options.popup_trigger,t=>{this.action_completed||(this.show_popup(),this.gantt.unselect_all(),this.group.classList.add("active"))}),r.on(this.group,"dblclick",t=>{this.action_completed||this.gantt.trigger_event("click",[this.task])})}show_popup(){if(this.gantt.bar_being_dragged)return;const t=a.format(this.task._start,"MMM D",this.gantt.options.language)+" - "+a.format(a.add(this.task._end,-1,"second"),"MMM D",this.gantt.options.language);this.gantt.show_popup({target_element:this.$bar,title:this.task.name,subtitle:t,task:this.task})}update_bar_position({x:t=null,width:e=null}){const s=this.$bar;if(t){if(!this.task.dependencies.map(t=>this.gantt.get_bar(t).$bar.getX()).reduce((e,s)=>t>=s,t))return void(e=null);this.update_attr(s,"x",t)}e&&e>=this.gantt.options.column_width&&this.update_attr(s,"width",e),this.update_label_position(),this.update_handle_position(),this.update_progressbar_position(),this.update_arrow_position()}date_changed(){let t=!1;const{new_start_date:e,new_end_date:s}=this.compute_start_end_date();Number(this.task._start)!==Number(e)&&(t=!0,this.task._start=e),Number(this.task._end)!==Number(s)&&(t=!0,this.task._end=s),t&&this.gantt.trigger_event("date_change",[this.task,e,a.add(s,-1,"second")])}progress_changed(){const t=this.compute_progress();this.task.progress=t,this.gantt.trigger_event("progress_change",[this.task,t])}set_action_completed(){this.action_completed=!0,setTimeout(()=>this.action_completed=!1,1e3)}compute_start_end_date(){const t=this.$bar,e=t.getX()/this.gantt.options.column_width,s=a.add(this.gantt.gantt_start,e*this.gantt.options.step,"hour"),i=t.getWidth()/this.gantt.options.column_width;return{new_start_date:s,new_end_date:a.add(s,i*this.gantt.options.step,"hour")}}compute_progress(){const t=this.$bar_progress.getWidth()/this.$bar.getWidth()*100;return parseInt(t,10)}compute_x(){const{step:t,column_width:e}=this.gantt.options,s=this.task._start,i=this.gantt.gantt_start;let n=a.diff(s,i,"hour")/t*e;if(this.gantt.view_is("Month")){n=a.diff(s,i,"day")*e/30}return n}compute_y(){return this.gantt.options.header_height+this.gantt.options.padding+this.task._index*(this.height+this.gantt.options.padding)}get_snap_position(t){let e,s,i=t;return s=this.gantt.view_is("Week")?i-(e=t%(this.gantt.options.column_width/7))+(e<this.gantt.options.column_width/14?0:this.gantt.options.column_width/7):this.gantt.view_is("Month")?i-(e=t%(this.gantt.options.column_width/30))+(e<this.gantt.options.column_width/60?0:this.gantt.options.column_width/30):i-(e=t%this.gantt.options.column_width)+(e<this.gantt.options.column_width/2?0:this.gantt.options.column_width)}update_attr(t,e,s){return s=+s,isNaN(s)||t.setAttribute(e,s),t}update_progressbar_position(){this.$bar_progress.setAttribute("x",this.$bar.getX()),this.$bar_progress.setAttribute("width",this.$bar.getWidth()*(this.task.progress/100))}update_label_position(){const t=this.$bar,e=this.group.querySelector(".bar-label");e.getBBox().width>t.getWidth()?(e.classList.add("big"),e.setAttribute("x",t.getX()+t.getWidth()+5)):(e.classList.remove("big"),e.setAttribute("x",t.getX()+t.getWidth()/2))}update_handle_position(){const t=this.$bar;this.handle_group.querySelector(".handle.left").setAttribute("x",t.getX()+1),this.handle_group.querySelector(".handle.right").setAttribute("x",t.getEndX()-9);const e=this.group.querySelector(".handle.progress");e&&e.setAttribute("points",this.get_progress_polygon_points())}update_arrow_position(){this.arrows=this.arrows||[];for(let t of this.arrows)t.update()}}class l{constructor(t,e,s){this.gantt=t,this.from_task=e,this.to_task=s,this.calculate_path(),this.draw()}calculate_path(){let t=this.from_task.$bar.getX()+this.from_task.$bar.getWidth()/2;const e=()=>this.to_task.$bar.getX()<t+this.gantt.options.padding&&t>this.from_task.$bar.getX()+this.gantt.options.padding;for(;e();)t-=10;const s=this.gantt.options.header_height+this.gantt.options.bar_height+(this.gantt.options.padding+this.gantt.options.bar_height)*this.from_task.task._index+this.gantt.options.padding,i=this.to_task.$bar.getX()-this.gantt.options.padding/2,n=this.gantt.options.header_height+this.gantt.options.bar_height/2+(this.gantt.options.padding+this.gantt.options.bar_height)*this.to_task.task._index+this.gantt.options.padding,a=this.from_task.task._index>this.to_task.task._index,o=this.gantt.options.arrow_curve,r=a?1:0,h=a?-o:o,p=a?n+this.gantt.options.arrow_curve:n-this.gantt.options.arrow_curve;if(this.path=`\n            M ${t} ${s}\n            V ${p}\n            a ${o} ${o} 0 0 ${r} ${o} ${h}\n            L ${i} ${n}\n            m -5 -5\n            l 5 5\n            l -5 5`,this.to_task.$bar.getX()<this.from_task.$bar.getX()+this.gantt.options.padding){const e=this.gantt.options.padding/2-o,a=this.to_task.$bar.getY()+this.to_task.$bar.getHeight()/2-h,p=this.to_task.$bar.getX()-this.gantt.options.padding;this.path=`\n                M ${t} ${s}\n                v ${e}\n                a ${o} ${o} 0 0 1 -${o} ${o}\n                H ${p}\n                a ${o} ${o} 0 0 ${r} -${o} ${h}\n                V ${a}\n                a ${o} ${o} 0 0 ${r} ${o} ${h}\n                L ${i} ${n}\n                m -5 -5\n                l 5 5\n                l -5 5`}}draw(){this.element=h("path",{d:this.path,"data-from":this.from_task.task.id,"data-to":this.to_task.task.id})}update(){this.calculate_path(),this.element.setAttribute("d",this.path)}}class g{constructor(t,e){this.parent=t,this.custom_html=e,this.make()}make(){this.parent.innerHTML='\n            <div class="title"></div>\n            <div class="subtitle"></div>\n            <div class="pointer"></div>\n        ',this.hide(),this.title=this.parent.querySelector(".title"),this.subtitle=this.parent.querySelector(".subtitle"),this.pointer=this.parent.querySelector(".pointer")}show(t){if(!t.target_element)throw new Error("target_element is required to show popup");t.position||(t.position="left");const e=t.target_element;if(this.custom_html){let e=this.custom_html(t.task);e+='<div class="pointer"></div>',this.parent.innerHTML=e,this.pointer=this.parent.querySelector(".pointer")}else this.title.innerHTML=t.title,this.subtitle.innerHTML=t.subtitle,this.parent.style.width=this.parent.clientWidth+"px";let s;e instanceof HTMLElement?s=e.getBoundingClientRect():e instanceof SVGElement&&(s=t.target_element.getBBox()),console.log(s),console.log("------",t),"left"===t.position&&(this.parent.style.left=s.x+(s.width+10)+"px",this.parent.style.top=s.y+"px",this.pointer.style.transform="rotateZ(90deg)",this.pointer.style.left="-7px",this.pointer.style.top="2px"),this.parent.style.opacity=1}hide(){this.parent.style.opacity=0}}!function(t,e){void 0===e&&(e={});var s=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===s&&i.firstChild?i.insertBefore(n,i.firstChild):i.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}(".gantt .grid-background{fill:none}.gantt .grid-header{fill:#fff;stroke:#e0e0e0;stroke-width:1.4}.gantt .grid-row{fill:#fff}.gantt .grid-row:nth-child(2n){fill:#f5f5f5}.gantt .row-line{stroke:#ebeff2}.gantt .tick{stroke:#e0e0e0;stroke-width:.2}.gantt .tick.thick{stroke-width:.4}.gantt .today-highlight{fill:#fcf8e3;opacity:.5}.gantt .arrow{fill:none;stroke:#666;stroke-width:1.4}.gantt .bar{fill:#b8c2cc;stroke:#8d99a6;stroke-width:0;transition:stroke-width .3s ease;user-select:none}.gantt .bar-progress{fill:#a3a3ff}.gantt .bar-invalid{fill:transparent;stroke:#8d99a6;stroke-width:1;stroke-dasharray:5}.gantt .bar-invalid~.bar-label{fill:#555}.gantt .bar-label{fill:#fff;dominant-baseline:central;text-anchor:middle;font-size:12px;font-weight:lighter}.gantt .bar-label.big{fill:#555;text-anchor:start}.gantt .handle{fill:#ddd;cursor:ew-resize;opacity:0;visibility:hidden;transition:opacity .3s ease}.gantt .bar-wrapper{cursor:pointer;outline:none}.gantt .bar-wrapper:hover .bar{fill:#a9b5c1}.gantt .bar-wrapper:hover .bar-progress{fill:#8a8aff}.gantt .bar-wrapper:hover .handle{visibility:visible;opacity:1}.gantt .bar-wrapper.active .bar{fill:#a9b5c1}.gantt .bar-wrapper.active .bar-progress{fill:#8a8aff}.gantt .lower-text,.gantt .upper-text{font-size:12px;text-anchor:middle}.gantt .upper-text{fill:#555}.gantt .lower-text{fill:#333}.gantt .hide{display:none}.gantt-container{position:relative;overflow:auto;font-size:12px}.gantt-container .popup-wrapper{position:absolute;top:0;left:0;background:rgba(0,0,0,.8);padding:0;color:#959da5;border-radius:3px}.gantt-container .popup-wrapper .title{border-bottom:3px solid #a3a3ff;padding:10px}.gantt-container .popup-wrapper .subtitle{padding:10px;color:#dfe2e5}.gantt-container .popup-wrapper .pointer{position:absolute;height:5px;margin:0 0 0 -5px;border:5px solid transparent;border-top-color:rgba(0,0,0,.8)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mcmFwcGUtZ2FudHQtZXh0ZW5kZWQvc3JjL2dhbnR0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUEsd0JBRUUsU0FBVSxDQUZaLG9CQUtFLFNBQWEsQ0FDYixjQWhCb0IsQ0FpQnBCLGdCQUFpQixDQVBuQixpQkFVRSxTQUFhLENBVmYsK0JBYUUsWUF0QmdCLENBU2xCLGlCQWdCRSxjQXhCMEIsQ0FRNUIsYUFtQkUsY0E3Qm9CLENBOEJwQixlQUFpQixDQXBCbkIsbUJBc0JHLGVBQWlCLENBdEJwQix3QkEwQkUsWUFqQ29CLENBa0NwQixVQUFZLENBM0JkLGNBK0JFLFNBQVUsQ0FDVixXQXRDZSxDQXVDZixnQkFBaUIsQ0FqQ25CLFlBcUNFLFlBakRpQixDQWtEakIsY0FqRGtCLENBa0RsQixjQUFlLENBQ2YsZ0NBQWlDLENBQ2pDLGdCQUFpQixDQXpDbkIscUJBNENFLFlBL0NZLENBR2Qsb0JBK0NFLGdCQUFpQixDQUNqQixjQTNEa0IsQ0E0RGxCLGNBQWUsQ0FDZixrQkFBbUIsQ0FsRHJCLCtCQXFERyxTQTFEYyxDQUtqQixrQkF5REUsU0FBVSxDQUNWLHlCQUEwQixDQUMxQixrQkFBbUIsQ0FDbkIsY0FBZSxDQUNmLG1CQUFvQixDQTdEdEIsc0JBZ0VHLFNBckVjLENBc0VkLGlCQUFrQixDQWpFckIsZUFzRUUsU0F4RWlCLENBeUVqQixnQkFBaUIsQ0FDakIsU0FBVSxDQUNWLGlCQUFrQixDQUNsQiwyQkFBNEIsQ0ExRTlCLG9CQThFRSxjQUFlLENBQ2YsWUFBYSxDQS9FZiwrQkFtRkksWUFBMkIsQ0FuRi9CLHdDQXVGSSxZQUFzQixDQXZGMUIsa0NBMkZJLGtCQUFtQixDQUNuQixTQUFVLENBNUZkLGdDQWtHSSxZQUEyQixDQWxHL0IseUNBc0dJLFlBQXNCLENBdEcxQixzQ0E0R0UsY0FBZSxDQUNmLGtCQUFtQixDQTdHckIsbUJBZ0hFLFNBckhlLENBS2pCLG1CQW1IRSxTQXZIZSxDQUlqQixhQXVIRSxZQUFhLENBSWYsaUJBQ0MsaUJBQWtCLENBQ2xCLGFBQWMsQ0FDZCxjQUFlLENBSGhCLGdDQU1FLGlCQUFrQixDQUNsQixLQUFNLENBQ04sTUFBTyxDQUNQLHlCQUE4QixDQUM5QixTQUFVLENBQ1YsYUFBYyxDQUNkLGlCQUFrQixDQVpwQix1Q0FlRywrQkE3SVcsQ0E4SVgsWUFBYSxDQWhCaEIsMENBb0JHLFlBQWEsQ0FDYixhQUFjLENBckJqQix5Q0F5QkcsaUJBQWtCLENBQ2xCLFVBQVcsQ0FDWCxpQkFBa0IsQ0FFbEIsNEJBQW9DLENBQXBDLCtCQUFvQyIsImZpbGUiOiJnYW50dC5zY3NzIn0= */");const _={QUARTER_DAY:"Quarter Day",HALF_DAY:"Half Day",DAY:"Day",WEEK:"Week",MONTH:"Month",YEAR:"Year"};class u{constructor(t,e,s){this.setup_wrapper(t),this.setup_options(s),this.setup_tasks(e),this.change_view_mode(),this.bind_events()}setup_wrapper(t){let e,s;if("string"==typeof t&&(t=document.querySelector(t)),t instanceof HTMLElement)s=t,e=t.querySelector("svg");else{if(!(t instanceof SVGElement))throw new TypeError("Frappé Gantt only supports usage of a string CSS selector, HTML DOM element or SVG DOM element for the 'element' parameter");e=t}e?(this.$svg=e,this.$svg.classList.add("gantt")):this.$svg=h("svg",{append_to:s,class:"gantt"}),this.$container=document.createElement("div"),this.$container.classList.add("gantt-container"),this.$svg.parentElement.appendChild(this.$container),this.$container.appendChild(this.$svg),this.popup_wrapper=document.createElement("div"),this.popup_wrapper.classList.add("popup-wrapper"),this.$container.appendChild(this.popup_wrapper)}setup_options(t){const e={header_height:50,column_width:30,step:24,view_modes:[...Object.values(_)],bar_height:20,bar_corner_radius:3,arrow_curve:5,padding:18,view_mode:"Day",date_format:"YYYY-MM-DD",popup_trigger:"mouseover",custom_popup_html:null,language:"en",draggable:!1,hasArrows:!1};this.options=Object.assign({},e,t)}setup_tasks(t){this.tasks=t.map((t,e)=>{if(t._start=a.parse(t.start),t._end=a.parse(t.end),a.diff(t._end,t._start,"year")>10&&(t.end=null),t._index=e,!t.start&&!t.end){const e=a.today();t._start=e,t._end=a.add(e,2,"day")}if(!t.start&&t.end&&(t._start=a.add(t._end,-2,"day")),t.start&&!t.end&&(t._end=a.add(t._start,2,"day")),a.get_date_values(t._end).slice(3).every(t=>0===t)&&(t._end=a.add(t._end,24,"hour")),t.start&&t.end||(t.invalid=!0),"string"==typeof t.dependencies||!t.dependencies){let e=[];t.dependencies&&(e=t.dependencies.split(",").map(t=>t.trim()).filter(t=>t)),t.dependencies=e}return t.id||(t.id=function(t){return t.name+"_"+Math.random().toString(36).slice(2,12)}(t)),t}),this.setup_dependencies()}setup_dependencies(){this.dependency_map={};for(let t of this.tasks)for(let e of t.dependencies)this.dependency_map[e]=this.dependency_map[e]||[],this.dependency_map[e].push(t.id)}refresh(t){this.setup_tasks(t),this.change_view_mode()}change_view_mode(t=this.options.view_mode){this.update_view_scale(t),this.setup_dates(),this.render(),this.trigger_event("view_change",[t])}update_view_scale(t){this.options.view_mode=t,t===_.DAY?(this.options.step=24,this.options.column_width=38):t===_.HALF_DAY?(this.options.step=12,this.options.column_width=38):t===_.QUARTER_DAY?(this.options.step=6,this.options.column_width=38):t===_.WEEK?(this.options.step=168,this.options.column_width=140):t===_.MONTH?(this.options.step=720,this.options.column_width=120):t===_.YEAR&&(this.options.step=8760,this.options.column_width=120)}setup_dates(){this.setup_gantt_dates(),this.setup_date_values()}setup_gantt_dates(){this.gantt_start=this.gantt_end=null;for(let t of this.tasks)(!this.gantt_start||t._start<this.gantt_start)&&(this.gantt_start=t._start),(!this.gantt_end||t._end>this.gantt_end)&&(this.gantt_end=t._end);this.gantt_start=a.start_of(this.gantt_start,"day"),this.gantt_end=a.start_of(this.gantt_end,"day"),this.view_is([_.QUARTER_DAY,_.HALF_DAY])?(this.gantt_start=a.add(this.gantt_start,-7,"day"),this.gantt_end=a.add(this.gantt_end,7,"day")):this.view_is(_.MONTH)?(this.gantt_start=a.start_of(this.gantt_start,"year"),this.gantt_end=a.add(this.gantt_end,1,"year")):this.view_is(_.YEAR)?(this.gantt_start=a.add(this.gantt_start,-2,"year"),this.gantt_end=a.add(this.gantt_end,2,"year")):(this.gantt_start=a.add(this.gantt_start,-1,"month"),this.gantt_end=a.add(this.gantt_end,1,"month"))}setup_date_values(){this.dates=[];let t=null;for(;null===t||t<this.gantt_end;)t=t?this.view_is(_.YEAR)?a.add(t,1,"year"):this.view_is(_.MONTH)?a.add(t,1,"month"):a.add(t,this.options.step,"hour"):a.clone(this.gantt_start),this.dates.push(t)}bind_events(){this.bind_grid_click(),this.bind_bar_events()}render(){this.clear(),this.setup_layers(),this.make_grid(),this.make_dates(),this.make_bars(),this.make_arrows(),this.map_arrows_on_bars(),this.set_width(),this.set_scroll_position()}setup_layers(){this.layers={};const t=["grid","date","arrow","progress","bar","details"];for(let e of t)this.layers[e]=h("g",{class:e,append_to:this.$svg})}make_grid(){this.make_grid_background(),this.make_grid_rows(),this.make_grid_header(),this.make_grid_ticks(),this.make_grid_highlights()}make_grid_background(){const t=this.dates.length*this.options.column_width,e=this.options.header_height+this.options.padding+(this.options.bar_height+this.options.padding)*this.tasks.length;h("rect",{x:0,y:0,width:t,height:e,class:"grid-background",append_to:this.layers.grid}),r.attr(this.$svg,{height:e+this.options.padding+100,width:"100%"})}make_grid_rows(){const t=h("g",{append_to:this.layers.grid}),e=h("g",{append_to:this.layers.grid}),s=this.dates.length*this.options.column_width,i=this.options.bar_height+this.options.padding;let n=this.options.header_height+this.options.padding/2;for(let a of this.tasks)h("rect",{x:0,y:n,width:s,height:i,class:"grid-row",append_to:t}),h("line",{x1:0,y1:n+i,x2:s,y2:n+i,class:"row-line",append_to:e}),n+=this.options.bar_height+this.options.padding}make_grid_header(){h("rect",{x:0,y:0,width:this.dates.length*this.options.column_width,height:this.options.header_height+10,class:"grid-header",append_to:this.layers.grid})}make_grid_ticks(){let t=0,e=this.options.header_height+this.options.padding/2,s=(this.options.bar_height+this.options.padding)*this.tasks.length;for(let i of this.dates){let n="tick";this.view_is(_.DAY)&&1===i.getDate()&&(n+=" thick"),this.view_is(_.WEEK)&&i.getDate()>=1&&i.getDate()<8&&(n+=" thick"),this.view_is(_.MONTH)&&(i.getMonth()+1)%3==0&&(n+=" thick"),h("path",{d:`M ${t} ${e} v ${s}`,class:n,append_to:this.layers.grid}),this.view_is(_.MONTH)?t+=a.get_days_in_month(i)*this.options.column_width/30:t+=this.options.column_width}}make_grid_highlights(){if(this.view_is(_.DAY)){h("rect",{x:a.diff(a.today(),this.gantt_start,"hour")/this.options.step*this.options.column_width,y:0,width:this.options.column_width,height:(this.options.bar_height+this.options.padding)*this.tasks.length+this.options.header_height+this.options.padding/2,class:"today-highlight",append_to:this.layers.grid})}}make_dates(){const t=(new Date).getDate();for(let e of this.get_dates_to_draw()){if(h("text",this.view_is(_.DAY)&&(e.lower_text===t||e.upper_text===t)?{x:e.lower_x,y:e.lower_y,innerHTML:e.lower_text,class:"today-date",append_to:this.layers.date}:{x:e.lower_x,y:e.lower_y,innerHTML:e.lower_text,class:"lower-text",append_to:this.layers.date}),e.upper_text){const t=h("text",{x:e.upper_x,y:e.upper_y,innerHTML:e.upper_text,class:"upper-text",append_to:this.layers.date});t.getBBox().x2>this.layers.grid.getBBox().width&&t.remove()}}}get_dates_to_draw(){let t=null;return this.dates.map((e,s)=>{const i=this.get_date_info(e,t,s);return t=e,i})}get_date_info(t,e,s){e||(e=a.add(t,1,"year"));const i={"Quarter Day_lower":a.format(t,"HH",this.options.language),"Half Day_lower":a.format(t,"HH",this.options.language),Day_lower:t.getDate()!==e.getDate()?a.format(t,"D",this.options.language):"",Week_lower:t.getMonth()!==e.getMonth()?a.format(t,"D MMM",this.options.language):a.format(t,"D",this.options.language),Month_lower:a.format(t,"MMMM",this.options.language),Year_lower:a.format(t,"YYYY",this.options.language),"Quarter Day_upper":t.getDate()!==e.getDate()?a.format(t,"D MMM",this.options.language):"","Half Day_upper":t.getDate()!==e.getDate()?t.getMonth()!==e.getMonth()?a.format(t,"D MMM",this.options.language):a.format(t,"D",this.options.language):"",Day_upper:t.getMonth()!==e.getMonth()?a.format(t,"MMMM",this.options.language):"",Week_upper:t.getMonth()!==e.getMonth()?a.format(t,"MMMM",this.options.language):"",Month_upper:t.getFullYear()!==e.getFullYear()?a.format(t,"YYYY",this.options.language):"",Year_upper:t.getFullYear()!==e.getFullYear()?a.format(t,"YYYY",this.options.language):""},n={x:s*this.options.column_width,lower_y:this.options.header_height,upper_y:this.options.header_height-25},o={"Quarter Day_lower":4*this.options.column_width/2,"Quarter Day_upper":0,"Half Day_lower":2*this.options.column_width/2,"Half Day_upper":0,Day_lower:this.options.column_width/2,Day_upper:30*this.options.column_width/2,Week_lower:0,Week_upper:4*this.options.column_width/2,Month_lower:this.options.column_width/2,Month_upper:12*this.options.column_width/2,Year_lower:this.options.column_width/2,Year_upper:30*this.options.column_width/2};return{upper_text:i[`${this.options.view_mode}_upper`],lower_text:i[`${this.options.view_mode}_lower`],upper_x:n.x+o[`${this.options.view_mode}_upper`],upper_y:n.upper_y,lower_x:n.x+o[`${this.options.view_mode}_lower`],lower_y:n.lower_y}}make_bars(){this.bars=this.tasks.map(t=>{const e=new d(this,t);return this.layers.bar.appendChild(e.group),e})}make_arrows(){if(this.arrows=[],this.options.hasArrows)for(let t of this.tasks){let e=[];e=t.dependencies.map(e=>{const s=this.get_task(e);if(!s)return;const i=new l(this,this.bars[s._index],this.bars[t._index]);return this.layers.arrow.appendChild(i.element),i}).filter(Boolean),this.arrows=this.arrows.concat(e)}}map_arrows_on_bars(){if(this.options.hasArrows)for(let t of this.bars)t.arrows=this.arrows.filter(e=>e.from_task.task.id===t.task.id||e.to_task.task.id===t.task.id)}set_width(){const t=this.$svg.getBoundingClientRect().width,e=this.$svg.querySelector(".grid .grid-row").getAttribute("width");t<e&&this.$svg.setAttribute("width",e)}set_scroll_position(){const t=this.$svg.parentElement;if(!t)return;const e=a.diff(this.get_oldest_starting_date(),this.gantt_start,"hour")/this.options.step*this.options.column_width-this.options.column_width;t.scrollLeft=e}bind_grid_click(){r.on(this.$svg,this.options.popup_trigger,".grid-row, .grid-header",()=>{this.unselect_all(),this.hide_popup()})}bind_bar_events(){if(this.options.draggable){let t=!1,e=0,s=0,i=!1,n=!1,a=null,o=[];this.bar_being_dragged=null,r.on(this.$svg,"mousedown",".bar-wrapper, .handle",(h,p)=>{const d=r.closest(".bar-wrapper",p);p.classList.contains("left")?i=!0:p.classList.contains("right")?n=!0:p.classList.contains("bar-wrapper")&&(t=!0),d.classList.add("active"),e=h.offsetX,s=h.offsetY;const l=[a=d.getAttribute("data-id"),...this.get_all_dependent_tasks(a)];o=l.map(t=>this.get_bar(t)),this.bar_being_dragged=a,o.forEach(t=>{const e=t.$bar;e.ox=e.getX(),e.oy=e.getY(),e.owidth=e.getWidth(),e.finaldx=0})}),r.on(this.$svg,"mousemove",s=>{if(!(t||i||n))return;const r=s.offsetX-e;s.offsetY;o.forEach(e=>{const s=e.$bar;s.finaldx=this.get_snap_position(r),i?a===e.task.id?e.update_bar_position({x:s.ox+s.finaldx,width:s.owidth-s.finaldx}):e.update_bar_position({x:s.ox+s.finaldx}):n?a===e.task.id&&e.update_bar_position({width:s.owidth+s.finaldx}):t&&e.update_bar_position({x:s.ox+s.finaldx})})}),document.addEventListener("mouseup",e=>{(t||i||n)&&o.forEach(t=>t.group.classList.remove("active")),t=!1,i=!1,n=!1}),r.on(this.$svg,"mouseup",t=>{this.bar_being_dragged=null,o.forEach(t=>{t.$bar.finaldx&&(t.date_changed(),t.set_action_completed())})})}this.bind_bar_progress()}bind_bar_progress(){let t=0,e=0,s=null,i=null,n=null,a=null;r.on(this.$svg,"mousedown",".handle.progress",(o,h)=>{s=!0,t=o.offsetX,e=o.offsetY;const p=r.closest(".bar-wrapper",h).getAttribute("data-id");i=this.get_bar(p),n=i.$bar_progress,a=i.$bar,n.finaldx=0,n.owidth=n.getWidth(),n.min_dx=-n.getWidth(),n.max_dx=a.getWidth()-n.getWidth()}),r.on(this.$svg,"mousemove",e=>{if(!s)return;let a=e.offsetX-t;e.offsetY;a>n.max_dx&&(a=n.max_dx),a<n.min_dx&&(a=n.min_dx);const o=i.$handle_progress;r.attr(n,"width",n.owidth+a),r.attr(o,"points",i.get_progress_polygon_points()),n.finaldx=a}),r.on(this.$svg,"mouseup",()=>{s=!1,n&&n.finaldx&&(i.progress_changed(),i.set_action_completed())})}get_all_dependent_tasks(t){let e=[],s=[t];for(;s.length;){const t=s.reduce((t,e)=>t=t.concat(this.dependency_map[e]),[]);e=e.concat(t),s=t.filter(t=>!s.includes(t))}return e.filter(Boolean)}get_snap_position(t){let e,s,i=t;return s=this.view_is(_.WEEK)?i-(e=t%(this.options.column_width/7))+(e<this.options.column_width/14?0:this.options.column_width/7):this.view_is(_.MONTH)?i-(e=t%(this.options.column_width/30))+(e<this.options.column_width/60?0:this.options.column_width/30):i-(e=t%this.options.column_width)+(e<this.options.column_width/2?0:this.options.column_width)}unselect_all(){[...this.$svg.querySelectorAll(".bar-wrapper")].forEach(t=>{t.classList.remove("active")})}view_is(t){return"string"==typeof t?this.options.view_mode===t:!!Array.isArray(t)&&t.some(t=>this.options.view_mode===t)}get_task(t){return this.tasks.find(e=>e.id===t)}get_bar(t){return this.bars.find(e=>e.task.id===t)}show_popup(t){this.popup||(this.popup=new g(this.popup_wrapper,this.options.custom_popup_html)),this.popup.show(t)}hide_popup(){this.popup&&this.popup.hide()}trigger_event(t,e){this.options["on_"+t]&&this.options["on_"+t].apply(null,e)}get_oldest_starting_date(){return this.tasks.map(t=>t._start).reduce((t,e)=>e<=t?e:t)}clear(){this.$svg.innerHTML=""}}u.VIEW_MODE=_;var c,m=function(){function t(t){void 0===t&&(t={}),this._dependencies=[],this.id="",this.name="",this.start="",this.end="",this._progress=.52,Object.assign(this,t)}return Object.defineProperty(t.prototype,"progress",{get:function(){return this._progress||.52},set:function(t){this._progress=t||.52},enumerable:!0,configurable:!0}),t.prototype.setDependencies=function(t){this._dependencies=Array.isArray(t)?t:t.split(",").map(function(t){return t.trim()})},Object.defineProperty(t.prototype,"dependencies",{get:function(){return this._dependencies},set:function(t){this._dependencies=Array.isArray(t)?t:t.split(",").map(function(t){return t.trim()}).filter(Boolean)},enumerable:!0,configurable:!0}),t}();(c=t.ViewMode||(t.ViewMode={})).QuarterDay="Quarter Day",c.HalfDay="Half Day",c.Day="Day",c.Week="Week",c.Month="Month";var w={viewMode:t.ViewMode.Day,onTasksChange:function(t){},onClick:function(t){},onDateChange:function(t,e,s){},onProgressChange:function(t,e){},onViewChange:function(t){}},f=function(t){function n(){var s=null!==t&&t.apply(this,arguments)||this;return s._target=e.createRef(),s._svg=e.createRef(),s._gantt=null,s.state={viewMode:null,tasks:[],popup_trigger:"click"},s}return function(t,e){function s(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}(n,t),n.getDerivedStateFromProps=function(t,e){return{viewMode:t.viewMode,tasks:t.tasks.map(function(t){return new m(t)})}},n.prototype.componentDidUpdate=function(){this._gantt&&(this._gantt.refresh(this.state.tasks),this._gantt.change_view_mode(this.state.viewMode))},n.prototype.componentDidMount=function(){var t=this;this._gantt=new u(this._svg.current,this.state.tasks,{on_click:this.props.onClick,on_view_change:this.props.onViewChange,on_progress_change:function(e,s){t.props.onProgressChange(e,s),t.props.onTasksChange(t.props.tasks)},on_date_change:function(e,s,i){t.props.onDateChange(e,s,i),t.props.onTasksChange(t.props.tasks)},popup_trigger:this.state.popup_trigger}),this._gantt&&this._gantt.change_view_mode(this.state.viewMode);var e=.5*this._svg.current.clientWidth;this._target.current.scrollLeft=e},n.prototype.render=function(){return s.createElement("div",{style:{overflow:"scroll"},ref:this._target},s.createElement("svg",{ref:this._svg,width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"}))},n.defaultProps=w,n}(s.Component);return t.FrappeGantt=f,t.Task=m,t}({},React);
