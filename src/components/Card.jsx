const Card = ({character}) => {
const {  name,   image} = character

  return (
    <div className="max-w-sm rounded-lg shadow relative">
      <a href="#">
        <img
          className="rounded-lg"
          src={image}
          alt=""
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