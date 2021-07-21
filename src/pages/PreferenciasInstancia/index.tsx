import { Instancia } from "../../components/Instance";
import { ParticularPreferences } from "../../components/ParticularPreferences";
import { Div } from "./styles";

export function Preferences() {
    return (
        <>
            <Div>
                <div className="linha">
                    <div className="coluna-50">
                        <ParticularPreferences />
                    </div>
                    <div className="coluna-50">
                        <Instancia />
                    </div>
                </div>
            </Div>
        </>
    )
}