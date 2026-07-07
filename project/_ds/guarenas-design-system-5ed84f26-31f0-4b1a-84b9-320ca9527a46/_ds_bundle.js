/* @ds-bundle: {"format":4,"namespace":"GuarenasDesignSystem_5ed84f","components":[],"sourceHashes":{"slides/app.jsx":"a4f1a70c5f42","slides/posts.jsx":"b422a1fd2665","ui_kits/portal-web/RouteFinder.jsx":"928f019be20b","ui_kits/portal-web/app.jsx":"ccfcf529aea3","ui_kits/portal-web/components.jsx":"274ecbdf383e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GuarenasDesignSystem_5ed84f = window.GuarenasDesignSystem_5ed84f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// slides/app.jsx
try { (() => {
/* ============================================================
   Stage — escala las plantillas 1080×1350 al viewport + navegación
   ============================================================ */

function App() {
  const [i, setI] = React.useState(0);
  const scalerRef = React.useRef(null);
  const {
    Comp,
    label
  } = POSTS[i];
  React.useEffect(() => {
    function fit() {
      const sc = scalerRef.current;
      if (!sc) return;
      const pad = 110;
      const s = Math.min((window.innerWidth - pad) / 1080, (window.innerHeight - pad) / 1350);
      sc.style.transform = `scale(${s})`;
    }
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  React.useEffect(() => {
    function key(e) {
      if (e.key === 'ArrowRight') setI(p => (p + 1) % POSTS.length);
      if (e.key === 'ArrowLeft') setI(p => (p - 1 + POSTS.length) % POSTS.length);
    }
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "Plantilla \xB7 ", label), /*#__PURE__*/React.createElement("div", {
    className: "stage-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scaler",
    ref: scalerRef
  }, /*#__PURE__*/React.createElement(Comp, null))), /*#__PURE__*/React.createElement("button", {
    className: "nav prev",
    onClick: () => setI(p => (p - 1 + POSTS.length) % POSTS.length)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 26,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("button", {
    className: "nav next",
    onClick: () => setI(p => (p + 1) % POSTS.length)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 26,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    className: "counter"
  }, POSTS.map((p, idx) => /*#__PURE__*/React.createElement("span", {
    key: p.key,
    className: 'dot' + (idx === i ? ' on' : ''),
    onClick: () => setI(idx)
  })), /*#__PURE__*/React.createElement("b", {
    style: {
      marginLeft: 6
    }
  }, i + 1, " / ", POSTS.length)));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/app.jsx", error: String((e && e.message) || e) }); }

// slides/posts.jsx
try { (() => {
/* ============================================================
   Plantillas de redes sociales — Alcaldía de Guarenas
   Formato 4:5 · 1080 × 1350 (Instagram/feed)
   ============================================================ */

function Icon({
  name,
  size = 24,
  color,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "lic",
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": name
  }));
}
const SHEEN = 'radial-gradient(120% 80% at 80% 0%, #ffffff 0%, #eef2fb 55%, #e3e9f7 100%)';

/* ---------- 1 · CAMPAÑA ---------- */
function CampaignPost() {
  return /*#__PURE__*/React.createElement("div", {
    className: "post",
    style: {
      background: SHEEN,
      padding: '72px 70px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo-guarenas.svg",
    alt: "Alcald\xEDa de Guarenas",
    style: {
      height: 150,
      alignSelf: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 60,
      color: 'var(--guarenas-navy)',
      letterSpacing: '.01em',
      lineHeight: 1
    }
  }, "RUTAS DE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 130,
      color: 'var(--guarenas-navy)',
      letterSpacing: '-.01em',
      lineHeight: .95,
      margin: '6px 0'
    }
  }, "RECOLECCI\xD3N"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 56,
      color: 'var(--guarenas-blue)',
      lineHeight: 1
    }
  }, "DE DESECHOS S\xD3LIDOS")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 18,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "recycle",
    size: 56,
    color: "var(--accent-green)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-rounded)',
      fontWeight: 700,
      fontSize: 34,
      color: 'var(--guarenas-navy)',
      lineHeight: 1.12,
      letterSpacing: '.01em',
      whiteSpace: 'nowrap'
    }
  }, "CUIDEMOS A NUESTRA", /*#__PURE__*/React.createElement("br", null), "QUERIDA GUARENAS")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      position: 'relative',
      background: 'linear-gradient(140deg,#0B2C66,#106CFF)',
      borderRadius: 40,
      overflow: 'hidden',
      padding: '46px 54px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/isotipo-guarenas-white.svg",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -50,
      top: -60,
      height: 320,
      opacity: .1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 44,
      color: '#fff',
      lineHeight: 1.05,
      position: 'relative'
    }
  }, "DESLIZA PARA", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fc0ff'
    }
  }, "VER LAS RUTAS")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 108,
      height: 108,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.16)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevrons-right",
    size: 56,
    color: "#fff"
  }))));
}

