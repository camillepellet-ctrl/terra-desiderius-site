import {readFile,readdir} from 'node:fs/promises';import assert from 'node:assert/strict';
const imported=JSON.parse(await readFile('gallery/data/preview.json','utf8'));
const generated=JSON.parse(await readFile('dist/galerie/test/data.json','utf8'));
assert.deepEqual(generated,{...imported,channel:'preview'},'Le JSON de galerie ne correspond pas au snapshot importé');
const report=JSON.parse(await readFile('dist/galerie/test/contact-audit.json','utf8'));
assert.equal(report.syncedAt,imported.syncedAt??null);
assert.deepEqual(report.sourceColumns,imported.source==='sheets'?imported.sourceColumns:null);
async function verifyOfficial(path=''){for(const entry of await readdir('gallery/official/'+path,{withFileTypes:true})){const relative=path+entry.name;if(entry.isDirectory())await verifyOfficial(relative+'/');else assert.deepEqual(await readFile('dist/galerie/officielle/'+relative),await readFile('gallery/official/'+relative),'Le snapshot officiel doit rester identique : '+relative);}}
await verifyOfficial();
const g=generated.growers.find(g=>g.name.toLowerCase()==='vins krick');console.log('Import → JSON généré → diagnostic : concordance vérifiée. Snapshot officiel inchangé.');
if(g)console.log('Vins Krick — présence dans le JSON : '+Object.entries({telephone:'phone',email:'email',instagram:'instagram',facebook:'facebook',site_web:'website',adresse:'address'}).map(([column,key])=>column+'='+Boolean(g[key])).join(', '));else console.log('ATTENTION : Vins Krick absent du JSON généré. Vérifier la source et les noms.');
