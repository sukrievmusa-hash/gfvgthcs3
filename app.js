/* =========================================================
   Nur Aspan — сайт. Всё, что нужно менять, — в CONFIG.
   ========================================================= */
const CONFIG = {
  wa: '77070603301',          // основной WhatsApp (заявки)
  rateWa: '77070603301',      // куда уходят оценки бригад (лучше — личный номер руководителя)
  instagram: 'https://www.instagram.com/nur_aspan_taraz/',
  facebook: 'https://www.facebook.com/search/top?q=NurAspan%20Taraz',
  gis: 'https://2gis.kz/taraz/search/Nur%20Aspan',

  /* ЦЕНЫ (₸), монтаж включён. ОРИЕНТИРОВОЧНЫЕ — заменить на прайс Nur Aspan! */
  prices: {
    canvas:  { matte: 2000, satin: 2300, glossy: 2500, color: 3000, photo: 7000, stars: 12000 }, // за м²
    profile: { classic: 0, shadow: 2500, floating: 4000 },                                       // за пог. м периметра
    spot: 2000,        // точка под светильник, шт
    chandelier: 3000,  // люстра, шт
    line: 8000         // световая линия, пог. м
  },
  spread: 0.12,        // ± разброс в калькуляторе

  /* Фото работ: положите файлы в папку img/ и перечислите тут.
     Пример: { src: 'img/work1.jpg', ru: 'Гостиная · парящий', kz: 'Қонақ бөлме · қалқымалы' } */
  works: []
};

