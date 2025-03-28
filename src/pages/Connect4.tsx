import ProjectNavigation from "../components/layouts/ProjectLayout/components/ProjectNavigation";
import ProjectLayout from "../components/layouts/ProjectLayout/ProjectLayout";

const Connect4: React.FC = () => {
  return (
    <>
      <ProjectLayout
        project={{
          title: "connect4",
          logoPath: "/assets/images/connect4/projectlogo.png",
          year: "2022",
          languages: "HTML CSS JS / C#",
          siteUrl: "https://github.com/dawillu/Connect4",
          siteName: "Explore Code",
          contentSections: [
            {
              type: "description",
              headTitle:
                "Strategize, Drop, Conquer—Every move leads to victory!",
              sections: [
                {
                  title: "THE GAME",
                  label: "STRATEGIC, MULTIPLAYER, REAL-TIME",
                  description: `An online adaptation of the classic Connect Four game, reimagined 
                    for modern web browsers. Players engage in strategic battles across the network, 
                    dropping tokens and planning moves in real-time. The clean interface and smooth 
                    animations create an immersive gaming experience that's both nostalgic and fresh.`,
                },
                {
                  title: "THE TECH",
                  label: "CLIENT-SERVER ARCHITECTURE",
                  description: `Built with a robust client-server architecture, the game leverages 
                    JavaScript for responsive front-end interactions and C# with TCP sockets for 
                    reliable backend communication. This setup ensures seamless gameplay while 
                    maintaining perfect synchronization between players.`,
                },
              ],
            },
            {
              type: "gallery",
              images: ["/assets/images/connect4/poster.png"],
            },
          ],
          backgroundColor: "#242424",
          backgroundImage: "/assets/images/connect4/background.jpg",
          lightBackground: false,
        }}
      />
      <ProjectNavigation nextPath="/tictactoe" />
    </>
  );
};

export default Connect4;
