import { Map, Marker, Overlay, ZoomControl } from "pigeon-maps"
function osmProvider(x, y, z,) {
    return `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;
}
const MapLocation = () => {
    return (
        <div className="my-5 md:my-8 lg:my-10">
            <div>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold my-5 mb-8 text-center">Find Us on Google Map</h1>
            </div>
            <div>
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