
import './App.css';
import Countrys from './component/Countrys/Countrys';
import Footer from './component/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Countrys></Countrys>
      <Footer></Footer>
    </div>
  );
}

// function LoadCountrys(){
// // 1. declaring state to save loded data
//   const [countries, setcontrys] = useState([]);  
// // 2. writing UseEffict()
//   useEffect(() => {

//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setcontrys(data))

//   } ,[])

//   return(
//     <div>
//       <h2>visitung new website</h2>
//       <h4>aviavle county: {countries.length}</h4>
// {/* 3. show data in dynamicly organize way */}
//       {
//         countries.map(newdata => <Data name={newdata.name.common} population={newdata.population}></Data>) 
//       }
//     </div>
//   );

// // 4. reseve data and show it daynamicly by props
//   function Data(props){
//     return(
//       <div>
//         <h4>Country name: {props.name}</h4>
//         <h5>population : {props.population}</h5>
//       </div>
//     );
//   }

// }
export default App;
