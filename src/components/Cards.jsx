import Card from "./Card"

const Cards = ({characters}) => {


    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
         { characters.map((character) => (
            <Card key={character.id} character={character} />
         ))}
        </div>

    )
}

export default Cards