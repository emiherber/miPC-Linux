import { defineConfig } from "vitepress";

export default defineConfig ({
  title: 'Utilidades',
  description: 'Herramientas que instalo y configuro al instalar ubuntu.',
  lang: 'es-AR',
  appearance: true,
  base: '/miPC-Linux/',
  themeConfig: {
    nav: [
      {text: 'Inicio', link: '/'}
    ],
    sidebar: [
      {
        text: 'Desarrollo PHP',
        items: [
          {text: 'Virtual Host', link: 'php/virtualhost'},
          {text: 'Docker', link: 'php/docker'}
        ]
      }
    ]
  }
});