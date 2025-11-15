'use client';

import { useState, useEffect } from "react";

export default function PrestasiGallery() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // Mapping untuk gelar
  const gelarMap = {
    SAT: "Juara 1",
    DUA: "Juara 2",
    TIG: "Juara 3",
    FIN: "Finalis",
    PES: "Peserta Kejuaraan",
  };

  // Mapping untuk kategori
  const kategoriMap = {
    OLI: "Olimpiade",
    KOM: "Kompetisi",
  };

  // Mapping untuk negara
  const negaraMap = {
    IND: "Indonesia",
  };

  // Mapping untuk tingkat
  const tingkatMap = {
    NAS: "Nasional",
    INT: "Internasional",
  };

  // Mapping untuk bidang
  const bidangMap = {
    PEN: "Penalaran",
  };

  // Mapping untuk sebagai
  const sebagaiMap = {
    SOL: "Individu",
    SQU: "Kelompok",
  };

  const getGelar = (code) => gelarMap[code] || code;
  const getKategori = (code) => kategoriMap[code] || code;
  const getNegara = (code) => negaraMap[code] || code;
  const getTingkat = (code) => tingkatMap[code] || code;
  const getBidang = (code) => bidangMap[code] || code;
  const getSebagai = (code) => sebagaiMap[code] || code;

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', { 
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getGelarColor = (code) => {
    const colors = {
      SAT: "bg-yellow-500 text-white",
      DUA: "bg-gray-400 text-white",
      TIG: "bg-orange-600 text-white",
    };
    return colors[code] || "bg-blue-600 text-white";
  };

  useEffect(() => {
    fetch('/api/juara')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading prestasi...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-red-50 rounded-lg max-w-md">
          <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h2 className="text-xl font-bold text-red-700 mb-2">Error Loading Data</h2>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeri Prestasi</h1>
          <p className="text-lg opacity-90">Koleksi dari {items.length} prestasi yang telah diraih</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={item.images?.[0]}
                  alt={item.nama}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="14" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className={`absolute top-2 right-2 ${getGelarColor(item.gelar)} text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                  {getGelar(item.gelar)}
                </div>
                <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  {getKategori(item.kategori)}
                </div>
                <div className="absolute bottom-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  {getBidang(item.bidang)}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm line-clamp-2 mb-2 text-gray-800 min-h-[40px]">
                  {item.nama}
                </h3>
                <div className="space-y-2 text-xs text-gray-600 mb-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>{formatDate(item.startDate)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{getTingkat(item.tingkat)}</span>
                  </div>
                </div>
                <span className="text-yellow-600 font-medium text-xs">Lihat Detail →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Achievement Details */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Detail Prestasi</h2>
              <button 
                onClick={() => setSelectedItem(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              {/* Achievement Images */}
              <div className="mb-6">
                {selectedItem.images && (
                  <div className="grid grid-cols-1 gap-4">
                    {selectedItem.images.map((img, idx) => (
                      <img 
                        key={idx}
                        src={img} 
                        alt={`${selectedItem.nama} - ${idx + 1}`}
                        className="w-full rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Achievement Info */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`${getGelarColor(selectedItem.gelar)} text-lg font-bold px-4 py-2 rounded-full shadow-lg`}>
                      🏆 {getGelar(selectedItem.gelar)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{selectedItem.nama}</h3>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {getKategori(selectedItem.kategori)}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                      {getTingkat(selectedItem.tingkat)}
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                      {getBidang(selectedItem.bidang)}
                    </span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
                      {getSebagai(selectedItem.sebagai)}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      Tanggal
                    </h4>
                    <p className="text-gray-600">
                      {formatDate(selectedItem.startDate)}
                      {selectedItem.endDate && selectedItem.startDate !== selectedItem.endDate && (
                        <> - {formatDate(selectedItem.endDate)}</>
                      )}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      Tempat
                    </h4>
                    <p className="text-gray-600">{selectedItem.tempat}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path>
                      </svg>
                      Negara
                    </h4>
                    <p className="text-gray-600">{getNegara(selectedItem.negara)}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                      Penyelenggara
                    </h4>
                    <p className="text-gray-600">{selectedItem.penyelenggara}</p>
                  </div>
                </div>

                {/* Statistics */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-3">Statistik Kompetisi</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{selectedItem.jumlah_negara}</div>
                      <div className="text-xs text-gray-600">Negara</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">{selectedItem.Jumlah_institusi}</div>
                      <div className="text-xs text-gray-600">Institusi</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{selectedItem.jumlah_peserta}</div>
                      <div className="text-xs text-gray-600">Peserta</div>
                    </div>
                  </div>
                </div>

                {selectedItem.deskripsi && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">Deskripsi</h4>
                    <p className="text-gray-600 leading-relaxed">{selectedItem.deskripsi}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}