/* ---------- 2 · INVITACIÓN / EVENTO ---------- */
function EventPost() {
  const rows = [{
    i: 'calendar',
    t: 'Sábado 14 de junio'
  }, {
    i: 'clock',
    t: '9:00 a.m. – 2:00 p.m.'
  }, {
    i: 'map-pin',
    t: 'Plaza Bolívar de Guarenas'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "post",
    style: {
      background: 'linear-gradient(155deg,#0B2C66 0%,#106CFF 100%)',
      padding: '78px 76px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/isotipo-guarenas-white.svg",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -150,
      bottom: -120,
      height: 640,
      opacity: .07
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo-guarenas-white.svg",
    alt: "Alcald\xEDa de Guarenas",
    style: {
      height: 132,
      position: 'relative'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 90
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-rounded)',
      fontWeight: 600,
      fontSize: 28,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--accent-orange)'
    }
  }, "Te invitamos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 104,
      color: '#fff',
      lineHeight: .98,
      letterSpacing: '-.02em',
      margin: '22px 0 0'
    }
  }, "JORNADA DE", /*#__PURE__*/React.createElement("br", null), "ATENCI\xD3N AL", /*#__PURE__*/React.createElement("br", null), "CIUDADANO")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 78,
      height: 78,
      borderRadius: 22,
      background: 'rgba(255,255,255,.12)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.i,
    size: 36,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-rounded)',
      fontWeight: 500,
      fontSize: 40,
      color: '#fff',
      whiteSpace: 'nowrap'
    }
  }, r.t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      height: 9,
      marginTop: 56,
      borderRadius: 5,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      flex: 1,
      background: 'var(--flag-yellow)'
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      flex: 1,
      background: '#6f93de'
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      flex: 1,
      background: 'var(--flag-red)'
    }
  })));
}

/* ---------- 3 · MENSAJE / COMUNICADO ---------- */
function MessagePost() {
  return /*#__PURE__*/React.createElement("div", {
    className: "post",
    style: {
      background: 'linear-gradient(150deg,#106CFF 0%,#0B2C66 100%)',
      padding: '84px 80px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo-guarenas-white.svg",
    alt: "Alcald\xEDa de Guarenas",
    style: {
      height: 124,
      alignSelf: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'auto 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Georgia, serif',
      fontSize: 220,
      lineHeight: .6,
      color: 'var(--accent-orange)',
      height: 110
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 64,
      color: '#fff',
      lineHeight: 1.22,
      letterSpacing: '-.01em',
      margin: 0
    }
  }, "Trabajamos cada d\xEDa por una Guarenas m\xE1s ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fc0ff'
    }
  }, "segura, limpia y pr\xF3spera"), " para todos."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 90,
      height: 5,
      background: 'var(--accent-orange)',
      borderRadius: 3,
      margin: '54px auto 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-rounded)',
      fontWeight: 600,
      fontSize: 34,
      color: '#cdd9f4',
      marginTop: 26
    }
  }, "Despacho del Alcalde")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-rounded)',
      fontWeight: 600,
      fontSize: 30,
      color: 'rgba(255,255,255,.55)',
      textAlign: 'center',
      letterSpacing: '.04em'
    }
  }, "#MiQueridaGuarenas"));
}