/* ---------- i18n ---------- */
const KZ = {
  logo_sub:'керме төбелер · Тараз',
  nav_catalog:'Төбелер', nav_calc:'Калькулятор', nav_process:'Жұмыс тәртібі', nav_branches:'Филиалдар', nav_faq:'Сұрақтар',
  hero_eyebrow:'Таразда керме төбелер · 2 филиал',
  hero_h1:'Премиум төбелер. <em>Тез әрі таза</em> орнату',
  hero_lead:'Кез келген күрделіліктегі керме төбелерді сатамыз және орнатамыз — күңгірт полотнодан бастап қалқымалы сызықтар мен жұлдызды аспанға дейін. Жоғары сапа, қолжетімді баға.',
  hero_cta1:'Бағасын есептеу', hero_cta2:'Өлшеуге жазылу',
  trust_1:'2ГИС рейтингі', trust_2:'Instagram жазылушысы', trust_3:'қаладағы филиал', trust_4:'қолма-қол, карта, QR',
  hero_name:'Nur Aspan — басыңыздың үстіндегі нұрлы аспан',
  cat_eyebrow:'Каталог', cat_h2:'Қандай төбелер жасаймыз',
  cat_sub:'«Маған осындай» батырмасын басыңыз — менеджер WhatsApp-та жауап беріп, бөлмеңізге бағасын айтады.',
  calc_eyebrow:'Калькулятор', calc_h2:'Бағаны 30 секундта біліңіз',
  calc_sub:'Баға шамамен көрсетілген. Нақты соманы шебер өлшегеннен кейін айтады.',
  calc_area:'Төбе ауданы', calc_rooms:'Бөлме саны', calc_canvas:'Полотно', calc_profile:'Қабырғаға жалғасуы',
  calc_spots:'Нүктелі шамдар, дана', calc_chand:'Люстралар, дана', calc_lines:'Жарық сызықтары, м',
  calc_approx:'Толық орнатудың шамамен құны', calc_send:'Есепті WhatsApp-қа жіберу',
  calc_note:'Менеджер мәліметтерді нақтылап, ыңғайлы уақытқа өлшеуге жазады.',
  why_eyebrow:'Неге біз', why_h2:'Неге Nur Aspan-ды таңдайды',
  why1_t:'Премиум материалдар', why1_d:'Сапалы полотнолар, түстер мен фактураның кең таңдауы — интерьеріңізге сай таңдаймыз.',
  why2_t:'Орнату күні — шартта', why2_d:'Бағаны, материалдарды және орнату күнін жұмыс басталғанға дейін жазбаша бекітеміз.',
  why3_t:'Тез және таза орнату', why3_d:'Жиһазды жауып қоямыз, жұмыстан кейін артымыздан тазалаймыз.',
  why4_t:'Әр бригада бақылауда', why4_d:'Орнатудан кейін бригаданы QR-код арқылы бағалайсыз — баға бірден басшыға келеді.',
  why5_t:'Ыңғайлы төлем', why5_d:'Қолма-қол, картадан аудару немесе Kaspi QR.',
  why6_t:'Таразда екі филиал', why6_d:'«Зелёный ковёр» және Жамбыл даңғылы — кеңес алуға келіңіз.',
  proc_eyebrow:'Ашық әрі түсінікті', proc_h2:'Қалай жұмыс істейміз',
  st1_t:'Өтінім', st1_d:'WhatsApp-қа жазасыз немесе қоңырау шаласыз — ыңғайлы уақытты келісеміз.',
  st2_t:'Өлшеу', st2_d:'Шебер бөлмені өлшеп, полотно мен жарықты таңдауға көмектеседі.',
  st3_t:'Шарт', st3_d:'Бағаны, материалдарды және орнату күнін бекітеміз.',
  st4_t:'Орнату', st4_d:'Бригада уақытында келіп, орнатады және артынан тазалайды.',
  st5_t:'Сіздің бағаңыз', st5_d:'Жұмысты QR-код арқылы бағалайсыз. Бірдеңе дұрыс болмаса — басшы түзетеді.',
  works_eyebrow:'Портфолио', works_h2:'Біздің жұмыстар', works_sub:'Жаңа нысандар күн сайын — біздің Instagram-да.',
  rev_score:'2ГИС-тегі Nur Aspan рейтингі', rev_h:'Клиенттер полотно сапасы мен дизайнды атап өтеді',
  rev_p:'Шынайы пікірлерді 2ГИС-тен оқыңыз. Бізде төбе жасатқансыз ба? Бригаданы бағалаңыз — бұл бізге жақсаруға көмектеседі.',
  rev_btn1:'2ГИС-тегі пікірлер', rev_btn2:'Орнатуды бағалау',
  br_eyebrow:'Байланыс', br_h2:'Біздің филиалдар',
  br1_tag:'1-филиал · негізгі', br1_addr:'Бауыржан Момышұлы көшесі, 9а', br1_area:'«Зелёный ковёр» тұрғын алабы',
  br1_time:'Күн сайын 09:00–21:00', br1_wa:'WhatsApp-та өтінім — тәулік бойы',
  br2_tag:'2-филиал', br2_addr:'Жамбыл даңғылы, 3в/1', br2_area:'Жамбыл даңғылы', br2_time:'Күн сайын 09:30–19:00',
  faq_eyebrow:'Сұрақтар', faq_h2:'Жиі қойылатын сұрақтар',
  q1:'Орнатудан кейін иіс бола ма?', a1:'Сапалы полотноның тұрақты иісі жоқ. Орнатудан кейінгі жеңіл иіс желдеткенде бір-екі күнде кетеді.',
  q2:'Көршілер су басып кетсе не болады?', a2:'ПВХ-полотно суды ұстап, жөндеуіңізді қорғайды. Шебер суды ұқыпты ағызады, полотно бұрынғы пішініне қайтады.',
  q3:'Орнату қанша уақыт алады?', a3:'Әдетте бір бөлме — бірнеше сағат. Нақты күн мен мерзімді шартта көрсетеміз.',
  q4:'Жиһазды шығару керек пе?', a4:'Жоқ. Қабырға жанын босатсаңыз жеткілікті — қалғанын жауып, артымыздан жинаймыз.',
  q5:'Қалай төлеуге болады?', a5:'Қолма-қол, картадан аударым немесе QR-код арқылы, соның ішінде Kaspi QR.',
  q6:'Кейін шамдарды ауыстыруға бола ма?', a6:'Иә. Жарық нүктелері орнату кезінде салынады, ал шамдардың өзін кейін ауыстыруға болады.',
  lead_h2:'Өлшеуге жазылыңыз', lead_p:'Өтінім қалдырыңыз — менеджер WhatsApp-та жауап беріп, ыңғайлы уақытты таңдайды.',
  f_name:'Атыңыз', f_phone:'Телефон', f_district:'Аудан / мекенжай', f_what:'Не қызықтырады',
  f_o1:'Пәтерге төбе', f_o2:'Жеке үйге төбе', f_o3:'Қалқымалы / жарық сызықтары', f_o4:'Әзірге бағасын білу',
  f_send:'WhatsApp-қа жіберу', f_err:'Атыңыз бен телефонды жазыңыз',
  foot_p:'ЖК Nur Aspan · керме төбелерді сату және орнату · Тараз', foot_rate:'Орнатуды бағалау',
  m_call:'Қоңырау шалу',
  /* rate page */
  r_back:'← Сайтқа', r_h1:'Орнатуды бағалаңыз',
  r_p:'Бір минут қана. Баға тікелей Nur Aspan басшысына барады — әрқайсысын қарастырамыз.',
  r_brig:'Бригада / шебер', r_addr:'Мекенжай немесе аудан',
  r_q1:'Мерзімнің сақталуы', r_q2:'Орнату сапасы', r_q3:'Жұмыстан кейінгі тазалық', r_q4:'Шеберлердің сыпайылығы',
  r_comment:'Нені жақсартуға болады?', r_send:'Басшыға жіберу', r_err:'Барлық тармақ бойынша баға қойыңыз',
  r_done_h:'Рақмет!', r_done_p:'Пікіріңіз біз үшін маңызды. 2ГИС-те де пікір қалдырсаңыз — басқаларға таңдауға көмектесесіз.',
  r_gis:'2ГИС-те пікір қалдыру'
};

