// @flow
import hocs from '@geostreams/core/src/utils/hocs';
import Routes from '@geostreams/core/src/routes';

import SensorDetail from '@geostreams/geostreaming/src/containers/Sensor/Detail';
import Explore from '@geostreams/geostreaming/src/containers/Explore';
import Search from '@geostreams/geostreaming/src/containers/Search';

import Layout from './containers/Layout';
import Home from './containers/Home';
import About from './containers/About';


const routes = Object.assign(
    Routes,
    {
        '/': { component: hocs.withLayout(Layout, Home, { hasFooter: true }), exact: true },
        '/about': { component: hocs.withLayout(Layout, About), exact: true },
        '/:parent(explore|search)/detail/location/:name/:category': { component: hocs.withLayout(Layout, SensorDetail) },
        '/search': { component: hocs.withLayout(Layout, Search), exact: true },
        '/explore/:stations': { component: hocs.withLayout(Layout, Explore), exact: true }
    }
);

// if (process.env.NODE_ENV === 'development') {
// };

export default routes;