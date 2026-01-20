import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefultButton } from './components/DefaultButton';

import './styles/theme.css';
import './styles/global.css';
import { PlayCircleIcon } from 'lucide-react';

function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>
            
            <Container>
                <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <form className='form' action="">
                    <div className="formRow">
                        <DefaultInput id='meuInput' type="text" labelText='Essa é a label' placeholder='Digite algo' />
                    </div>

                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="formRow">
                        <Cycles />
                    </div>

                    <div className="formRow">
                        <DefultButton color='green' icon={<PlayCircleIcon />} />
                    </div>
                </form>
            </Container>
        </>
    );
};

export { App };