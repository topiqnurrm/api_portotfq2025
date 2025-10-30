export default function handler(req, res) {
  const data = [
    {
      id: 1,
      name: "Fundamental UI/UX Design",
      description: "Pelatihan dasar desain antarmuka dan pengalaman pengguna.",
      type: "short",
      image: "/images/certification/contoh1.png"
    }
  ];

  res.status(200).json(data);
}
