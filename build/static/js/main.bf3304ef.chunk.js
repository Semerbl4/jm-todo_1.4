(this["webpackJsonptodo-stage4"]=this["webpackJsonptodo-stage4"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(10),o=n.n(s),l=n(7),i=n(2),u=n(3),d=n(5),p=n(4),j=(n(16),n(17),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={value:""},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state.value,n=this.props.addTask;return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("h1",{children:"todos"}),Object(a.jsx)("input",{className:"new-todo",placeholder:"What needs to be done?",value:t,autoFocus:!0,onChange:function(t){e.setState({value:t.target.value})},onKeyDown:function(a){13===a.keyCode&&(n(t),e.setState({value:""}))}})]})}}]),n}(r.a.Component));j.defaultProps={addTask:function(){}};var h=j,f=n(6),m=(n(18),n(9)),b=(n(19),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).completeToogler=function(){e.props.completeChanged(e.props.id)},e.currentTaskDestroyed=function(){var t=e.props.id;e.props.taskDestroyed(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.completed,t=this.props.taskText,n=this.props.taskCreateTime;return Object(a.jsxs)("li",Object(f.a)(Object(f.a)({},this.props),{},{className:e?"completed":void 0,children:[Object(a.jsxs)("div",{className:"view",children:[Object(a.jsx)("input",{className:"toggle",type:"checkbox",onClick:this.completeToogler,checked:!!e}),Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{className:"description",children:t}),Object(a.jsxs)("span",{className:"created",children:["created"," ",Object(m.a)(n,{includeSeconds:!0})," ","ago"]})]}),Object(a.jsx)("button",{className:"icon icon-edit"}),Object(a.jsx)("button",{className:"icon icon-destroy",onClick:this.currentTaskDestroyed})]}),"editing"===this.props.className?Object(a.jsx)("input",{type:"text",className:"edit",defaultValue:"Editing task"}):null]}))}}]),n}(r.a.Component));b.defaultProps={completed:!1,taskText:"",taskCreateTime:new Date};var v=b,O=function(e){var t=e.todoData,n=e.completeChanged,r=e.taskDestroyed,s=e.currentFilter;return Object(a.jsx)("ul",{className:"todo-list",children:function(){var e;return"Active"===s&&(e=t.filter((function(e){return!1===e.completed}))),"Completed"===s?e=t.filter((function(e){return!0===e.completed})):"All"===s&&(e=t.slice()),e=e.map((function(e){return Object(c.createElement)(v,Object(f.a)(Object(f.a)({},e),{},{key:e.id,completeChanged:n,taskDestroyed:r}))}))}()})};O.defaultProps={todoData:[{}],completeChanged:function(){},taskDestroyed:function(){},currentFilter:"All"};var k=O,x=(n(20),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={activeButton:"All"},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.changeFilter,n=this.state.activeButton;return Object(a.jsxs)("ul",{className:"filters",onClick:function(n){t(n.target.textContent),e.setState({activeButton:n.target.textContent})},children:[Object(a.jsx)("li",{children:Object(a.jsx)("button",{className:"All"===n?"selected":null,children:"All"})}),Object(a.jsx)("li",{children:Object(a.jsx)("button",{className:"Active"===n?"selected":null,children:"Active"})}),Object(a.jsx)("li",{children:Object(a.jsx)("button",{className:"Completed"===n?"selected":null,children:"Completed"})})]})}}]),n}(r.a.Component));x.defaultProps={changeFilter:function(){}};var g=x,C=(n(21),function(e){var t=e.changeFilter,n=e.clearCompleted,c=e.uncompletedTasks;return Object(a.jsxs)("footer",{className:"footer",children:[Object(a.jsxs)("span",{className:"todo-count",children:[c()," items left"]}),Object(a.jsx)(g,{changeFilter:t}),Object(a.jsx)("button",{className:"clear-completed",onClick:n,children:"Clear completed"})]})});C.defaultProps={changeFilter:function(){},clearCompleted:function(){},uncompletedTasks:function(){}};var y=C,N=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={serverInfo:[],currentFilter:"All"},e.uncompletedTasks=function(){var t=0;return e.state.serverInfo.forEach((function(e){!1===e.completed&&t++})),t},e.clearCompleted=function(){var t=e.state.serverInfo.filter((function(e){return!1===e.completed}));e.setState({serverInfo:t})},e.changeFilter=function(t){e.setState({currentFilter:t})},e.addTask=function(t){var n=Object(l.a)(e.state.serverInfo);n.push({id:Math.random(),completed:!1,taskText:t,taskCreateTime:new Date}),e.setState({serverInfo:n})},e.completeChanged=function(t){var n=e.state.serverInfo,a=(n=Object(l.a)(n)).map((function(e){return e.id===t&&(e.completed=!e.completed),e}));e.setState({serverInfo:a})},e.taskDestroyed=function(t){var n=e.state.serverInfo,a=(n=Object(l.a)(n)).filter((function(e){return e.id!==t}));e.setState({serverInfo:a})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("section",{className:"todoapp",children:[Object(a.jsx)(h,{addTask:this.addTask}),Object(a.jsx)(k,{todoData:this.state.serverInfo,completeChanged:this.completeChanged,taskDestroyed:this.taskDestroyed,currentFilter:this.state.currentFilter}),Object(a.jsx)(y,{changeFilter:this.changeFilter,clearCompleted:this.clearCompleted,uncompletedTasks:this.uncompletedTasks})]})}}]),n}(r.a.Component);o.a.render(Object(a.jsx)(N,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.bf3304ef.chunk.js.map