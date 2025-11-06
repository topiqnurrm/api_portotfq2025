import { NextResponse } from 'next/server';

export async function GET() {
    const sebagai = {
        PES: "Peserta Kegiatan",
    };

    const jenis = {
        LOM: "Lomba",
    };

    const tingkat = {
        NAS: "Nasional",
    };

    const data = [
        {
            id: 1,
            name: "National Competition for Reasoning 'NALAR. IN' Year 2023",
            description: ".",
            sebagai: "PES",
            jenis: "LOM",
            images: [
                "/images/kegiatan/1-1.png",
                "/images/kegiatan/1-2.png",
            ],
            startDate: "2023-03-13",
            endDate: "2023-03-13",
            tempat: "Universitas Negeri Yogyakarta",
            penyelenggara: "Universitas Negeri Yogyakarta",
            tingkat: "NAS",
        },
        {
            id: 2,
            name: "National Level Indonesian Performing Arts Festival (FSPI) 2023",
            description: ".",
            sebagai: "PES",
            jenis: "LOM",
            images: [
                "/images/kegiatan/2-1.png",
                "/images/kegiatan/2-2.png",
            ],
            startDate: "2023-03-01",
            endDate: "2023-04-28",
            tempat: "UNIVERSITAS NEGERI YOGYAKARTA",
            penyelenggara: "FSPI UNIVERSITAS NEGERI YOGYAKARTA",
            tingkat: "NAS",
        },
        
    ];

    return NextResponse.json(data);
}