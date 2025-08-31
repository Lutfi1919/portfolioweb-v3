function SkillCard({ logo, nama }) {
  return (
    <div className="d-flex align-items-center border gap-2 px-3 py-2 bg-light rounded-pill shadow-sm">
      <img src={logo} alt={nama} width={25} height={25} />
      <span className="fw-medium" style={{fontSize: "15px", fontFamily: "DM Sans", color: "#545454ff"}}>{nama}</span>
    </div>
  );
}

export default function Skills() {
  const skills = [
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", nama: "HTML" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", nama: "CSS" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", nama: "JavaScript" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", nama: "PHP" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", nama: "Laravel" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", nama: "React" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg", nama: "Vite" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", nama: "Node" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", nama: "Vercel" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg", nama: "Bootstrap" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", nama: "VS Code" },
    { logo: "https://cdn.worldvectorlogo.com/logos/laragon.svg", nama: "Laragon" },
  ];

  return (
    <div className="d-flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <SkillCard key={index} logo={skill.logo} nama={skill.nama} />
      ))}
    </div>
  );
}