/* ---------- 4 · CIFRA / DATO ---------- */
function DataPost() {
  return /*#__PURE__*/React.createElement("div", {
    className: "post",
    style: {
      background: SHEEN,
      padding: '78px 76px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo-guarenas.svg",
    alt: "Alcald\xEDa de Guarenas",
    style: {
      height: 118
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 96,
      height: 96,
      borderRadius: 28,
      background: 'var(--blue-tint)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 50,
    color: "var(--guarenas-blue)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'auto 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-rounded)',
      fontWeight: 600,
      fontSize: 30,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--accent-green)'
    }
  }, "Guarenas en cifras"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 232,
      color: 'var(--guarenas-navy)',
      letterSpacing: '-.03em',
      lineHeight: .9,
      margin: '20px 0 0'
    }
  }, "+220", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 120,
      verticalAlign: 'super'
    }
  }, "mil")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 56,
      color: 'var(--guarenas-blue)',
      marginTop: 8
    }
  }, "guareneros beneficiados"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 34,
      color: 'var(--fg-2)',
      lineHeight: 1.5,
      marginTop: 26,
      maxWidth: 760
    }
  }, "con los servicios municipales modernizados durante el \xFAltimo a\xF1o de gesti\xF3n.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 9,
      borderRadius: 5,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      flex: 1,
      background: 'var(--flag-yellow)'
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      flex: 1,
      background: 'var(--guarenas-blue)'
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      flex: 1,
      background: 'var(--flag-red)'
    }
  })));
}
const POSTS = [{
  key: 'campana',
  label: 'Campaña',
  Comp: CampaignPost
}, {
  key: 'evento',
  label: 'Invitación',
  Comp: EventPost
}, {
  key: 'mensaje',
  label: 'Mensaje',
  Comp: MessagePost
}, {
  key: 'dato',
  label: 'Cifra / Dato',
  Comp: DataPost
}];
Object.assign(window, {
  Icon,
  CampaignPost,
  EventPost,
  MessagePost,
  DataPost,
  POSTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/posts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal-web/RouteFinder.jsx
try { (() => {
/* ============================================================
   RouteFinder — "Rutas de Recolección" (Aseo Urbano / green)
   Flat, rectangular, editorial. Light band + navy result panel.
   ============================================================ */

const ROUTE_DATA = {
  'Lunes': {
    sectors: ['Casco Central', 'Trapichito', 'Menca de Leoni'],
    shift: 'Mañana · 6:00 a.m.',
    truck: 'Unidad 04'
  },
  'Martes': {
    sectors: ['El Calvario', 'La Fila', 'Valle Arriba'],
    shift: 'Mañana · 7:00 a.m.',
    truck: 'Unidad 02'
  },
  'Miércoles': {
    sectors: ['Nueva Casarapa', 'Castillejo', 'Oropeza Castillo'],
    shift: 'Tarde · 1:00 p.m.',
    truck: 'Unidad 05'
  },
  'Jueves': {
    sectors: ['Trapichito II', 'El Rodeo', 'Ciudad Casarapa'],
    shift: 'Mañana · 6:30 a.m.',
    truck: 'Unidad 01'
  },
  'Viernes': {
    sectors: ['Casco Central', 'San Pedro', 'Las Islas'],
    shift: 'Tarde · 2:00 p.m.',
    truck: 'Unidad 03'
  },
  'Sábado': {
    sectors: ['Recolección general', 'Zonas comerciales'],
    shift: 'Mañana · 6:00 a.m.',
    truck: 'Unidades 01–05'
  }
};
const DAYS = Object.keys(ROUTE_DATA);
function RouteFinder() {
  const [day, setDay] = React.useState('Lunes');
  const data = ROUTE_DATA[day];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "rutas",
    style: {
      background: 'var(--bg-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-shell rf-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: 'var(--guarenas-green)'
    }
  }, "Aseo Urbano"), /*#__PURE__*/React.createElement("h2", {
    className: "display-lg",
    style: {
      color: 'var(--guarenas-navy)',
      margin: '14px 0 16px'
    }
  }, "Rutas de recolecci\xF3n", /*#__PURE__*/React.createElement("br", null), "de desechos s\xF3lidos"), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      color: 'var(--fg-2)',
      maxWidth: 420,
      margin: '0 0 28px'
    }
  }, "Selecciona tu d\xEDa y conoce el horario y los sectores donde pasa el cami\xF3n. Cuidemos juntos a nuestra querida Guarenas."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 0,
      border: '1px solid var(--border-strong)',
      width: 'fit-content'
    }
  }, DAYS.map((d, i) => /*#__PURE__*/React.createElement("button", {
    key: d,
    onClick: () => setDay(d),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13.5,
      letterSpacing: '.3px',
      padding: '12px 18px',
      border: 'none',
      borderLeft: i === 0 ? 'none' : '1px solid var(--border-strong)',
      cursor: 'pointer',
      transition: 'background .15s,color .15s',
      background: day === d ? 'var(--guarenas-green)' : 'var(--bg-1)',
      color: day === d ? '#fff' : 'var(--fg-2)'
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--guarenas-navy)',
      color: '#fff',
      padding: 40,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/isotipo-guarenas-white.svg",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -50,
      bottom: -60,
      height: 260,
      opacity: .06
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: '#7FA8FF'
    }
  }, "Ruta del d\xEDa"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      border: '1px solid var(--guarenas-green)',
      color: '#9bd9bd',
      fontWeight: 700,
      fontSize: 12.5,
      letterSpacing: '.4px',
      padding: '6px 12px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "truck",
    size: 15,
    color: "#9bd9bd"
  }), data.truck)), /*#__PURE__*/React.createElement("div", {
    className: "display-lg",
    style: {
      color: '#fff',
      margin: '18px 0 4px',
      position: 'relative'
    }
  }, day), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      fontWeight: 300,
      fontSize: 16,
      color: 'var(--on-dark-soft,#BCD0F5)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16,
    color: "#BCD0F5"
  }), data.shift), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,.16)',
      margin: '24px 0',
      position: 'relative'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: '#7FA8FF',
      marginBottom: 16,
      display: 'block',
      position: 'relative'
    }
  }, "Sectores"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, data.sectors.map((sec, i) => /*#__PURE__*/React.createElement("div", {
    key: sec,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 0',
      borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,.1)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 17,
    color: "#9bd9bd"
  }), /*#__PURE__*/React.createElement("span", {
    className: "body",
    style: {
      color: '#fff',
      fontWeight: 300
    }
  }, sec), i === 0 && /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      marginLeft: 'auto',
      color: '#9bd9bd',
      fontSize: 11,
      letterSpacing: '1.2px'
    }
  }, "Inicio")))))));
}
window.RouteFinder = RouteFinder;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal-web/RouteFinder.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal-web/app.jsx
try { (() => {
/* ============================================================
   App — Portal Ciudadano de Guarenas (BMW-corporate dialect)
   ============================================================ */

function TramiteModal({
  open,
  onClose
}) {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    if (open) setStep(0);
  }, [open]);
  if (!open) return null;
  const tramites = [{
    icon: 'home',
    name: 'Solvencia de inmueble'
  }, {
    icon: 'briefcase',
    name: 'Patente de industria y comercio'
  }, {
    icon: 'file-check',
    name: 'Constancia de residencia'
  }, {
    icon: 'recycle',
    name: 'Reporte de aseo urbano'
  }];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 80,
      background: 'rgba(7,32,63,.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--bg-1)',
      width: 'min(540px,100%)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--guarenas-navy)',
      padding: '22px 28px',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/isotipo-guarenas-white.svg",
    style: {
      height: 30
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18
    }
  }, "Tr\xE1mites en l\xEDnea")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 'none',
      color: '#fff',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28
    }
  }, step === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "body-sm",
    style: {
      color: 'var(--fg-2)',
      margin: '0 0 18px'
    }
  }, "Selecciona el tr\xE1mite que deseas iniciar:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, tramites.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t.name,
    onClick: () => setStep(1),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '16px 4px',
      borderRadius: 0,
      border: 'none',
      borderTop: i === 0 ? '1px solid var(--border)' : 'none',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg-1)',
      textAlign: 'left',
      transition: 'background .15s'
    },
    onMouseOver: e => {
      e.currentTarget.style.background = 'var(--bg-2)';
    },
    onMouseOut: e => {
      e.currentTarget.style.background = 'var(--bg-1)';
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.icon,
    size: 22,
    color: "var(--guarenas-blue)",
    style: {
      strokeWidth: 1.5
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "title-md",
    style: {
      color: 'var(--guarenas-navy)',
      flex: 1
    }
  }, t.name), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 20,
    color: "var(--fg-4)"
  }))))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '18px 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 60,
      height: 60,
      background: 'var(--success-bg)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 30,
    color: "var(--success)"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "display-sm",
    style: {
      color: 'var(--guarenas-navy)',
      margin: '0 0 10px'
    }
  }, "Solicitud iniciada"), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      color: 'var(--fg-2)',
      margin: '0 0 26px'
    }
  }, "Recibir\xE1s la confirmaci\xF3n y los pr\xF3ximos pasos en tu correo. (Demostraci\xF3n del kit.)"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onClose
  }, "Entendido")))));
}
function App() {
  const [active, setActive] = React.useState('Inicio');
  const [modal, setModal] = React.useState(false);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const handleNav = it => {
    setActive(it);
    const map = {
      'Servicios': 'servicios',
      'Noticias': 'noticias',
      'La Alcaldía': 'rutas',
      'Contacto': 'noticias',
      'Inicio': null
    };
    const id = map[it];
    if (id) {
      const el = document.getElementById(id);
      if (el) window.scrollTo({
        top: el.offsetTop - 64,
        behavior: 'smooth'
      });
    } else window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement(SiteHeader, {
    active: active,
    onNav: handleNav,
    onTramite: () => setModal(true)
  }), /*#__PURE__*/React.createElement(Hero, {
    onTramite: () => setModal(true)
  }), /*#__PURE__*/React.createElement(ServicesGrid, null), /*#__PURE__*/React.createElement(RouteFinder, null), /*#__PURE__*/React.createElement(StatsBand, null), /*#__PURE__*/React.createElement(NewsGrid, {
    onNav: handleNav
  }), /*#__PURE__*/React.createElement(CtaBand, {
    onTramite: () => setModal(true)
  }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(TramiteModal, {
    open: modal,
    onClose: () => setModal(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal-web/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal-web/components.jsx
try { (() => {
/* ============================================================
   Portal Ciudadano de Guarenas — UI Kit components
   Design language: BMW-corporate editorial dialect applied to
   the Guarenas brand — rectangular 0px, flat (no shadow), heavy
   Poppins display vs Light 300 body, 80px section rhythm, depth
   from light→navy band rotation + photography/color-block.
   ============================================================ */

function Icon({
  name,
  size = 18,
  color,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "lic",
    style: {
      width: size,
      height: size,
      color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": name
  }));
}

/* ---------------- TOP UTILITY BAR ---------------- */
function TopBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-2)',
      borderBottom: '1px solid var(--border)',
      color: 'var(--fg-3)',
      fontWeight: 400,
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-shell",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 38
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      boxShadow: '0 0 0 1px var(--border)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 8,
      height: 12,
      background: 'var(--flag-yellow)'
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      width: 8,
      height: 12,
      background: 'var(--flag-blue)'
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      width: 8,
      height: 12,
      background: 'var(--flag-red)'
    }
  })), "Rep\xFAblica Bolivariana de Venezuela \xB7 Estado Miranda"), /*#__PURE__*/React.createElement("span", {
    className: "tb-links",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 13
  }), "0212-000-0000"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 13
  }), "contacto@guarenas.gob.ve"))));
}

