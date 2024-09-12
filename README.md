# Figma Plugin w Style Dictionary

Quick test to run Figma + Style Dictionary.

Trick is to import Style Dictionary and whatever complicated modern JS stuff in the UI code and not in the plugin, save the plugin code for only stuff that interacts with the Figma API.
This UI code is fortunately not transpiled to shit, whereas the plugin code is.. so you can kind of do whatever there as long as you can output it to a single HTML output file.

I've set it up to run 2 Vite builds, one for the UI and one for the plugin.
Both should support TypeScript & React out of the box (I haven't tested React personally though).

I also created a watch script using chokidar that you can run while you're changing stuff, it'll automatically rebuild both UI and Plugin code.

Haven't tested it thoroughly yet, but the `vite-plugin-singlefile` docs is what you need to check how to link assets etc. in the UI. This plugin takes care of ensuring that the JS chunks are inlined into the HTML output file.
