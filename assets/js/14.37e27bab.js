(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{213:function(v,_,t){"use strict";t.r(_);var l=t(28),e=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"interview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interview"}},[v._v("#")]),v._v(" Interview")]),v._v(" "),t("h2",{attrs:{id:"滴滴"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#滴滴"}},[v._v("#")]),v._v(" 滴滴")]),v._v(" "),t("h3",{attrs:{id:"一面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一面"}},[v._v("#")]),v._v(" 一面")]),v._v(" "),t("p",[v._v("问：请介绍一下你自己。")]),v._v(" "),t("ul",[t("li",[v._v("balabala...没啥好说的。")])]),v._v(" "),t("p",[v._v("问：看你最近写的项目是组件库开发，问一下，为什么要开发组件库？")]),v._v(" "),t("ul",[t("li",[v._v("统一开发规范，统一样式规范，之后从而通过已有规范，规范设计的设计方案，减少视觉还原的样式问题。提高开发效率。")])]),v._v(" "),t("p",[v._v("问：看起来很多是和样式相关，那么为什么不基于别人开源的解决方案，进行样式修正？")]),v._v(" "),t("ol",[t("li",[v._v("因为别人的效果和自己所需要的效果差距太大。")]),v._v(" "),t("li",[v._v("因为需要一定的内部逻辑(比如，form 组件的校验方案)")]),v._v(" "),t("li",[v._v("时效性太低。（用过其他组件库出现问题，从提"),t("code",[v._v("issue")]),v._v("到问题的解决过于繁琐，正规提过的"),t("code",[v._v("issue")]),v._v("的朋友都知道，还要给出效果还原。）")]),v._v(" "),t("li",[v._v("还需要增加其他的基础组件，其他组件库没有提供。")]),v._v(" "),t("li",[v._v("... 不太记得了，还蛮多原因。其实还有蛮重要的一点，"),t("strong",[v._v("技术是需要服务于业务的，这也是为什么要做组件库。别人的不满足，就这么简单")])])]),v._v(" "),t("p",[v._v("问：Vue的通讯方法有哪些？")]),v._v(" "),t("ul",[t("li",[v._v("props")]),v._v(" "),t("li",[v._v("$attrs, $listeners")]),v._v(" "),t("li",[v._v("provide, inject")]),v._v(" "),t("li",[v._v("$root, $parent, $children")]),v._v(" "),t("li",[v._v("\b$on, $emit")]),v._v(" "),t("li",[v._v("EventBus")]),v._v(" "),t("li",[v._v("Vue.observable()")]),v._v(" "),t("li",[v._v("Vuex")]),v._v(" "),t("li",[v._v("...")])]),v._v(" "),t("p",[v._v("问：你说到EventBus, 想问一下，EventBus 的实现原理？")]),v._v(" "),t("ul",[t("li",[v._v("这个挺基础的，百度吧。")])]),v._v(" "),t("p",[v._v("问：看到你有经常搞"),t("code",[v._v("webpack")]),v._v(" 配置，想问一下，"),t("code",[v._v("webpack")]),v._v("的实现过程是怎样？比如 "),t("code",[v._v("babel")]),v._v(" 把 "),t("code",[v._v("ES6")]),v._v(" 转 "),t("code",[v._v("ES5")]),v._v("?")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("其实这是两个问题了。"),t("code",[v._v("babel")]),v._v(" 的语法转化是另一个问题了。你应该是想问 "),t("code",[v._v("webpack")]),v._v(" 对文件的打包过程吧。")])]),v._v(" "),t("li",[t("ol",[t("li",[v._v("webpack 初始化参数，把配置文件的参数和命令行参数合并，并进行参数校验。")])])]),v._v(" "),t("li",[t("ol",{attrs:{start:"2"}},[t("li",[v._v("调用 run 函数，挂载所有插件的 plugin 的 hook的事件监听。")])])]),v._v(" "),t("li",[t("ol",{attrs:{start:"3"}},[t("li",[v._v("从入口出发，逐步生成依赖图谱，并对文件进行编译，通过loader 对文件进行转化，其中，还有触发部分钩子，可能会有文件进行处理(举例 plugin)。")])])]),v._v(" "),t("li",[t("ol",{attrs:{start:"4"}},[t("li",[v._v("编译完成之后，重新处理文件中的其他依赖文件，并递归第三步。")])])]),v._v(" "),t("li",[t("ol",{attrs:{start:"5"}},[t("li",[v._v("所有的文件都递归处理完毕之后，文件的依赖图谱也完成。从而进行 "),t("code",[v._v("chunk")]),v._v(" 处理，例如分割文件等等操作, 这也是最后修改文件的时候。")])])]),v._v(" "),t("li",[t("ol",{attrs:{start:"6"}},[t("li",[v._v("之后根据出口和文件名，对生成的代码写入到文件系统中。")])])])]),v._v(" "),t("p",[v._v("问：https 的实现原理？")]),v._v(" "),t("ul",[t("li",[v._v("额。。。"),t("RouterLink",{attrs:{to:"/other/http.html#_2-https"}},[v._v("https 的实现原理")]),v._v(";")],1)]),v._v(" "),t("p",[v._v("问：跨域知道么？跨域，ajax 如何携带 cookie？")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("withCredentials")]),v._v(" 参数。")])]),v._v(" "),t("p",[v._v("问：知道 XSS, CSRF么？如果防范？")]),v._v(" "),t("ul",[t("li",[v._v("额。。。就那样呗。")])]),v._v(" "),t("p",[v._v("问：如何实现移动端适配？")]),v._v(" "),t("ul",[t("li",[v._v("rem, vw/vh, 媒体查询。")])]),v._v(" "),t("p",[v._v("问：字体如何实现适配？")]),v._v(" "),t("ul",[t("li",[v._v("说是可以不用 rem，不过，我也不知道他是怎么实现的，应该问一下的。")])]),v._v(" "),t("p",[v._v("问：为什么要换工作，你理想中的工作是？")]),v._v(" "),t("ul",[t("li",[v._v("额。。。")])])])}),[],!1,null,null,null);_.default=e.exports}}]);