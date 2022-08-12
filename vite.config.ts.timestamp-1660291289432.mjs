// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import Markdown from "vite-plugin-vue-markdown";
import Prism from "markdown-it-prism";
import LinkAttributes from "markdown-it-link-attributes";
import Unocss from "unocss/vite";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import Inspect from "vite-plugin-inspect";
import DefineOptions from "unplugin-vue-define-options/vite";
import viteCompression from "vite-plugin-compression";
var __vite_injected_original_dirname = "C:\\Users\\admin\\Documents\\IU-UI";
var vite_config_default = defineConfig(({ mode }) => {
  return {
    base: "/",
    resolve: {
      alias: {
        "iu-ui": `${resolve(__vite_injected_original_dirname, "packages")}`,
        "@/": `${resolve(__vite_injected_original_dirname, "src")}/`,
        "#/": `${resolve(__vite_injected_original_dirname, "type")}/`
      }
    },
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
        reactivityTransform: true
      }),
      vueJsx(),
      DefineOptions(),
      viteCompression(),
      Pages({
        dirs: [
          { dir: "src/pages", baseRoute: "" }
        ],
        extensions: ["vue", "md"]
      }),
      Layouts(),
      Unocss(),
      AutoImport({
        imports: [
          "vue",
          "vue-router",
          "vue/macros",
          "@vueuse/head",
          "@vueuse/core"
        ],
        dirs: [
          "src/dark"
        ],
        vueTemplate: true
      }),
      Components({
        extensions: ["vue", "md"],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          (name) => {
            if (name.match(/^(Iu[A-Z]|iu-[a-z])/))
              return { name, from: "iu-ui" };
          }
        ]
      }),
      Markdown({
        wrapperClasses: "prose prose-sm text-left",
        headEnabled: true,
        markdownItSetup(md) {
          md.use(Prism);
          md.use(LinkAttributes, {
            matcher: (link) => /^https?:\/\//.test(link),
            attrs: {
              target: "_blank",
              rel: "noopener"
            }
          });
        }
      }),
      Inspect()
    ],
    build: mode === "package" ? {
      lib: {
        entry: resolve(__vite_injected_original_dirname, "./packages/index.ts"),
        name: "iu-ui",
        fileName: "iu"
      },
      rollupOptions: {
        external: ["vue"],
        output: {
          globals: {
            vue: "Vue"
          }
        }
      }
    } : {
      outDir: "docs/iu-night.github.io/docs"
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhZG1pblxcXFxEb2N1bWVudHNcXFxcSVUtVUlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGFkbWluXFxcXERvY3VtZW50c1xcXFxJVS1VSVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0lVLVVJL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCB0eXBlIHsgQ29uZmlnRW52IH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1tYXJrZG93bidcclxuaW1wb3J0IFByaXNtIGZyb20gJ21hcmtkb3duLWl0LXByaXNtJ1xyXG5pbXBvcnQgTGlua0F0dHJpYnV0ZXMgZnJvbSAnbWFya2Rvd24taXQtbGluay1hdHRyaWJ1dGVzJ1xyXG5pbXBvcnQgVW5vY3NzIGZyb20gJ3Vub2Nzcy92aXRlJ1xyXG5pbXBvcnQgUGFnZXMgZnJvbSAndml0ZS1wbHVnaW4tcGFnZXMnXHJcbi8vIGltcG9ydCBnZW5lcmF0ZVNpdGVtYXAgZnJvbSAndml0ZS1zc2ctc2l0ZW1hcCdcclxuaW1wb3J0IExheW91dHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWxheW91dHMnXHJcbmltcG9ydCBJbnNwZWN0IGZyb20gJ3ZpdGUtcGx1Z2luLWluc3BlY3QnXHJcbmltcG9ydCBEZWZpbmVPcHRpb25zIGZyb20gJ3VucGx1Z2luLXZ1ZS1kZWZpbmUtb3B0aW9ucy92aXRlJ1xyXG4vLyBpbXBvcnQgcHJpc21qcyBmcm9tICd2aXRlLXBsdWdpbi1wcmlzbWpzJ1xyXG5pbXBvcnQgdml0ZUNvbXByZXNzaW9uIGZyb20gJ3ZpdGUtcGx1Z2luLWNvbXByZXNzaW9uJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfTogQ29uZmlnRW52KSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGJhc2U6ICcvJyxcclxuXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgJ2l1LXVpJzogYCR7cmVzb2x2ZShfX2Rpcm5hbWUsICdwYWNrYWdlcycpfWAsXHJcbiAgICAgICAgJ0AvJzogYCR7cmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKX0vYCxcclxuICAgICAgICAnIy8nOiBgJHtyZXNvbHZlKF9fZGlybmFtZSwgJ3R5cGUnKX0vYCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICB2dWUoe1xyXG4gICAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC5tZCQvXSxcclxuICAgICAgICByZWFjdGl2aXR5VHJhbnNmb3JtOiB0cnVlLFxyXG4gICAgICB9KSxcclxuXHJcbiAgICAgIHZ1ZUpzeCgpLFxyXG5cclxuICAgICAgLy8gcHJpc21qcyh7XHJcbiAgICAgIC8vICAgbGFuZ3VhZ2VzOiBbJ21hcmt1cCddLFxyXG4gICAgICAvLyAgIGNzczogdHJ1ZSxcclxuICAgICAgLy8gfSksXHJcblxyXG4gICAgICBEZWZpbmVPcHRpb25zKCksXHJcblxyXG4gICAgICB2aXRlQ29tcHJlc3Npb24oKSxcclxuXHJcbiAgICAgIFBhZ2VzKHtcclxuICAgICAgICBkaXJzOiBbXHJcbiAgICAgICAgICB7IGRpcjogJ3NyYy9wYWdlcycsIGJhc2VSb3V0ZTogJycgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXHJcbiAgICAgIH0pLFxyXG5cclxuICAgICAgTGF5b3V0cygpLFxyXG5cclxuICAgICAgVW5vY3NzKCksXHJcblxyXG4gICAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgICAndnVlJyxcclxuICAgICAgICAgICd2dWUtcm91dGVyJyxcclxuICAgICAgICAgICd2dWUvbWFjcm9zJyxcclxuICAgICAgICAgICdAdnVldXNlL2hlYWQnLFxyXG4gICAgICAgICAgJ0B2dWV1c2UvY29yZScsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkaXJzOiBbXHJcbiAgICAgICAgLy8gJ3NyYy9zdG9yZXMvKicsXHJcbiAgICAgICAgICAnc3JjL2RhcmsnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXHJcbiAgICAgIH0pLFxyXG5cclxuICAgICAgQ29tcG9uZW50cyh7XHJcbiAgICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcclxuICAgICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLm1kJC9dLFxyXG4gICAgICAgIHJlc29sdmVyczogW1xyXG4gICAgICAgICAgKG5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAobmFtZS5tYXRjaCgvXihJdVtBLVpdfGl1LVthLXpdKS8pKVxyXG4gICAgICAgICAgICAgIHJldHVybiB7IG5hbWUsIGZyb206ICdpdS11aScgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KSxcclxuXHJcbiAgICAgIE1hcmtkb3duKHtcclxuICAgICAgICB3cmFwcGVyQ2xhc3NlczogJ3Byb3NlIHByb3NlLXNtIHRleHQtbGVmdCcsXHJcbiAgICAgICAgaGVhZEVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgbWFya2Rvd25JdFNldHVwKG1kKSB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9wcmlzbWpzLmNvbS9cclxuICAgICAgICAgIG1kLnVzZShQcmlzbSlcclxuICAgICAgICAgIG1kLnVzZShMaW5rQXR0cmlidXRlcywge1xyXG4gICAgICAgICAgICBtYXRjaGVyOiAobGluazogc3RyaW5nKSA9PiAvXmh0dHBzPzpcXC9cXC8vLnRlc3QobGluayksXHJcbiAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcclxuICAgICAgICAgICAgICByZWw6ICdub29wZW5lcicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG5cclxuICAgICAgSW5zcGVjdCgpLFxyXG4gICAgXSxcclxuXHJcbiAgICAvLyBzc2dPcHRpb25zOiB7XHJcbiAgICAvLyAgIHNjcmlwdDogJ2FzeW5jJyxcclxuICAgIC8vICAgZm9ybWF0dGluZzogJ21pbmlmeScsXHJcbiAgICAvLyAgIC8vIG9uRmluaXNoZWQoKSB7IGdlbmVyYXRlU2l0ZW1hcCgpIH0sXHJcbiAgICAvLyB9LFxyXG5cclxuICAgIGJ1aWxkOlxyXG4gICAgbW9kZSA9PT0gJ3BhY2thZ2UnXHJcbiAgICAgID8ge1xyXG4gICAgICAgICAgbGliOiB7XHJcbiAgICAgICAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJy4vcGFja2FnZXMvaW5kZXgudHMnKSxcclxuICAgICAgICAgICAgbmFtZTogJ2l1LXVpJyxcclxuICAgICAgICAgICAgZmlsZU5hbWU6ICdpdScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgICAgICBleHRlcm5hbDogWyd2dWUnXSxcclxuICAgICAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgICAgICAgdnVlOiAnVnVlJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8vIGNzc0NvZGVTcGxpdDogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIDoge1xyXG4gICAgICAgICAgb3V0RGlyOiAnZG9jcy9pdS1uaWdodC5naXRodWIuaW8vZG9jcycsXHJcbiAgICAgICAgICAvLyBvdXREaXI6ICdkaXN0JyxcclxuICAgICAgICB9LFxyXG4gIH1cclxufSlcclxuXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1I7QUFFdFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQWpCQSxJQUFNLG1DQUFtQztBQW9CekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxXQUFzQjtBQUNuRCxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFFTixTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxTQUFTLEdBQUcsUUFBUSxrQ0FBVyxVQUFVO0FBQUEsUUFDekMsTUFBTSxHQUFHLFFBQVEsa0NBQVcsS0FBSztBQUFBLFFBQ2pDLE1BQU0sR0FBRyxRQUFRLGtDQUFXLE1BQU07QUFBQSxNQUNwQztBQUFBLElBQ0Y7QUFBQSxJQUVBLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxRQUNGLFNBQVMsQ0FBQyxVQUFVLE9BQU87QUFBQSxRQUMzQixxQkFBcUI7QUFBQSxNQUN2QixDQUFDO0FBQUEsTUFFRCxPQUFPO0FBQUEsTUFPUCxjQUFjO0FBQUEsTUFFZCxnQkFBZ0I7QUFBQSxNQUVoQixNQUFNO0FBQUEsUUFDSixNQUFNO0FBQUEsVUFDSixFQUFFLEtBQUssYUFBYSxXQUFXLEdBQUc7QUFBQSxRQUNwQztBQUFBLFFBQ0EsWUFBWSxDQUFDLE9BQU8sSUFBSTtBQUFBLE1BQzFCLENBQUM7QUFBQSxNQUVELFFBQVE7QUFBQSxNQUVSLE9BQU87QUFBQSxNQUVQLFdBQVc7QUFBQSxRQUNULFNBQVM7QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLE1BQU07QUFBQSxVQUVKO0FBQUEsUUFDRjtBQUFBLFFBQ0EsYUFBYTtBQUFBLE1BQ2YsQ0FBQztBQUFBLE1BRUQsV0FBVztBQUFBLFFBQ1QsWUFBWSxDQUFDLE9BQU8sSUFBSTtBQUFBLFFBQ3hCLFNBQVMsQ0FBQyxVQUFVLGNBQWMsT0FBTztBQUFBLFFBQ3pDLFdBQVc7QUFBQSxVQUNULENBQUMsU0FBaUI7QUFDaEIsZ0JBQUksS0FBSyxNQUFNLHFCQUFxQjtBQUNsQyxxQkFBTyxFQUFFLE1BQU0sTUFBTSxRQUFRO0FBQUEsVUFDakM7QUFBQSxRQUNGO0FBQUEsTUFDRixDQUFDO0FBQUEsTUFFRCxTQUFTO0FBQUEsUUFDUCxnQkFBZ0I7QUFBQSxRQUNoQixhQUFhO0FBQUEsUUFDYixnQkFBZ0IsSUFBSTtBQUVsQixhQUFHLElBQUksS0FBSztBQUNaLGFBQUcsSUFBSSxnQkFBZ0I7QUFBQSxZQUNyQixTQUFTLENBQUMsU0FBaUIsZUFBZSxLQUFLLElBQUk7QUFBQSxZQUNuRCxPQUFPO0FBQUEsY0FDTCxRQUFRO0FBQUEsY0FDUixLQUFLO0FBQUEsWUFDUDtBQUFBLFVBQ0YsQ0FBQztBQUFBLFFBQ0g7QUFBQSxNQUNGLENBQUM7QUFBQSxNQUVELFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFRQSxPQUNBLFNBQVMsWUFDTDtBQUFBLE1BQ0UsS0FBSztBQUFBLFFBQ0gsT0FBTyxRQUFRLGtDQUFXLHFCQUFxQjtBQUFBLFFBQy9DLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxNQUNaO0FBQUEsTUFDQSxlQUFlO0FBQUEsUUFDYixVQUFVLENBQUMsS0FBSztBQUFBLFFBQ2hCLFFBQVE7QUFBQSxVQUNOLFNBQVM7QUFBQSxZQUNQLEtBQUs7QUFBQSxVQUNQO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUVGLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxJQUVWO0FBQUEsRUFDTjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
