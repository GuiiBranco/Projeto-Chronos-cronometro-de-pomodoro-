import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

import './styles/theme.css';
import './styles/global.css';

function App() {
    return (
        <TaskContextProvider>
            <Home />
        </TaskContextProvider>
    )
};

export { App };