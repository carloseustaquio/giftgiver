(this.webpackJsonpgiftgiver=this.webpackJsonpgiftgiver||[]).push([[0],{22:function(e,t,n){e.exports=n(31)},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(15),s=n(7),c=n(8),l=n(9),o=n(10),u=n(33),f=n(32),m=n(17),p=n(20),d=n(18),v=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={person:"",present:""},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"gift mt-2 mb-4"},r.a.createElement(f.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,null,"Person"),r.a.createElement(d.a,{onChange:function(t){return e.setState({person:t.target.value})},className:"input-person"})),r.a.createElement(m.a,null,r.a.createElement(p.a,null,"Present"),r.a.createElement(d.a,{onChange:function(t){return e.setState({present:t.target.value})},className:"input-present"}))),r.a.createElement(u.a,{onClick:function(){return e.props.removeGift(e.props.gift.id)},className:"btn-remove btn-danger"},"Delete"))}}]),n}(a.Component),g=n(19),b=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).addGift=function(){var t,n=e.state.gifts,a=e.state.gifts.map((function(e){return e.id}));n.push({id:(t=a,(t.length>0?Math.max.apply(Math,Object(g.a)(t)):0)+1)}),e.setState({gifts:n})},e.removeGift=function(t){var n=e.state.gifts.filter((function(e){return e.id!==t}));e.setState({gifts:n})},e.state={gifts:[]},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container container-xs d-flex flex-column px-5 pb-4 position-relative"},r.a.createElement("h2",{className:"mt-4 d-flex justify-content-between"},"Gift Giver",r.a.createElement(u.a,{id:"btn-add",onClick:this.addGift,className:"btn-add"},"Add Gift")),r.a.createElement("div",{className:"gift-list"},this.state.gifts.map((function(t){return r.a.createElement(v,{key:t.id,gift:t,removeGift:e.removeGift})}))))}}]),n}(a.Component);n(30);Object(i.render)(r.a.createElement(b,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.3af981da.chunk.js.map