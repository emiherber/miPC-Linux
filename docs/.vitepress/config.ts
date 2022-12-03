import { defineConfig } from "vitepress";

export default defineConfig ({
  title: 'Utilidades',
  description: 'Herramientas que instalo y configuro al instalar ubuntu.',
  lang: 'es-AR',
  appearance: true,
  base: '/miPC-Linux/',
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: 'Última actualización',
    docFooter: {
      prev: 'Pagina anterior',
      next: 'Proxima pagina'
    },
    nav: [
      {text: 'Inicio', link: '/'}
    ],
    sidebar: [
      {
        text: 'Personalizar Ubuntu',
        collapsible: true,
        items: [
          {text: 'Terminal', link: '/ubuntu/terminal'},
          {text: 'NVM', link: '/ubuntu/nvm'},
        ]
      },
      {
        text: 'Desarrollo PHP',
        collapsible: true,
        items: [
          {text: 'Docker', link: '/php/docker'},
          {text: 'Virtual Host', link: '/php/virtualhost'},
        ]
      },
      {
        text: 'Desarrollo Flutter',
        collapsible: true,
        items: [
          {text: 'Configurar Android studio', link: '/flutter/androidstudio'},
        ]
      },
      {
        text: 'Base de datos',
        collapsible: true,
        items: [
          {text: 'Scripts Generales', link: '/db/sqlserver'},
          {text: 'Docker', link: '/db/docker'}
        ]
      }
    ]
  }
});