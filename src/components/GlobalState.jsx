import LeftSection from "./LeftSection";
import Posts from "./Posts";
import "../styles/App.css";
import { useSelector } from "react-redux";
import LoadingBox from "./LoadingBox";

function GlobalState() {

  const postsList=useSelector(state => state.postsList)
  const {loading}=postsList

  

 
  return (
    <>
    {loading ? (<LoadingBox />) :(<div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <LeftSection />
          </div>
          <div className="col-lg-9 col-md-8">
            <Posts />
          </div>
        </div>
      </div>
    </div>)}

    </>
    
  );
}

export default GlobalState;
