import { useState } from 'react';
import { Button } from './components/Button/Button';
import { Loader } from './components/Loader/Loader';
import { Image } from './components/Image/Image';
import { Input } from './components/Input/Input';
import { Dropdown } from './components/Dropdown/Dropdown';
import { Switch } from './components/Switch/Switch';
import { SnairlGlyph } from './components/SnairlGlyph/SnairlGlyph';
import { SnairlWordmark } from './components/SnairlGlyph/SnairlWordmark';

function App() {
  const [email, setEmail] = useState('');
  const [selectedCity, setSelectedCity] = useState('Madrid');
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [eventLog, setEventLog] = useState('Haz interacción para ver los eventos registrados...');

  const userActions = [
    { label: 'Ver Perfil', value: 'profile', icon: '👤', onClick: () => setEventLog('Navegando a: Perfil') },
    { label: 'Configuración', value: 'settings', icon: '⚙️', onClick: () => setEventLog('Abriendo: Configuración') },
    { label: 'Cerrar Sesión', value: 'logout', icon: '🚪', isDanger: true, onClick: () => setEventLog('Acción: Cerrar Sesión') },
  ];

  const cities = [
    { label: 'Madrid', value: 'Madrid', icon: '📍' },
    { label: 'Barcelona', value: 'Barcelona', icon: '📍' },
    { label: 'Valencia', value: 'Valencia', icon: '📍' },
  ];

  const sections = [
    { id: 'buttons', name: 'Button'},
    { id: 'loaders', name: 'Loader' },
    { id: 'images', name: 'Image'},
    { id: 'inputs', name: 'Input' },
    { id: 'dropdowns', name: 'Dropdown' },
    { id: 'switches', name: 'Switch' },
    { id: 'brand', name: 'Brand & Glyphs'},
  ];

  return (
    <div className="min-h-screen bg-snairl-base-50 text-snairl-text font-snairl flex flex-col antialiased">
      
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-snairl-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-snairl-accent-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-snairl-accent-500/20">
              <SnairlGlyph name="snail" size="md" color="white" />
            </div>
            <div className="flex items-center gap-1 font-extrabold text-xl tracking-tight">
              <SnairlWordmark size="sm" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block px-3 py-1 text-xs font-semibold bg-snairl-accent-500/10 text-snairl-accent-500 rounded-full border border-snairl-accent-500/20">
              v1.0.0
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <aside className="lg:col-span-3 lg:sticky lg:top-24 bg-white p-4 rounded-2xl border border-snairl-base-200 shadow-sm flex flex-col gap-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-snairl-base-400 px-3 py-1">
            Componentes
          </span>
          <nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-1 no-scrollbar pb-2 lg:pb-0">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-snairl-base-700 hover:text-snairl-accent-500 hover:bg-snairl-base-50 rounded-xl transition-colors whitespace-nowrap"
              >
                <span>{sec.name}</span>
              </a>
            ))}
          </nav>
          
          <div className="mt-4 pt-4 border-t border-snairl-base-100 hidden lg:flex flex-col gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-snairl-base-400">
              Consola de Eventos
            </span>
            <div className="p-2.5 bg-snairl-base-900 text-snairl-base-100 rounded-lg text-xs font-mono break-words leading-tight">
              {eventLog}
            </div>
          </div>
        </aside>

        <main className="lg:col-span-9 flex flex-col gap-10">
          
          <section className="bg-gradient-to-br from-snairl-base-100 via-white to-snairl-accent-500/5 p-8 rounded-3xl border border-snairl-base-200 shadow-sm flex flex-col gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Design System & Styleguide
            </h1>
            <p className="text-snairl-base-600 text-sm sm:text-base max-w-2xl">
              Librería de componentes UI accesible, reactiva y optimizada con estética curva orgánica.
            </p>
          </section>

          <section id="buttons" className="bg-white p-6 sm:p-8 rounded-3xl border border-snairl-base-200 shadow-sm flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-snairl-base-100 pb-4">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span>🔘</span> Button
                </h2>
                <p className="text-xs text-snairl-base-500 mt-0.5">Acciones principales y variaciones contextuales.</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center p-6 bg-snairl-base-50 rounded-2xl border border-snairl-base-100">
              <Button variant="primary" onClick={() => setEventLog('Button: Primario clickeado')}>Primario</Button>
              <Button variant="secondary" onClick={() => setEventLog('Button: Secundario clickeado')}>Secundario</Button>
              <Button variant="outline" onClick={() => setEventLog('Button: Outline clickeado')}>Outline</Button>
              <Button variant="danger" onClick={() => setEventLog('Button: Danger clickeado')}>Peligro</Button>
              <Button isDisabled>Deshabilitado</Button>
            </div>
          </section>

          <section id="loaders" className="bg-white p-6 sm:p-8 rounded-3xl border border-snairl-base-200 shadow-sm flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-snairl-base-100 pb-4">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span>⏳</span> Loader
                </h2>
                <p className="text-xs text-snairl-base-500 mt-0.5">Indicadores visuales de estado de carga.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 bg-snairl-base-50 rounded-2xl border border-snairl-base-100">
              <div className="flex items-center justify-center p-4 bg-white rounded-xl border border-snairl-base-100">
                <Loader variant="spinner" color="snairl" size="md" text="Cargando..." textPosition="bottom" />
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-xl border border-snairl-base-100">
                <Loader variant="dots" color="base" size="sm" text="Guardando" textPosition="top" />
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-xl border border-snairl-base-100">
                <Loader variant="pulse" color="snairl" size="lg" />
              </div>
            </div>
          </section>

          <section id="images" className="bg-white p-6 sm:p-8 rounded-3xl border border-snairl-base-200 shadow-sm flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-snairl-base-100 pb-4">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span>🖼️</span> Image
                </h2>
                <p className="text-xs text-snairl-base-500 mt-0.5">Tratamiento de imágenes con radios orgánicos y control de error.</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-wider text-snairl-base-400">Variaciones de Radio</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center p-6 bg-snairl-base-50 rounded-2xl border border-snairl-base-100">
                <Image
                  src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400"
                  alt="Paisaje de montaña"
                  rounded="spiral"
                  borderColor="snairl"
                  borderWidth="md"
                  caption="Borde Espiral"
                  className="w-40 h-40"
                />
                <Image
                  src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400"
                  alt="Paisaje de montaña"
                  rounded="lg"
                  borderColor="base"
                  borderWidth="sm"
                  caption="Borde Suave (lg)"
                  className="w-40 h-40"
                />
                <Image
                  src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400"
                  alt="Paisaje de montaña"
                  rounded="full"
                  borderColor="black"
                  borderWidth="md"
                  caption="Redonda (full)"
                  className="w-40 h-40"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-snairl-base-400">Estados Fallback (Manejo de Errores)</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center p-6 bg-snairl-base-50 rounded-2xl border border-snairl-base-100">
                <Image
                  src="https://ruta-que-falla.com/foto.jpg"
                  fallbackType="snairl"
                  alt="Ejemplo de error Snairl"
                  rounded="spiral"
                  borderColor="snairl"
                  borderWidth="sm"
                  caption="Fallback Brand 'snairl'"
                  className="w-40 h-40"
                />
                <Image
                  src="https://ruta-que-falla.com/foto.jpg"
                  fallbackType="minimal"
                  alt="Ejemplo de error minimal"
                  rounded="lg"
                  borderColor="base"
                  borderWidth="sm"
                  caption="Fallback 'minimal'"
                  className="w-40 h-40"
                />
              </div>
            </div>
          </section>

          <section id="inputs" className="bg-white p-6 sm:p-8 rounded-3xl border border-snairl-base-200 shadow-sm flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-snairl-base-100 pb-4">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span>✏️</span> Input
                </h2>
                <p className="text-xs text-snairl-base-500 mt-0.5">Campos de texto con estados de validación e interacción.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-snairl-base-50 rounded-2xl border border-snairl-base-100">
              <Input
                label="Nombre de usuario"
                placeholder="Ej. snairl_dev"
                helperText="Elige un nombre único para tu perfil."
                rounded="spiral"
                isRequired
              />

              <Input
                label="Correo electrónico"
                type="email"
                placeholder="hola@snairl.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                startIcon={<span>✉️</span>}
                rounded="spiral"
              />

              <Input
                label="Contraseña"
                type="password"
                value="123"
                error="La contraseña debe tener al menos 8 caracteres."
                startIcon={<span>🔒</span>}
                rounded="spiral"
              />

              <Input
                label="Código Promocional"
                value="SNAIRL2026"
                status="success"
                helperText="¡Código aplicado con éxito!"
                startIcon={<span>🏷️</span>}
                rounded="spiral"
              />

              <Input
                label="Prueba de Eventos"
                placeholder="Pulsa Enter o haz click..."
                onClick={() => setEventLog('Input: Clic registrado')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setEventLog('Input: Enter presionado');
                }}
                rounded="spiral"
              />

              <Input
                label="ID de usuario"
                value="USR-88392-SNAIRL"
                isDisabled
                rounded="spiral"
              />
            </div>
          </section>

          <section id="dropdowns" className="bg-white p-6 sm:p-8 rounded-3xl border border-snairl-base-200 shadow-sm flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-snairl-base-100 pb-4">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span>🔽</span> Dropdown
                </h2>
                <p className="text-xs text-snairl-base-500 mt-0.5">Menús desplegables para selección y acciones.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 bg-snairl-base-50 rounded-2xl border border-snairl-base-100">
              <div className="flex flex-col gap-2 items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-snairl-base-400">Variante Snairl</span>
                <Dropdown
                  label="Mi Cuenta 🐌"
                  variant="snairl"
                  rounded="spiral"
                  options={userActions}
                />
              </div>

              <div className="flex flex-col gap-2 items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-snairl-base-400">Selección: {selectedCity}</span>
                <Dropdown
                  label={`Ciudad: ${selectedCity}`}
                  variant="outline"
                  rounded="md"
                  options={cities}
                  onSelect={(opt) => {
                    setSelectedCity(opt.value);
                    setEventLog(`Dropdown: Ciudad seleccionada -> ${opt.value}`);
                  }}
                />
              </div>

              <div className="flex flex-col gap-2 items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-snairl-base-400">Variante Ghost</span>
                <Dropdown
                  label="Más opciones"
                  variant="ghost"
                  rounded="lg"
                  options={userActions}
                />
              </div>
            </div>
          </section>

          <section id="switches" className="bg-white p-6 sm:p-8 rounded-3xl border border-snairl-base-200 shadow-sm flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-snairl-base-100 pb-4">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span>🎛️</span> Switch
                </h2>
                <p className="text-xs text-snairl-base-500 mt-0.5">Conmutadores booleanos interactivos.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-snairl-base-50 rounded-2xl border border-snairl-base-100">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-snairl-base-400">Estilo Orgánico Spiral</span>
                <Switch
                  label="Notificaciones por Email"
                  checked={notifications}
                  onChange={(e) => {
                    setNotifications(e.target.checked);
                    setEventLog(`Switch Notificaciones: ${e.target.checked}`);
                  }}
                  helperText={notifications ? 'Recibirás resúmenes semanales.' : 'Notificaciones desactivadas.'}
                  rounded="spiral"
                />

                <Switch
                  label="Modo Oscuro"
                  checked={darkMode}
                  onChange={(e) => {
                    setDarkMode(e.target.checked);
                    setEventLog(`Switch Modo Oscuro: ${e.target.checked}`);
                  }}
                  rounded="spiral"
                />
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-snairl-base-400">Tamaños y Estado Deshabilitado</span>
                <div className="flex items-center gap-6">
                  <Switch size="sm" checked rounded="full" label="SM" />
                  <Switch size="md" checked rounded="full" label="MD" />
                  <Switch size="lg" checked rounded="full" label="LG" />
                </div>

                <Switch
                  label="Opción no disponible"
                  isDisabled
                  helperText="Requiere suscripción Premium."
                  rounded="spiral"
                />
              </div>
            </div>
          </section>

          <section id="brand" className="bg-white p-6 sm:p-8 rounded-3xl border border-snairl-base-200 shadow-sm flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-snairl-base-100 pb-4">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span>🐌</span> Brand & Glyphs
                </h2>
                <p className="text-xs text-snairl-base-500 mt-0.5">Identidad gráfica y tipografía vectorial.</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-3 p-8 bg-snairl-base-50 rounded-2xl border border-snairl-base-100">
                <span className="text-xs font-bold uppercase tracking-wider text-snairl-base-400">Wordmark Interactivo</span>
                <SnairlWordmark size="xl" />
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-snairl-base-400">Colección de Glifos</span>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 p-6 bg-snairl-base-50 rounded-2xl border border-snairl-base-100 justify-items-center">
                  <SnairlGlyph name="S" size="lg" color="accent" />
                  <SnairlGlyph name="N" size="lg" color="text" />
                  <SnairlGlyph name="A" size="lg" color="text" />
                  <SnairlGlyph name="I" size="lg" color="accent" />
                  <SnairlGlyph name="R" size="lg" color="text" />
                  <SnairlGlyph name="L" size="lg" color="text" />
                  <SnairlGlyph name="spiral" size="lg" color="accent" />
                  <SnairlGlyph name="snail" size="lg" color="accent" />
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>

      <footer className="bg-white border-t border-snairl-base-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-snairl-base-500">
            <span>Snairl UI Library</span>
            <span>•</span>
            <span>Designed with organic precision by Jud Vazba</span>
          </div>
          <p className="text-xs text-snairl-base-400">
            © {new Date().getFullYear()} Snairl.Library All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;