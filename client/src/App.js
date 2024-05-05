import './App.css';
import{RouterProvider, createBrowserRouter} from "react-router-dom";
import Trip from './components/gettrip/Trip';
import Add from './components/addtrip/Add';
import Edit from './components/updatetrip/Edit';

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element: <Trip/>,
    },
    {
      path:"/add",
      element: <Add/>,
    },
    {
      path:"/edit/:id",
      element: <Edit/>,
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
