import { Button } from './components/Button/Button';

function App() {
  return (
    <div className="min-h-screen bg-snairl-base-50 text-snairl-text p-8 flex flex-col items-center gap-12">
      
      <header className="text-center flex flex-col items-center gap-2">
        <div className="w-16 h-16 bg-snairl-accent-500 rounded-full flex items-center justify-center text-3xl shadow-lg">
          🐌
        </div>
        <h1 className="text-4xl font-extrabold tracking-tighter text-snairl-text">
          snairl<span className="text-snairl-accent-500">.</span>library
        </h1>
        <p className="text-snairl-base-800 max-w-md">
          Una colección de componentes React accesibles, responsive y con un toque orgánico y acogedor.
        </p>
      </header>
      
      <main className="w-full max-w-5xl flex flex-col gap-6">
        <h2 className="text-2xl font-bold border-b border-snairl-base-200 pb-2">Componente: Button</h2>
        
        <div className="flex flex-wrap gap-6 items-center justify-center bg-snairl-base-100 p-10 rounded-snairl shadow-inner border border-snairl-base-200">
          <Button variant="primary" onClick={() => alert('¡Hecho con personalidad!')}>
            Primario
          </Button>

          <Button variant="secondary">
            Secundario
          </Button>

          <Button variant="outline">
            Outline
          </Button>

          <Button variant="danger">
            Peligro
          </Button>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Button variant="primary" size="sm">
            Pequeño
          </Button>
          <Button variant="primary" size="md">
            Mediano
          </Button>
          <Button variant="primary" size="lg">
            Grande
          </Button>
          <Button variant="primary" isDisabled>
            Deshabilitado
          </Button>
        </div>
      </main>
    </div>
  );
}

export default App;
