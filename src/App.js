import "./App.css";
import { Calculator } from "./components/Calculator";
import IncreaseNum from "./components/IncreaseNum";
import AddUsers from "./components/AddUsers";
import Navbar from "./components/Navbar";
import DisableButton from "./components/DisableButton";
import { DecreaseIncrease } from "./components/DecreaseIncrease";
import StateUptade from "./components/StateUptade";
import { UseEffect } from "./components/UseEffect";
import FetchUser from "./components/FetchUser";
import FetchCat from "./components/FetchCat";
import FetchList from "./components/FetchList";
import ToDo from "./components/ToDo";
import LikeImages from "./components/LikeImages";
import Deneme from "./components/Deneme";
import UseRef from "./components/UseRef";
import PokemonCard from "./components/PokemonCard";
import AxiosCountries from "./components/AxiosCountries";
import { PropsIndexColor } from "./components/PropsIndexColor";

function App() {
  return (
    <main>
      <section>
        <Navbar />
        <Deneme />
        <UseRef />
        <Calculator />
        <IncreaseNum />
        <AddUsers />
        <DisableButton />
        <DecreaseIncrease />
        <StateUptade />
        <UseEffect />
        <FetchUser />
        <FetchCat />
        <FetchList />
        <ToDo />
        <LikeImages />
        <PokemonCard />
        <AxiosCountries />
        <PropsIndexColor />
      </section>
    </main>
  );
}

export default App;
