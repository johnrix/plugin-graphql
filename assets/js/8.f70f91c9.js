(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{174:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p"),t._m(1),a("p"),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("A simple query or simple mutation is not tied to a model. And so Vuex-ORM-GraphQL doesn't expect the result to be of a\nspecific type. Also the return value is not automatically inserted in the Vuex store.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("This generates the following query:")]),t._v(" "),t._m(9),a("p",[t._v("Variables:")]),t._v(" "),t._m(10),a("p",[t._v("Like for all other operations, all records which are returned replace the respective existing records in the Vuex-ORM\ndatabase.")]),t._v(" "),a("p",[t._v("Following fields are allowed:")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("There might be cases when you just want to send a plan graphql query without having this plugin doing magic things.")]),t._v(" "),t._m(13),t._v(" "),t._m(14),a("p",[t._v("The result contains a hash which is shaped like the request:")]),t._v(" "),t._m(15),a("p",[t._v("Nothing is inserted in the Vuex store.")]),t._v(" "),a("p",[t._v("Following fields are allowed:")]),t._v(" "),t._m(16),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("As "),a("code",[t._v("query")]),t._v(" you can also pass a GraphQL AST DocumentNode like it's returned by the "),a("code",[t._v("gql")]),t._v(" function or\nthe "),a("code",[t._v("*.graphql")]),t._v(" webpack loader of "),a("a",{attrs:{href:"https://github.com/apollographql/graphql-tag",target:"_blank",rel:"noopener noreferrer"}},[t._v("graphql-tag"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),a("p",[t._v("This generates the following query:")]),t._v(" "),t._m(22),a("p",[t._v("Variables:")]),t._v(" "),t._m(23),a("p",[t._v("Like for all other operations, all records which are returned replace the respective existing records in the Vuex-ORM\ndatabase.")]),t._v(" "),a("p",[t._v("Following fields are allowed:")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),a("p",[t._v("The result contains a hash which is shaped like the request:")]),t._v(" "),t._m(28),a("p",[t._v("Nothing is inserted in the Vuex store.")]),t._v(" "),a("p",[t._v("Following fields are allowed:")]),t._v(" "),t._m(29),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("As "),a("code",[t._v("query")]),t._v(" you can also pass a GraphQL AST DocumentNode like it's returned by the "),a("code",[t._v("gql")]),t._v(" function or\nthe "),a("code",[t._v("*.graphql")]),t._v(" webpack loader of "),a("a",{attrs:{href:"https://github.com/apollographql/graphql-tag",target:"_blank",rel:"noopener noreferrer"}},[t._v("graphql-tag"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(30),t._v(" "),a("p",[t._v("Vuex-ORM-GraphQL will determine automatically if a single record or a connection (multiple records) is returned by a\nquery/mutation via checking your GraphQL Schema. How smart is this?")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"custom-queries-and-mutations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-queries-and-mutations","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom Queries and Mutations")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#model-related-custom-query"}},[this._v("Model related custom query")])]),s("li",[s("a",{attrs:{href:"#model-unrelated-simple-query"}},[this._v("Model unrelated simple query")])]),s("li",[s("a",{attrs:{href:"#model-related-custom-mutation"}},[this._v("Model related custom mutation")])]),s("li",[s("a",{attrs:{href:"#model-unrelated-simple-mutation"}},[this._v("Model unrelated simple mutation")])]),s("li",[s("a",{attrs:{href:"#multiple-or-single-record"}},[this._v("Multiple or single record")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("With custom mutations and custom queries we distinguish between model related and model unrelated (simple) custom\nquries/mutations. The difference is that model related queries/mutations always are tied to a model, so Vuex-ORM-GraphQL\nexpected that the query/mutation type is the same as the model. A model related custom mutation "),s("code",[this._v("upvotePost")]),this._v(" is expected\nto be of type "),s("code",[this._v("Post")]),this._v(". To make this even clearer, all model related queries and mutations are called on a specific Model\nor a record of this model.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("It's not a clean and good solution that the simple queries are also triggered via Vuex action, but currently the only\nway. This might be changed in the future, when we find a better solution.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"model-related-custom-query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model-related-custom-query","aria-hidden":"true"}},[this._v("#")]),this._v(" Model related custom query")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("You may sometimes want to send custom GraphQL query. We support this via the "),a("code",[t._v("query")]),t._v(" action. However please notice that\nthe convenienceMethods here are named "),a("code",[t._v("customMutation")]),t._v(" and "),a("code",[t._v("$customMutation")]),t._v(" due to a name conflict with the "),a("code",[t._v("query()")]),t._v("\nmethod Vuex-ORM.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" post "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Post"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("query")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("first")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" post"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("$customQuery")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'example'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// is the same as")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Post"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("customQuery")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'example'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filter"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" post"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Post"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'query'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'example'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filter"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" post"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("As you can see you have to provide the query name and any further arguments you want to pass. In this case we send\nthe post id, but this could be anything else. Please also notice that "),s("code",[this._v("record.$customQuery")]),this._v(" automatically adds the id\nof the record into the arguments list. The plugin automatically determines if there are multiple records or a single\nrecord is returned by looking in the arguments hash if there is a "),s("code",[this._v("id")]),this._v(" field and respectively setups the query.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("A model related custom query is always tied to the model, so the plugin expects the return value of the custom query\nis of the model type. In this example that means, that Vuex-ORM-GraphQL expects that the "),s("code",[this._v("example")]),this._v(" query is of type\n"),s("code",[this._v("Post")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-graphql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-graphql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("mutation")]),t._v(" Example"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$id")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  example"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token attr-name"}},[t._v("post")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$id")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id\n    userId\n    content\n    title\n\n    user "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id\n      email\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("42")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("name")]),t._v(": Required. The name of the query.")]),t._v(" "),a("li",[a("code",[t._v("filter")]),t._v(": Hash map with filters. These are passed as a filter typed variable like in fetch.")]),t._v(" "),a("li",[a("code",[t._v("bypassCache")]),t._v(": Whether to bypass the caching.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"model-unrelated-simple-query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model-unrelated-simple-query","aria-hidden":"true"}},[this._v("#")]),this._v(" Model unrelated simple query")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Simple Queries allow to do that. Let's assume we do have a "),s("code",[this._v("status")]),this._v(" query in our GraphQL API which let ask for the\nstatus of all subsystems:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" query "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`\nquery status {\n  backend\n  smsGateway\n  paypalIntegration\n}`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" store"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'entities/simpleQuery'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" query"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" variables"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bypassCache"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  backend"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  smsGateway"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  paypalIntegration"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("query")]),t._v(": Required. The GraphQL query.")]),t._v(" "),a("li",[a("code",[t._v("variables")]),t._v(": Variables to pass")]),t._v(" "),a("li",[a("code",[t._v("bypassCache")]),t._v(": Whether to bypass the caching.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"model-related-custom-mutation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model-related-custom-mutation","aria-hidden":"true"}},[this._v("#")]),this._v(" Model related custom mutation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Along with the CRUD mutations you may want to send custom GraphQL mutations. We support this via the "),s("code",[this._v("mutate")]),this._v(" action:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" post "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Post"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("query")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("first")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" post"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("$mutate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'upvotePost'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// is the same as")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Post"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("mutate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'upvotePost'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" post"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Post"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'mutate'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'upvotePost'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" post"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("As you can see you have to provide the mutation name and any further arguments you want to pass. In this case we send\nthe post id, but this could be anything else. Please also notice that "),s("code",[this._v("record.$mutate")]),this._v(" automatically adds the id\nof the record into the arguments list. The plugin automatically determines if there are multiple records or a single\nrecord is requests by looking in the arguments hash if there is a "),s("code",[this._v("id")]),this._v(" field and respectively setups the query.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("A model related custom mutation is always tied to the model, so the plugin expects the return value of the custom query\nis of the model type. In this example that means, that Vuex-ORM-GraphQL expects that the "),s("code",[this._v("upvotePost")]),this._v(" mutation is of type\n"),s("code",[this._v("Post")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-graphql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-graphql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("mutation")]),t._v(" UpvotePost"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$id")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  upvotePost"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token attr-name"}},[t._v("post")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$id")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id\n    userId\n    content\n    title\n\n    user "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id\n      email\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("42")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("name")]),this._v(": Required. The name of the mutation.")]),this._v(" "),s("li",[s("code",[this._v("args")]),this._v(": Hash map with arguments (variables).")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"model-unrelated-simple-mutation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model-unrelated-simple-mutation","aria-hidden":"true"}},[this._v("#")]),this._v(" Model unrelated simple mutation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Like simple custom queries, you can also send simple custom mutations. The action ("),s("code",[this._v("simpleQuery")]),this._v(") stays the same.\nLet's assume we do have a "),s("code",[this._v("sendSms")]),this._v(" mutation (this is a bad example, never setup your app like this please!) in our\nGraphQL API which let us send a SMS.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" query "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`\nmutation SendSms($to: string!, $text: string!) {\n  sendSms(to: $to, text: $text) {\n    delivered\n  }\n}`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" store"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'entities/simpleMutation'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  query"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  variables"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" to"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'+4912345678'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'GraphQL is awesome!'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  sendSms"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    delivered"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("query")]),this._v(": Required. The GraphQL mutation query.")]),this._v(" "),s("li",[s("code",[this._v("variables")]),this._v(": Hash map with variables to pass.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"multiple-or-single-record"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multiple-or-single-record","aria-hidden":"true"}},[this._v("#")]),this._v(" Multiple or single record")])}],!1,null,null,null);s.default=e.exports}}]);