/* ---------------- SITE HEADER / NAV ---------------- */
function SiteHeader({
  active,
  onNav,
  onTramite
}) {
  const [open, setOpen] = React.useState(false);
  const items = ['Inicio', 'La Alcaldía', 'Servicios', 'Noticias', 'Contacto'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'var(--bg-1)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-shell",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 64
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('Inicio');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/isotipo-guarenas.svg",
    alt: "Guarenas",
    style: {
      height: 38
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.05
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--guarenas-navy)',
      letterSpacing: 0
    }
  }, "Guarenas"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontSize: 11,
      color: 'var(--fg-3)',
      letterSpacing: '.3px'
    }
  }, "Municipio Ambrosio Plaza"))), /*#__PURE__*/React.createElement("nav", {
    className: "main-nav",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(it);
    },
    style: {
      fontWeight: 400,
      fontSize: 14,
      letterSpacing: '.3px',
      color: active === it ? 'var(--guarenas-blue)' : 'var(--fg-2)',
      paddingBottom: 4,
      borderBottom: active === it ? '2px solid var(--guarenas-blue)' : '2px solid transparent'
    }
  }, it))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "main-nav",
    style: {
      color: 'var(--fg-2)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 19
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "main-nav",
    style: {
      color: 'var(--fg-2)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontWeight: 400,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 18
  }), "ES"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary main-nav",
    style: {
      minHeight: 40,
      padding: '10px 22px'
    },
    onClick: onTramite
  }, "Tr\xE1mites en l\xEDnea"), /*#__PURE__*/React.createElement("button", {
    className: "hamburger",
    onClick: () => setOpen(!open),
    style: {
      display: 'none',
      background: 'transparent',
      border: 'none',
      color: 'var(--guarenas-navy)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'x' : 'menu',
    size: 26
  })))), open && /*#__PURE__*/React.createElement("div", {
    className: "kit-shell",
    style: {
      padding: '4px 0 16px'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(it);
      setOpen(false);
    },
    style: {
      display: 'block',
      fontWeight: 400,
      fontSize: 16,
      padding: '13px 4px',
      color: active === it ? 'var(--guarenas-blue)' : 'var(--fg-2)',
      borderBottom: '1px solid var(--border)'
    }
  }, it)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      width: '100%',
      marginTop: 14
    },
    onClick: () => {
      setOpen(false);
      onTramite();
    }
  }, "Tr\xE1mites en l\xEDnea")), /*#__PURE__*/React.createElement("div", {
    className: "flagbar"
  }, /*#__PURE__*/React.createElement("i", {
    className: "y"
  }), /*#__PURE__*/React.createElement("i", {
    className: "b"
  }), /*#__PURE__*/React.createElement("i", {
    className: "r"
  })));
}

