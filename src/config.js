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
                    id: 'manual:research-region',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: `${process.env.GEOSERVER_URL}/wms?request=GetMap&` +
                'layers=manual:research-region&bbox=-9828873.095744213,4848513.033479578,-9812933.65369004,4867025.709042344&' +
                'width=640&height=480&srs=EPSG:3857&format=image%2Fpng'
                }
            ],
            'Satellite Multispectral Image SR':[
                {
                    title: 'SR 09-30-2020',
                    id: 'manual:SatelliteImage.Reifsteck.2020.09.30.SR',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: `${process.env.GEOSERVER_URL}/wms?request=GetMap&` +
                'layers=manual:SatelliteImage.Reifsteck.2020.09.30.SR&' +
                'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                '&width=640&height=480&srs=EPSG:3857&format=image%2Fpng'
                },
                {
                    title: 'SR 09-01-2020',
                    id: 'manual:SatelliteImage.Reifsteck.2020.09.01.SR',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: `${process.env.GEOSERVER_URL}/wms?request=GetMap&` +
                'layers=manual:SatelliteImage.Reifsteck.2020.09.01.SR&' +
                'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                '&width=640&height=480&srs=EPSG:3857&format=image%2Fpng'
                }
            ],
            'Satellite Multispectral Image NDVI': [
                {
                    title: 'NDVI 09-30-2020',
                    id: 'manual:SatelliteImage.Reifsteck.2020.09.30.NDVI',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: `${process.env.GEOSERVER_URL}/wms?request=GetMap&` +
                'layers=manual:SatelliteImage.Reifsteck.2020.09.30.NDVI&' +
                'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                '&width=640&height=480&srs=EPSG:3857&format=image%2Fpng'
                },
                {
                    title: 'NDVI 09-01-2020',
                    id: 'manual:SatelliteImage.Reifsteck.2020.09.01.NDVI',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: `${process.env.GEOSERVER_URL}/wms?request=GetMap&` +
                'layers=manual:SatelliteImage.Reifsteck.2020.09.01.NDVI&' +
                'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                `&width=640&height=480&srs=EPSG:3857&format=image%2Fpng`
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
