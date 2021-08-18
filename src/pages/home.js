import {useEffect, useState} from "react";
import {delay} from "../delay";
import Loading from "../component/loading";
import {connect} from "react-redux";

const Home = (props) => {
    const [loading, setLoading] = useState(false);


    useEffect(() => {

        console.log(props)
        init()

    }, []);

    const init = async () => {
        setLoading(true)
        await delay(5000);
        setLoading(false)
    }

    const contenu = <div>Page d'accueil</div>
    const chargement = <Loading text={'accueil'}/>

    return <> {loading ? chargement : contenu}
    </>

}

const mapsToState=(state)=> state

export default  connect(mapsToState, null)   (Home)