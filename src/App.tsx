import { lazy, Suspense } from "react";
import "./App.css";
import "./utils/gsap"; // register ScrollTrigger globally

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";
import { ScrollProvider } from "./context/ScrollContext";

const App = () => {
  return (
    <>
      <LoadingProvider>
        <ScrollProvider>
          <Suspense>
            <MainContainer>
              <Suspense>
                <CharacterModel />
              </Suspense>
            </MainContainer>
          </Suspense>
        </ScrollProvider>
      </LoadingProvider>
    </>
  );
};

export default App;
