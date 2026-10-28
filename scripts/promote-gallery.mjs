import {readFile,writeFile,rm,mkdir,access} from 'node:fs/promises';
if(process.env.CONFIRM_PUBLISH!=='PUBLIER')throw Error('Validation explicite requise : CONFIRM_PUBLISH=PUBLIER');
// Promote the previously deployed preview bundle, never a newly fetched sheet.
const dir=process.env.PREVIEW_BUNDLE;
if(!dir)throw Error('PREVIEW_BUNDLE doit désigner la version de test effectivement validée.');
const data=JSON.parse(await readFile(dir+'/data.json','utf8'));if(data.channel!=='preview'||!Array.isArray(data.growers))throw Error('Snapshot de test invalide');
const files=['index.html','gallery.css','gallery.js'];try{await access(dir+'/validation.js');files.push('validation.js');}catch(error){if(error.code!=='ENOENT')throw error;}
const bundle=Object.fromEntries(await Promise.all(files.map(async file=>[file,await readFile(dir+'/'+file)])));
await rm('gallery/official',{recursive:true,force:true});await mkdir('gallery/official',{recursive:true});for(const [file,contents] of Object.entries(bundle))await writeFile('gallery/official/'+file,contents);await writeFile('gallery/official/data.json',JSON.stringify({...data,channel:'official',publishedAt:new Date().toISOString()},null,2));console.log('Version test validée figée dans gallery/official ; aucune intégration Google Sites modifiée.');
