import { NextResponse } from 'next/server';

export async function GET() {
    const sebagai = {
        PES: "Peserta Kegiatan",
        PAN: "Panitia Kegiatan",
    };

    const jenis = {
        LOM: "Lomba",
        ABDI: "Pengabdian Masyarakat",
        CAR: "Karier",
        SEM: "Seminar",
    };

    const tingkat = {
        NAS: "Nasional",
        UNY: "Universitas Negeri Yogyakarta",
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
                "/images/kegiatan/2-2.jpeg",
                "/images/kegiatan/2-1.jpg",
            ],
            startDate: "2023-03-01",
            endDate: "2023-04-28",
            tempat: "UNIVERSITAS NEGERI YOGYAKARTA",
            penyelenggara: "FSPI UNIVERSITAS NEGERI YOGYAKARTA",
            tingkat: "NAS",
        },
        {
            id: 3,
            name: "Community Service",
            description: ".",
            sebagai: "PAN",
            jenis: "ABDI",
            images: [
                "/images/kegiatan/3-2.jpeg",
                "/images/kegiatan/3-1.jpg",
            ],
            startDate: "2023-09-16",
            endDate: "2023-09-17",
            tempat: "Dusun Batanggede, Kelurahan Tambak Rejo, Tempel, Sleman, Yogyakarta",
            penyelenggara: "HIMANIKA FT UNY",
            tingkat: "UNY",
        },
        {
            id: 4,
            name: "Humanitarian Project",
            description: ".",
            sebagai: "PAN",
            jenis: "ABDI",
            images: [
                "/images/kegiatan/4-2.jpeg",
                "/images/kegiatan/4-1.png",
            ],
            startDate: "2023-09-02",
            endDate: "2023-09-02",
            tempat: "Panti Asuhan Al - Hikmah Sejalan, Wukirsari, Cangkringan, Plosokarep, Umbulharjo, Selman, DI Yogyakarta",
            penyelenggara: "HIMANIKA FT UNY",
            tingkat: "UNY",
        },
        {
            id: 5,
            name: "Industrial Visit",
            description: ".",
            sebagai: "PAN",
            jenis: "CAR",
            images: [
                "/images/kegiatan/5-2.jpeg",
                "/images/kegiatan/5-1.png",
            ],
            startDate: "2023-09-04",
            endDate: "2023-09-07",
            tempat: "Jakarta - Bandung",
            penyelenggara: "HIMANIKA FT UNY",
            tingkat: "UNY",
        },
        {
            id: 6,
            name: "ARTOCIUS Poster & Short Movie NATIONAL COMPETITION 2023",
            description: ".",
            sebagai: "PES",
            jenis: "LOM",
            images: [
                "/images/kegiatan/6-2.jpeg",
                "/images/kegiatan/6-1.jpg",
            ],
            startDate: "2023-07-22",
            endDate: "2023-07-31",
            tempat: "online",
            penyelenggara: "Himpunan Mahasiswa Pendidikan IPS Bidang Media dan Jaringan",
            tingkat: "NAS",
        },
        {
            id: 7,
            name: "National Seminar on Electronics and Information Engineering Education (SNPTEI) 2023",
            description: ".",
            sebagai: "PAN",
            jenis: "SEM",
            images: [
                "/images/kegiatan/7-2.jpeg",
                "/images/kegiatan/7-1.png",
            ],
            startDate: "2023-09-26",
            endDate: "2023-09-26",
            tempat: "Fakultas Teknik UNY",
            penyelenggara: "HIMANIKA FT UNY",
            tingkat: "NAS",
        },
    ];

    return NextResponse.json(data);
}