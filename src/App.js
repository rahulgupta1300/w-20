import Header from './Header.js';
import SideNav from './sidenav.js';
import Main from  "./body.js";

export default function App() {
  return (
    <div>
        <Header/>
        <div style={{ display: "flex" }}>
          <SideNav/>
          <Main/>
        </div>
        
    </div>
  );
}
