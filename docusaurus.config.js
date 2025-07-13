// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
const path = require('path');
const math = require('remark-math');
const katex = require('rehype-katex');

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VRC School',
  tagline: 'Everything you need to know to make VRChat Avatar Systems',
  favicon: 'img/favicon.svg',

  plugins: [path.resolve(__dirname, 'src/plugins/gather-files.js'), 'plugin-image-zoom'],

  // Set the production url of your site here
  url: 'https://vrcschool.porop.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'poropopo', // Usually your GitHub org/user name.
  projectName: 'VRCSchool-jp', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/poropopo/VRCSchool-jp/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'og:title', content: 'VRC School' },
        { name: 'og:type', content: 'website'},
        { name: 'og:url', content: 'https://vrc.school'},
        { name: 'og:description', content: 'Everything you need to know to make VRChat Avatar Systems'},
        { name: 'theme-color', content: '#308BF2'}
      ],

      image: 'img/embed.png',
      navbar: {
        title: 'VRC School',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'sideBar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/VRLabs/VRCSchool',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'VRLabs',
            items: [
              {
                label: 'Website',
                href: 'https://vrlabs.dev'
              },
              {
                label: 'Discord',
                href: 'https://discord.vrlabs.dev'
              },
              {
                label: 'Github',
                href: 'https://github.com/VRLabs'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/vrlabsdev'
              }
            ],
          },
          {
            title: 'JustSleightly',
            items: [
              {
                label: 'Links',
                href: 'https://links.sleightly.dev/'
              },
              {
                label: 'Discord',
                href: 'https://discord.sleightly.dev'
              },
              {
                label: 'Store',
                href: 'https://store.sleightly.dev'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.sleightly.dev'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/VRLabs/VRCSchool',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} VRLabs, Inc  & JustSleightly. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      imageZoom: {
        // CSS selector to apply the plugin to, defaults to '.markdown img'
        selector: '.markdown img',
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        options: {
          background: '#0D0D0D',
        },
      },
    }),
};

export default config;
