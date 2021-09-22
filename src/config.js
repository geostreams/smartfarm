export default {
    map: {
        useCluster: false,
        clusterDistance: 45,
        maxZoom: 17,
        minZoom: 5.5,
        zoom: 17,
        center: [-9828406.19,4866853.78],
        layers: {
            'Research Region':[
                {
                    title: 'Research Region',
                    id: '602d9528e4b0b7c798c8212e:research-region.zip_602d954fe4b0b7c798c82134',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: `${process.env.GEOSERVER_URL}/wms?request=GetMap&` +
                'layers=602d9528e4b0b7c798c8212e:research-region.zip_602d954fe4b0b7c798c82134&bbox=-9828873.095744213,4848513.033479578,-9812933.65369004,4867025.709042344&' +
                'width=640&height=480&srs=EPSG:3857&format=image%2Fpng'
                }
            ],
            'Satellite Multispectral Image SR':[
                {
                    title: 'SR 09-30-2020',
                    id: '601d8c3fe4b0affc633634ad:SatelliteImage.Reifsteck.2020.09.30.SR.tif_601d8d40e4b0affc63363757 ',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: `${process.env.GEOSERVER_URL}wms?request=GetMap&` +
                'layers=601d8c3fe4b0affc633634ad:SatelliteImage.Reifsteck.2020.09.30.SR.tif_601d8d40e4b0affc63363757&' +
                'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                '&width=640&height=480&srs=EPSG:3857&format=image%2Fpng'
                },
                {
                    title: 'SR 09-01-2020',
                    id: '601d8c3fe4b0affc633634ad:SatelliteImage.Reifsteck.2020.09.01.SR.tif_601d8d40e4b0affc633636fd',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: `${process.env.GEOSERVER_URL}wms?request=GetMap&` +
                'layers=601d8c3fe4b0affc633634ad:SatelliteImage.Reifsteck.2020.09.01.SR.tif_601d8d40e4b0affc633636fd&' +
                'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                '&width=640&height=480&srs=EPSG:3857&format=image%2Fpng'
                }
            ],
            'Satellite Multispectral Image NDVI': [
                {
                    title: 'NDVI 09-30-2020',
                    id: '601d8dcde4b0affc633642ac:SatelliteImage.Reifsteck.2020.09.30.NDVI.tif_601d8e4de4b0affc6336476b',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: `${process.env.GEOSERVER_URL}wms?request=GetMap&` +
                'layers=601d8dcde4b0affc633642ac:SatelliteImage.Reifsteck.2020.09.30.NDVI.tif_601d8e4de4b0affc6336476b&' +
                'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                '&width=640&height=480&srs=EPSG:3857&format=image%2Fpng'
                },
                {
                    title: 'NDVI 09-01-2020',
                    id: '601d8dcde4b0affc633642ac:SatelliteImage.Reifsteck.2020.09.01.NDVI.tif_601d8e4de4b0affc6336471f',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legend: '/wms?request=GetMap&' +
                'layers=601d8dcde4b0affc633642ac:SatelliteImage.Reifsteck.2020.09.01.NDVI.tif_601d8e4de4b0affc6336471f&' +
                'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                '&width=640&height=480&srs=EPSG:3857&format=image%2Fpng'
                }
            ]
        }
    },
    geostreamingEndpoint: process.env.GEOSTREAMS_URL,
    sensors: {
        displayOnlineStatus: true
    },
    visualizations: {
        forceVega: true,
        defaultStartAtZero: false,
        defaultSameTimeScale: false
    },
    source: {
        field: {
            label : 'Field Data',
            order : 1,
            color : '#FF0000',
            description : 'Data collected by the Midwest Bioenergy Crops Landscape Lab',
            more_info : '',
            link : 'https://arpa-e.energy.gov/technologies/projects/midwest-bioenergy-crop-landscape-laboratory-mbc-lab-capturing-spatio-temporal' 
        },
        subfield: {
            label : 'Subfield Data',
            order : 1,
            color : '#0D71BA',
            description : 'Data collected by the Midwest Bioenergy Crops Landscape Lab',
            more_info : '',
            link : 'https://arpa-e.energy.gov/technologies/projects/midwest-bioenergy-crop-landscape-laboratory-mbc-lab-capturing-spatio-temporal' 
        }
    },
    locations: []

};
