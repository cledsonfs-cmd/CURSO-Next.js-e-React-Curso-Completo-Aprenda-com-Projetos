export default function SomentePar(props) {
    return props.numero % 2 === 0 ? <sapn>{props.numero}</sapn> : null
    /*if(props.numero % 2 === 0){
        return <sapn>{props.numero}</sapn>
    }else {
        return null;
    }*/
}