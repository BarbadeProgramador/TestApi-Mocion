import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import { LadingPage } from "../pages/LandingPage";
import { ComicDetails } from "../pages/ComicDetails";

export function AllRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<LadingPage/>}></Route>
                <Route exact path="/volumes/:comicId" element={<ComicDetails/>}></Route>
            </Routes>
        </Router>
    );
}