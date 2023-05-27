
import './App.css';
import Footer from './pages/Footer/Footer';
import SideMenu from './pages/SideMenu/SideMenu';

function App() {
  return (
    <div className="App">
       {/* <AppHeader /> */}
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        {/* <PageContent></PageContent> */}
      </div> 
      <Footer/>
    </div>
  );
}

export default App;
