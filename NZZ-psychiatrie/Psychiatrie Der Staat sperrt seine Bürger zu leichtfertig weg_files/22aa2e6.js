(window.webpackJsonp=window.webpackJsonp||[]).push([[197,457,493],{167:function(t,e,r){"use strict";r.r(e);var n={name:"InstagramEmbed",props:{data:{type:Object,default:()=>({content:{}})}},head(){if(this.shortcode)return{script:[{hid:"amp-instagram",preserve:"preserve",type:"text/javascript",async:!0,src:"https://cdn.ampproject.org/v0/amp-instagram-0.1.js","custom-element":"amp-instagram"}]}},computed:{shortcode(){try{const t=(this.data.content.instagram.html||this.data.content.instagram).match(/data-instgrm-permalink="https:\/\/www\.instagram\.com\/p\/([^/]+)\//);return!(!t||!t[1])&&t[1]}catch(t){return!1}}}},c=r(1),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.shortcode?r("div",{staticClass:"articlecomponent articlecomponent--narrow"},[r("amp-instagram",{attrs:{"data-shortcode":t.shortcode,"data-captioned":"",width:"400",height:"480",layout:"responsive"}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports},195:function(t,e,r){"use strict";r.r(e);var n={name:"ArticleBarrier",mixins:[r(381).a],props:{data:{type:Object,default:function(){return{}}}}},c=r(1),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"paywall_container"}})])}],!1,null,null,null);e.default=component.exports}}]);