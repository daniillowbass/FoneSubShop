/**
 * ИП МУСТАФАЕВ - АВТОМОБИЛЬНАЯ АКУСТИКА
 * Владелец: ИП Мустафаев
 * Почта: mustafaevdaniil07@gmail.com
 * Создатель магазина и сайта: Мустафаев Даниил
 */

// Global image error handler
window.handleImgError = function(img) {
  img.onerror = null;
  img.src = "images/ural-tt-12.jpg";
};

// Полный каталог всех 22 товаров с локальными проверенными фото
const PRODUCTS = [
  // 1. Компактные 8 и 10 дюймов
  {
    id: 1,
    name: "УРАЛ Булава 8",
    category: "sub-8-10",
    caliber: "8 дюймов (20 см)",
    rms: "500 Вт",
    price: 6490,
    badge: "Компактный панч",
    badgeType: "orange",
    desc: "Бюджетный 8-дюймовый малыш с неожиданно солидным ходом диффузора для систем с жестким дефицитом места.",
    img: "images/ural-bulava-8.png",
    specs: ["Калибр: 8\"", "RMS: 500 Вт", "Катушка: 2\"", "Для малых объемов"]
  },
  {
    id: 2,
    name: "DL Audio Barracuda 10 Flat",
    category: "sub-8-10",
    caliber: "10 дюймов (25 см)",
    rms: "300 Вт",
    price: 5290,
    badge: "Slim / Стелс",
    badgeType: "cyan",
    desc: "Тонкая 10-дюймовая модель для скрытой установки в крыло автомобиля (стелс-короб) или под сиденье.",
    img: "images/barracuda-10.jpg",
    specs: ["Калибр: 10\" Flat", "Глубина: всего 78 мм", "RMS: 300 Вт", "Монтаж: крыло / сиденье"]
  },
  {
    id: 3,
    name: "Focal SUB 10",
    category: "sub-8-10",
    caliber: "10 дюймов (25 см)",
    rms: "300 Вт",
    price: 13990,
    badge: "Hi-Fi / SQ Звук",
    badgeType: "gold",
    desc: "Музыкальный 10-дюймовый динамик для закрытых корпусов, ориентированный на точный и быстрый бас в SQ-системах.",
    img: "images/focal-sub-10.jpg",
    specs: ["Калибр: 10\"", "Класс: Sound Quality (SQ)", "Оформление: ЗЯ (ЗАКРЫТЫЙ ЯЩИК)", "Французское качество"]
  },

  // 2. Универсальные 12 дюймов
  {
    id: 4,
    name: "УРАЛ ТТ 12",
    category: "sub-12",
    caliber: "12 дюймов (30 см)",
    rms: "600 Вт",
    price: 6990,
    badge: "Хит продаж",
    badgeType: "orange",
    desc: "Популярный и выносливый бюджетный сабвуфер для первых повседневных систем.",
    img: "images/ural-tt-12.jpg",
    specs: ["Калибр: 12\"", "RMS: 600 Вт", "Катушка: 3\"", "Надежный повседнев"]
  },
  {
    id: 5,
    name: "Pride M.12 12 D2 V.2",
    category: "sub-12",
    caliber: "12 дюймов (30 см)",
    rms: "1200 Вт",
    price: 15490,
    badge: "Мощь 1200 Вт",
    badgeType: "red",
    desc: "Уверенный середняк мощностью 1200 Вт RMS для глубокого повседневного баса.",
    img: "images/pride-m12.jpg",
    specs: ["Калибр: 12\"", "RMS: 1200 Вт", "Катушка: 2.6\" круглая медь", "Сопротивление: 2+2 Ом"]
  },
  {
    id: 6,
    name: "Black Hydra Gamma 12",
    category: "sub-12",
    caliber: "12 дюймов (30 см)",
    rms: "700 Вт",
    price: 18990,
    badge: "Премиум SQ/SPL",
    badgeType: "gold",
    desc: "Высокоуровневый 12-дюймовый динамик с акцентом на качество звучания и детальность басового регистра.",
    img: "images/black-hydra-12.jpeg",
    specs: ["Калибр: 12\"", "RMS: 700 Вт", "Чистый структурный бас", "Линейный мотор"]
  },
  {
    id: 7,
    name: "DL Audio Phoenix Bass Machine 12",
    category: "sub-12",
    caliber: "12 дюймов (30 см)",
    rms: "1700 Вт",
    price: 19490,
    badge: "SPL Насос",
    badgeType: "red",
    desc: "Мощный насос для любителей громкого повседневного баса в стандартном калибре.",
    img: "images/dl-phoenix-12.jpg",
    specs: ["Калибр: 12\"", "RMS: 1700 Вт", "Катушка: 3\" термостойкая", "Огромный ход"]
  },

  // 3. Крупные 15 дюймов
  {
    id: 8,
    name: "DL Audio Gryphon Pro 15 V.3",
    category: "sub-15",
    caliber: "15 дюймов (38 см)",
    rms: "800 Вт",
    price: 9990,
    badge: "Доступный флекс",
    badgeType: "orange",
    desc: "Доступная пятнашка для тех, кто хочет ощутить масштабный низкий бас без огромных вложений.",
    img: "images/dl-gryphon-15.jpg",
    specs: ["Калибр: 15\"", "RMS: 800 Вт", "Большая площадь $S_d$", "Глубокий инфраниз"]
  },
  {
    id: 9,
    name: "Pride M.15 15 D2 V.2",
    category: "sub-15",
    caliber: "15 дюймов (38 см)",
    rms: "1200 Вт",
    price: 16990,
    badge: "Глубокий низ",
    badgeType: "red",
    desc: "Мощный 15-дюймовый сабвуфер (1200 Вт RMS) с отличной выносливостью и глубокой подачей.",
    img: "images/pride-m15.jpg",
    specs: ["Калибр: 15\"", "RMS: 1200 Вт", "Подвес высокой прочности", "Отдача на 28–35 Гц"]
  },
  {
    id: 10,
    name: "Machete Fight S15",
    category: "sub-15",
    caliber: "15 дюймов (38 см)",
    rms: "1200 Вт",
    price: 14790,
    badge: "Теплостойкий",
    badgeType: "orange",
    desc: "Популярная громкая пятнашка для повседневных систем с хорошим запасом по тепловой нагрузке.",
    img: "images/machete-s15.jpg",
    specs: ["Калибр: 15\"", "RMS: 1200 Вт", "Охлаждение катушки", "Идеален под ФИ короб"]
  },
  {
    id: 11,
    name: "Apocalypse DB-315 D2",
    category: "sub-15",
    caliber: "15 дюймов (38 см)",
    rms: "2800 Вт",
    price: 36990,
    badge: "Спорт SPL",
    badgeType: "red",
    desc: "Серьезный 15-дюймовый динамик спортивного уровня для громких систем с развитым питанием.",
    img: "images/apocalypse-db315.jpg",
    specs: ["Калибр: 15\"", "RMS: 2800 Вт", "Усиленная корзина", "Экстремальная нагрузка"]
  },

  // 4. Экстремальные 18 дюймов
  {
    id: 12,
    name: "DL Audio Raven 18 V.2",
    category: "sub-18",
    caliber: "18 дюймов (46 см)",
    rms: "1600 Вт",
    price: 24990,
    badge: "Ветродуй",
    badgeType: "cyan",
    desc: "Один из самых популярных 18-дюймовых сабвуферов для построения ветреных повседневных проектов.",
    img: "images/dl-raven-18.jpg",
    specs: ["Калибр: 18\"", "RMS: 1600 Вт", "Макс площадь диффузора", "Hair-trick эффект"]
  },
  {
    id: 13,
    name: "Pride BB.3 18",
    category: "sub-18",
    caliber: "18 дюймов (46 см)",
    rms: "1750 Вт",
    price: 31990,
    badge: "Легенда BB",
    badgeType: "orange",
    desc: "Мощная восемнашка с высокой перегрузочной способностью для систем с большим объемом короба.",
    img: "images/pride-bb3-18.jpg",
    specs: ["Калибр: 18\"", "RMS: 1750 Вт", "Катушка 3\" круглая медь", "Огромная перегрузка"]
  },
  {
    id: 14,
    name: "Apocalypse DB-318 D2",
    category: "sub-18",
    caliber: "18 дюймов (46 см)",
    rms: "2800 Вт",
    price: 42990,
    badge: "Инфраниз 2800W",
    badgeType: "red",
    desc: "Крупнокалиберный сабвуфер (около 2800 Вт RMS) для экстремального звукового давления и инфраниза.",
    img: "images/apocalypse-db318.jpg",
    specs: ["Калибр: 18\"", "RMS: 2800 Вт", "Для моноблоков 3-5 кВт", "Сокрушительный бас"]
  },
  {
    id: 15,
    name: "Pride Sv.3 18",
    category: "sub-18",
    caliber: "18 дюймов (46 см)",
    rms: "4000 Вт",
    price: 54990,
    badge: "Чемпион SPL",
    badgeType: "gold",
    desc: "Топовый соревновательный 18-дюймовый монстр для серьезных SPL-проектов и моноблоков от 4–5 кВт.",
    img: "images/pride-sv3.jpg",
    specs: ["Калибр: 18\"", "RMS: 4000 Вт", "Катушка: 4\"", "Усилители от 5 кВт"]
  },

  // 5. 4 Кабеля (силовые и акустические)
  {
    id: 16,
    name: "КГ 1х25 (медный сварочный кабель ГОСТ)",
    category: "cables",
    caliber: "1х25 мм² (4 Ga)",
    rms: "До 1200 Вт",
    price: 490,
    badge: "ГОСТ Медь",
    badgeType: "orange",
    desc: "Надежный и бюджетный силовой кабель из 100% меди (аналог 4 Ga) для питания усилителей суммарной мощностью до 1000–1200 Вт.",
    img: "images/kg-cable.jpg",
    specs: ["Сечение: 25 мм² (~4 Ga)", "Материал: 100% медь ГОСТ", "Изоляция: резина", "Цена указана за 1 метр"]
  },
  {
    id: 17,
    name: "Machete MPC-0GA (OFC)",
    category: "cables",
    caliber: "0 Ga (~53 мм²)",
    rms: "От 1500 Вт",
    price: 1450,
    badge: "0 Ga Сверхгибкий",
    badgeType: "red",
    desc: "Профессиональный сверхгибкий силовой кабель сечением 0 Ga (~53 мм²) из бескислородной меди в силиконовой изоляции для мощных моноблоков от 1500 Вт.",
    img: "images/machete-0ga.jpg",
    specs: ["Сечение: 0 Ga (~53 мм²)", "Бескислородная медь (OFC)", "Мягкий силикон", "Цена указана за 1 метр"]
  },
  {
    id: 18,
    name: "DL Audio Phoenix Sport Power Cable 4 Ga",
    category: "cables",
    caliber: "4 Ga (~21 мм²)",
    rms: "До 1000 Вт",
    price: 790,
    badge: "Брендовый 4 Ga",
    badgeType: "cyan",
    desc: "Гибкий брендовый силовой кабель для удобной протяжки по порогам автомобиля в системах средней мощности.",
    img: "images/dl-phoenix-4ga.jpg",
    specs: ["Сечение: 4 Ga", "Удобная протяжка в порогах", "Огнестойкая изоляция", "Цена указана за 1 метр"]
  },
  {
    id: 19,
    name: "Акустический кабель 2х4 мм² (12 Ga, OFC)",
    category: "cables",
    caliber: "2х4 мм² (12 Ga)",
    rms: "Без потерь",
    price: 360,
    badge: "Акустический OFC",
    badgeType: "gold",
    desc: "Медный двухжильный провод увеличенного сечения для подключения сабвуферного динамика к моноблоку без потерь мощности.",
    img: "images/speaker-cable-12ga.jpg",
    specs: ["Сечение: 2х4 мм² (12 Ga)", "Чистая медь (OFC)", "Для сабвуферов и мощного фронта", "Цена за 1 метр"]
  },

  // 6. 3 Магнитолы с DSP-процессором
  {
    id: 20,
    name: "Pioneer MVH-S520BT",
    category: "headunits",
    caliber: "1DIN Ресивер",
    rms: "4 x 50 Вт",
    price: 16990,
    badge: "Эталон 1DIN DSP",
    badgeType: "orange",
    desc: "Эталонная процессорная 1DIN магнитола с 3 парами линейных выходов, временными задержками и развитыми кроссоверами для поканальной системы.",
    img: "images/pioneer-520.jpg",
    specs: ["Формат: 1DIN", "3 пары RCA (RCA 4V)", "Поканальный режим", "Bluetooth / FLAC / Smart Sync"]
  },
  {
    id: 21,
    name: "AurA Venom-D862DSP",
    category: "headunits",
    caliber: "1DIN Усиленная",
    rms: "4 x 60 Вт RMS",
    price: 13990,
    badge: "8-канальный DSP",
    badgeType: "cyan",
    desc: "Современная 1DIN модель со встроенным 8-канальным процессором и повышенной мощностью встроенного усилителя для гибкой настройки акустики.",
    img: "images/aura-862.jpg",
    specs: ["Формат: 1DIN", "8-канальный процессор", "Усилитель D-класса повышенной мощности", "Управление со смартфона"]
  },
  {
    id: 22,
    name: "Pioneer DMH-Z6350BT",
    category: "headunits",
    caliber: "2DIN 6.8\" Screen",
    rms: "4 x 50 Вт Hi-Res",
    price: 58990,
    badge: "Флагман 2DIN",
    badgeType: "gold",
    desc: "Топовое 2DIN мультимедийное головное устройство с поддержкой Hi-Res Audio, беспроводных Apple CarPlay / Android Auto и полноценным звуковым процессором.",
    img: "images/pioneer-6350.jpg",
    specs: ["Формат: 2DIN (экран 6.8\")", "Wireless CarPlay & Android Auto", "Hi-Res Audio playback", "13-полосный EQ & DSP"]
  }
];

