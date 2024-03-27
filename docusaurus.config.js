// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '出分啦',
    tagline: '由 NPC 信息社运营的全新查分助手！',
    url: 'https://matrix.npcstation.com/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/died.ico',
    organizationName: 'GoForceX', // Usually your GitHub org/user name.
    projectName: 'bjbybbs-matrix', // Usually your repo name.
    themes: [
        [
            require.resolve('@easyops-cn/docusaurus-search-local'),
            {
                hashed: true,
                language: ['zh', 'en'],
                translations: {
                    search_placeholder: '搜索',
                    see_all_results: '查看所有结果',
                    no_results: '没有匹配的结果',
                    search_results_for: '"{{ keyword }}" 的全部搜索结果',
                    search_the_documentation: '在文档中查找',
                    count_documents_found: '找到了 {{ count }} 篇文章',
                    no_documents_were_found: '没有匹配的文档',
                },
            },
        ],
    ],
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    plugins: ['docusaurus-plugin-matomo'],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: '出分啦',
                logo: {
                    alt: '寄！',
                    src: 'img/died.jpg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'landing',
                        position: 'left',
                        label: '帮助页',
                    },
                    // {to: '/blog', label: 'Blog', position: 'left'},
                    // {
                    //   href: 'https://github.com/facebook/docusaurus',
                    //   label: 'GitHub',
                    //   position: 'right',
                    // },
                ],
            },
            footer: {
                style: 'dark',
                /*
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
        */
                copyright: `Copyright © ${new Date().getFullYear()} GoForceX & NPC Station. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            matomo: {
                matomoUrl: 'https://matomo.goforcex.top/',
                siteId: '4',
                phpLoader: 'matomo.php',
                jsLoader: 'matomo.js',
            },
        }),
};

module.exports = config;
