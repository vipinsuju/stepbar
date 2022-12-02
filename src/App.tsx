import "./App.css";
import React, { useState } from "react";
import StepBar from "./Components/stepbar/StepBar";
import PageOne from "./Components/pageone/pageOne";
import PageTwo from "./Components/pagetwo/PageTwo";
import PageThree from "./Components/pagethree/PageThree";
import PageFour from "./Components/pagefour/PageFour";

function App() {
  const [page, setPage] = useState("pageOne");

  const nextPage = (page: any) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber: any) => {
    switch (pageNumber) {
      case "1":
        setPage("pageOne");
        break;
      case "2":
        setPage("pageTwo");
        break;
      case "3":
        setPage("pageThree");
        break;
      case "4":
        setPage("pageFour");
        break;
      default:
        setPage("1");
    }
  };

  return (
    <div className="App">
      <StepBar page={page} onPageNumberClick={nextPageNumber} />
      {
        {
          pageOne: <PageOne onButtonClick={nextPage} />,
          pageTwo: <PageTwo onButtonClick={nextPage} />,
          pageThree: <PageThree onButtonClick={nextPage} />,
          pageFour: <PageFour />,
        }[page]
      }
    </div>
  );
}

export default App;
