import { duas } from '@/data/duas';
export function sanitizeQuery(q:string){return q.replace(/[<>"'`;{}]/g,'').trim().slice(0,80)}
export function searchDuas(query:string){const q=sanitizeQuery(query).toLowerCase(); if(!q) return []; return duas.filter(d=>[d.title,d.category,d.situation,d.arabic,d.transliteration,d.englishTranslation,d.urduTranslation,...d.tags].join(' ').toLowerCase().includes(q)).slice(0,20)}
