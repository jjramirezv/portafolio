// A small, local portfolio navigator. Input is never executed as code.
Object.assign(dictionary,{
hero:['Escribo código.<br>Construyo <em>ideas.</em>','I write code.<br>I build <em>ideas.</em>'],
intro:['Soy Jelibeth. Desarrollo plataformas educativas, herramientas de gestión y experiencias web que convierten una idea en algo que puedes explorar.','I’m Jelibeth. I develop learning platforms, management tools, and web experiences that turn an idea into something you can explore.'],
explore:['Explorar proyectos()','Explore projects()'],github:['GitHub / código','GitHub / code'],
selected:['01 / PROJECT EXPLORER','01 / PROJECT EXPLORER'],projectsTitle:['Mi código.<br>En el mundo real.','My code.<br>In the real world.'],
aboutLabel:['02 / README.md','02 / README.md'],aboutTitle:['La persona<br>detrás del <em>código.</em>','The person<br>behind the <em>code.</em>'],
continue:['03 / NEXT COMMIT','03 / NEXT COMMIT'],closing:['Siempre aprendiendo.<br>Siempre <em>construyendo.</em>','Always learning.<br>Always <em>building.</em>'],terminalWelcome:['Prueba help, projects o about.','Try help, projects, or about.']
});
const output=document.querySelector('#terminal-output'),input=document.querySelector('#terminal-input');
function terminalPrint(text){const p=document.createElement('p');p.textContent=text;output.append(p);while(output.childElementCount>16)output.firstElementChild.remove();output.scrollTop=output.scrollHeight;}
function runCommand(value){const command=value.trim().toLowerCase();if(!command)return;terminalPrint('$ '+command);input.value='';const en=lang===1;
switch(command){
case 'help':terminalPrint('projects · about · stack · github · lang · clear');break;
case 'projects':terminalPrint(en?'9 projects. Opening explorer…':'9 proyectos. Abriendo explorador…');document.querySelector('#projects').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});break;
case 'about':case 'whoami':terminalPrint('Jelibeth Ramírez / @jjramirezv / Web developer');document.querySelector('#about').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});break;
case 'stack':terminalPrint('JavaScript · PHP · Python');break;
case 'github':{const p=document.createElement('p'),a=document.createElement('a');a.href='https://github.com/jjramirezv';a.target='_blank';a.rel='noopener noreferrer';a.textContent='github.com/jjramirezv';a.style.color='var(--lime)';p.append(a);output.append(p);output.scrollTop=output.scrollHeight;break;}
case 'lang':lang=1-lang;setLanguage();terminalPrint(lang?'Language: English':'Idioma: español');break;
case 'clear':output.replaceChildren();break;
default:terminalPrint(en?'Unknown command. Type help.':'Comando no disponible. Escribe help.');
}}
document.querySelector('#terminal-form').addEventListener('submit',e=>{e.preventDefault();runCommand(input.value);});document.querySelectorAll('[data-command]').forEach(b=>b.addEventListener('click',()=>runCommand(b.dataset.command)));
const avatar=document.createElement('img');avatar.className='about-avatar';avatar.src='https://avatars.githubusercontent.com/u/229256572?v=4';avatar.alt='Jelibeth Ramírez';avatar.width=68;avatar.height=68;avatar.loading='lazy';document.querySelector('.about>div').append(avatar);
setLanguage();
