// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yale UI',
  tagline: 'Yale UI for React',
  url: 'https://react.ui.yalejian.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Yale Jian', // Usually your GitHub org/user name.
  projectName: 'Yale UI', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: 'guide',
          path: 'docs/guide',
          routeBasePath: 'guide',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'demo',
        path: 'docs/demo',
        routeBasePath: 'demo',
        sidebarPath: require.resolve('./sidebars.js')
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'design',
        path: 'docs/design',
        routeBasePath: 'design',
        sidebarPath: require.resolve('./sidebars.js')
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'components',
        path: 'docs/components',
        routeBasePath: 'components',
        sidebarPath: require.resolve('./sidebars.js')
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Yale UI',
        logo: {
          alt: 'Yale UI Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            docsPluginId:'guide',
            type: 'doc',
            docId: '快速上手',
            position: 'left',
            label: '快速上手',
          },
          {
            docsPluginId:'design',
            type: 'doc',
            docId: '介绍',
            position: 'left',
            label: '通用设计',
          },
          {
            docsPluginId:'components',
            type: 'doc',
            docId: '组件',
            position: 'left',
            label: '组件',
          },
          {
            docsPluginId:'demo',
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Demo',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/YaleJian',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Yale Jian`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
