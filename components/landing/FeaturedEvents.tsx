import CardsFeatured from "../cardsFeatured";

const FeaturedEvents = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-around gap-4 p-8">
            <CardsFeatured image={"1.png"} name="TPG Chennai Meetup" price="1.20" date="01.34.45" />
            <CardsFeatured image={"2.png"} name="Chillinq Evening" price="1.20" date="01.34.45" />
            <CardsFeatured image={"3.png"} name="Solidity Bootcamp" price="1.20" date="01.34.45" />
            <CardsFeatured image={"4.png"} name="Meet N Greet" price="1.20" date="01.34.45" />
        </div>
    );
};
export default FeaturedEvents;
