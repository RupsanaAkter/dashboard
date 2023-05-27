
import './App.css';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import PageContent from './pages/PageContent/PageContent';
import SideMenu from './pages/SideMenu/SideMenu';

function App() {
  return (
    <div className="App">
       <Header />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div> 
      <Footer/>
    </div>
  );
}

export default App;
