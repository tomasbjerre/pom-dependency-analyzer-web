(function(e){function t(t){for(var r,i,s=t[0],u=t[1],c=t[2],l=0,p=[];l<s.length;l++)i=s[l],a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={"app~d0ae3f07":0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=u;o.push([0,"chunk-vendors~253ae210","chunk-vendors~1c3a2c3f","chunk-vendors~fdc6512a","chunk-vendors~7dcdd765","chunk-vendors~d2305125","chunk-vendors~4a7e9e0b","chunk-vendors~03631906"]),n()})({0:function(e,t,n){e.exports=n("cd49")},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("bb71");n("da64");r["default"].use(a["a"],{iconfont:"md"});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",{attrs:{app:"",fixed:"","scroll-off-screen":""}},[n("v-toolbar",[n("pdaw-toolbar"),n("v-spacer"),n("v-btn",{attrs:{flat:"",href:"https://petstore.swagger.io/?url=https://raw.githubusercontent.com/tomasbjerre/pom-dependency-analyzer-web/master/swagger.yml",target:"_blank"}},[n("span",{staticClass:"mr-2"},[e._v("Swagger")]),n("v-icon",[e._v("open_in_new")])],1),n("v-btn",{attrs:{flat:"",href:"https://github.com/tomasbjerre/pom-dependency-analyzer-web",target:"_blank"}},[n("span",{staticClass:"mr-2"},[e._v("GitHub")]),n("v-icon",[e._v("open_in_new")])],1)],1),n("router-view")],1)],1)},i=[],s=n("d225"),u=n("308d"),c=n("6bb5"),d=n("4e2b"),l=n("9ab4"),p=n("60a3"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[e._v("Pom Dependency Analyzer Web")]),n("br"),n("span",{staticClass:"font-weight-light"},[e._v("\n    "+e._s(e.metadata["number_of_artifacts"])+" artifacts indexed at\n    "+e._s(e.metadata["last_updated"])+"\n  ")])])},h=[],g=n("b0b4"),v=(n("386d"),n("cebc")),b=(n("a481"),n("0b16")),w=n("bc3a"),m=n.n(w),j=n("f28b"),I="https://tomasbjerre.github.io/pom-dependency-analyzer-web/api".replace(/\/+$/,""),O=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m.a;Object(s["a"])(this,e),this.basePath=n,this.axios=r,t&&(this.configuration=t,this.basePath=t.basePath||this.basePath)},y=function(e){function t(e,n){var r;return Object(s["a"])(this,t),r=Object(u["a"])(this,Object(c["a"])(t).call(this,n)),r.field=e,r.name="RequiredError",r}return Object(d["a"])(t,e),t}(Object(j["a"])(Error)),q=function(e){return{getArtifacts:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null===t||void 0===t)throw new y("groupId","Required parameter groupId was null or undefined when calling getArtifacts.");var r,a="/pdaw/groups/{groupId}/artifacts.json".replace("{".concat("groupId","}"),encodeURIComponent(String(t))),o=b["parse"](a,!0);e&&(r=e.baseOptions);var i=Object(v["a"])({method:"GET"},r,n),s={},u={};return o.query=Object(v["a"])({},o.query,u,n.query),delete o.search,i.headers=Object(v["a"])({},s,n.headers),{url:b["format"](o),options:i}},getDependencies:function(t,n,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(null===t||void 0===t)throw new y("groupId","Required parameter groupId was null or undefined when calling getDependencies.");if(null===n||void 0===n)throw new y("artifactId","Required parameter artifactId was null or undefined when calling getDependencies.");if(null===r||void 0===r)throw new y("version","Required parameter version was null or undefined when calling getDependencies.");var o,i="/pdaw/groups/{groupId}/artifacts/{artifactId}/versions/{version}/dependencies.json".replace("{".concat("groupId","}"),encodeURIComponent(String(t))).replace("{".concat("artifactId","}"),encodeURIComponent(String(n))).replace("{".concat("version","}"),encodeURIComponent(String(r))),s=b["parse"](i,!0);e&&(o=e.baseOptions);var u=Object(v["a"])({method:"GET"},o,a),c={},d={};return s.query=Object(v["a"])({},s.query,d,a.query),delete s.search,u.headers=Object(v["a"])({},c,a.headers),{url:b["format"](s),options:u}},getDependents:function(t,n,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(null===t||void 0===t)throw new y("groupId","Required parameter groupId was null or undefined when calling getDependents.");if(null===n||void 0===n)throw new y("artifactId","Required parameter artifactId was null or undefined when calling getDependents.");if(null===r||void 0===r)throw new y("version","Required parameter version was null or undefined when calling getDependents.");var o,i="/pdaw/groups/{groupId}/artifacts/{artifactId}/versions/{version}/dependents.json".replace("{".concat("groupId","}"),encodeURIComponent(String(t))).replace("{".concat("artifactId","}"),encodeURIComponent(String(n))).replace("{".concat("version","}"),encodeURIComponent(String(r))),s=b["parse"](i,!0);e&&(o=e.baseOptions);var u=Object(v["a"])({method:"GET"},o,a),c={},d={};return s.query=Object(v["a"])({},s.query,d,a.query),delete s.search,u.headers=Object(v["a"])({},c,a.headers),{url:b["format"](s),options:u}},getGlobalMetadata:function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r="/pdaw/metadata.json",a=b["parse"](r,!0);e&&(t=e.baseOptions);var o=Object(v["a"])({method:"GET"},t,n),i={},s={};return a.query=Object(v["a"])({},a.query,s,n.query),delete a.search,o.headers=Object(v["a"])({},i,n.headers),{url:b["format"](a),options:o}},getGroupIds:function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r="/pdaw/groups.json",a=b["parse"](r,!0);e&&(t=e.baseOptions);var o=Object(v["a"])({method:"GET"},t,n),i={},s={};return a.query=Object(v["a"])({},a.query,s,n.query),delete a.search,o.headers=Object(v["a"])({},i,n.headers),{url:b["format"](a),options:o}},getMetadata:function(t,n,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(null===t||void 0===t)throw new y("groupId","Required parameter groupId was null or undefined when calling getMetadata.");if(null===n||void 0===n)throw new y("artifactId","Required parameter artifactId was null or undefined when calling getMetadata.");if(null===r||void 0===r)throw new y("version","Required parameter version was null or undefined when calling getMetadata.");var o,i="/pdaw/groups/{groupId}/artifacts/{artifactId}/versions/{version}/metadata.json".replace("{".concat("groupId","}"),encodeURIComponent(String(t))).replace("{".concat("artifactId","}"),encodeURIComponent(String(n))).replace("{".concat("version","}"),encodeURIComponent(String(r))),s=b["parse"](i,!0);e&&(o=e.baseOptions);var u=Object(v["a"])({method:"GET"},o,a),c={},d={};return s.query=Object(v["a"])({},s.query,d,a.query),delete s.search,u.headers=Object(v["a"])({},c,a.headers),{url:b["format"](s),options:u}},getParsed:function(t,n,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(null===t||void 0===t)throw new y("groupId","Required parameter groupId was null or undefined when calling getParsed.");if(null===n||void 0===n)throw new y("artifactId","Required parameter artifactId was null or undefined when calling getParsed.");if(null===r||void 0===r)throw new y("version","Required parameter version was null or undefined when calling getParsed.");var o,i="/pdaw/groups/{groupId}/artifacts/{artifactId}/versions/{version}/parsed.json".replace("{".concat("groupId","}"),encodeURIComponent(String(t))).replace("{".concat("artifactId","}"),encodeURIComponent(String(n))).replace("{".concat("version","}"),encodeURIComponent(String(r))),s=b["parse"](i,!0);e&&(o=e.baseOptions);var u=Object(v["a"])({method:"GET"},o,a),c={},d={};return s.query=Object(v["a"])({},s.query,d,a.query),delete s.search,u.headers=Object(v["a"])({},c,a.headers),{url:b["format"](s),options:u}},getVersions:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null===t||void 0===t)throw new y("groupId","Required parameter groupId was null or undefined when calling getVersions.");if(null===n||void 0===n)throw new y("artifactId","Required parameter artifactId was null or undefined when calling getVersions.");var a,o="/pdaw/groups/{groupId}/artifacts/{artifactId}/versions.json".replace("{".concat("groupId","}"),encodeURIComponent(String(t))).replace("{".concat("artifactId","}"),encodeURIComponent(String(n))),i=b["parse"](o,!0);e&&(a=e.baseOptions);var s=Object(v["a"])({method:"GET"},a,r),u={},c={};return i.query=Object(v["a"])({},i.query,c,r.query),delete i.search,s.headers=Object(v["a"])({},u,r.headers),{url:b["format"](i),options:s}}}},x=function(e){return{getArtifacts:function(t,n){var r=q(e).getArtifacts(t,n);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I,n=Object(v["a"])({},r.options,{url:t+r.url});return e.request(n)}},getDependencies:function(t,n,r,a){var o=q(e).getDependencies(t,n,r,a);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I,n=Object(v["a"])({},o.options,{url:t+o.url});return e.request(n)}},getDependents:function(t,n,r,a){var o=q(e).getDependents(t,n,r,a);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I,n=Object(v["a"])({},o.options,{url:t+o.url});return e.request(n)}},getGlobalMetadata:function(t){var n=q(e).getGlobalMetadata(t);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I,r=Object(v["a"])({},n.options,{url:t+n.url});return e.request(r)}},getGroupIds:function(t){var n=q(e).getGroupIds(t);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I,r=Object(v["a"])({},n.options,{url:t+n.url});return e.request(r)}},getMetadata:function(t,n,r,a){var o=q(e).getMetadata(t,n,r,a);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I,n=Object(v["a"])({},o.options,{url:t+o.url});return e.request(n)}},getParsed:function(t,n,r,a){var o=q(e).getParsed(t,n,r,a);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I,n=Object(v["a"])({},o.options,{url:t+o.url});return e.request(n)}},getVersions:function(t,n,r){var a=q(e).getVersions(t,n,r);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I,n=Object(v["a"])({},a.options,{url:t+a.url});return e.request(n)}}}},G=function(e){function t(){return Object(s["a"])(this,t),Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(g["a"])(t,[{key:"getArtifacts",value:function(e,t){return x(this.configuration).getArtifacts(e,t)(this.axios,this.basePath)}},{key:"getDependencies",value:function(e,t,n,r){return x(this.configuration).getDependencies(e,t,n,r)(this.axios,this.basePath)}},{key:"getDependents",value:function(e,t,n,r){return x(this.configuration).getDependents(e,t,n,r)(this.axios,this.basePath)}},{key:"getGlobalMetadata",value:function(e){return x(this.configuration).getGlobalMetadata(e)(this.axios,this.basePath)}},{key:"getGroupIds",value:function(e){return x(this.configuration).getGroupIds(e)(this.axios,this.basePath)}},{key:"getMetadata",value:function(e,t,n,r){return x(this.configuration).getMetadata(e,t,n,r)(this.axios,this.basePath)}},{key:"getParsed",value:function(e,t,n,r){return x(this.configuration).getParsed(e,t,n,r)(this.axios,this.basePath)}},{key:"getVersions",value:function(e,t,n){return x(this.configuration).getVersions(e,t,n)(this.axios,this.basePath)}}]),t}(O),k=(n("96cf"),n("3b8d")),C=function(){function e(){Object(s["a"])(this,e)}return Object(g["a"])(e,null,[{key:"getConfig",value:function(){var t=Object(k["a"])(regeneratorRuntime.mark(function t(){var n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.pdawConfig||m.a.get(e.configFileName).then(function(e){return n.pdawConfig=e}).catch(function(t){t.response&&404===t.response.status&&(e.pdawConfig=e.defaultConfig)});case 1:if(e.pdawConfig){t.next=6;break}return t.next=4,new Promise(function(e){return setTimeout(e,1e3)});case 4:t.next=1;break;case 6:return t.abrupt("return",e.pdawConfig);case 7:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}]),e}();C.configFileName="pdaw-config.json",C.defaultConfig={apiBasePath:""};var P=function(){function e(){Object(s["a"])(this,e)}return Object(g["a"])(e,null,[{key:"getDefaultApi",value:function(e){C.getConfig().then(function(t){var n={basePath:t.apiBasePath};e(new G(n))})}}]),e}(),_=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(u["a"])(this,Object(c["a"])(t).call(this)),e.metadata={},e}return Object(d["a"])(t,e),Object(g["a"])(t,[{key:"mounted",value:function(){var e=this;P.getDefaultApi(function(t){t.getGlobalMetadata().then(function(t){return e.metadata=t.data})})}}]),t}(p["b"]);_=l["a"]([p["a"]],_);var R=_,V=R,A=n("2877"),S=n("6544"),D=n.n(S),M=n("2a7f"),T=Object(A["a"])(V,f,h,!1,null,null,null),U=T.exports;D()(T,{VToolbarTitle:M["a"]});var E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs8:"","justify-start":""}},[n("v-overflow-btn",{attrs:{items:e.groupIds,label:"Group",editable:"","item-value":"text",outline:"",color:"black"},on:{change:function(t){return e.groupIdSelected()}},model:{value:e.selectedGroup,callback:function(t){e.selectedGroup=t},expression:"selectedGroup"}})],1),n("v-flex",{attrs:{xs8:"","justify-start":""}},[n("v-overflow-btn",{attrs:{items:e.artifacts,label:"Artifact",editable:"","item-value":"text",outline:"",color:"black"},on:{change:function(t){return e.artifactIdSelected()}},model:{value:e.selectedArtifact,callback:function(t){e.selectedArtifact=t},expression:"selectedArtifact"}})],1),n("v-flex",{attrs:{xs8:"","justify-start":""}},[n("v-overflow-btn",{attrs:{items:e.versions,label:"Version",editable:"","item-value":"text",outline:"",color:"black"},on:{change:function(t){return e.versionSelected()}},model:{value:e.selectedVersion,callback:function(t){e.selectedVersion=t},expression:"selectedVersion"}})],1)],1),n("v-content",[e._v("\n    version: "+e._s(e.selectedVersion)+"\n    "),n("pdaw-gav")],1)],1)},$=[],z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[e._v("parsed:"+e._s(e.getParsed()))])},B=[],F=function(e){function t(){return Object(s["a"])(this,t),Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(g["a"])(t,[{key:"getParsed",value:function(){return this.parsed?this.parsed:""}}]),t}(p["b"]);F=l["a"]([p["a"]],F);var J=F,N=J,H=n("a523"),L=Object(A["a"])(N,z,B,!1,null,null,null),W=L.exports;D()(L,{VContainer:H["a"]});var K=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.groupIds=[],e.artifacts=[],e.versions=[],e.selectedGroup="",e.selectedArtifact="",e.selectedVersion="",e}return Object(d["a"])(t,e),Object(g["a"])(t,[{key:"mounted",value:function(){var e=this;P.getDefaultApi(function(t){t.getGroupIds().then(function(t){e.groupIds=t.data.map(function(e){return{text:e.groupId}}),e.selectedGroup=e.$route.params.groupId,e.selectedGroup&&e.onChangeGroup(function(){e.selectedArtifact=e.$route.params.artifactId,e.selectedArtifact&&e.onChangeArtifact(function(){e.selectedVersion=e.$route.params.version})})})})}},{key:"groupIdSelected",value:function(){this.$router.push("/groupId/"+this.selectedGroup),this.onChangeGroup()}},{key:"artifactIdSelected",value:function(){this.$router.push("/groupId/"+this.selectedGroup+"/artifactId/"+this.selectedArtifact),this.onChangeArtifact()}},{key:"versionSelected",value:function(){this.$router.push("/groupId/"+this.selectedGroup+"/artifactId/"+this.selectedArtifact+"/version/"+this.selectedVersion)}},{key:"onChangeGroup",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};this.artifacts=[],this.selectedArtifact="",this.versions=[],this.selectedVersion="",P.getDefaultApi(function(n){n.getArtifacts(e.selectedGroup).then(function(n){e.artifacts=n.data.map(function(e){return{text:e.artifactId}}),t()})})}},{key:"onChangeArtifact",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};this.versions=[],this.selectedVersion="",P.getDefaultApi(function(n){n.getVersions(e.selectedGroup,e.selectedArtifact).then(function(n){e.versions=n.data.map(function(e){return{text:e.version}}),t()})})}}]),t}(p["b"]);K=l["a"]([Object(p["a"])({components:{PdawGav:W}})],K);var Q=K,X=Q,Y=n("549c"),Z=n("0e8f"),ee=n("a722"),te=n("de8e"),ne=Object(A["a"])(X,E,$,!1,null,null,null),re=ne.exports;D()(ne,{VContainer:H["a"],VContent:Y["a"],VFlex:Z["a"],VLayout:ee["a"],VOverflowBtn:te["a"]});var ae=function(e){function t(){return Object(s["a"])(this,t),Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),t}(p["b"]);ae=l["a"]([Object(p["a"])({components:{PdawToolbar:U,PdawSelectGav:re,PdawGav:W}})],ae);var oe=ae,ie=oe,se=n("7496"),ue=n("8336"),ce=n("132d"),de=n("9910"),le=n("71d9"),pe=Object(A["a"])(ie,o,i,!1,null,null,null),fe=pe.exports;D()(pe,{VApp:se["a"],VBtn:ue["a"],VContent:Y["a"],VIcon:ce["a"],VSpacer:de["a"],VToolbar:le["a"]});var he=n("8c4f");r["default"].use(he["a"]);var ge=new he["a"]({mode:"hash",base:"",routes:[{path:"/",component:re},{path:"/groupId/:groupId",component:re},{path:"/groupId/:groupId/artifactId/:artifactId",component:re},{path:"/groupId/:groupId/artifactId/:artifactId/version/:version",component:re}]});n("d5e8"),n("d1e7");r["default"].config.productionTip=!1,new r["default"]({router:ge,render:function(e){return e(fe)},components:{App:fe}}).$mount("#app")}});
//# sourceMappingURL=app~d0ae3f07.240f3772.js.map