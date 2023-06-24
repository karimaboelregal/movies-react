import './App.css';
import MainPage from './store/Components/MainPage';
import Details from './store/Components/details';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/details/:id" element={<Details/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
