import { Map, Marker, Overlay, ZoomControl } from "pigeon-maps"
function osmProvider(x, y, z,) {
    return `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;
}
const MapLocation = () => {
    return (
        <div className="my-5 md:my-8 lg:my-10 max-w-7xl mx-auto">
            <div>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold my-5 mb-8 lg:my-16 text-center">We Are On Google Map</h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-5 p-5">
                <div className="space-y-3">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">Our Location</h2>
                    <p className="text-sm lg:text-lg w-full lg:w-2/3">We are conveniently located in the bustling neighborhood of Bangladesh, Dhaka. Our address is Bannani Uttara. Feel free to drop by anytime during our business hours!</p>
                </div>
                <Map height={400} defaultCenter={[50.879, 4.6997]} defaultZoom={11} provider={osmProvider}>
                    <ZoomControl />
                    <Marker width={20} anchor={[50.879, 4.6997]} />
                    <Overlay anchor={[50.879, 4.6997]} offset={[60, 30]}>
                        <div style={{
                            backgroundColor: 'white',
                            padding: '5px 10px',
                            borderRadius: '5px',
                            fontSize: '14px',
                            color: 'black',
                            border: '1px solid #ccc',
                            fontWeight: 'bold'
                        }}>
                            Serve Nest Hotel
                        </div>
                    </Overlay>
                </Map>
            </div>
        </div>
    );
};

export default MapLocation;