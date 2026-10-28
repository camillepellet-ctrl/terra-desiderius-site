import {writeFile,rename} from 'node:fs/promises';import {pathToFileURL} from 'node:url';import {fromCSV,parseCSV} from '../gallery/sheet.mjs';
export async function syncSheet({url:raw=process.env.SHEETS_CSV_URL,fetcher=fetch,target='gallery/data/preview.json'}={}){
 if(!raw){console.log('Google Sheets non configuré : participants initiaux conservés.');return null;}
 const url=new URL(raw);if(url.protocol!=='https:'||url.hostname!=='docs.google.com'||!url.pathname.startsWith('/spreadsheets/'))throw Error('Utiliser une URL CSV publiée https://docs.google.com/spreadsheets/...');
 const response=await fetcher(url,{signal:AbortSignal.timeout(30000)});if(!response.ok)throw Error('Google Sheets HTTP '+response.status);const csv=await response.text();if(csv.length>2_000_000)throw Error('Feuille trop volumineuse');const growers=fromCSV(csv);const sourceColumns=parseCSV(csv)[0].map(c=>c.trim());const payload={source:'sheets',syncedAt:new Date().toISOString(),sourceColumns,growers};console.log('Colonnes réellement reçues : '+sourceColumns.join(', '));
 await writeFile(target+'.tmp',JSON.stringify(payload,null,2));await rename(target+'.tmp',target);console.log(`${growers.length} lignes importées ; ${growers.filter(g=>g.visible).length} domaines visibles. Aucune version officielle modifiée.`);return payload;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)await syncSheet();
