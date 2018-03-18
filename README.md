# vue-nested-list
Vue.js component for rendering JavaScript objects and arrays as nested HTML lists. This can be handy to quickly get reasonable HTML output of complex data during prototyping.

The content passed into the component will be rendered as follows:

- `Object`s as definition lists (`<dl>`) with keys (`<dt>`) and values (`<dd>`),
- `Arrays`s as unordered lists (`<ul>`) with each item in a `<li>`,
- Anything else in a `<span>.`

[![NPM](https://nodei.co/npm/vue-nested-list.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-nested-list/)

## Usage
Register the component, for example globally:

```
const VueNestedList = require('vue-nested-list').NestedList;
Vue.component('nested-list', VueNestedList);
```

Now you can use in Vue.js templates. Let's say you have `person` object defined as a property on the data object:
```
var vue = new Vue({
	el: "#app",
	data: {
		person: {
			name: "John Smith",
			age: 25,
			hobbies: ["coding", "swimming", "whisky"],
			competencies: {
				"javascript": "strong",
				"vue.js": "good",
				"angularjs": "poor"
			}
		},
	}
})
```

You can now use the component in the Vue template:

```
<h1>{{person.name}}</h1>
<nested-list v-bind:content="person"></nested-list>
```

And the data will be output as `dl` and `ul` elements:

```
<h1>John Smith</h1>
<dl>
	<dt>name</dt> <dd><span>John Smith</span></dd>
	<dt>age</dt> <dd><span>25</span></dd>
	<dt>hobbies</dt> <dd>
		<ul>
			<li><span>coding</span></li>
			<li><span>swimming</span></li>
			<li><span>whisky</span></li>
		</ul>
	</dd>
	<dt>competencies</dt> <dd>
		<dl>
			<dt>javascript</dt> <dd><span>strong</span></dd>
			<dt>vue.js</dt> <dd><span>good</span></dd>
			<dt>angularjs</dt> <dd><span>poor</span></dd>
		</dl>
	</dd>
</dl>
```

To get nicely nested output across browsers when rendered, you will need a little CSS for the definition list, something like:

```
dt {
	font-weight: bold;
}
dt:after {
	content: ":"
}
dd {
	margin-left: 2em;
}
```

## Install

```
$ npm install vue-nested-list
```

## License

MIT
