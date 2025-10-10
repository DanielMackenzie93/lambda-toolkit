import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Lambda Toolkit',
  tagline: 'Shared AWS CDK TypeScript utilities by Leighton',
  favicon:
    'https://cdn.prod.website-files.com/673b05e9b4f6306838c02cd7/673db2ea588656e73cdd710f_Favicon.png',

  future: {
    v4: true,
  },

  // GitHub Pages deployment
  url: 'https://leighton.github.io', // Your org's GitHub Pages URL
  baseUrl: '/lambda-toolkit', // Repo name as base path

  // GitHub repo info
  organizationName: 'Leighton', // GitHub org/user
  projectName: 'lambda-toolkit', // Repo name

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  stylesheets: [
    {
      href: 'https://fonts.cdnfonts.com/css/montserrat',
      type: 'text/css',
    },
    {
      href: 'https://fonts.cdnfonts.com/css/euclid-circular-a',
      type: 'text/css',
    },
  ],

  markdown: {
    parseFrontMatter: async (params) => {
      const res = await params.defaultParseFrontMatter(params);
      if (res.frontMatter.hide_title === undefined) {
        res.frontMatter.hide_title = true;
      }
      return res;
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          // Point to the folder where your TypeDoc Markdown (or curated docs) live
          path: '../docs/reference',
          routeBasePath: '/', // Serve docs at site root
          sidebarPath: './sidebars.ts',
        },
        blog: false, // Disable blog entirely
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/lambda-toolkit-logo.png', // Optional: update with your social image
    navbar: {
      title: 'Lambda Toolkit',
      logo: {
        alt: 'Lambda Toolkit Logo',
        src: 'img/lambda-toolkit-logo.png', // Put your logo in docs-site/static/img/
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'reference', // Must match the id exported in sidebars.ts
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/Leighton/lambda-toolkit',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [{ label: 'Documentation', to: '/' }],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/Leighton/lambda-toolkit/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Leighton. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    plugins: [
      [
        'docusaurus-plugin-typedoc',

        // Options
        {
          entryPoints: ['../src/'],
          docsPath: '../docs/reference',
          tsconfig: '../tsconfig.json',
        },
      ],
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
