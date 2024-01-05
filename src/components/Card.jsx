
const Card = ({character}) => {
const {  name,   image} = character

  return (
    <div className=" rounded-lg shadow relative max-h-48 max-w-48">
 
      <a href="#">
        <img 
            
          className="rounded-lg  max-h-48 "
          src={image}
          alt={`Image of ${name}`}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white text-center py-2 rounded-lg">
            <h6 className="mb-2  font-bold tracking-tight">
            {name}
          </h6>
        </div>
        
      </a>
     
    </div>
  );
};
export default Card