import { defineConfig } from 'dumi'
import path from 'path'

const alias = {
  '@trionesdev/formily-antd': path.join(__dirname, 'packages/components/src'),
}

export default defineConfig({
  outputPath: './doc-site',
  hash: true,
  favicons: [
    '//img.alicdn.com/imgextra/i3/O1CN01XtT3Tv1Wd1b5hNVKy_!!6000000002810-55-tps-360-360.svg',
  ],
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '中文' },
  ],
  resolve: {
    docDirs: ['docs'],
  },
  alias,
  themeConfig: {
    name: 'Formily Antd',
    logo: '//img.alicdn.com/imgextra/i2/O1CN01Kq3OHU1fph6LGqjIz_!!6000000004056-55-tps-1141-150.svg',
    nav: {
      'en-US': [
        {
          title: 'Ant Design',
          link: '/components',
        },
        {
          title: 'Home Site',
          link: 'https://formilyjs.org',
        },
        {
          title: 'GITHUB',
          link: 'https://github.com/formilyjs/antd',
        },
      ],
      'zh-CN': [
        {
          title: 'Ant Design',
          link: '/zh-CN/components',
        },
        {
          title: '主站',
          link: 'https://v2.formilyjs.org/',
        },
        {
          title: 'GITHUB',
          link: 'https://github.com/formilyjs/antd',
        },
      ],
    },
    footer:
      'Open-source MIT Licensed | Copyright © 2019-present<br />Powered by self',
    prefersColor: { default: 'light', switch: false },
  },
  styles: [
    `
    .dumi-default-logo img {
      height: 60px !important;
      width: 150px !important;
      object-fit: contain;
    }
    .dumi-default-logo {
      color: transparent !important;
      font-size: 0 !important;
    }
    .dumi-default-header-content {
      padding: 0 28px !important;
      max-width: none !important;
    }
    .dumi-default-hero {
      background-image: url(//img.alicdn.com/imgextra/i4/O1CN01ZcvS4e26XMsdsCkf9_!!6000000007671-2-tps-6001-4001.png) !important;
      background-size: cover !important;
      background-repeat: no-repeat !important;
      padding-top: 160px !important;
      height: auto !important;
      min-height: 520px !important;
      margin-bottom: 48px !important;
    }
    .dumi-default-hero::before {
      display: none !important;
    }
    .dumi-default-hero-title,
    .dumi-default-hero-title > span {
      color: #45124e !important;
      background: none !important;
      -webkit-text-fill-color: #45124e !important;
      font-size: 80px !important;
      line-height: 1.1 !important;
    }
    .dumi-default-hero > p {
      color: #45124e !important;
      opacity: 0.85;
    }
    .dumi-default-navbar a {
      text-decoration: none !important;
    }
    .dumi-default-features-item:nth-child(1)::before,
    .dumi-default-features-item:nth-child(2)::before,
    .dumi-default-features-item:nth-child(3)::before {
      content: '';
      display: block;
      width: 80px;
      height: 80px;
      margin-bottom: 12px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    .dumi-default-features-item:nth-child(1)::before {
      background-image: url(https://img.alicdn.com/imgextra/i2/O1CN016i72sH1c5wh1kyy9U_!!6000000003550-55-tps-800-800.svg);
    }
    .dumi-default-features-item:nth-child(2)::before {
      background-image: url(https://img.alicdn.com/imgextra/i1/O1CN01bHdrZJ1rEOESvXEi5_!!6000000005599-55-tps-800-800.svg);
    }
    .dumi-default-features-item:nth-child(3)::before {
      background-image: url(https://img.alicdn.com/imgextra/i3/O1CN01xlETZk1G0WSQT6Xii_!!6000000000560-55-tps-800-800.svg);
    }
    `,
  ],
})
