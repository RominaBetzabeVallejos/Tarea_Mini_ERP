import { defineConfig }  fro 'vitae'

export default defineConfig({
	server:{
		port:5173,
		open:true
	},
	build:{
		outDir: 'dist',
		sourcemap:true
	}
})