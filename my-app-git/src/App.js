import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Bmi from './Bmi';
import ItemList from './ItemList';
import Post from './Post';
import Shop from './Shop';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bmi">BMI Calulator</Link></li>
          <li><Link to="/itemList">Item List</Link></li>
          <li><Link to="/post/1/">Post 1</Link></li>
          <li><Link to="/post/2/">Post 2</Link></li>
          <li><Link to="/post?fname=Voraprot&lname=Seesod">Post 3</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/itemList" element={<ItemList />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;