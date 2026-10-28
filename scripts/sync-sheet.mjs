import {readFile,writeFile,rename} from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
import {fromCSV,parseCSV,columns} from '../gallery/sheet.mjs';

export function resolveSheetURL(raw,gid){
 const url=new URL(raw);
 if(url.protocol!=='https:'||url.hostname!=='docs.google.com'||url.username||url.password||!url.pathname.startsWith('/spreadsheets/'))throw Error('Utiliser une URL CSV publiée https://docs.google.com/spreadsheets/...');
 if(url.searchParams.has('range')||url.searchParams.has('tq'))throw Error('L’URL limite les cellules exportées (range ou tq). Utiliser le CSV de l’onglet complet pour inclure les colonnes après J.');
 if(gid!==undefined&&gid!==null&&gid!==''){if(!/^\d+$/.test(String(gid)))throw Error('SHEETS_GID doit être le nombre figurant dans l’URL de l’onglet');url.searchParams.set('gid',String(gid));url.searchParams.set('single','true');}
 if(url.pathname.endsWith('/pubhtml'))url.pathname=url.pathname.replace(/pubhtml$/,'pub');
 if(url.pathname.endsWith('/pub'))url.searchParams.set('output','csv');
 if(url.pathname.endsWith('/export'))url.searchParams.set('format','csv');
 if(url.pathname.endsWith('/edit'))throw Error('Utiliser le lien publié CSV, pas le lien /edit');
 return url;
}

export async function syncSheet({url:raw=process.env.SHEETS_CSV_URL,gid=process.env.SHEETS_GID,fetcher=fetch,target='gallery/data/preview.json',configPath='gallery/sheets-config.json',summaryPath}={}){
 let config={};try{config=JSON.parse(await readFile(configPath,'utf8'));}catch(error){if(error.code!=='ENOENT')throw error;}
 const sourceConfig=raw?'SHEETS_CSV_URL':'gallery/sheets-config.json';
 raw=raw||config.csvUrl;if(!raw){console.log('Google Sheets non configuré : participants initiaux conservés.');return null;}
 const url=resolveSheetURL(raw,gid!==undefined&&gid!==''?gid:config.gid);const tab=url.searchParams.get('gid');
 console.log('Source CSV effective : '+url.href);console.log('Sélection d’onglet gid : '+(tab??'NON DÉFINIE — vérifier le premier onglet publié'));
 const response=await fetcher(url,{signal:AbortSignal.timeout(30000),cache:'no-store',headers:{'Cache-Control':'no-cache'}});
 if(!response.ok)throw Error('Google Sheets HTTP '+response.status);
 const csv=await response.text();if(csv.length>2_000_000)throw Error('Feuille trop volumineuse');
 // Print headers before validation so failed imports can be diagnosed too.
 const sourceColumns=(parseCSV(csv)[0]??[]).map(c=>c.trim());console.log(`Colonnes réellement reçues (${sourceColumns.length}) : `+sourceColumns.join(', '));
 const ignored=sourceColumns.filter(c=>c&&!columns.includes(c));if(ignored.length)console.log('Colonnes supplémentaires ignorées (sans importer leur contenu) : '+ignored.join(', '));
 const growers=fromCSV(csv);
 const payload={source:'sheets',syncedAt:new Date().toISOString(),sourceUrl:url.href,sourceTabId:tab,sourceConfig,sourceCsvSha256:createHash('sha256').update(csv).digest('hex'),syncRunId:process.env.GITHUB_RUN_ID??null,sourceColumns,growers};
 await writeFile(target+'.tmp',JSON.stringify(payload,null,2));await rename(target+'.tmp',target);
 if(summaryPath){const header=['\n### Import Google Sheets (avant déploiement)',`- Source : ${url.href}`,`- Onglet gid : ${tab??'NON DÉFINI'}`,`- Import UTC : ${payload.syncedAt}`,`- Colonnes reçues : ${sourceColumns.length}`,`- Empreinte CSV : ${payload.sourceCsvSha256}`,`- Colonnes : ${sourceColumns.map(c=>'`'+c.replaceAll('`','')+'`').join(', ')}`];const krick=growers.find(g=>g.name.toLowerCase()==='vins krick');if(krick){header.push('- Vins Krick : '+Object.entries({adresse:'address',telephone:'phone',email:'email',site_web:'website',instagram:'instagram',facebook:'facebook',google_maps:'maps'}).map(([col,key])=>col+' = '+(krick[key]?'renseigné':sourceColumns.includes(col)?'cellule vide':'colonne absente')).join(' ; '));}else header.push('- Vins Krick : ligne non trouvée dans cet export.');await writeFile(summaryPath,(await readFile(summaryPath,'utf8').catch(()=>''))+header.join('\n')+'\n');}
 console.log(`${growers.length} lignes importées ; ${growers.filter(g=>g.visible).length} domaines visibles. Aucune version officielle modifiée.`);return payload;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)await syncSheet({summaryPath:process.env.GITHUB_STEP_SUMMARY});
