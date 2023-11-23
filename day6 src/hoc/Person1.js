import UpdateComponent from "./Hoc";
function Person1({money,handleIncrease})
{
    return(
        <div>
            <h2>Mike is offering ${money}</h2>
            <button onClick={handleIncrease}>Increase offering</button>
        </div>
    );
}
export default UpdateComponent(Person1);