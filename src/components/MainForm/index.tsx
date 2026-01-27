import { DefaultInput } from "../DefaultInput"
import { Cycles } from "../Cycles"
import { DefaultButton } from "../DefaultButton"
import { PlayCircleIcon } from "lucide-react"

export function MainForm() {
    return (
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
                <DefaultButton icon={<PlayCircleIcon />} />
            </div>
        </form>
    );
};