const T = {
  ru: {
    want:'Хочу такой', perM2:v=>`от ${v} ₸/м²`, perM:v=>`от ${v} ₸/пог. м`, profileFrom:v=>`профиль от ${v} ₸/м`, byMeasure:'цена по замеру',
    canvas:'Полотно', profile:'Профиль', spots:'Светильники', chand:'Люстры', lines:'Световые линии', pcs:'шт', m:'м',
    included:'входит', approx:'Примерно', from:'от', to:'до', perim:'периметр',
    works_note:'Иллюстрации · реальные объекты — в нашем Instagram',
    msg_hello:'Здравствуйте! Пишу с сайта Nur Aspan. Хочу узнать про натяжные потолки.',
    msg_measure:'Здравствуйте! Хочу записаться на замер натяжного потолка.',
    msg_want:n=>`Здравствуйте! Интересует потолок «${n}». Подскажите цену для моей комнаты.`,
    msg_calc:(d)=>`Здравствуйте! Сделал(а) расчёт на сайте:\n• Площадь: ${d.area} м², комнат: ${d.rooms}\n• Полотно: ${d.canvas}\n• Профиль: ${d.profile}\n• Светильники: ${d.spots}, люстры: ${d.chand}, линии: ${d.lines} м\nПримерно: ${d.sum}\nХочу записаться на замер.`,
    msg_lead:(d)=>`Заявка на замер с сайта\nИмя: ${d.name}\nТелефон: ${d.phone}\nРайон/адрес: ${d.district||'—'}\nИнтересует: ${d.what}`,
    msg_rate:(d)=>`Оценка монтажа (с сайта)\nБригада: ${d.b||'—'}\nАдрес: ${d.addr||'—'}\nСрок: ${d.q1}/5\nКачество: ${d.q2}/5\nЧистота: ${d.q3}/5\nВежливость: ${d.q4}/5\nСредняя: ${d.avg}\nКомментарий: ${d.c||'—'}`
  },
  kz: {
    want:'Маған осындай', perM2:v=>`${v} ₸/м²-ден`, perM:v=>`${v} ₸/м-ден`, profileFrom:v=>`профиль ${v} ₸/м-ден`, byMeasure:'баға өлшеу бойынша',
    canvas:'Полотно', profile:'Профиль', spots:'Шамдар', chand:'Люстралар', lines:'Жарық сызықтары', pcs:'дана', m:'м',
    included:'кіреді', approx:'Шамамен', from:'', to:'–', perim:'периметр',
    works_note:'Визуализация · нақты нысандар — біздің Instagram-да',
    msg_hello:'Сәлеметсіз бе! Nur Aspan сайтынан жазып отырмын. Керме төбелер туралы білгім келеді.',
    msg_measure:'Сәлеметсіз бе! Керме төбені өлшеуге жазылғым келеді.',
    msg_want:n=>`Сәлеметсіз бе! «${n}» төбесі қызықтырады. Менің бөлмеме бағасын айтып жібересіз бе?`,
    msg_calc:(d)=>`Сәлеметсіз бе! Сайтта есептедім:\n• Аудан: ${d.area} м², бөлме: ${d.rooms}\n• Полотно: ${d.canvas}\n• Профиль: ${d.profile}\n• Шамдар: ${d.spots}, люстра: ${d.chand}, сызықтар: ${d.lines} м\nШамамен: ${d.sum}\nӨлшеуге жазылғым келеді.`,
    msg_lead:(d)=>`Сайттан өлшеуге өтінім\nАты: ${d.name}\nТелефон: ${d.phone}\nАудан/мекенжай: ${d.district||'—'}\nҚызықтырады: ${d.what}`,
    msg_rate:(d)=>`Орнатуды бағалау (сайттан)\nБригада: ${d.b||'—'}\nМекенжай: ${d.addr||'—'}\nМерзім: ${d.q1}/5\nСапа: ${d.q2}/5\nТазалық: ${d.q3}/5\nСыпайылық: ${d.q4}/5\nОрташа: ${d.avg}\nПікір: ${d.c||'—'}`
  }
};