/* ---------------- HERO (dark navy band) ---------------- */
function Hero({
  onTramite
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--guarenas-navy)',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/isotipo-guarenas-white.svg",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -140,
      top: -80,
      height: 620,
      opacity: .06,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "kit-shell hero-grid",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center',
      padding: '88px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: '#7FA8FF'
    }
  }, "Alcald\xEDa Bolivariana de Guarenas"), /*#__PURE__*/React.createElement("h1", {
    className: "display-xl",
    style: {
      margin: '18px 0 0',
      color: '#fff'
    }
  }, "Mi querida", /*#__PURE__*/React.createElement("br", null), "Guarenas"), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      color: 'var(--on-dark-soft,#BCD0F5)',
      margin: '22px 0 0',
      maxWidth: 420
    }
  }, "Trabajamos por un municipio modelo de Venezuela: servicios m\xE1s cercanos para cada guarenero y guarenera."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 34,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onTramite
  }, "Realizar un tr\xE1mite"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-on-dark"
  }, "Rutas de recolecci\xF3n"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-media",
    style: {
      alignSelf: 'stretch',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/portada-recoleccion.jpg",
    alt: "Campa\xF1a Rutas de Recolecci\xF3n",
    style: {
      width: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }))));
}

/* ---------------- SERVICES (model-card grid) ---------------- */
const SERVICES = [{
  icon: 'recycle',
  name: 'Aseo Urbano',
  desc: 'Rutas y horarios de recolección de desechos sólidos.',
  color: 'var(--guarenas-green)'
}, {
  icon: 'building-2',
  name: 'Obras Públicas',
  desc: 'Infraestructura, vialidad y mantenimiento de la ciudad.',
  color: 'var(--guarenas-blue)'
}, {
  icon: 'drama',
  name: 'Cultura',
  desc: 'Eventos, talleres y patrimonio de Guarenas.',
  color: 'var(--guarenas-navy)'
}, {
  icon: 'landmark',
  name: 'Administración',
  desc: 'Trámites, impuestos municipales y atención al ciudadano.',
  color: 'var(--guarenas-yellow)'
}, {
  icon: 'shield-check',
  name: 'Seguridad',
  desc: 'Protección ciudadana y atención de emergencias.',
  color: 'var(--guarenas-blue)'
}, {
  icon: 'heart-handshake',
  name: 'Desarrollo Social',
  desc: 'Programas y misiones para las comunidades.',
  color: 'var(--guarenas-navy)'
}, {
  icon: 'leaf',
  name: 'Ambiente',
  desc: 'Parques, áreas verdes y sostenibilidad del municipio.',
  color: 'var(--guarenas-green)'
}, {
  icon: 'graduation-cap',
  name: 'Educación',
  desc: 'Programas educativos y apoyo a las escuelas.',
  color: 'var(--guarenas-blue)'
}];
function ServicesGrid() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "servicios",
    style: {
      background: 'var(--bg-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-shell"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Servicios al ciudadano"), /*#__PURE__*/React.createElement("h2", {
    className: "display-lg",
    style: {
      color: 'var(--guarenas-navy)',
      margin: '14px 0 0'
    }
  }, "Todo el municipio, en un solo lugar")), /*#__PURE__*/React.createElement("div", {
    className: "svc-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.name,
    href: "#",
    className: "svc-card",
    style: {
      display: 'block',
      background: 'var(--bg-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-2)',
      aspectRatio: '16 / 11',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 52,
    color: s.color,
    style: {
      strokeWidth: 1.5
    }
  })), /*#__PURE__*/React.createElement("h3", {
    className: "title-md",
    style: {
      color: 'var(--guarenas-navy)',
      margin: '18px 0 6px'
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    className: "body-sm",
    style: {
      color: 'var(--fg-2)',
      margin: '0 0 16px'
    }
  }, s.desc), /*#__PURE__*/React.createElement("span", {
    className: "textlink"
  }, "Ver m\xE1s ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 15
  })))))), /*#__PURE__*/React.createElement("style", null, `.svc-card .lic svg{transition:transform .2s ease;} .svc-card:hover .lic[style*="52"] svg, .svc-card:hover > div .lic svg{transform:scale(1.06);}`));
}

