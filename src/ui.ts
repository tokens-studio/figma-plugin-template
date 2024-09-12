import { LitElement, html } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import type { Ref } from 'lit/directives/ref.js';
import StyleDictionary from 'style-dictionary';

console.log(StyleDictionary.VERSION);

export class FigmaPlugin extends LitElement {
	textboxRef: Ref<HTMLInputElement> = createRef();

	onCreate() {
		if (this.textboxRef.value) {
			const count = parseFloat(this.textboxRef.value.value);
			parent.postMessage(
				{ pluginMessage: { type: 'create-rectangles', count } },
				'*'
			);
		}
	}

	onCancel() {
		parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
	}

	render() {
		return html`
			<h2>Rectangle Creator</h2>
			<p>Count: <input ${ref(this.textboxRef)} value="5" /></p>
			<button @click=${this.onCreate}>Create</button>
			<button @click=${this.onCancel}>Cancel</button>
		`;
	}
}
customElements.define('figma-plugin', FigmaPlugin);
