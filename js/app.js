// Coordenadas reales de los sectores de San Juan de Lurigancho
const COORDENADAS_SJL = {
  'J.C. Mariátegui': [-11.9465, -76.9850],
  'Monteverde / Bayóvar': [-11.9585, -76.9920],
  'Canto Grande': [-11.9770, -77.0040],
  'La Huayrona': [-11.9940, -77.0095],
  'Zárate / Caja de Agua': [-12.0210, -77.0110]
};

// Estado inicial del padrón de SJL, 120 reportes en los 3 ejes fijos y proyectos
const estadoInicial = {
  lideresaActual: null,
  capaMapa: 'necesidades',
  filtroProyecto: 'todos',
  colaboradoresTemp: [],
  conteoEjes: {
    'Alumbrado y transitabilidad': 48,
    'Erradicación de microbasurales': 42,
    'Recuperación de espacios recreativos': 30
  },
  reportesRecientes: [
    { vecino: 'Rosa C. (DNI 43******)', edad: 38, zona: 'J.C. Mariátegui', eje: 'Alumbrado y transitabilidad', detalle: '3 postes apagados en el pasaje peatonal hacia el paradero 5.', coords: [-11.9472, -76.9861], foto: '' },
    { vecino: 'Jorge M. (DNI 71******)', edad: 29, zona: 'Canto Grande', eje: 'Erradicación de microbasurales', detalle: 'Acumulación de desmonte y basura en la esquina del colegio.', coords: [-11.9762, -77.0032], foto: '' },
    { vecino: 'Elena V. (DNI 46******)', edad: 44, zona: 'Monteverde / Bayóvar', eje: 'Recuperación de espacios recreativos', detalle: 'Juegos infantiles oxidados y falta de luz en la losa.', coords: [-11.9592, -76.9912], foto: '' },
    { vecino: 'Luis P. (DNI 75******)', edad: 24, zona: 'La Huayrona', eje: 'Alumbrado y transitabilidad', detalle: 'Vereda rota y escalera sin iluminación nocturna.', coords: [-11.9948, -77.0088], foto: '' }
  ],
  lideresasSJL: [
    { nombre: 'Leyla Usca Chambi (23 años)', colectivo: 'Jóvenes Líderes de Mariátegui SJL', zona: 'J.C. Mariátegui', foco: 'Medioambiente e Igualdad de género', coords: [-11.9455, -76.9840] },
    { nombre: 'Maribel Quispe Arapa (25 años)', colectivo: 'Junta Juvenil en defensa de Monteverde', zona: 'Monteverde / Bayóvar', foco: 'Medioambiente y acciones solidarias', coords: [-11.9575, -76.9930] },
    { nombre: 'Brigitte Mejia (22 años)', colectivo: 'Asociación Cultural Kuyaykim Perú', zona: 'Canto Grande', foco: 'Cultura comunitaria e Igualdad de género', coords: [-11.9780, -77.0050] },
    { nombre: 'Valeria Quispe (21 años)', colectivo: 'COALE Lima Este - SJL', zona: 'Zárate / Caja de Agua', foco: 'Educación y espacios seguros', coords: [-12.0200, -77.0100] }
  ],
  proyectos: [
    {
      titulo: 'Proyecto: Parques seguros y luminarias',
      eje: 'Recuperación de espacios recreativos',
      zona: 'Canto Grande',
      estado: 'En proceso',
      icono: '🌳',
      descripcion: 'Faena vecinal y expediente municipal para rehabilitar 2 parques y reponer 8 luminarias.',
      ruta: 'Etapa 1: Diagnóstico en Canto Grande → Etapa 2: Faena vecinal → Etapa 3: Entrega a Municipalidad SJL',
      rutaCoords: [[-11.9790, -77.0060], [-11.9770, -77.0040], [-11.9745, -77.0015]],
      colaboradores: [
        { nombre: 'María Huamán', dni: '72458963' },
        { nombre: 'Pedro Rojas', dni: '46852147' }
      ],
      foto: ''
    },
    {
      titulo: 'Proyecto: Esquinas limpias sin microbasurales',
      eje: 'Erradicación de microbasurales',
      zona: 'Monteverde / Bayóvar',
      estado: 'Propuesta',
      icono: '🗑️',
      descripcion: 'Mapeo de 6 puntos críticos de residuos para ruta de fiscalización ambiental.',
      ruta: 'Etapa 1: Registro fotográfico con vecinos → Etapa 2: Señalización ecológica → Etapa 3: Recojo municipal',
      rutaCoords: [[-11.9600, -76.9940], [-11.9585, -76.9920], [-11.9565, -76.9895]],
      colaboradores: [
        { nombre: 'Lucía Torres', dni: '75123698' }
      ],
      foto: ''
    },
    {
      titulo: 'Proyecto: Ruta peatonal iluminada',
      eje: 'Alumbrado y transitabilidad',
      zona: 'J.C. Mariátegui',
      estado: 'Realizado',
      icono: '💡',
      descripcion: 'Se logró la reposición de luminarias LED en las escaleras de acceso comunal.',
      ruta: 'Etapa 1: Censo de postes apagados → Etapa 2: Gestión vecinal → Etapa 3: Inauguración de vía iluminada',
      rutaCoords: [[-11.9480, -76.9870], [-11.9465, -76.9850], [-11.9450, -76.9830]],
      colaboradores: [
        { nombre: 'Carmen Quispe', dni: '44589632' },
        { nombre: 'Ana Condori', dni: '73698521' }
      ],
      foto: ''
    }
  ]
};

