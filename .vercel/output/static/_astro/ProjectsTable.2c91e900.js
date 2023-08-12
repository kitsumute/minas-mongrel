import{r as d}from"./index.ed373d49.js";import{j as e}from"./jsx-runtime.391947bd.js";const g=[{id:1,title:"Nick Land – Drapieżne Noumeny",publisher:"KRONOS",type:"Translation",date:"Forthcoming",url:"",lang:"pl"},{id:2,title:"Autumn Christian – Łabędzie szyje jak miecze",publisher:"papierwdole",type:"Translation",date:"Forthcoming",url:"",lang:"pl"},{id:3,title:"Arachnoeskapizm Kathy Acker. Esejorecenzja",publisher:"Stoner Polski",type:"Essay",date:"2023",url:"",lang:"pl"},{id:4,title:"The Future is Nowhere. Alienation, Autonomy & Suspended Futurisation of Poland",publisher:"Unsound",type:"Workshop",date:"2022",url:"",lang:"en"},{id:5,title:"0°DLL",publisher:"Biuro Literackie",type:"Poetry",date:"2022",url:"https://www.biuroliterackie.pl/biblioteka/utwory/0dll/",lang:"pl"},{id:6,title:"Rewolucja zaczyna się od rokoszu lemurów",publisher:"Biuro Literackie",type:"Interview",date:"2022",url:"https://www.biuroliterackie.pl/biblioteka/utwory/0dll/",lang:"pl"},{id:7,title:"Sprawność",publisher:"Stoner Polski",type:"Short Story",date:"2022",url:"",lang:"pl"},{id:8,title:"Automation and Catastrophe",publisher:"Plutonics :(::)",type:"Essay",date:"2021",url:"https://plutonicsjournal.com/volume-14/",lang:"en"},{id:9,title:"Nick Land – Pośpieszne wprowadzenie do akceleracjonizmu",publisher:"HOMAR",type:"Translation",date:"2021",url:"https://homar.blog/blog/aNmvlywczZNEFbjVkOC6",lang:"pl"},{id:10,title:"Akceleracjonizm – wprowadzenie",publisher:"Filozofia Tak Bardzo",type:"Talk",date:"2021",url:"https://www.youtube.com/live/LZ05D9pgw54?feature=share",lang:"pl"},{id:11,title:"Automatyka i katastrofa",publisher:"Stoner Polski",type:"Essay",date:"2021",url:"",lang:"pl"},{id:12,title:"<untitled>",publisher:"Strona Czynna",type:"Poetry",date:"2021",url:"https://www.yumpu.com/en/document/view/65873642/strona-czynna-7-21",lang:"pl"},{id:13,title:"Cybercafe",publisher:"Unsound",type:"Installation",date:"2021",url:"https://homar.blog/blog/NOFeenmyCOXGflfdtJVN",lang:"en"},{id:14,title:"Mark Fisher - k-punk, albo art pop dyskontinuum glampunku",publisher:"HOMAR",type:"Translation",date:"2020",url:"https://homar.blog/blog/iNPGjdOh5l6XBZJ0ZfBK",lang:"pl"},{id:15,title:"Luciana Parisi - Przeprogramowywanie Decyzjonizmu",publisher:"HOMAR",type:"Translation",date:"2020",url:"https://homar.blog/blog/21UbhbpoEOGLYYJuDryV",lang:"pl"},{id:16,title:"Co po krytyce? Kapitalizm i wyczerpanie teorii krytycznej. Cz. 1",publisher:"HOMAR",type:"Talk",date:"2020",url:"https://www.youtube.com/watch?v=MIuE0VX1JxY",lang:"pl"},{id:17,title:"Elektryczne Futro",publisher:"self-published",type:"Zine",date:"2019",url:"https://www.behance.net/gallery/96172933/elektryczne-futro-electric-fur-zine",lang:"pl"},{id:18,title:"Sadie Plant & Nick Land – Cyberdodatnie",publisher:"HOMAR",type:"Translation",date:"2019",url:"https://homar.blog/blog/MfYdfUYyIKecAD6CBEgZ",lang:"pl"},{id:19,title:"Syntetyczna Intymność",publisher:"Brutaż",type:"Club/Installation",date:"2019",url:"https://homar.blog/blog/seUhMFh7yvtprhWoLKcl",lang:"pl"},{id:20,title:"Outro Cuteness",publisher:"Galeria Arsenał",type:"Online Installation",date:"2018",url:"https://homar.blog/outrocuteness",lang:"en"},{id:21,title:"K-punk: Mark Fisher",publisher:"Unsound",type:"Reading group",date:"2018",url:"",lang:"en"},{id:22,title:"Xeno-sexuality arrives from the future",publisher:"HOMAR",type:"Manifesto",date:"2018",url:"https://homar.blog/manifesto/",lang:"en"},{id:23,title:"Na podwórka #2",publisher:"KRAKERS",type:"Installation",date:"2018",url:"",lang:"pl"},{id:24,title:"Overcoding capitalism. Accelerating appropriation",publisher:"UJ",type:"Conference Paper",date:"2016",url:"",lang:"en"},{id:25,title:"Culture is an arche-fossil",publisher:"Przegląd Kulturoznawczy",type:"Research Paper",date:"2016",url:"https://www.ejournals.eu/Przeglad-Kulturoznawczy/2016/Numer-3-29-2016/art/8540/",lang:"en"},{id:26,title:"Społeczeństwo wspólnej traumy",publisher:"AGH",type:"Research Paper",date:"2015",url:"https://www.academia.edu/30070622/SPO%C5%81ECZE%C5%83STWO_WSP%C3%93LNEJ_TRAUMY",lang:"pl"},{id:27,title:"Culture is an arche-fossil",publisher:"UJ",type:"Conference Paper",date:"2015",url:"",lang:"pl"},{id:28,title:"Orgia Pasoliniego",publisher:"Romanowicza 4",type:"Theatre",date:"2014",url:"",lang:"pl"}],n=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 256 256",children:e.jsx("path",{d:"M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z",fill:"#4F4F4F"})});function j(){const c=g,[r,u]=d.useState("ALL"),[p,h]=d.useState({column:"date",order:"desc"}),m=c.filter(l=>r==="ALL"?!0:l.lang===r).sort((l,t)=>{const a=p.column,s=p.order;return a==="title"?s==="asc"?l.title.localeCompare(t.title):t.title.localeCompare(l.title):a==="publisher"?s==="asc"?l.publisher.localeCompare(t.publisher):t.publisher.localeCompare(l.publisher):a==="media"?s==="asc"?l.type.localeCompare(t.type):t.type.localeCompare(l.type):a==="date"?s==="asc"?l.date.localeCompare(t.date):t.date.localeCompare(l.date):0}),o=l=>{u(l)},i=l=>{h(t=>{if(t.column===l){const a=t.order==="asc"?"desc":"asc";return{column:l,order:a}}else return{column:l,order:"asc"}})};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"project-table","data-pagefind-ignore":!0,children:[e.jsxs("div",{className:"table__lang",children:[e.jsx("div",{className:"headline",children:"Lang"}),e.jsx("hr",{}),e.jsxs("div",{className:"lang-list",children:[e.jsx("span",{className:`project-cell-small lang-cell ${r==="ALL"?"active":""}`,onClick:()=>o("ALL"),children:"ALL"}),e.jsx("span",{className:`project-cell-small lang-cell ${r==="pl"?"active":""}`,onClick:()=>o("pl"),children:"PL"}),e.jsx("span",{className:`project-cell-small lang-cell ${r==="en"?"active":""}`,onClick:()=>o("en"),children:"EN"})]})]}),e.jsxs("div",{className:"table-main",children:[e.jsxs("div",{className:"row row-headline",children:[e.jsxs("div",{className:"headline projects-row-title headline-border",onClick:()=>i("title"),children:["Title",e.jsx(n,{})]}),e.jsxs("div",{className:"headline projects-row-publisher headline-border",onClick:()=>i("publisher"),children:["Publisher",e.jsx(n,{})]}),e.jsxs("div",{className:"headline projects-row-media headline-border",onClick:()=>i("media"),children:["Media",e.jsx(n,{})]}),e.jsxs("div",{className:"headline projects-row-date headline-border",onClick:()=>i("date"),children:["Date",e.jsx(n,{})]}),e.jsx("hr",{className:"project-writings-hr"})]}),e.jsx("ul",{className:"table",children:m.map(l=>e.jsxs("li",{className:"row",children:[e.jsx("span",{className:"projects-row-title project-cell-title",children:l.url?e.jsx("a",{href:l.url,target:"_blank",rel:"noopener noreferrer",children:l.title}):l.title}),e.jsx("span",{className:"projects-row-publisher project-cell-small",children:l.publisher}),e.jsx("span",{className:"projects-row-media project-cell-small",children:l.type}),e.jsx("span",{className:"projects-row-date project-cell-small",children:l.date}),e.jsx("hr",{className:"in-project-line"})]},l.id))})]})]})})}export{j as default};
