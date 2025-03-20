import ProjectNavigation from '../components/layouts/ProjectLayout/components/ProjectNavigation';
import ProjectLayout from '../components/layouts/ProjectLayout/ProjectLayout';

const TicTacToe: React.FC = () => {
  return (
    <>
      <ProjectLayout
        project={{
          title: "tictactoe",
          logoPath: "src/assets/images/tictactoe/projectlogo.png",
          year: "2020",
          languages: "HTML CSS JS",
          siteUrl: "https://tictactoe-dawillu.vercel.app",
          siteName: "www.tictactoe.com",
          contentSections: [
            {
              type: "description",
              headTitle: "Where strategy meets simplicity—every move counts in the ultimate battle",
              sections: [
                {
                  title: "THE LOGO",
                  label: "SIMPLE, STRATEGIC, COMPETITIVE",
                  description: `I chose the 'CROSS and CIRCLE' for the logo because they are the core 
                    symbols of this game. They represent the simplicity, strategy, and competitive nature 
                    of the game, making the logo instantly recognizable and timeless.`
                },
                {
                  title: "FEATURES",
                  label: "ENGAGING, DYNAMIC, VIBRANT",
                  description: `Sounds for each move, with a cheerful chime for color theme change. 
                    The clean design and smooth animations were created entirely with CSS, providing 
                    a seamless and interactive interface.`
                }
              ]
            },
            {
              type: "gallery",
              images: [
                'src/assets/images/tictactoe/paperlogo.png',
                'src/assets/images/tictactoe/plastifiedposter.png'
              ]
            }
          ],
          backgroundColor: '#b8c8c1',
          backgroundImage: '',
          lightBackground: true
        }}
      />
      <ProjectNavigation
        nextPath='/'
      />
    </>
  );
};

export default TicTacToe;
