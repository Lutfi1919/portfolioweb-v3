import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Dock from "./components/Dock/Dock.jsx";
import Github from "./components/Dock/LogoGitHub.jsx";
import Instagram from "./components/Dock/LogoIG.jsx";
import Linked from "./components/Dock/LogoLinked.jsx";

function App() {
  const items = [
    {
      icon: <Github size={18} />,
      label: "GitHub",
    },
    {
      icon: <Linked size={18} />,
      label: "LinkedIn",
    },
    {
      icon: <Instagram size={18} />,
      label: "Instagram",
    },
  ];

  return (
    <>
      <Header />
      <Main />
      <Dock
        items={items}
        panelHeight={50}
        baseItemSize={35}
        magnification={40}
      />
    </>
  );
}

export default App;