/* ---------------- STATS BAND (spec-cell row on navy) ---------------- */
function StatsBand() {
  const stats = [{
    n: '1791',
    l: 'Año de fundación'
  }, {
    n: '+220.000',
    l: 'Habitantes'
  }, {
    n: '4',
    l: 'Parroquias'
  }, {
    n: '24/7',
    l: 'Atención de emergencias'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--guarenas-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-shell stats-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      padding: '64px 48px'
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      padding: '4px 32px',
      borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,.16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "display-md",
    style: {
      color: '#fff'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: '#7FA8FF',
      marginTop: 10,
      display: 'block'
    }
  }, s.l)))));
}

/* ---------------- NEWS (model-card grid) ---------------- */
const NEWS = [{
  tag: 'Aseo Urbano',
  color: 'var(--guarenas-green)',
  title: 'Nuevas unidades se suman a la recolección de desechos sólidos',
  date: '28 May 2025',
  img: 'linear-gradient(135deg,#2f7d5b,#1d4f39)'
}, {
  tag: 'Obras Públicas',
  color: 'var(--guarenas-blue)',
  title: 'Avanza la rehabilitación de la vialidad en Ambrosio Plaza',
  date: '24 May 2025',
  img: 'linear-gradient(135deg,#106CFF,#0A4FC4)'
}, {
  tag: 'Cultura',
  color: 'var(--guarenas-navy)',
  title: 'Jornada cultural celebra las tradiciones de Guarenas',
  date: '19 May 2025',
  img: 'linear-gradient(135deg,#0B2C66,#07203F)'
}];
function NewsGrid({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "noticias",
    style: {
      background: 'var(--bg-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-shell"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 40,
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Noticias"), /*#__PURE__*/React.createElement("h2", {
    className: "display-lg",
    style: {
      color: 'var(--guarenas-navy)',
      margin: '14px 0 0'
    }
  }, "Lo \xFAltimo de la gesti\xF3n")), /*#__PURE__*/React.createElement("span", {
    className: "textlink",
    onClick: () => onNav('Noticias'),
    style: {
      cursor: 'pointer'
    }
  }, "Ver todas ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 15
  }))), /*#__PURE__*/React.createElement("div", {
    className: "news-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, NEWS.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.title,
    href: "#",
    className: "news-card",
    style: {
      display: 'block',
      background: 'var(--bg-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 10',
      background: n.img
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: n.color,
      letterSpacing: '1.2px'
    }
  }, n.tag), /*#__PURE__*/React.createElement("span", {
    className: "body-sm",
    style: {
      color: 'var(--fg-3)'
    }
  }, n.date)), /*#__PURE__*/React.createElement("h3", {
    className: "title-md",
    style: {
      color: 'var(--guarenas-navy)',
      margin: 0,
      lineHeight: 1.35
    }
  }, n.title)))))));
}

