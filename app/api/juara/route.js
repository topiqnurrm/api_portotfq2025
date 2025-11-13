import { NextResponse } from 'next/server';

export async function GET() {
    const gelar = {
        SAT: "Juara 1",
        DUA: "Juara 2",
        TIG: "Juara 3",
    };

    const kategori = {
        OLI: "Olimpiade",
    };

    const negara = {
        IND: "Indonesia",
    };

    const tingkat = {
        NAS: "Nasional",
    };

    const bidang = {
        PEN: "Penalaran",
    };

    const sebagai = {
        SOL: "Individu",
    };

    const data = [
        {
            id: 1,
            gelar: "SAT",
            nama: "LDC (Language Day Competition) English Language Field",
            kategori: "OLI",
            tempat: "Online",
            negara: "IND",
            penyelenggara: "POSI (Pusat Olimpiade Sains Indonesia)",
            jumlah_negara: 1,
            Jumlah_institusi: 74,
            jumlah_peserta: 3565,
            startDate: "2024-05-12",
            endDate: "2024-05-12",
            tingkat: "NAS",
            bidang: "PEN",
            sebagai: "SOL",
            deskripsi: "LDC 2024 – Language Day Competition 2024 with the theme “Passion for Science” is open to university students, teachers, and students at the Elementary (SD/MI), Junior High (SMP/MTs), and Senior High/Vocational School levels (SMA/MA/SMK), featuring competitions in Indonesian, Arabic, and English languages.",
            images: [
                "/images/juara/1-1.jpg",
                "/images/juara/1-2.png",
                "/images/juara/1-3.png",
            ],
        },
        {
            id: 2,
            gelar: "National Competition for Reasoning 'NALAR. IN' Year 2023",
            nama: "Participated in a national reasoning competition organized by Yogyakarta State University to sharpen logical and analytical thinking skills.",
            kategori: "PES",
            tempat: "LOM",
            negara: "IND",
            penyelenggara: "Universitas Negeri Yogyakarta",
            jumlah_negara: 1,
            Jumlah_institusi: 50,
            jumlah_peserta: 200,
            startDate: "2023-03-13",
            endDate: "2023-03-13",
            tingkat: "NAS",
            bidang: "PEN",
            sebagai: "SOL",
            deskripsi: "Universitas Negeri Yogyakarta",
            images: [
                "/images/juara/2-1.png",
                "/images/juara/2-2.png",
                "/images/juara/2-3.png",
            ],
        },
        //terakhir dari presma kegiatan : Workshop Series Bimbingan Karir dengan tema “Entrepreneurship in Education” / Workshop Series on Career Guidance with the Theme 'Entrepreneurship in Education'
    ];
    
    return NextResponse.json(data);
}