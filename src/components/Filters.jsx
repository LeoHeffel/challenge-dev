import { useState } from "react";
import { useContext } from "react";
import { QueryContext } from "../context/queryContext";

const Filters = () => {
  const { setFilter, setPage } = useContext(QueryContext);

  const [combinedFilter, setCombinedFilter] = useState({
    gender: null,
    status: null,
    species: null,
  });
  const handleChange = (e) => {
    let value = `"${e.target.value}"`;
    if (
      value === `"Status..."` ||
      value === `"Gender..."` ||
      value === `"Species..."` ||
      value === `"undefined"`
    ) {
      value = null;
    }
    setCombinedFilter({
      ...combinedFilter,
      [e.target.name]: value,
    });
    let realtime = {
      ...combinedFilter,
      [e.target.name]: value,
    };
    handeleSubmit(realtime.gender, realtime.status, realtime.species);
  };
  const handleReset = () => {
    setCombinedFilter({
      gender: null,
      status: null,
      species: null,
    });
    handeleSubmit( null, null, null);
  };
  const handeleSubmit = ( gender, status, species) => {
    setFilter(`{gender: ${gender}, status: ${status}, species: ${species}}`);
    setPage(1);
  };

  return (
    <form onReset={handleReset} >
      <div className="grid grid-cols-4 gap-2  ">
        <>
          <select
            onChange={handleChange}
            name="status"
            className="block w-full p-2 mb-6 text-sm mt-4 ps-10 text-smborder  rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500"
          >
            <option >Status...</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </>
        <>
          <select
            onChange={handleChange}
            name="species"
            className="block w-full p-2 mb-6 text-sm mt-4 ps-10 text-smborder  rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500"
          >
            <option >
              Species...
            </option>
            <>
              <option value="Alien">Alien</option>
              <option value="Animal">Animal</option>
              <option value="Cronenberg">Cronenberg</option>
              <option value="Disease">Disease</option>
              <option value="Human">Human</option>
              <option value="Humanoid">Humanoid</option>
              <option value="Mythological Creature">
                Mythological Creature
              </option>
              <option value="Poopybutthole">Poopybutthole</option>
              <option value="Robot">Robot</option>
              <option value="unknown">Unknown</option>
            </>
          </select>
        </>
        <>
          <select
            onChange={handleChange}
            id="small"
            name="gender"
            className="block w-full p-2 mb-6 text-sm mt-4 ps-10 text-smborder  rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500"
          >
            <option >Gender...</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="Male">Male</option>
            <option value="unknown">unknown</option>
          </select>
        </>
        <div>
          <input
            type="reset"
            value="Reset Filters"
            className=" block w-full p-2 mb-6  ps-10 text-smborder  text-white focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-4 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
          />
        </div>
      </div>
    </form>
  );
};
export default Filters;

//esta funcion la utilize para saber con que llenar los options de los filtros
/* 
  let apiData = [];
  let page = 1;
  let genders ={}
  let status = {  }
  let species = { }
   const getAllCharacters = async () => {  
    while(page <= 42){
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await response.text();
        const dataParsed = JSON.parse(data);
        apiData.push(dataParsed.results);
        page = page + 1
    } catch (error) {
        throw Error(error)
    }
  
}
     let flatted = apiData.flat()
    flatted.forEach((element) => {
        genders[element.gender] = (genders[element.gender] || 0) + 1
        status[element.status] = (status[element.status] || 0) + 1
        species[element.species] = (species[element.species] || 0) + 1
    })
    console.log({genders, status, species})
}
 getAllCharacters()
   */
