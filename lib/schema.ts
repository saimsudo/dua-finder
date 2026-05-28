import { site } from './site';
import type { Dua } from '@/data/duas';
export const organizationSchema = { '@context':'https://schema.org','@type':'Organization',name:site.name,url:site.url,logo:`${site.url}/logo.png` };
export const websiteSchema = { '@context':'https://schema.org','@type':'WebSite',name:site.name,url:site.url,potentialAction:{'@type':'SearchAction',target:`${site.url}/search?q={search_term_string}`,'query-input':'required name=search_term_string'}};
export function duaSchema(dua:Dua){return {'@context':'https://schema.org','@type':'Article',headline:dua.title,description:dua.metaDescription,datePublished:dua.createdAt,dateModified:dua.updatedAt,author:{'@type':'Organization',name:site.name},mainEntityOfPage:`${site.url}/dua/${dua.slug}`}}
export function faqSchema(faqs:{question:string;answer:string}[]){return {'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(f=>({'@type':'Question',name:f.question,acceptedAnswer:{'@type':'Answer',text:f.answer}}))}}
export function breadcrumbSchema(items:{name:string;url:string}[]){return {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:items.map((i,idx)=>({'@type':'ListItem',position:idx+1,name:i.name,item:i.url}))}}
