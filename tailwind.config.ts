import type { Config } from 'tailwindcss';
const config: Config = {darkMode:'class',content:['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'],theme:{extend:{colors:{brand:'#0f5132',emeraldSoft:'#0b7a4b',gold:'#d4af37',cream:'#fffdf5'},boxShadow:{soft:'0 18px 50px rgba(15,81,50,.12)'},fontFamily:{sans:['var(--font-inter)','system-ui','sans-serif'],arabic:['var(--font-amiri)','serif']}}},plugins:[]};
export default config;
