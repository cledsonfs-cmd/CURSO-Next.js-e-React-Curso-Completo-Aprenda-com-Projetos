import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteComFilho() {
    return(
        <div>
            <Lista>
                <Item contudo='Item #1'/>
                <Item contudo='Item #2'/>
                <Item contudo='Item #3'/>
            </Lista>
        </div>
    )
}