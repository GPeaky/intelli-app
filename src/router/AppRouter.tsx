import Home from '../pages/App';
import Standings from '../pages/Standings'
import { Router, Route } from '@solidjs/router'

const AppRouter = () => {
    return (
        <Router>
            <Route path={'/'} component={Home} />
            <Route path={'/standings'} component={Standings} />
        </Router >
    )
}

export default AppRouter;