import Banner from "../components/Banner";
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
            <MapLocation />
        </div>
    );
};

export default Home;