// STATE
let cart = JSON.parse(localStorage.getItem('mustafaev_cart') || '[]');
let currentCategory = 'all';
let searchQuery = '';
let sortBy = 'default';

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  initPyramidListeners();
  initZeroBlockTools();
  initNavigation();
  initOrderForm();
});

// ==========================================================================
// RENDER PRODUCTS
// ==========================================================================
function renderProducts() {
  const container = document.getElementById('productsContainer');
  if (!container) return;

  let filtered = PRODUCTS.filter(item => {
    const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-secondary);">
        <i class="fa-solid fa-volume-xmark" style="font-size: 3rem; color: #374151; margin-bottom: 16px; display: block;"></i>
        <h3>Товары не найдены</h3>
        <p>Попробуйте изменить запрос поиска или категорию фильтра.</p>
        <button class="btn btn-outline btn-sm" style="margin-top: 16px;" onclick="resetFilters()">Сбросить фильтры</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <article class="product-card" data-category="${item.category}">
      <div class="product-img-wrap">
        <span class="product-badge-overlay badge badge-${item.badgeType}">${item.badge}</span>
        <img src="${item.img}" 
             alt="${item.name}" 
             loading="lazy" 
             onerror="handleImgError(this)" />
      </div>
      <div class="product-details">
        <span class="product-category-tag">${item.caliber}</span>
        <h4 class="product-title">${item.name}</h4>
        <p class="product-desc">${item.desc}</p>
        <div class="product-specs">
          ${item.specs.map(spec => `<span class="spec-pill">${spec}</span>`).join('')}
        </div>
        <div class="product-footer">
          <div class="product-price">
            ${item.price.toLocaleString('ru-RU')} ₽
            ${item.category === 'cables' ? '<small>/ метр</small>' : ''}
          </div>
          <button class="btn btn-primary btn-sm" onclick="addToCart(${item.id})">
            <i class="fa-solid fa-cart-shopping"></i> В корзину
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function resetFilters() {
  currentCategory = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.category === 'all'));
  renderProducts();
}