// RF-1: Función de verificación de Lideresa SJL (DNI 8 dígitos, 18-29 años, SJL)
function validarAccesoLideresaSJL(nombre, dni, edad, zona, confirmaSJL) {
  const dniValido = /^\d{8}$/.test(String(dni || '').trim());
  const edadNum = Number(edad);
  const edadValida = !isNaN(edadNum) && edadNum >= 18 && edadNum <= 29;
  const nombreValido = Boolean(nombre && String(nombre).trim().length >= 3);
  const zonaValida = Boolean(zona && String(zona).trim().length > 0);
  return Boolean(nombreValido && dniValido && edadValida && zonaValida && confirmaSJL);
}

// RF-6: Función de verificación de Vecino SJL (DNI 8 dígitos, >= 18 años, SJL)
function validarReporteVecinoSJL(nombre, dni, edad, zona, confirmaSJL) {
  const dniValido = /^\d{8}$/.test(String(dni || '').trim());
  const edadNum = Number(edad);
  const edadValida = !isNaN(edadNum) && edadNum >= 18;
  const nombreValido = Boolean(nombre && String(nombre).trim().length >= 3);
  const zonaValida = Boolean(zona && String(zona).trim().length > 0);
  return Boolean(nombreValido && dniValido && edadValida && zonaValida && confirmaSJL);
}

// RF-3: Cálculo de proporciones y total de los 3 ejes fijos
function calcularResumenEjes(conteoEjes) {
  const cA = Number(conteoEjes['Alumbrado y transitabilidad'] || 0);
  const cB = Number(conteoEjes['Erradicación de microbasurales'] || 0);
  const cE = Number(conteoEjes['Recuperación de espacios recreativos'] || 0);
  const total = cA + cB + cE;
  if (total === 0) return { total: 0, pA: 0, pB: 0, pE: 0 };
  const pA = Math.round((cA / total) * 100);
  const pB = Math.round((cB / total) * 100);
  const pE = 100 - pA - pB;
  return { total, cA, cB, cE, pA, pB, pE };
}

// Persistencia en localStorage (cuando corre en navegador)
const estadoGuardado = typeof localStorage !== 'undefined'
  ? JSON.parse(localStorage.getItem('makipuray_sjl_data') || 'null')
  : null;

const estadoApp = estadoGuardado
  ? { ...estadoInicial, ...estadoGuardado, lideresaActual: null, colaboradoresTemp: [] }
  : estadoInicial;

function guardarEnStorage() {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('makipuray_sjl_data', JSON.stringify({
      conteoEjes: estadoApp.conteoEjes,
      reportesRecientes: estadoApp.reportesRecientes,
      proyectos: estadoApp.proyectos
    }));
  }
}

// Exportación compatible con Node.js para que pasen las pruebas unitarias (Tarea T5)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    COORDENADAS_SJL,
    estadoInicial,
    estadoApp,
    validarAccesoLideresaSJL,
    validarReporteVecinoSJL,
    calcularResumenEjes
  };
}