import Banner from "../components/Banner";
import ClientsReview from "../components/ClientsReview";
import Featured from "../components/Featured";
import MapLocation from "../components/MapLocation";
import NewsLetter from "../components/NewsLetter";
import ScrollModal from "../components/ScrollModal";

const Home = () => {
    return (
        <div>
            <ScrollModal />
            <Banner />
            <Featured />
            <NewsLetter />
            <ClientsReview />
            <MapLocation />
        </div>
    );
};

export default Home;