// Filter tab clicks
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    renderProducts();
  });
});

// Search input
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderProducts();
  });
}

// Sort select
const sortSelect = document.getElementById('sortSelect');
if (sortSelect) {
  sortSelect.addEventListener('change', (e) => {
    sortBy = e.target.value;
    renderProducts();
  });
}

// ==========================================================================
// PYRAMID SECTION LOGIC
// ==========================================================================
function initPyramidListeners() {
  const tiers = document.querySelectorAll('.pyramid-tier');
  const highlightTitle = document.getElementById('pyramidHighlightTitle');
  const highlightDesc = document.getElementById('pyramidHighlightDesc');
  const highlightAction = document.getElementById('pyramidHighlightAction');

  const tierInfoMap = {
    'sub-8-10': {
      title: 'Компактные 8 и 10 дюймов: Быстрый панч и стелс-короба',
      desc: 'Идеальны для точного SQ-баса (Focal SUB 10), установки под сиденье или в крыло автомобиля (DL Audio Barracuda 10 Flat) и систем с дефицитом места (УРАЛ Булава 8). Мгновенная атака на частотах 45–75 Гц.',
      targetCat: 'sub-8-10'
    },
    'sub-12': {
      title: 'Универсальные 12 дюймов: Золотой стандарт автозвука',
      desc: 'Самый сбалансированный калибр для любых жанров (рок, рэп, электронная музыка). УРАЛ ТТ 12 для первого повседнева, Pride M.12 для плотного мясистого низа, Black Hydra Gamma 12 для детального SQ звучания и DL Audio Phoenix BM 12 для мощного ветра.',
      targetCat: 'sub-12'
    },
    'sub-15': {
      title: 'Крупные 15 дюймов: Глубокие низы, флекс и отдача',
      desc: 'Огромная площадь диффузора для сочного ветра на 28–36 Гц. DL Audio Gryphon Pro 15, Pride M.15, Machete Fight S15 и спортивный монстр Apocalypse DB-315 сотрясают кузов любого автомобиля!',
      targetCat: 'sub-15'
    },
    'sub-18': {
      title: 'Экстремальные 18 дюймов: Фундамент звукового давления и ветродуй',
      desc: 'Максимальный калибр для ветра (Hair-trick) и соревновательного SPL давления на 22–32 Гц. DL Audio Raven 18, Pride BB.3 18, Apocalypse DB-318 и соревновательный монстр Pride Sv.3 18 (моноблоки от 4–5 кВт).',
      targetCat: 'sub-18'
    }
  };

  tiers.forEach(tier => {
    tier.addEventListener('click', () => {
      tiers.forEach(t => t.classList.remove('active'));
      tier.classList.add('active');

      const cat = tier.dataset.category;
      if (tierInfoMap[cat]) {
        highlightTitle.textContent = tierInfoMap[cat].title;
        highlightDesc.textContent = tierInfoMap[cat].desc;
      }
    });
  });

  if (highlightAction) {
    highlightAction.addEventListener('click', () => {
      const activeTier = document.querySelector('.pyramid-tier.active');
      const cat = activeTier ? activeTier.dataset.category : 'all';
      
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === cat);
      });

      currentCategory = cat;
      renderProducts();

      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// ==========================================================================
// ZERO-BLOCK CUSTOM TOOLS
// ==========================================================================
function initZeroBlockTools() {
  const powerInput = document.getElementById('calcPower');
  const lengthInput = document.getElementById('calcLength');
  const voltageInput = document.getElementById('calcVoltage');
  const resultCable = document.getElementById('resultCable');
  const resultFuse = document.getElementById('resultFuse');

  function calculateCable() {
    if (!powerInput || !lengthInput || !resultCable) return;
    const power = parseFloat(powerInput.value) || 1200;
    const length = parseFloat(lengthInput.value) || 5;
    const voltage = parseFloat(voltageInput.value) || 14.4;

    const currentAmps = (power * 1.3) / voltage;

    let recommendedGauge = "4 Ga (21-25 мм²)";
    let fuse = "80-100A";

    if (currentAmps > 220 || power >= 2500) {
      recommendedGauge = "Дубляж 0 Ga (2x 53 мм²) или 00 Ga";
      fuse = "250-300A ANL";
    } else if (currentAmps > 140 || power >= 1500) {
      recommendedGauge = "0 Ga / 50-53 мм² (Machete MPC-0GA)";
      fuse = "200-250A ANL";
    } else if (currentAmps > 80 || power >= 900) {
      recommendedGauge = "4 Ga / 21-25 мм² (КГ 1х25 / DL Audio 4 Ga)";
      fuse = "100-150A ANL";
    } else {
      recommendedGauge = "8 Ga / 10 мм²";
      fuse = "60-80A mini-ANL";
    }

    resultCable.textContent = recommendedGauge;
    resultFuse.textContent = `Ток: ~${Math.round(currentAmps)}А | Предохранитель: ${fuse}`;
  }

  if (powerInput && lengthInput && voltageInput) {
    powerInput.addEventListener('input', calculateCable);
    lengthInput.addEventListener('input', calculateCable);
    voltageInput.addEventListener('change', calculateCable);
    calculateCable();
  }

  const hzSlider = document.getElementById('hzSlider');
  const hzDisplay = document.getElementById('hzDisplayNum');
  const hzPlayBtn = document.getElementById('hzPlayBtn');
  const visualBars = document.querySelectorAll('.visual-bar');

  let audioCtx = null;
  let oscillator = null;
  let gainNode = null;
  let isPlaying = false;

  function updateVisualizer(freq, active) {
    visualBars.forEach((bar, idx) => {
      if (!active) {
        bar.style.height = '15%';
        return;
      }
      const factor = (Math.sin(Date.now() / (100 - freq * 0.7) + idx) + 1.2) * 40;
      bar.style.height = `${Math.min(100, Math.max(15, factor))}%`;
    });
  }

  let visualAnimInterval = null;

  if (hzSlider && hzDisplay) {
    hzSlider.addEventListener('input', (e) => {
      const freq = e.target.value;
      hzDisplay.textContent = `${freq} Гц`;
      if (oscillator && audioCtx) {
        oscillator.frequency.setTargetAtTime(freq, audioCtx.currentTime, 0.05);
      }
    });
  }

  if (hzPlayBtn) {
    hzPlayBtn.addEventListener('click', () => {
      if (!isPlaying) {
        try {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (!audioCtx) audioCtx = new AudioContext();
          
          oscillator = audioCtx.createOscillator();
          gainNode = audioCtx.createGain();

          oscillator.type = 'sine';
          const freq = parseFloat(hzSlider.value) || 35;
          oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);

          gainNode.gain.setValueAtTime(0.18, audioCtx.currentTime);

          oscillator.connect(gainNode);
          gainNode.connect(audioCtx.destination);
          oscillator.start();

          isPlaying = true;
          hzPlayBtn.innerHTML = '<i class="fa-solid fa-stop"></i> Остановить тон';
          hzPlayBtn.classList.replace('btn-cyan', 'btn-primary');

          visualAnimInterval = setInterval(() => {
            updateVisualizer(parseFloat(hzSlider.value) || 35, true);
          }, 60);

        } catch (err) {
          console.warn('AudioContext not allowed or not supported:', err);
        }
      } else {
        if (oscillator) {
          oscillator.stop();
          oscillator.disconnect();
          oscillator = null;
        }
        isPlaying = false;
        clearInterval(visualAnimInterval);
        updateVisualizer(35, false);
        hzPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i> Тест басового тона';
        hzPlayBtn.classList.replace('btn-primary', 'btn-cyan');
      }
    });
  }
}

