import ShowDestinationPage from "../components/ShowDestination";
import { getDestination } from "../lib/data";


const destinationPage = async() => {
    const data =await getDestination ()
   
    return (
        <div>
            <h1 className="text-6xl font-semibold w-7xl mx-auto">Explore All Destinations</h1>
            <div className="grid grid-cols-3 w-7xl mx-auto gap-4 py-6">
                {
                    data.map(d=> <ShowDestinationPage key={d._id} data={d}></ShowDestinationPage>)
                }
            </div>
        </div>
    );
};

export default destinationPage;