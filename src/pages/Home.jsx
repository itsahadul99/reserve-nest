import Banner from "../components/Banner";
import Featured from "../components/Featured";
import MapLocation from "../components/MapLocation";
import ScrollModal from "../components/ScrollModal";

const Home = () => {
    return (
        <div>
            <ScrollModal />
            <Banner />
            <Featured />
            <MapLocation />
        </div>
    );
};

export default Home;