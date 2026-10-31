import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-gray-200 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Hero Szekció */}
      <header className="relative bg-zinc-950 border-b-2 border-orange-600">
        <div className="max-w-6xl mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 uppercase">
            Precíz hegesztés és <span className="text-orange-500">ipari lakatosmunkák</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            Földvári Tig-Team Kft. – Megbízható fémipari kivitelezés, minősített hegesztés és egyedi művészi fémplasztikák alkotása.
          </p>
          <a href="#ajanlatkeres" className="inline-block bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-10 rounded shadow-lg shadow-orange-600/20 transition-all text-lg uppercase tracking-wider">
            Ajánlatkérés
          </a>
        </div>
      </header>

      {/* Szolgáltatások */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-white uppercase tracking-widest">Szolgáltatásaink</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-800/50 p-8 rounded-lg border border-zinc-700 hover:border-orange-500 transition-colors">
            <h3 className="text-xl font-bold text-white mb-4 uppercase">TIG / AWI Hegesztés</h3>
            <p className="text-gray-400">Precíziós hegesztési eljárás csőhálózatokhoz és rozsdamentes acél szerkezetekhez. Kiemelkedő varratminőség és teherbírás.</p>
          </div>
          <div className="bg-zinc-800/50 p-8 rounded-lg border border-zinc-700 hover:border-orange-500 transition-colors">
            <h3 className="text-xl font-bold text-white mb-4 uppercase">MIG / MAG Hegesztés</h3>
            <p className="text-gray-400">Fogyóelektródás védőgázas hegesztés csarnokok, vastag acélszerkezetek és ipari elemek gyors, rendkívül stabil rögzítéséhez.</p>
          </div>
          <div className="bg-zinc-800/50 p-8 rounded-lg border border-zinc-700 hover:border-orange-500 transition-colors">
            <h3 className="text-xl font-bold text-white mb-4 uppercase">Szerkezeti Lakatosmunka</h3>
            <p className="text-gray-400">Ipari csarnokok, fémvázak, teherhordó szerkezetek, egyedi korlátok és kapuk gyártása, valamint helyszíni kivitelezése.</p>
          </div>
        </div>
      </section>

      {/* Művészi Fémplasztika - A kiemelő rész */}
      <section className="py-24 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-widest">
                Művészi <span className="text-orange-500">Fémplasztika</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Ahol az ipari fegyelem és a kreativitás találkozik. Szakértelmünk nem merül ki a nehézipari szerkezetek hegesztésében. Egyedi megrendelésre rendkívül aprólékos fém szobrokat és dísztárgyakat készítünk.
              </p>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Legyen szó egy finom alkatrészekből hegesztett kismotorról, vagy egy emberméretű, tekintélyt parancsoló réz sasról – minden alkotásunk az anyag tiszteletét és a precíz kézimunkát tükrözi.
              </p>
              <a href="#ajanlatkeres" className="text-orange-500 hover:text-orange-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                Egyedi szobrot szeretnék <span>&rarr;</span>
              </a>
            </div>
            
            {/* Képgaléria helye */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-zinc-800 aspect-square rounded-lg flex items-center justify-center border border-zinc-700 p-4 text-center">
                <span className="text-zinc-500 font-medium">Helytartó:<br/>Réz Szarvas Fotó</span>
              </div>
              <div className="bg-zinc-800 aspect-square rounded-lg flex items-center justify-center border border-zinc-700 p-4 text-center">
                <span className="text-zinc-500 font-medium">Helytartó:<br/>Kismotor Fotó</span>
              </div>
              <div className="bg-zinc-800 aspect-[2/1] rounded-lg flex items-center justify-center border border-zinc-700 col-span-2 p-4 text-center">
                <span className="text-zinc-500 font-medium">Helytartó: Emberméretű Sas Fotó</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ajánlatkérő Űrlap */}
      <section id="ajanlatkeres" className="py-24 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-white uppercase tracking-widest">Kapcsolat</h2>
        <p className="text-center text-gray-400 mb-12">Kérjen árajánlatot ipari kivitelezésre vagy egyedi fémplasztikára!</p>
        
        <div className="bg-zinc-900 p-8 md:p-10 rounded-xl border border-zinc-800 shadow-2xl">
          <form name="ajanlatkeres" method="POST" data-netlify="true" className="space-y-6">
            <input type="hidden" name="form-name" value="ajanlatkeres" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Név *</label>
                <input type="text" name="nev" required className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-orange-500 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Telefonszám *</label>
                <input type="tel" name="telefon" required className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-orange-500 transition-colors" />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">E-mail cím</label>
              <input type="email" name="email" className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-orange-500 transition-colors" />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Miben segíthetünk?</label>
              <textarea name="uzenet" rows="5" className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none" placeholder="Írja le röviden az elképzelését..."></textarea>
            </div>
            
            <button type="submit" className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded transition-colors text-lg uppercase tracking-wider mt-4">
              Küldés
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-8 border-t border-zinc-900 text-center text-zinc-600 text-sm">
        <p>Földvári Tig-Team Kft. &copy; {new Date().getFullYear()} - Minden jog fenntartva.</p>
      </footer>
    </div>
  );
}

export default App;