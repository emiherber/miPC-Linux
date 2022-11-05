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
      },
      {
        text: 'Base de datos',
        items: [
          {text: 'Virtual Host', link: 'db/sqlserver'},
          {text: 'Docker', link: 'db/docker'}
        ]
      },
      {
        text: 'Personalizar Ubuntu',
        items: [
          {text: 'Terminal', link: 'ubuntu/terminal'},
        ]
      }
    ]
  }
});