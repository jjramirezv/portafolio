// Una pequeña terminal para navegar el portafolio. Lo que se escribe nunca se ejecuta como código.
const output = $('#terminal-output'), input = $('#terminal-input');
const scrollOpts = () => ({behavior: reduceMotion ? 'instant' : 'smooth'});

function terminalPrint(text) {
  const p = document.createElement('p');
  p.textContent = text;
  output.append(p);
  trimOutput();
}

function terminalLink(label, href) {
  const p = document.createElement('p'), a = document.createElement('a');
  a.href = href;
  if (!href.startsWith('mailto')) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
  a.textContent = label;
  a.style.color = 'var(--lime)';
  p.append(a);
  output.append(p);
  trimOutput();
}

function trimOutput() {
  while (output.childElementCount > 16) output.firstElementChild.remove();
  output.scrollTop = output.scrollHeight;
}

function go(id) { $(id).scrollIntoView(scrollOpts()); }

function runCommand(value) {
  const command = value.trim().toLowerCase().replace(/\s+/g, ' ');
  if (!command) return;
  terminalPrint('$ ' + command);
  input.value = '';
  const en = lang === 1;
  switch (command) {
    case 'help':
      terminalPrint('projects · awards · hackathons · lab · certs · about · stack · contact');
      terminalPrint('email · whatsapp · linkedin · github · instagram · lang · clear');
      break;
    case 'projects': case 'ls':
      terminalPrint(en ? `${projects.length} projects. Opening explorer…` : `${projects.length} proyectos. Abriendo explorador…`);
      go('#projects'); break;
    case 'hackathons': case 'concursos':
      hackathons.forEach(h => terminalPrint(`⚡ ${h.event} → ${h.project}`));
      go('#hackathons'); break;
    case 'awards': case 'premios':
      awards.forEach(a => terminalPrint(`🥇 ${en ? '1st place' : '1.er puesto'} · ${a.event} (${t(a.date)})`));
      go('#hackathons'); break;
    case 'certs': case 'certificados':
      terminalPrint(en ? `${certs.length} certifications. Opening…` : `${certs.length} certificaciones. Abriendo…`);
      go('#certs'); break;
    case 'lab': case 'research':
      terminalPrint(en ? 'AI, IoT & research. Opening lab…' : 'IA, IoT e investigación. Abriendo lab…');
      go('#lab'); break;
    case 'about': case 'whoami':
      terminalPrint(en ? 'Jelibeth Ramírez · Web developer · Systems Engineering @ UNCP' : 'Jelibeth Ramírez · Desarrolladora web · Ing. de Sistemas @ UNCP');
      go('#about'); break;
    case 'stack':
      terminalPrint(stack.join(' · ')); break;
    case 'contact':
      terminalLink('✉ ' + CONTACT.email, 'mailto:' + CONTACT.email);
      terminalLink('☎ ' + CONTACT.phoneLabel + ' (WhatsApp)', waLink());
      go('#contact'); break;
    case 'email': terminalLink(CONTACT.email, 'mailto:' + CONTACT.email); break;
    case 'whatsapp': case 'phone': terminalLink(CONTACT.phoneLabel, waLink()); break;
    case 'linkedin': terminalLink('linkedin.com/in/jelibethramirezvilchez', CONTACT.linkedin); break;
    case 'github': terminalLink('github.com/jjramirezv', CONTACT.github); break;
    case 'instagram': terminalLink('instagram.com/jelibeth356', CONTACT.instagram); break;
    case 'sudo hire jelibeth': case 'hire':
      terminalPrint(en ? 'Permission granted ✓ Redirecting to contact…' : 'Permiso concedido ✓ Te llevo a contacto…');
      go('#contact'); break;
    case 'lang':
      lang = 1 - lang; setLanguage();
      terminalPrint(lang ? 'Language: English' : 'Idioma: español'); break;
    case 'clear': output.replaceChildren(); break;
    default:
      terminalPrint(en ? 'Unknown command. Type help.' : 'Comando no disponible. Escribe help.');
  }
}

$('#terminal-form').addEventListener('submit', e => { e.preventDefault(); runCommand(input.value); });
$$('[data-command]').forEach(b => b.addEventListener('click', () => runCommand(b.dataset.command)));

setLanguage();
