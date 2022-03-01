export default {
    map: {
        geoserverUrl: process.env.GEOSERVER_URL,
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
                    type: 'wms',
                    legendImage: '/wms?request=GetMap&' +
                'layers=manual:research-region&bbox=-9828873.095744213,4848513.033479578,-9812933.65369004,4867025.709042344&' +
                'width=640&height=480&srs=EPSG:3857&format=image%2Fpng'
                }
            ],
            'Satellite Multispectral Image SR':[
                {
                    title: 'SR 09-30-2020',
                    id: 'manual:SatelliteImage.Reifsteck.2020.09.30.SR',
                    type: 'wms',
                    legendImage: '/wms?request=GetMap&' +
                'layers=manual:SatelliteImage.Reifsteck.2020.09.30.SR&' +
                'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                '&width=640&height=480&srs=EPSG:3857&format=image%2Fpng'
                },
                {
                    title: 'SR 09-01-2020',
                    id: 'manual:SatelliteImage.Reifsteck.2020.09.01.SR',
                    type: 'wms',
                    legendImage: '/wms?request=GetMap&' +
                'layers=manual:SatelliteImage.Reifsteck.2020.09.01.SR&' +
                'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                '&width=640&height=480&srs=EPSG:3857&format=image%2Fpng'
                }
            ],
            'Satellite Multispectral Image NDVI': [
                {
                    title: 'NDVI 09-30-2020',
                    id: 'manual:SatelliteImage.Reifsteck.2020.09.30.NDVI',
                    type: 'wms',
                    legendImage: '/wms?request=GetMap&' +
                'layers=manual:SatelliteImage.Reifsteck.2020.09.30.NDVI&' +
                'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                '&width=640&height=480&srs=EPSG:3857&format=image%2Fpng'
                },
                {
                    title: 'NDVI 09-01-2020',
                    id: 'manual:SatelliteImage.Reifsteck.2020.09.01.NDVI',
                    type: 'wms',
                    legendImage: '/wms?request=GetMap&' +
                'layers=manual:SatelliteImage.Reifsteck.2020.09.01.NDVI&' +
                'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                `&width=640&height=480&srs=EPSG:3857&format=image%2Fpng`
                }
            ],
            'Cation Exchange Capacity (meg/100g)':[
                {
                    title: 'T_CEC_meq_100g_RS_2020',
                    id: 'T_CEC_meq_100g_RS_2020',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: '/wms?request=GetMap&' +
                        'layers=manual:T_CEC_meq_100g_RS_2020&' +
                        'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                        `&width=640&height=480&srs=EPSG:3857&format=image%2Fpng`
                },
                {
                    title: 'M_CEC_meq_100g_RS_2020',
                    id: 'M_CEC_meq_100g_RS_2020',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: '/wms?request=GetMap&' +
                        'layers=manual:M_CEC_meq_100g_RS_2020&' +
                        'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                        `&width=640&height=480&srs=EPSG:3857&format=image%2Fpng`
                },
                {
                    title: 'B_CEC_meq_100g_RS_2020',
                    id: 'B_CEC_meq_100g_RS_2020',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: '/wms?request=GetMap&' +
                        'layers=manual:B_CEC_meq_100g_RS_2020&' +
                        'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                        `&width=640&height=480&srs=EPSG:3857&format=image%2Fpng`
                }
            ],
            'Moisture Content (g/g)':[
                {
                    title: 'T_MC_g_g_RS_2020',
                    id: 'T_MC_g_g_RS_2020',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: '/wms?request=GetMap&' +
                        'layers=manual:T_MC_g_g_RS_2020&' +
                        'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                        `&width=640&height=480&srs=EPSG:3857&format=image%2Fpng`
                },
                {
                    title: 'M_MC_g_g_RS_2020',
                    id: 'M_MC_g_g_RS_2020',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: '/wms?request=GetMap&' +
                        'layers=manual:M_MC_g_g_RS_2020&' +
                        'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                        `&width=640&height=480&srs=EPSG:3857&format=image%2Fpng`
                },
                {
                    title: 'B_MC_g_g_RS_2020',
                    id: 'B_MC_g_g_RS_2020',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: '/wms?request=GetMap&' +
                        'layers=manual:B_MC_g_g_RS_2020&' +
                        'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                        `&width=640&height=480&srs=EPSG:3857&format=image%2Fpng`
                }
            ],
            'Organic Matter (%)':[
                {
                    title: 'T_OM_RS_2020',
                    id: 'T_OM_RS_2020',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: '/wms?request=GetMap&' +
                        'layers=manual:T_OM_RS_2020&' +
                        'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                        `&width=640&height=480&srs=EPSG:3857&format=image%2Fpng`
                },
                {
                    title: 'M_OM_RS_2020',
                    id: 'M_OM_RS_2020',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: '/wms?request=GetMap&' +
                        'layers=manual:M_OM_RS_2020&' +
                        'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                        `&width=640&height=480&srs=EPSG:3857&format=image%2Fpng`
                },
                {
                    title: 'B_OM_RS_2020',
                    id: 'B_OM_RS_2020',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: '/wms?request=GetMap&' +
                        'layers=manual:B_OM_RS_2020&' +
                        'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                        `&width=640&height=480&srs=EPSG:3857&format=image%2Fpng`
                }
            ],
            'Soil Organic Carbon (%)':[
                {
                    title: 'T_SOC_RS_2020',
                    id: 'T_SOC_RS_2020',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: '/wms?request=GetMap&' +
                        'layers=manual:T_SOC_RS_2020&' +
                        'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                        `&width=640&height=480&srs=EPSG:3857&format=image%2Fpng`
                },
                {
                    title: 'M_SOC_RS_2020',
                    id: 'M_SOC_RS_2020',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: '/wms?request=GetMap&' +
                        'layers=manual:M_SOC_RS_2020&' +
                        'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                        `&width=640&height=480&srs=EPSG:3857&format=image%2Fpng`
                }
            ],
            'Soil pH':[
                {
                    title: 'T_SoilpH_RS_2020',
                    id: 'T_SoilpH_RS_2020',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: '/wms?request=GetMap&' +
                        'layers=manual:T_SoilpH_RS_2020&' +
                        'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                        `&width=640&height=480&srs=EPSG:3857&format=image%2Fpng`
                },
                {
                    title: 'M_SoilpH_RS_2020',
                    id: 'M_SoilpH_RS_2020',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: '/wms?request=GetMap&' +
                        'layers=manual:M_SoilpH_RS_2020&' +
                        'bbox=-9828974.37528645,4866229.991661974,-9827597.817471862,4867541.604250039' +
                        `&width=640&height=480&srs=EPSG:3857&format=image%2Fpng`
                },
                {
                    title: 'B_SoilpH_RS_2020',
                    id: 'B_SoilpH_RS_2020',
                    wms: `${process.env.GEOSERVER_URL}/wms`,
                    opacity: 0.80,
                    visibility: false,
                    legendShow: true,
                    legendStartOpen: false,
                    legendTitle: 'Opacity',
                    legendText: '',
                    legendImage: '/wms?request=GetMap&' +
                        'layers=manual:B_SoilpH_RS_2020&' +
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
