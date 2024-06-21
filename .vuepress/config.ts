import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
// import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import {series} from './configs/series'
import { password } from "./configs/password";
import { navbar } from "./configs/navbar";
import { bulletin } from "./configs/bulletin";
import { commentConfig } from "./configs/valine";
import {commentsPlugin} from "@vuepress-reco/vuepress-plugin-comments"
import { algolia } from "./configs/search";

export default defineUserConfig({
  title: "zhm-reco",
  description: "zhm-reco project",
  bundler: webpackBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "HaoxueAllen",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/haoxueallen/zhm-reco",
    repo: 'haoxueallen/zhm-reco',
    docsBranch: "master",
    docsDir: "/",
    lastUpdatedText: "",
    algolia: algolia,
    // password: password,
    // autoSetSeries: true,
    series: series,
    navbar: navbar,
    bulletin: bulletin,
    commentConfig: commentConfig,
  }),

  // plugins: [
  //   commentsPlugin,
  // ],
  // debug: true,
});