// ==========================================================================
// CART FUNCTIONALITY
// ==========================================================================
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(`"${product.name}" добавлен в корзину!`);
}

function updateCartQty(productId, delta) {
  const index = cart.findIndex(item => item.id === productId);
  if (index === -1) return;

  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('mustafaev_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const counter = document.getElementById('cartCounter');
  const cartBody = document.getElementById('cartItemsList');
  const totalEl = document.getElementById('cartTotalPrice');

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (counter) counter.textContent = totalCount;
  if (totalEl) totalEl.textContent = `${totalPrice.toLocaleString('ru-RU')} ₽`;

  if (!cartBody) return;

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-cart-arrow-down"></i>
        <h4>Ваша корзина пуста</h4>
        <p>Выберите сабвуферы, кабели или магнитолы из каталога.</p>
      </div>
    `;
    return;
  }

  cartBody.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.img}" alt="${item.name}" onerror="handleImgError(this)" />
      </div>
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">${(item.price * item.qty).toLocaleString('ru-RU')} ₽</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
        <span style="font-weight: 700; font-size: 0.9rem; min-width: 18px; text-align: center;">${item.qty}</span>
        <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join('');
}

const cartToggle = document.getElementById('cartToggle');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');

if (cartToggle && cartDrawer && cartOverlay) {
  cartToggle.addEventListener('click', () => {
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
  });

  const closeCart = () => {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
  };

  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
}

const checkoutBtn = document.getElementById('checkoutBtn');
if (checkoutBtn) {
  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Корзина пуста! Добавьте товары для заказа.');
      return;
    }
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');

    const formComment = document.getElementById('orderComment');
    if (formComment) {
      const itemsList = cart.map(i => `${i.name} (${i.qty} шт.)`).join(', ');
      formComment.value = `Заказ из корзины: ${itemsList}`;
    }

    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
    showToast('Заполните данные для подтверждения заказа!');
  });
}

function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--color-orange);"></i> <span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// ==========================================================================
// NAVIGATION & BURGER MENU
// ==========================================================================
function initNavigation() {
  const burgerBtn = document.getElementById('burgerBtn');
  const navMenu = document.getElementById('navMenu');

  if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      burgerBtn.innerHTML = navMenu.classList.contains('open') 
        ? '<i class="fa-solid fa-xmark"></i>' 
        : '<i class="fa-solid fa-bars"></i>';
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        if (burgerBtn) burgerBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }
}

// ==========================================================================
// ORDER FORM SUBMISSION
// ==========================================================================
function initOrderForm() {
  const form = document.getElementById('mainOrderForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('orderName').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();
    const email = document.getElementById('orderEmail').value.trim();

    if (!name || !phone) {
      alert('Пожалуйста, укажите ваше имя и контактный телефон.');
      return;
    }

    const itemsCount = cart.length;
    alert(`Спасибо за заявку, ${name}!\n\nИП Мустафаев принял ваш запрос в обработку.\nМы свяжемся с вами по номеру ${phone} или почте ${email || 'mustafaevdaniil07@gmail.com'}.\nСоздатель магазина и сайта Мустафаев Даниил лично проконтролирует комплектацию!`);

    form.reset();
    if (itemsCount > 0) {
      clearCart();
    }
    showToast('Заявка успешно отправлена в ИП Мустафаев!');
  });
}