const TYPES = [
  { id:'matte',    ru:['Матовый','Классика, похожая на идеально ровный окрашенный потолок. Не бликует — подходит для любой комнаты.'],
                   kz:['Күңгірт','Мінсіз тегіс боялған төбеге ұқсас классика. Жарқырамайды — кез келген бөлмеге жарасады.'], price:t=>t.perM2(fmt(CONFIG.prices.canvas.matte)) },
  { id:'satin',    ru:['Сатиновый','Мягкий перламутровый отлив и глубина цвета. Хорош в спальне и гостиной.'],
                   kz:['Сатин','Жұмсақ інжу жылтыры мен түс тереңдігі. Жатын және қонақ бөлмеге жарасады.'], price:t=>t.perM2(fmt(CONFIG.prices.canvas.satin)) },
  { id:'glossy',   ru:['Глянцевый','Отражает свет и визуально поднимает потолок — для небольших комнат и кухонь.'],
                   kz:['Жылтыр','Жарықты шағылыстырып, төбені көзбен биіктетеді — шағын бөлмелер мен асүйге.'], price:t=>t.perM2(fmt(CONFIG.prices.canvas.glossy)) },
  { id:'floating', ru:['Парящий','Светодиодная подсветка по периметру — потолок будто висит в воздухе.'],
                   kz:['Қалқымалы','Периметр бойынша LED жарық — төбе ауада қалқып тұрғандай.'], price:t=>t.profileFrom(fmt(CONFIG.prices.profile.floating)) },
  { id:'shadow',   ru:['Теневой','Аккуратный зазор у стены вместо плинтуса — строгий современный вид.'],
                   kz:['Көлеңкелі','Плинтустың орнына қабырға жанында ұқыпты саңылау — қатаң заманауи көрініс.'], price:t=>t.profileFrom(fmt(CONFIG.prices.profile.shadow)) },
  { id:'twolevel', ru:['Двухуровневый','Зонирование, ниши и подсветка. Для гостиных и больших залов.'],
                   kz:['Екі деңгейлі','Аймақтау, қуыстар мен жарықтандыру. Қонақ бөлмелер мен үлкен залдарға.'], price:t=>t.byMeasure },
  { id:'lines',    ru:['Световые линии','Линии света прямо в полотне вместо люстры — любой рисунок.'],
                   kz:['Жарық сызықтары','Люстраның орнына полотноның ішіндегі жарық сызықтары — кез келген сурет.'], price:t=>t.perM(fmt(CONFIG.prices.line)) },
  { id:'stars',    ru:['Звёздное небо','Мерцающие звёзды над кроватью — для детской и спальни.'],
                   kz:['Жұлдызды аспан','Төсек үстінде жыпылықтаған жұлдыздар — балалар мен жатын бөлмеге.'], price:t=>t.perM2(fmt(CONFIG.prices.canvas.stars)) }
];

const CANVAS = [
  { id:'matte',  ru:'Матовое',  kz:'Күңгірт' },
  { id:'satin',  ru:'Сатиновое',kz:'Сатин' },
  { id:'glossy', ru:'Глянцевое',kz:'Жылтыр' },
  { id:'color',  ru:'Цветное',  kz:'Түсті' },
  { id:'photo',  ru:'Фотопечать',kz:'Фотобасылым' },
  { id:'stars',  ru:'Звёздное небо',kz:'Жұлдызды аспан' }
];
const PROFILE = [
  { id:'classic',  ru:['Классический','с декоративной вставкой'], kz:['Классикалық','сәндік кірістірмемен'] },
  { id:'shadow',   ru:['Теневой','зазор у стены'],                kz:['Көлеңкелі','қабырға жанында саңылау'] },
  { id:'floating', ru:['Парящий','LED-подсветка по контуру'],     kz:['Қалқымалы','контур бойынша LED жарық'] }
];

