// React state
const { useState } = React;

// Recharts via UMD (window.Recharts)
const {
  BarChart, Bar, ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer, PieChart, Pie, Cell
} = Recharts;

const BergwegAnalysis = () => {
  const [activeTab, setActiveTab] = useState("overview");

// Data extracted from the Funda listings
const properties = [
    { address: "Bergweg 365-A03", price: 425000, size: 102, rooms: 2, label: "C", status: "Beschikbaar" },
    { address: "Bergweg 277-B", price: 699000, size: 153, rooms: 4, label: "B", status: "Beschikbaar" },
    { address: "Bergweg 175-C03", price: 450000, size: 81, rooms: 2, label: "E", status: "Beschikbaar" },
    { address: "Bergweg 233-A", price: 500000, size: 149, rooms: 4, label: "C", status: "Beschikbaar" },
    { address: "Bergweg 324-B", price: 585000, size: 153, rooms: 3, label: "E", status: "Beschikbaar" },
    { address: "Bergweg 250-A", price: 650000, size: 133, rooms: 3, label: "A", status: "Beschikbaar" },
    { address: "Bergweg 108-M", price: 525000, size: 75, rooms: 2, label: "A+++", status: "Beschikbaar" },
    { address: "Bergweg 219", price: 2000000, size: 460, rooms: 14, label: "?", status: "Beschikbaar" },
    { address: "Bergweg 99-b", price: 700000, size: 203, rooms: 6, label: "E", status: "Beschikbaar" },
    { address: "Bergweg 239-A", price: 550000, size: 150, rooms: 4, label: "C", status: "Beschikbaar" },
    { address: "Bergweg 253-A", price: 675000, size: 116, rooms: 3, label: "A", status: "Verkocht" },
    { address: "Bergweg 365-A02", price: 419000, size: 93, rooms: 2, label: "B", status: "Verkocht" },
    { address: "Bergweg 143-A", price: 499500, size: 111, rooms: 2, label: "B", status: "Verkocht" },
    { address: "Bergweg 49-D", price: 450000, size: 135, rooms: 3, label: "B", status: "Verkocht" },
    { address: "Bergweg 104-H", price: 360000, size: 50, rooms: 1, label: "A+++", status: "Verkocht" },
    { address: "Bergweg 123-A", price: 650000, size: 146, rooms: 4, label: "B", status: "Verkocht" },
    { address: "Bergweg 262-A", price: 450000, size: 133, rooms: 6, label: "A", status: "Verkocht" },
    { address: "Bergweg 55-D", price: 419000, size: 108, rooms: 3, label: "D", status: "Verkocht" },
    { address: "Bergweg 252", price: 395000, size: 101, rooms: 3, label: "D", status: "Verkocht" },
    { address: "Bergweg 258-B", price: 300000, size: 95, rooms: 3, label: "F", status: "Verkocht" },
    { address: "Bergweg 167-B", price: 675000, size: 154, rooms: 3, label: "D", status: "Verkocht" },
    { address: "Bergweg 114-F", price: 535000, size: 75, rooms: 2, label: "A+++", status: "Verkocht" },
    { address: "Bergweg 104-J", price: 350000, size: 50, rooms: 1, label: "A+++", status: "Verkocht" },
    { address: "Bergweg 61-A", price: 409000, size: 107, rooms: 2, label: "C", status: "Verkocht" },
    { address: "Bergweg 104-T", price: 270000, size: 50, rooms: 1, label: "A++", status: "Verkocht" },
    { address: "Bergweg 112-F", price: 500000, size: 75, rooms: 2, label: "A+++", status: "Verkocht" },
    { address: "Bergweg 310", price: 750000, size: 247, rooms: 6, label: "D", status: "Verkocht" },
    { address: "Bergweg 88-F", price: 325000, size: 75, rooms: 2, label: "A", status: "Onder voorbehoud" },
    { address: "Bergweg 98-B", price: 625000, size: 114, rooms: 4, label: "A", status: "Onder voorbehoud" },
    { address: "Bergweg 307-A", price: 450000, size: 79, rooms: 2, label: "A", status: "Onder bod" },
    { address: "Bergweg 330-C", price: 425000, size: 140, rooms: 3, label: "D", status: "Verkocht" },
    { address: "Bergweg 108-J", price: 340000, size: 50, rooms: 1, label: "A+++", status: "Verkocht" },
    { address: "Bergweg 106-A", price: 495000, size: 71, rooms: 2, label: "A+++", status: "Verkocht" },
    { address: "Bergweg 106-B", price: 450000, size: 68, rooms: 2, label: "A+++", status: "Verkocht" },
    { address: "Bergweg 255-A", price: 550000, size: 117, rooms: 2, label: "B", status: "Verkocht" },
    { address: "Bergweg 236-B", price: 395000, size: 137, rooms: 6, label: "F", status: "Verkocht" },
    { address: "Bergweg 205-A01 (huis)", price: 795000, size: 265, rooms: 4, label: "?", status: "Beschikbaar" },
    { address: "Bergweg 205-A02", price: 392750, size: 69, rooms: 2, label: "A+++", status: "Beschikbaar" },
    { address: "Bergweg 205-A01 (app)", price: 352500, size: 61, rooms: 2, label: "A+++", status: "Beschikbaar" },
    { address: "Bergweg 205-B", price: 699500, size: 128, rooms: 3, label: "A+++", status: "Beschikbaar" },
    { address: "Bergweg 72", price: 672000, size: 96, rooms: 3, label: "A+++", status: "Onder voorbehoud" },
    { address: "Bergweg 53-A", price: 500000, size: 108, rooms: 3, label: "C", status: "Onder voorbehoud" },
    { address: "Bergweg 311-A", price: 329000, size: 67, rooms: 2, label: "B", status: "Onder voorbehoud" },
    { address: "Bergweg 65-A", price: 475000, size: 110, rooms: 3, label: "E", status: "Onder voorbehoud" },
    { address: "Bergweg 116-B", price: 450000, size: 77, rooms: 1, label: "A++", status: "Onder voorbehoud" },
    { address: "Bergweg 253-B", price: 625000, size: 111, rooms: 3, label: "A", status: "Onder bod" },
    { address: "Bergweg 309-B", price: 499500, size: 112, rooms: 3, label: "A", status: "Verkocht" },
    { address: "Bergweg 148-A", price: 350000, size: 66, rooms: 1, label: "A", status: "Verkocht" },
    { address: "Bergweg 153-B", price: 325000, size: 55, rooms: 2, label: "A", status: "Verkocht" },
    { address: "Bergweg 240-A", price: 499500, size: 91, rooms: 2, label: "D", status: "Verkocht" },
    { address: "Bergweg 39-D", price: 385000, size: 115, rooms: 5, label: "D", status: "Verkocht" },
    { address: "Bergweg 155-D", price: 345000, size: 65, rooms: 1, label: "A", status: "Verkocht" },
    { address: "Bergweg 282-C", price: 350000, size: 80, rooms: 2, label: "C", status: "Verkocht" },
    { address: "Bergweg 106-C", price: 360000, size: 50, rooms: 1, label: "A++", status: "Verkocht" },
    { address: "Bergweg 129-a", price: 495000, size: 144, rooms: 3, label: "C", status: "Verkocht" },
    { address: "Bergweg 47-C", price: 280000, size: 61, rooms: 2, label: "E", status: "Verkocht" },
    { address: "Bergweg 236-A", price: 499500, size: 117, rooms: 4, label: "A", status: "Verkocht" },
    { address: "Bergweg 102-B", price: 425000, size: 107, rooms: 3, label: "C", status: "Verkocht" },
    { address: "Bergweg 162-A", price: 600000, size: 142, rooms: 2, label: "A", status: "Verkocht" },
    { address: "Bergweg 55-C", price: 315000, size: 59, rooms: 2, label: "B", status: "Verkocht" }
  ];

  // -------------------------------------------------------------------
  // BEREKINGEN
  // -------------------------------------------------------------------
  const propertiesWithM2Price = properties
    .filter(p => p.size > 0)
    .map(p => ({ ...p, pricePerM2: Math.round(p.price / p.size) }));

  const avgPricePerM2 = Math.round(
    propertiesWithM2Price.reduce((s, p) => s + p.pricePerM2, 0) / propertiesWithM2Price.length
  );

  const avgPrice = Math.round(
    propertiesWithM2Price.reduce((s, p) => s + p.price, 0) / propertiesWithM2Price.length
  );

  const avgSize = Math.round(
    propertiesWithM2Price.reduce((s, p) => s + p.size, 0) / propertiesWithM2Price.length
  );

  const m2PriceRanges = [
    { range: "€3.000–€4.000", min: 3000, max: 4000, count: 0 },
    { range: "€4.000–€5.000", min: 4000, max: 5000, count: 0 },
    { range: "€5.000–€6.000", min: 5000, max: 6000, count: 0 },
    { range: "€6.000–€7.000", min: 6000, max: 7000, count: 0 },
    { range: "€7.000+", min: 7000, max: 20000, count: 0 }
  ];

  propertiesWithM2Price.forEach(p => {
    const r = m2PriceRanges.find(x => p.pricePerM2 >= x.min && p.pricePerM2 < x.max);
    if (r) r.count++;
  });

  // -------------------------------------------------------------------
  // RENDER
  // -------------------------------------------------------------------
  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gray-50">
      <div className="bg-white p-6 shadow rounded mb-6">
        <h1 className="text-3xl font-bold">Woningmarkt Analyse: Bergweg Rotterdam</h1>
        <p className="text-gray-600">Analyse van {properties.length} woningen</p>
      </div>

      {/* KPI’s */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-6 shadow rounded">
          <p className="text-sm text-gray-600">Gemiddelde prijs/m²</p>
          <p className="text-2xl font-bold text-blue-600">€{avgPricePerM2.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <p className="text-sm text-gray-600">Gemiddelde prijs</p>
          <p className="text-2xl font-bold text-green-600">€{avgPrice.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <p className="text-sm text-gray-600">Gemiddelde oppervlakte</p>
          <p className="text-2xl font-bold text-purple-600">{avgSize} m²</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow rounded">
        <div className="flex border-b">
          {["overview", "prices", "details"].map(tab => (
            <button
              key={tab}
              className={`px-6 py-3 ${
                activeTab === tab ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "overview" && "Overzicht"}
              {tab === "prices" && "Prijzen"}
              {tab === "details" && "Details"}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === "overview" && (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={m2PriceRanges}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#0088FE" />
              </BarChart>
            </ResponsiveContainer>
          )}

          {activeTab === "prices" && (
            <ResponsiveContainer width="100%" height={350}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="size" />
                <YAxis dataKey="price" />
                <Tooltip />
                <Scatter data={propertiesWithM2Price} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          )}

          {activeTab === "details" && (
            <table className="min-w-full bg-white rounded shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Adres</th>
                  <th className="px-4 py-2">Prijs</th>
                  <th className="px-4 py-2">m²</th>
                  <th className="px-4 py-2">€/m²</th>
                </tr>
              </thead>
              <tbody>
                {propertiesWithM2Price.map((p, i) => (
                  <tr key={i} className="border-b">
                    <td className="px-4 py-2">{p.address}</td>
                    <td className="px-4 py-2">€{p.price.toLocaleString()}</td>
                    <td className="px-4 py-2">{p.size}</td>
                    <td className="px-4 py-2 text-blue-600 font-bold">€{p.pricePerM2.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

// ✔️ Function is now properly closed

// Mount React
ReactDOM.createRoot(document.getElementById("root")).render(<BergwegAnalysis />);