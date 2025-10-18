import ProjectNavigation from "../../components/layouts/ProjectLayout/components/ProjectNavigation/ProjectNavigation";
import ProjectWideDescription from "../../components/layouts/ProjectLayout/components/ProjectDescription/ProjectWideDescription";
import ProjectLayout from "../../components/layouts/ProjectLayout/ProjectLayout";
import CodeSection from "../../components/layouts/ProjectLayout/components/CodeSection/CodeSection";
import styles from "./GalaxyTrucker.module.css";
import ProjectGallery from "../../components/layouts/ProjectLayout/components/ProjectGallery/ProjectGallery";

const GalaxyTrucker: React.FC = () => {
  return (
    <>
      <ProjectLayout
        project={{
          title: "Galaxy Trucker",
          logoPath: "/assets/images/galaxyTrucker/projectlogo.png",
          year: "2025",
          languages: "Java · JavaFX · RMI · Sockets",
          siteUrl: "https://github.com/dawillu/ing-sw-2025-lu-han-mariotti-jin",
          siteName: "Explore the Code",
          contentSections: [
            {
              type: "description",
              headTitle:
                "A production-grade academic remake of Vlaada Chvátil's board game with client-server multiplayer, GUI/TUI, and full documentation.",
              sections: [
                {
                  title: "THE PROJECT",
                  label: "TEAMWORK · MULTIPLAYER · FAITHFUL DESIGN",
                  description:
                    "Complete digital adaptation of Galaxy Trucker with client-server architecture, simultaneous games, and both GUI and TUI. Built by a team of four with rigorous engineering practices, fully mirroring shipbuilding, journey hazards, and scoring.",
                },
                {
                  title: "TECHNICAL OVERVIEW",
                  label: "JAVA · JAVAFX · RMI/SOCKETS",
                  description:
                    "Clean MVC across model, view, and controllers. Event-driven updates, explicit game state, and robust networking (RMI and sockets). Rich JavaFX GUI with image atlas, effects, and responsive layout. Ship systems, cards, penalties, and journey flow are fully implemented with maintainable code and JavaDoc.",
                },
              ],
            },
          ],
          backgroundColor: "#0f1420",
          backgroundImage: "/assets/images/galaxyTrucker/background.jpg",
          lightBackground: false,
        }}
      />

      <div id="deep-description-container">
        <div data-animation="grow" className={styles.mvc}>
          Model - View - Controller
          <br />
          Networking - Persistence
          <br />
          Documentation - Testing
        </div>

        <ProjectWideDescription
          title="MVC ARCHITECTURE"
          label="SEPARATION OF CONCERNS"
          description="Domain logic lives in the model; JavaFX/TUI render the view; controllers orchestrate gameplay and networking. The controller exposes a remote interface to clients; the view reacts to state updates and renders boards, cards, and ships."
        />

        <CodeSection
          code={`
// MVC wiring with real classes
import it.polimi.ingsw.model.Game;
import it.polimi.ingsw.controller.GameController;
import it.polimi.ingsw.controller.VirtualGameController;
import it.polimi.ingsw.view.userinterface.UserInterface;
import it.polimi.ingsw.view.userinterface.gui.GraphicalUserInterface;

// Model
Game game = new Game(/* id */ 1, /* expectedPlayers */ 4, /* level */ 1);

// Controller (RMI/Socket server-side)
VirtualGameController controller = new GameController(/* deps */);

// View (client-side JavaFX)
UserInterface ui = new GraphicalUserInterface();

// Typical lifecycle
controller.startGame();      // initializes building phase
controller.startJourney();   // proceeds to journey after build
// ui.start(...) via Application.launch in the client
`}
        />

        <ProjectWideDescription
          title="SHIP CONSTRUCTION SYSTEM"
          label="TILE VALIDATION · LIVE STATS"
          description="Timed shipbuilding with connection validation, energy/range shields, crew, storage, and reactors. Stats update after each placement; illegal connections are rejected; the board remains consistent before the journey begins."
        />

        <CodeSection
          code={`
// ShipBoard updates and validation (illustrative)
import it.polimi.ingsw.model.shipboard.ShipBoard;
import it.polimi.ingsw.model.tiles.Tile;

public class ShipBuilderService {
    private final ShipBoard board;

    public ShipBuilderService(ShipBoard board) { this.board = board; }

    public boolean tryPlace(Tile t, int r, int c) {
        if (!isFree(r, c)) return false;
        if (!connectionsMatch(t, r, c)) return false;
        board.getTiles()[r][c] = t;
        board.updateStats(); // recompute power, shields, crew, storage, etc.
        return true;
    }

    private boolean isFree(int r, int c) { return board.getTiles()[r][c] == null; }
    private boolean connectionsMatch(Tile t, int r, int c) { /* connector checks */ return true; }
}
`}
        />

        <ProjectWideDescription
          title="EVENT-DRIVEN GAMEPLAY"
          label="PHASES · OBSERVER · STATE MACHINE"
          description="Players advance through building, choosing positions, journey encounters, and scoring. A clear state machine drives transitions; observers propagate updates to the UI."
        />

        <CodeSection
          code={`
// State machine using PlayerStatus
import it.polimi.ingsw.utils.enums.PlayerStatus;

public class PhaseMachine {
    private PlayerStatus status = PlayerStatus.BUILDING;

    public void advance() {
        switch (status) {
            case BUILDING -> status = PlayerStatus.CHOOSING_POSITION_ON_FLIGHT_BOARD;
            case CHOOSING_POSITION_ON_FLIGHT_BOARD -> status = PlayerStatus.BEFORE_CARD;
            case BEFORE_CARD -> status = PlayerStatus.WAITING_TO_PLAY_CARD;
            case WAITING_TO_PLAY_CARD -> status = PlayerStatus.IN_GAME_WAITING;
            default -> status = PlayerStatus.WAITING;
        }
        // notify observers / clients...
    }
}
`}
        />

        <ProjectWideDescription
          title="SPACE HAZARDS & ENCOUNTERS"
          label="CARDS · VISITOR · PENALTIES"
          description="Journey cards (e.g., Epidemic, Meteors, Planets) are executed via a visitor on the server. Penalties and rewards modify ship boards, goods, crew, batteries, and positions according to the rules."
        />

        <CodeSection
          code={`
// Card execution via Visitor
import it.polimi.ingsw.model.cards.Card;
import it.polimi.ingsw.controller.executors.CardExecutor;
import it.polimi.ingsw.model.Game;

public void playNext(Game game) {
    Card next = game.getAdventureDeck().draw();
    next.accept(new CardExecutor(game /*, other deps */));
    // broadcasts UI updates; continues journey flow...
}
`}
        />

        <ProjectWideDescription
          title="JAVAFX USER INTERFACE"
          label="RENDERING · ASSETS · EFFECTS"
          description="Responsive JavaFX components render ship boards, flight boards, and cards. Centralized image loading and helper utilities keep rendering fast and consistent."
        />

        <CodeSection
          code={`
// Render helpers and assets
import it.polimi.ingsw.view.userinterface.gui.RenderHelper;
import it.polimi.ingsw.view.userinterface.gui.ImageContainer;
import javafx.scene.image.ImageView;
import javafx.scene.layout.Pane;

public void setUpBoard(int level, ImageView board, Pane container) {
    RenderHelper.setUpFlightBoard(level, board, container);
    board.setImage(ImageContainer.getImage(level == 1 ? "cardboard-3.png" : "cardboard-5.png"));
}
`}
        />

        <ProjectWideDescription
          title="TEAM COLLABORATION"
          label="PROCESS · CI-LIKE PRACTICES"
          description="Git workflows with branching and PRs, iterative sprints, and code reviews. Deliverables include runnable JARs, UML, coverage, and complete JavaDoc for maintainability."
        />

        <ProjectGallery
          images={[
            "assets/images/galaxyTrucker/ppt/ppt1.png",
            "assets/images/galaxyTrucker/ppt/ppt2.png",
            "assets/images/galaxyTrucker/ppt/ppt3.png",
            "assets/images/galaxyTrucker/ppt/ppt4.png",
            "assets/images/galaxyTrucker/ppt/ppt5.png",
            "assets/images/galaxyTrucker/ppt/ppt6.png",
            "assets/images/galaxyTrucker/ppt/ppt7.png",
          ]}
        />

        <ProjectWideDescription
          title="DOCUMENTATION & TESTING"
          label="JAVADOC · COVERAGE · INTEGRATION"
          description="Comprehensive JavaDoc, unit tests for core logic, and GUI integration tests. Final deliverables include JavaDoc, coverage reports, UML diagrams, and runnable JARs."
        />
      </div>

      <ProjectNavigation nextPath="/dabot" />
    </>
  );
};

export default GalaxyTrucker;