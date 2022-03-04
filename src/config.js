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
            'Research Sites':[
                {
                    title: 'Reifsteck Site',
                    id: '621e7bcbe4b076cdad3c289c:reifsteck-site.zip_621e7bdfe4b076cdad3c28a2',
                    type: 'wms',
                    legend: 'wms?request=GetLegendGraphic&layer=621e7bcbe4b076cdad3c289c:reifsteck-site.zip_621e7bdfe4b076cdad3c28a2&format=image%2Fpng'
                },
                {
                    title: 'Reinhart Site',
                    id: '621e7c05e4b076cdad3c28b3:reinhart-site.zip_621e7c0ce4b076cdad3c28b8',
                    type: 'wms',
                    legend: 'wms?request=GetLegendGraphic&layer=621e7c05e4b076cdad3c28b3:reinhart-site.zip_621e7c0ce4b076cdad3c28b8&format=image%2Fpng'
                },
                {
                    title: 'Rund Site',
                    id: '621e7c1ce4b076cdad3c28ca:rund-site.zip_621e7c25e4b076cdad3c28cf',
                    type: 'wms',
                    legend: 'wms?request=GetLegendGraphic&layer=621e7c1ce4b076cdad3c28ca:rund-site.zip_621e7c25e4b076cdad3c28cf&format=image%2Fpng'
                }
            ],
            'Satellite Multispectral Image SR':[
                {
                    title: 'SR 09-20-2020',
                    id: '601d8c3fe4b0affc633634ad:SatelliteImage.Reifsteck.2020.09.20.SR.tif_601d8d40e4b0affc6336376e',
                    type: 'wms'
                    // ,
                    // legend: 'wms?request=GetLegendGraphic&layer=601d8c3fe4b0affc633634ad:SatelliteImage.Reifsteck.2020.09.20.SR.tif_601d8d40e4b0affc6336376e&format=image%2Fpng'
                },
                {
                    title: 'SR 08-22-2020',
                    id: '601d8c3fe4b0affc633634ad:SatelliteImage.Reifsteck.2020.08.22.SR.tif_601d8d40e4b0affc6336375a',
                    type: 'wms'
                    // ,
                    // legend: 'wms?request=GetLegendGraphic&layer=601d8c3fe4b0affc633634ad:SatelliteImage.Reifsteck.2020.08.22.SR.tif_601d8d40e4b0affc6336375a&format=image%2Fpng'
                }
            ],
            'Satellite Multispectral Image NDVI': [
                {
                    title: 'NDVI 09-20-2020',
                    id: '601d8dcde4b0affc633642ac:SatelliteImage.Reifsteck.2020.09.20.NDVI.tif_601d8e4de4b0affc63364784',
                    type: 'wms',
                    legend: 'wms?request=GetLegendGraphic&layer=601d8dcde4b0affc633642ac:SatelliteImage.Reifsteck.2020.09.20.NDVI.tif_601d8e4de4b0affc63364784&format=image%2Fpng'
                },
                {
                    title: 'NDVI 08-22-2020',
                    id: '601d8dcde4b0affc633642ac:SatelliteImage.Reifsteck.2020.08.22.NDVI.tif_601d8e4de4b0affc63364706',
                    type: 'wms',
                    legend: 'wms?request=GetLegendGraphic&layer=601d8dcde4b0affc633642ac:SatelliteImage.Reifsteck.2020.08.22.NDVI.tif_601d8e4de4b0affc63364706&format=image%2Fpng'
                }
            ],
            'Cation Exchange Capacity (meg/100g)':[
                {
                    title: 'Top Layer CEC',
                    id: 'manual:T_CEC_meq_100g_RS_2020',
                    type: 'wms',
                    legend: 'wms?request=GetLegendGraphic&layer=manual:T_CEC_meq_100g_RS_2020&format=image%2Fpng'
                },
                {
                    title: 'Middle Layer CEC',
                    id: 'manual:M_CEC_meq_100g_RS_2020',
                    type: 'wms',
                    legend: 'wms?request=GetLegendGraphic&layer=manual:M_CEC_meq_100g_RS_2020&format=image%2Fpng'
                },
                {
                    title: 'Bottom Layer CEC',
                    id: 'manual:B_CEC_meq_100g_RS_2020',
                    type: 'wms',
                    legend: 'wms?request=GetLegendGraphic&layer=manual:B_CEC_meq_100g_RS_2020&format=image%2Fpng'
                }
            ],
            'Moisture Content (g/g)':[
                {
                    title: 'Top Layer MC',
                    id: 'manual:T_MC_g_g_RS_2020',
                    type: 'wms',
                    legend: 'wms?request=GetLegendGraphic&layer=manual:T_MC_g_g_RS_2020&format=image%2Fpng'
                },
                {
                    title: 'Middle Layer MC',
                    id: 'manual:M_MC_g_g_RS_2020',
                    type: 'wms',
                    legend: 'wms?request=GetLegendGraphic&layer=manual:M_MC_g_g_RS_2020&format=image%2Fpng'
                },
                {
                    title: 'Bottom Layer MC',
                    id: 'manual:B_MC_g_g_RS_2020',
                    type: 'wms',
                    legend: 'wms?request=GetLegendGraphic&layer=manual:B_MC_g_g_RS_2020&format=image%2Fpng'
                }
            ],
            'Organic Matter (%)':[
                {
                    title: 'Top Layer OM',
                    id: 'manual:T_OM_RS_2020',
                    type: 'wms',
                    legend: 'wms?request=GetLegendGraphic&layer=manual:T_OM_RS_2020&format=image%2Fpng'
                },
                {
                    title: 'Middle Layer OM',
                    id: 'manual:M_OM_RS_2020',
                    type: 'wms',
                    legend: 'wms?request=GetLegendGraphic&layer=manual:M_OM_RS_2020&format=image%2Fpng'
                },
                {
                    title: 'Bottom Layer OM',
                    id: 'manual:B_OM_RS_2020',
                    type: 'wms',
                    legend: 'wms?request=GetLegendGraphic&layer=manual:B_OM_RS_2020&format=image%2Fpng'
                }
            ],
            'Soil Organic Carbon (%)':[
                {
                    title: 'Top Layer SOC',
                    id: 'manual:T_SOC_RS_2020',
                    type: 'wms',
                    legend: 'wms?request=GetLegendGraphic&layer=manual:T_SOC_RS_2020&format=image%2Fpng'
                },
                {
                    title: 'Middle Layer SOC',
                    id: 'manual:M_SOC_RS_2020',
                    type: 'wms',
                    legend: 'wms?request=GetLegendGraphic&layer=manual:M_SOC_RS_2020&format=image%2Fpng'
                }
            ],
            'Soil pH':[
                {
                    title: 'Top Layer Soil pH',
                    id: 'manual:T_SoilpH_RS_2020',
                    type: 'wms',
                    legend: 'wms?request=GetLegendGraphic&layer=manual:T_SoilpH_RS_2020&format=image%2Fpng'
                },
                {
                    title: 'Middle Layer Soil pH',
                    id: 'manual:M_SoilpH_RS_2020',
                    type: 'wms',
                    legend: 'wms?request=GetLegendGraphic&layer=manual:M_SoilpH_RS_2020&format=image%2Fpng'
                },
                {
                    title: 'Bottom Layer Soil pH',
                    id: 'manual:B_SoilpH_RS_2020',
                    type: 'wms',
                    legend: 'wms?request=GetLegendGraphic&layer=manual:B_SoilpH_RS_2020&format=image%2Fpng'
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