/* ---------- helpers ---------- */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const fmt = n => Math.round(n).toLocaleString('ru-RU').replace(/,/g,' ');
const waLink = (text, num=CONFIG.wa) => `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
let lang = 'ru';
try { lang = localStorage.getItem('na_lang') || (navigator.language||'').toLowerCase().startsWith('kk') && 'kz' || 'ru'; } catch(e) {}
const t = () => T[lang];

/* ---------- ceiling illustration (SVG) ---------- */
let uid = 0;
function rand(seed){ return () => (seed = (seed * 16807) % 2147483647) / 2147483647; }
function ceilingSVG(type){
  const u = 'c' + (++uid);
  const C = '0,0 320,0 232,66 88,66';
  const edges = 'M0,0 L88,66 L232,66 L320,0';
  const dark = type === 'stars' || type === 'floating' || type === 'lines';
  let ceil = '', defs = '';
  const spots = (pts) => pts.map(([x,y,s=1]) => `<ellipse cx="${x}" cy="${y}" rx="${3.6*s}" ry="${1.4*s}" fill="#fff" filter="url(#${u}g)"/><ellipse cx="${x}" cy="${y}" rx="${2.2*s}" ry="${.9*s}" fill="#fffbe8"/>`).join('');
  const SP = [[105,13,1.2],[215,13,1.2],[130,42,.9],[190,42,.9]];
  defs += `<filter id="${u}g" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.4"/></filter>
           <filter id="${u}b" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4"/></filter>`;
  switch(type){
    case 'satin':
      defs += `<linearGradient id="${u}s" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbf8f1"/><stop offset=".5" stop-color="#efe7d8"/><stop offset="1" stop-color="#f7f1e6"/></linearGradient>`;
      ceil = `<polygon points="${C}" fill="url(#${u}s)"/><ellipse cx="160" cy="26" rx="90" ry="14" fill="#fff" opacity=".55" filter="url(#${u}b)"/>` + spots(SP); break;
    case 'glossy':
      ceil = `<polygon points="${C}" fill="#f9fafc"/>
        <polygon points="104,58 216,58 232,66 88,66" fill="#b9c3d4" opacity=".35"/>
        <rect x="128" y="52" width="64" height="7" rx="2" fill="#8a9bb5" opacity=".25"/>
        <polygon points="60,0 120,0 170,66 140,66" fill="#fff" opacity=".9"/>
        <polygon points="135,0 150,0 186,66 178,66" fill="#fff" opacity=".8"/>` + spots(SP); break;
    case 'floating':
      ceil = `<polygon points="${C}" fill="#e9e5de"/>
        <path d="${edges}" stroke="#ffd98a" stroke-width="12" fill="none" opacity=".75" filter="url(#${u}b)"/>
        <path d="${edges}" stroke="#fff6dc" stroke-width="2.4" fill="none"/>` + spots(SP); break;
    case 'shadow':
      ceil = `<polygon points="${C}" fill="#f6f4ef"/><path d="M2,3 L89,68 L231,68 L318,3" stroke="#2b2f36" stroke-width="3" fill="none"/>` + spots(SP); break;
    case 'twolevel': {
      const cx=160, cy=30, k=.55;
      const pts = [[0,0],[320,0],[232,66],[88,66]].map(([x,y])=>[cx+(x-cx)*k, cy+(y-cy)*k]);
      const P = pts.map(p=>p.join(',')).join(' ');
      ceil = `<polygon points="${C}" fill="#f4f1ea"/>
        <polygon points="${P}" fill="#e6ecf4"/>
        <polygon points="${P}" stroke="#ffe3a3" stroke-width="7" fill="none" opacity=".7" filter="url(#${u}b)"/>
        <polygon points="${P}" stroke="#fff8e6" stroke-width="1.6" fill="none"/>` + spots([[60,6,1.1],[260,6,1.1],[100,44,.9],[220,44,.9]]); break; }
    case 'lines': {
      let L = '';
      [70,160,250].forEach(x => { const x1 = x, y1 = 4, x2 = 88 + x*144/320, y2 = 62; L += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`; });
      L += `<line x1="40" y1="20" x2="280" y2="20"/>`;
      ceil = `<polygon points="${C}" fill="#2a2f38"/>
        <g stroke="#fff3c9" stroke-width="7" opacity=".7" filter="url(#${u}b)">${L}</g>
        <g stroke="#fffdf5" stroke-width="2" stroke-linecap="round">${L}</g>`; break; }
    case 'stars': {
      defs += `<linearGradient id="${u}n" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a1430"/><stop offset="1" stop-color="#1f3466"/></linearGradient>`;
      const r = rand(7); let S = '';
      for (let i=0;i<90;i++){ const yy = r()*64, w = 320 - yy*(176/66), x0 = (320-w)/2; const xx = x0 + r()*w; const rr = .35 + r()*1.1;
        S += `<circle cx="${xx.toFixed(1)}" cy="${yy.toFixed(1)}" r="${rr.toFixed(2)}" fill="#fff" opacity="${(.45+r()*.55).toFixed(2)}"/>`; }
      ceil = `<polygon points="${C}" fill="url(#${u}n)"/><ellipse cx="190" cy="24" rx="70" ry="12" fill="#6c5bd4" opacity=".25" filter="url(#${u}b)"/>${S}
        <circle cx="120" cy="18" r="2.2" fill="#fff" filter="url(#${u}g)"/><circle cx="214" cy="40" r="1.8" fill="#fff" filter="url(#${u}g)"/>`; break; }
    default:
      ceil = `<polygon points="${C}" fill="#f6f4ef"/>` + spots(SP);
  }
  const dim = dark ? `<rect width="320" height="220" fill="#14223a" opacity=".28"/>` : '';
  return `<svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <defs>${defs}
    <linearGradient id="${u}f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b8956a"/><stop offset="1" stop-color="#8c6a43"/></linearGradient>
    <linearGradient id="${u}lw" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e3d9c9"/><stop offset="1" stop-color="#ece4d7"/></linearGradient>
    <linearGradient id="${u}rw" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#d9cdb9"/><stop offset="1" stop-color="#e6ddcf"/></linearGradient>
  </defs>
  <polygon points="0,0 88,66 88,158 0,220" fill="url(#${u}lw)"/>
  <polygon points="320,0 232,66 232,158 320,220" fill="url(#${u}rw)"/>
  <rect x="88" y="66" width="144" height="92" fill="#f0e9dd"/>
  <polygon points="0,220 88,158 232,158 320,220" fill="url(#${u}f)"/>
  <g opacity=".22" stroke="#5e4428" stroke-width=".6"><line x1="40" y1="220" x2="110" y2="158"/><line x1="100" y1="220" x2="135" y2="158"/><line x1="160" y1="220" x2="160" y2="158"/><line x1="220" y1="220" x2="185" y2="158"/><line x1="280" y1="220" x2="210" y2="158"/></g>
  <rect x="108" y="84" width="40" height="30" rx="2" fill="#cfd8e6" stroke="#fff" stroke-width="2.5"/>
  <rect x="166" y="80" width="46" height="34" rx="2" fill="#d8c6a6" stroke="#fff" stroke-width="2.5"/>
  <rect x="112" y="132" width="96" height="26" rx="6" fill="#7d8fac"/><rect x="108" y="126" width="104" height="14" rx="6" fill="#8fa1bd"/>
  <polygon points="20,190 60,165 60,200 20,220" fill="#c7b79c" opacity=".7"/>
  ${dim}
  ${ceil}
  </svg>`;
}

/* ---------- apply language ---------- */
function applyLang(){
  document.documentElement.lang = lang === 'kz' ? 'kk' : 'ru';
  $$('[data-i18n]').forEach(el => {
    if (!el.dataset.ru) el.dataset.ru = el.innerHTML;
    const k = el.dataset.i18n;
    el.innerHTML = lang === 'kz' && KZ[k] ? KZ[k] : el.dataset.ru;
  });
  $$('[data-lang]').forEach(b => b.classList.toggle('is-on', b.dataset.lang === lang));
  $$('.js-wa').forEach(a => a.href = waLink(t()['msg_' + (a.dataset.msg || 'hello')]));
  renderCatalog(); renderHero(); renderWorks(); renderCalcOptions(); calc();
}
$$('[data-lang]').forEach(b => b.addEventListener('click', () => {
  lang = b.dataset.lang; try { localStorage.setItem('na_lang', lang); } catch(e) {}
  applyLang();
}));
$$('.js-ig').forEach(a => a.href = CONFIG.instagram);
$$('.js-fb').forEach(a => a.href = CONFIG.facebook);
$$('.js-gis').forEach(a => a.href = CONFIG.gis);

/* ---------- hero ---------- */
const HERO_TYPES = ['floating','stars','glossy','lines','matte'];
let heroType = 'floating', heroTimer = null;
function renderHero(){
  const room = $('#heroRoom'); if (!room) return;
  room.innerHTML = ceilingSVG(heroType);
  const chips = $('#heroChips');
  chips.innerHTML = HERO_TYPES.map(id => {
    const ty = TYPES.find(x => x.id === id);
    return `<button type="button" class="chip${id===heroType?' is-on':''}" data-id="${id}">${ty[lang][0]}</button>`;
  }).join('');
  $$('.chip', chips).forEach(c => c.addEventListener('click', () => { clearInterval(heroTimer); heroTimer = null; heroType = c.dataset.id; renderHero(); }));
}
function startHeroCycle(){
  if (!$('#heroRoom') || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  heroTimer = setInterval(() => { heroType = HERO_TYPES[(HERO_TYPES.indexOf(heroType)+1) % HERO_TYPES.length]; renderHero(); }, 3200);
}

/* ---------- catalog ---------- */
function renderCatalog(){
  const box = $('#catalogCards'); if (!box) return;
  box.innerHTML = TYPES.map(ty => `
    <article class="card">
      <div class="card__vis">${ceilingSVG(ty.id)}</div>
      <div class="card__b">
        <h3>${ty[lang][0]}</h3>
        <p>${ty[lang][1]}</p>
        <span class="card__price">${ty.price(t())}</span>
        <a class="btn btn--ghost" target="_blank" rel="noopener" href="${waLink(t().msg_want(ty[lang][0]))}">${t().want}</a>
      </div>
    </article>`).join('');
}

/* ---------- works ---------- */
function renderWorks(){
  const box = $('#works-grid'); if (!box) return;
  if (CONFIG.works.length){
    box.innerHTML = CONFIG.works.map(w => `<a class="work" href="${CONFIG.instagram}" target="_blank" rel="noopener"><img src="${w.src}" alt="${w[lang]||''}" loading="lazy"><span>${w[lang]||''}</span></a>`).join('');
    return;
  }
  const demo = [
    ['floating','Гостиная · парящий','Қонақ бөлме · қалқымалы'],
    ['stars','Спальня · звёздное небо','Жатын бөлме · жұлдызды аспан'],
    ['glossy','Кухня · глянец','Асүй · жылтыр'],
    ['lines','Зал · световые линии','Зал · жарық сызықтары']
  ];
  box.innerHTML = demo.map(([id,ru,kz]) => `<a class="work" href="${CONFIG.instagram}" target="_blank" rel="noopener">${ceilingSVG(id)}<span>${lang==='kz'?kz:ru}</span></a>`).join('')
    + `<p class="works__note">${t().works_note}</p>`;
}

/* ---------- calculator ---------- */
const state = { canvas:'matte', profile:'classic' };
function renderCalcOptions(){
  const cv = $('#cCanvas'), pf = $('#cProfile'); if (!cv) return;
  const P = CONFIG.prices;
  cv.innerHTML = CANVAS.map(o => `<button type="button" data-id="${o.id}" class="${o.id===state.canvas?'is-on':''}">${o[lang]}<small>${t().perM2(fmt(P.canvas[o.id]))}</small></button>`).join('');
  pf.innerHTML = PROFILE.map(o => `<button type="button" data-id="${o.id}" class="${o.id===state.profile?'is-on':''}">${o[lang][0]}<small>${o[lang][1]}</small></button>`).join('');
  $$('button', cv).forEach(b => b.onclick = () => { state.canvas = b.dataset.id; renderCalcOptions(); calc(); });
  $$('button', pf).forEach(b => b.onclick = () => { state.profile = b.dataset.id; renderCalcOptions(); calc(); });
}
const num = (id, min=0) => Math.max(min, parseFloat(($('#'+id)||{}).value) || 0);
function calc(){
  if (!$('#cSum')) return;
  const P = CONFIG.prices, tt = t();
  const area = num('cAreaNum', 1), rooms = Math.max(1, Math.round(num('cRooms', 1)));
  const spots = Math.round(num('cSpots')), chand = Math.round(num('cChand')), lines = num('cLines');
  const perim = Math.round(rooms * 4 * Math.sqrt(area / rooms) * 1.08);
  const cvName = CANVAS.find(c => c.id === state.canvas)[lang];
  const pfName = PROFILE.find(p => p.id === state.profile)[lang][0];
  const items = [
    [`${tt.canvas}: ${cvName.toLowerCase()}, ${fmt(area)} м²`, area * P.canvas[state.canvas]],
    [`${tt.profile}: ${pfName.toLowerCase()}, ~${perim} ${tt.m}`, perim * P.profile[state.profile]],
    [`${tt.spots}: ${spots} ${tt.pcs}`, spots * P.spot],
    [`${tt.chand}: ${chand} ${tt.pcs}`, chand * P.chandelier],
    [`${tt.lines}: ${fmt(lines)} ${tt.m}`, lines * P.line]
  ].filter(([, v], i) => i < 2 || v > 0);
  const total = items.reduce((s, [, v]) => s + v, 0);
  const r1000 = v => Math.round(v / 1000) * 1000;
  const lo = r1000(total * (1 - CONFIG.spread)), hi = r1000(total * (1 + CONFIG.spread));
  const sum = lang === 'kz' ? `${fmt(lo)} – ${fmt(hi)} ₸` : `${fmt(lo)} – ${fmt(hi)} ₸`;
  $('#cSum').textContent = sum;
  $('#cList').innerHTML = items.map(([k, v]) => `<li><span>${k}</span><span>${v ? '≈ ' + fmt(v) + ' ₸' : tt.included}</span></li>`).join('');
  $('#cSend').href = waLink(tt.msg_calc({ area: fmt(area), rooms, canvas: cvName, profile: pfName, spots, chand, lines: fmt(lines), sum }));
}
function initCalc(){
  const range = $('#cArea'), n = $('#cAreaNum'), out = $('#cAreaOut'); if (!range) return;
  range.addEventListener('input', () => { n.value = range.value; out.textContent = range.value; calc(); });
  n.addEventListener('input', () => { const v = Math.max(1, +n.value || 1); range.value = Math.min(200, v); out.textContent = v; calc(); });
  $$('.stepper').forEach(st => {
    const inp = $('input', st);
    $$('button', st).forEach(b => b.addEventListener('click', () => {
      const v = (+inp.value || 0) + (+b.dataset.d);
      inp.value = Math.min(+inp.max || 999, Math.max(+inp.min || 0, v)); calc();
    }));
    inp.addEventListener('input', calc);
  });
}

/* ---------- lead form ---------- */
function initLead(){
  const f = $('#leadForm'); if (!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(f));
    const ok = d.name.trim() && d.phone.replace(/\D/g, '').length >= 10;
    $('#leadErr').hidden = !!ok; if (!ok) return;
    d.what = f.what.options[f.what.selectedIndex].textContent;
    window.open(waLink(t().msg_lead(d)), '_blank', 'noopener');
  });
}

