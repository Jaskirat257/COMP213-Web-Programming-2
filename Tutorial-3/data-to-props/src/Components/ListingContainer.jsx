import Listing from "./Listing";

export default function ListingContainer({ items }) {
    return (
        <div className="ListingsContainer">
            {items.map((item) => (
                <Listing
                key={item.id}  {...item} />
            ))}
        </div>
    );


    //let listings = [];
    //items.forEach((item) => {
        //listings.push(
        //<Listing
        //pic={item.pic}
        
        //location={item.location}
        //price={item.price}
        //rating={item.rating}
    ///>
    //);
    //});
    //return <div className="ListingContainer">{listings}</div>;

}
