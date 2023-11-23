import UpdateComponent from "./Hoc";
function Person2({money,handleIncrease})
{
    return(
        <div>
            <h2>Jack is offering ${money}</h2>
            <button onClick={handleIncrease}>Increase offering</button>
        </div>
    );
}
export default UpdateComponent(Person2);