/* ---------- rate page ---------- */
function initRate(){
  const f = $('#rateForm'); if (!f) return;
  const qs = new URLSearchParams(location.search);
  if (qs.get('b')) f.b.value = qs.get('b');
  const scores = {};
  $$('.starsel').forEach(sel => {
    const k = sel.dataset.q;
    sel.innerHTML = [1,2,3,4,5].map(i => `<button type="button" data-v="${i}" aria-label="${i}">★</button>`).join('');
    $$('button', sel).forEach(b => b.addEventListener('click', () => {
      scores[k] = +b.dataset.v;
      $$('button', sel).forEach(x => x.classList.toggle('on', +x.dataset.v <= scores[k]));
    }));
  });
  f.addEventListener('submit', e => {
    e.preventDefault();
    const keys = ['q1','q2','q3','q4'];
    const ok = keys.every(k => scores[k]);
    $('#rateErr').hidden = ok; if (!ok) return;
    const avg = (keys.reduce((s, k) => s + scores[k], 0) / 4).toFixed(1);
    const d = { b: f.b.value.trim(), addr: f.addr.value.trim(), c: f.c.value.trim(), avg, ...scores };
    window.open(waLink(t().msg_rate(d), CONFIG.rateWa), '_blank', 'noopener');
    f.hidden = true; $('#rateDone').hidden = false;
  });
}

applyLang(); startHeroCycle(); initCalc(); calc(); initLead(); initRate();
