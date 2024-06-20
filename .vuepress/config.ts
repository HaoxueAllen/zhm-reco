import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
// import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import {series} from './configs/series'
import { password } from "./configs/password";
import { navbar } from "./configs/navbar";
import { bulletin } from "./configs/bulletin";
import { commentConfig } from "./configs/valine";

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
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    repo: 'haoxueallen/zhm-reco',
    docsBranch: "main",
    docsDir: "/",
    lastUpdatedText: "",
    password: password,
    // autoSetSeries: true,
    series: series,
    navbar: navbar,
    bulletin: bulletin,
    commentConfig:commentConfig,
  }),
  debug: true,
});