/* ---------------- CTA BAND (dark, pre-footer) ---------------- */
function CtaBand({
  onTramite
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--guarenas-navy-900)',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/isotipo-guarenas-white.svg",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: -120,
      bottom: -160,
      height: 520,
      opacity: .05
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "kit-shell",
    style: {
      position: 'relative',
      textAlign: 'center',
      padding: '80px 48px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: '#7FA8FF'
    }
  }, "Cuidemos a nuestra querida Guarenas"), /*#__PURE__*/React.createElement("h2", {
    className: "display-md",
    style: {
      color: '#fff',
      margin: '16px 0 28px',
      maxWidth: 720,
      marginInline: 'auto'
    }
  }, "Realiza tus tr\xE1mites municipales en l\xEDnea, sin filas y desde cualquier lugar."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-on-dark",
    onClick: onTramite
  }, "Comenzar un tr\xE1mite")));
}

/* ---------------- FOOTER ---------------- */
function SiteFooter() {
  const cols = [{
    h: 'La Alcaldía',
    items: ['Misión y visión', 'Despacho del Alcalde', 'Concejo Municipal', 'Gaceta municipal']
  }, {
    h: 'Servicios',
    items: ['Trámites en línea', 'Aseo Urbano', 'Obras Públicas', 'Cultura']
  }, {
    h: 'Contacto',
    items: ['Av. Principal, Guarenas', '0212-000-0000', 'contacto@guarenas.gob.ve']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bg-2)',
      color: 'var(--fg-2)',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flagbar"
  }, /*#__PURE__*/React.createElement("i", {
    className: "y"
  }), /*#__PURE__*/React.createElement("i", {
    className: "b"
  }), /*#__PURE__*/React.createElement("i", {
    className: "r"
  })), /*#__PURE__*/React.createElement("div", {
    className: "kit-shell footer-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
      gap: 40,
      padding: '64px 48px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-guarenas.svg",
    alt: "Alcald\xEDa de Guarenas",
    style: {
      height: 60
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "body-sm",
    style: {
      color: 'var(--fg-2)',
      margin: '20px 0 16px',
      maxWidth: 240
    }
  }, "Cuidemos a nuestra querida Guarenas."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, [['Facebook', 'M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z'], ['Instagram', 'M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.1.5 1.6 1s.8 1 1 1.6c.3.6.5 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.5 2.3-.2.6-.5 1.1-1 1.6s-1 .8-1.6 1c-.6.3-1.3.5-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1.1-.5-1.6-1s-.8-1-1-1.6c-.3-.6-.5-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3.2-.6.5-1.1 1-1.6s1-.8 1.6-1c.6-.3 1.3-.5 2.3-.5C9 2 9.3 2 12 2zm0 1.8c-2.7 0-3 0-4 .1-.8 0-1.2.2-1.5.3-.4.1-.6.3-.9.6-.3.3-.5.5-.6.9-.1.3-.3.7-.3 1.5-.1 1-.1 1.3-.1 4s0 3 .1 4c0 .8.2 1.2.3 1.5.1.4.3.6.6.9.3.3.5.5.9.6.3.1.7.3 1.5.3 1 .1 1.3.1 4 .1s3 0 4-.1c.8 0 1.2-.2 1.5-.3.4-.1.6-.3.9-.6.3-.3.5-.5.6-.9.1-.3.3-.7.3-1.5.1-1 .1-1.3.1-4s0-3-.1-4c0-.8-.2-1.2-.3-1.5-.1-.4-.3-.6-.6-.9-.3-.3-.5-.5-.9-.6-.3-.1-.7-.3-1.5-.3-1-.1-1.3-.1-4-.1zm0 3.1a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2zm0 1.8a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6zm5.3-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z'], ['X', 'M17.5 3h3.2l-7 8 8.3 11h-6.5l-5-6.6L8 22H4.8l7.5-8.6L4 3h6.6l4.6 6.1L17.5 3zm-1.1 17h1.8L8.3 4.8H6.4L16.4 20z']].map(([label, d]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    "aria-label": label,
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'var(--bg-3)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--guarenas-navy)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: d
  })))))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", {
    className: "eyebrow",
    style: {
      color: 'var(--guarenas-navy)',
      margin: '4px 0 18px',
      display: 'block'
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "body-sm",
    style: {
      color: 'var(--fg-2)'
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    className: "kit-shell",
    style: {
      borderTop: '1px solid var(--border)',
      padding: '20px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "body-sm",
    style: {
      color: 'var(--fg-3)'
    }
  }, "\xA9 2025 Alcald\xEDa Bolivariana de Guarenas \xB7 Municipio Ambrosio Plaza"), /*#__PURE__*/React.createElement("span", {
    className: "body-sm",
    style: {
      color: 'var(--fg-3)'
    }
  }, "Rep\xFAblica Bolivariana de Venezuela")));
}
Object.assign(window, {
  Icon,
  TopBar,
  SiteHeader,
  Hero,
  ServicesGrid,
  StatsBand,
  NewsGrid,
  CtaBand,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal-web/components.jsx", error: String((e && e.message) || e) }); }

})();
