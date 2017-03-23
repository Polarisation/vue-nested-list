(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueNestedList = factory());
}(this, (function () { 'use strict';


let NestedUl = {
	name: 'nested-ul',
	props: {
		content: {
			type: Array,
			required: true
		},
		maxLength: {
			type: Number,
			default: 500
		}
	},
	template: "<span v-if='content.length > maxLength'>[Array of length {{content.length}}: too many items to show]</span>"
							+"<ul v-else>"
								+"<li v-for='item in content'>"
									+"<nested-list v-bind:content='item' v-bind:max-length='maxLength'></nested-list>"
								+"</li>"
							+"</ul>"
};
let NestedDl = {
	name: 'nested-dl',
	props: {
		content: {
			type: Object,
			required: true
		},
		maxLength: {
			type: Number,
			default: 500
		}
	},
	template: 
		"<span v-if='Object.keys(content).length > maxLength'>[Object with {{Object.keys(content).length}} keys: too many to show]</span>"
		+"<dl v-else>"
		+"<template v-for='(value, key) in content'>"
			+"<dt>{{key}}</dt>"
			+"<dd>"
				+"<nested-list v-bind:content='value' v-bind:max-length='maxLength'></nested-list>"
			+"</dd>"
		+"</template>"
		+"</dl>"
};
let NestedList = {
	name: 'nested-list',
	components: {
		'nested-dl' : NestedDl,
		'nested-ul' : NestedUl
	},
	props: {
		content: {
			required: true
		},
		maxLength: {
			type: Number,
			default: 500
		}
	},
	template: 
		"<nested-ul v-if='Object.prototype.toString.call( content ) === \"[object Array]\"' v-bind:content='content' v-bind:max-length='maxLength'></nested-ul>"
		+"<nested-dl v-else-if='typeof content == \"object\"' v-bind:content='content' v-bind:max-length='maxLength'></nested-dl>"
		+"<span v-else>{{content}}</span>"
};

return NestedList;

})));