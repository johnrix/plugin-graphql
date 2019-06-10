(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{172:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"connection-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connection-mode","aria-hidden":"true"}},[e._v("#")]),e._v(" Connection Mode")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#automatic-detection"}},[e._v("Automatic detection")])]),a("li",[a("a",{attrs:{href:"#manual-setting"}},[e._v("Manual setting")])]),a("li",[a("a",{attrs:{href:"#mode-1-nodes"}},[e._v("Mode 1: nodes")])]),a("li",[a("a",{attrs:{href:"#mode-2-edges"}},[e._v("Mode 2: edges")])]),a("li",[a("a",{attrs:{href:"#mode-3-plain"}},[e._v("Mode 3: plain")])])])]),a("p"),e._v(" "),a("p",[e._v("It seems that there are several standards within the GraphQL community how connections (fields that returns multiple\nrecords) are designed. Some do this via a "),a("code",[e._v("nodes")]),e._v(" field, some via a "),a("code",[e._v("edges { nodes }")]),e._v(" query and some do neither of them.\nVuex-ORM-GraphQL tries to be flexible and supports all of them.")]),e._v(" "),a("p",[e._v("There are four possible modes: "),a("code",[e._v("AUTO")]),e._v(", "),a("code",[e._v("NODES")]),e._v(", "),a("code",[e._v("EDGES")]),e._v(", "),a("code",[e._v("PLAIN")]),e._v(". The Adapter you use will tell the\nplugin which ConnectionMode to use. In the DefaultAdapter this is "),a("code",[e._v("AUTO")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"automatic-detection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automatic-detection","aria-hidden":"true"}},[e._v("#")]),e._v(" Automatic detection")]),e._v(" "),a("p",[e._v("The plugin will try to detect automatically which mode should be used by analyzing the GraphQL\nSchema. In the best case you don't have to bother with this at all.")]),e._v(" "),a("h2",{attrs:{id:"manual-setting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-setting","aria-hidden":"true"}},[e._v("#")]),e._v(" Manual setting")]),e._v(" "),a("p",[e._v("In rare cases the automatic detection might fail or report the wrong mode. In this case, you can\nmanually set the connection mode via a custom adapter. The modes and the resulting\nqueries are explained in the next sections.")]),e._v(" "),a("h2",{attrs:{id:"mode-1-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mode-1-nodes","aria-hidden":"true"}},[e._v("#")]),e._v(" Mode 1: "),a("code",[e._v("nodes")])]),e._v(" "),a("p",[e._v("This is the preferred mode and used for the example queries in this documentation. Setting the connection mode to\n"),a("code",[e._v("nodes")]),e._v(" (or letting the plugin auto detect this mode) will lead to the following query when calling "),a("code",[e._v("User.fetch()")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("query Users {\n  users {\n    nodes {\n      id\n      email\n      name\n    }\n  }\n}\n")])])]),a("h2",{attrs:{id:"mode-2-edges"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mode-2-edges","aria-hidden":"true"}},[e._v("#")]),e._v(" Mode 2: "),a("code",[e._v("edges")])]),e._v(" "),a("p",[e._v("This mode uses a "),a("code",[e._v("edges")]),e._v(" not to query the edge an then query the "),a("code",[e._v("node")]),e._v(" within that edge:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("query Users {\n  users {\n    edges {\n      node {\n        id\n        email\n        name\n      }\n    }\n  }\n}\n")])])]),a("h2",{attrs:{id:"mode-3-plain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mode-3-plain","aria-hidden":"true"}},[e._v("#")]),e._v(" Mode 3: "),a("code",[e._v("plain")])]),e._v(" "),a("p",[e._v("The third mode is the less preferred one due to the lack of meta information. In this case we just plain pass the field\nqueries:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("query Users {\n  users {\n    id\n    email\n    name\n  }\n}\n")])])])])}],!1,null,null,null);t.default=s.exports}}]);