<template>
	<div class="editor-wrapper">
		<div :id="editorId"></div>
	</div>
</template>

<script>
	import Editor from 'wangeditor'
	import { oneOf } from '@/libs/tools';
	import * as qiniu from 'qiniu-js'
	export default {
		name: 'Editor',
		props: {
			value: {
				type: [String, Object],
				default: ''
			},
			/**
			 * 绑定的值的类型, enum: ['html', 'text']
			 */

			valueType: {
				type: String,
				default: 'html',
				validator: (val) => {
					return oneOf(val, ['html', 'text'])
				}
			},
			/**
			 * @description 设置change事件触发时间间隔
			 */
			changeInterval: {
				type: Number,
				default: 200
			},
			/**
			 * @description 是否开启本地存储
			 */
			cache: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				menus: [
					'head', // 标题
					'bold', // 粗体
					'justify', // 对齐方式
					'fontSize', // 字号
					'italic', // 斜体
					'underline', // 下划线
					'strikeThrough', // 删除线
					'link', // 插入链接
				],
			}
		},
		computed: {
			editorId() {
				return `editor${this._uid}`
			}
		},
		methods: {
			setHtml(val) {
				this.editor.txt.html(val)
			},
		},
		mounted() {
			this.editor = new Editor(`#${this.editorId}`)
			this.editor.customConfig.onchange = (html) => {
				let text = this.editor.txt.text()
				if(this.cache) localStorage.editorCache = html
				this.$emit('input', this.valueType === 'html' ? html : text)
				this.$emit('on-change', html, text)
			}
			this.editor.customConfig.menus = this.menus;
			this.editor.customConfig.onchangeTimeout = this.changeInterval;
			this.editor.create();
			// 如果本地有存储加载本地存储内容
			let html = this.value;
			if(html) this.editor.txt.html(html)
		}
	}
</script>

<style>
	@import url("./wangEditor.css");
</style>