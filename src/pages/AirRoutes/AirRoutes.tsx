import ProjectNavigation from "../../components/layouts/ProjectLayout/components/ProjectNavigation/ProjectNavigation";
import CodeSection from "../../components/layouts/ProjectLayout/components/CodeSection/CodeSection";
import ProjectLayout from "../../components/layouts/ProjectLayout/ProjectLayout";
import ProjectWideDescription from "../../components/layouts/ProjectLayout/components/ProjectDescription/ProjectWideDescription";
import styles from "./AirRoutes.module.css";

const AirRoutes: React.FC = () => {
  const features = [
    { text: "Hexagonal Pathfinding", type: "tracking" },
    { text: "Dynamic Cost Optimization", type: "optimization" },
    { text: "Air Route System", type: "navigation" },
    { text: "Cost Caching", type: "analytics" },
    { text: "Manual Memory Management", type: "memory" },
  ];

  return (
    <>
      <ProjectLayout
        project={{
          title: "airroutes",
          logoPath: "/assets/images/airRoutes/projectlogo.png",
          year: "2025",
          languages: "C (pseudocode)",
          siteUrl: "https://github.com/dawillu/airroutes",
          siteName: "Explore the Code",
          contentSections: [
            {
              type: "description",
              headTitle: "Navigate hexagonal grids with optimal pathfinding.",
              sections: [
                {
                  title: "THE ALGORITHM",
                  label: "EFFICIENT, PRECISE, OPTIMIZED",
                  description:
                    "AirRoutes is a high-performance pathfinding system built on a hexagonal grid. It applies Dijkstra's algorithm to find minimal-cost paths with dynamic terrain and caching optimizations.",
                },
                {
                  title: "LOW-LEVEL PERFORMANCE",
                  label: "FAST, MEMORY-EFFICIENT, SCALABLE",
                  description:
                    "Written in C, the system uses manual memory management and optimized data structures. Below, pseudocode illustrates the algorithmic logic in a language-neutral way for clarity.",
                },
              ],
            },
          ],
          backgroundColor: "#4b4a4bff",
          backgroundImage: "/assets/images/airRoutes/background.jpg",
          lightBackground: false,
        }}
      />

      <div id="deep-description-container">
        <ProjectWideDescription
          title="CORE FEATURES"
          label="BUILT FOR PERFORMANCE AND FLEXIBILITY"
          description="AirRoutes combines algorithmic efficiency with practical functionality. Each feature is built to handle real-time pathfinding scenarios with minimal computational overhead."
        />

        <div className={styles.scatteredContainer}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={styles.scatteredElement}
              data-feature={feature.type}
              data-animation="fade-in"
            >
              {feature.text}
            </div>
          ))}
        </div>

        <ProjectWideDescription
          title="DATA STRUCTURES"
          label="BUILDING THE FOUNDATION"
          description="Each hexagon holds terrain cost and air route connections for fast-travel links. The structure allows constant-time access and efficient updates."
        />

        <CodeSection code={`STRUCT AirRoute:
    arrivalX, arrivalY
    cost
    next -> AirRoute

STRUCT Hexagon:
    cost
    airRoutesCount
    airRoutes -> AirRoute
        `} />

        <ProjectWideDescription
          title="HEXAGONAL COORDINATE SYSTEM"
          label="THE TRICKY PART"
          description="Neighbor offsets differ between even and odd rows. A fast bitwise check determines which offset set to use for traversal."
        />

        <CodeSection code={`DEFINE oddRowOffsets = [
    (+1, +1), (+1, 0), (+1, -1),
    (0, +1), (0, -1), (-1, 0)
]

DEFINE evenRowOffsets = [
    (+1, 0), (0, +1), (0, -1),
    (-1, +1), (-1, 0), (-1, -1)
]

IF (y MOD 2 == 1):
    offsets = oddRowOffsets
ELSE:
    offsets = evenRowOffsets
        `} />

        <ProjectWideDescription
          title="MIN-HEAP PRIORITY QUEUE"
          label="EFFICIENT NODE EXPLORATION"
          description="Nodes are stored in a min-heap to maintain the smallest cost at the top. Insertions and deletions preserve heap order in O(log n)."
        />

        <CodeSection code={`FUNCTION pushNode(queue, x, y, cost):
    ADD (x, y, cost) TO queue
    WHILE node.cost < parent.cost:
        SWAP node WITH parent
        `} />


        <ProjectWideDescription
          title="DIJKSTRA'S PATHFINDING"
          label="THE CORE ALGORITHM"
          description="Nodes are processed in order of increasing path cost. The first time the destination is reached, the path is guaranteed optimal."
        />

        <CodeSection code={`WHILE queue NOT EMPTY:
    node = EXTRACT_MIN(queue)

    IF node == destination:
        RETURN node.cost

    FOR EACH neighbor IN hexNeighbors(node):
        newCost = node.cost + travelCost
        IF newCost < pathLength[neighbor]:
            pathLength[neighbor] = newCost
            pushNode(queue, neighbor.x, neighbor.y, newCost)

    FOR EACH route IN node.airRoutes:
        APPLY same relaxation logic
        `} />
      </div>

      <ProjectNavigation nextPath="/GalaxyTrucker" />
    </>
  );
};

export default AirRoutes;
