import {useEffect, useState} from "react";
import {delay} from "../delay";
import Loading from "../component/loading";
import UserItem from "./user_item";
import {connect} from "react-redux";

const Users = (props) => {
    const [loading, setLoading] = useState(false);
    const users = [
        {id: 1, name: 'Agape'},
        {id: 2, name: "Elei"}
    ]
    useEffect(() => {
        console.log(props)
        init()

    }, []);

    const init = async () => {
        setLoading(true)
        await delay(1000);
        setLoading(false)
    }

    const contenu = <div>
        {users.map((value, index) => {
            return <UserItem key={value.id} value={value}/>
        })}

    </div>
    const chargement = <Loading text='users'/>

    return <> {loading ? chargement : contenu}
    </>
}

const mapsToState=(state)=> state

export default  connect(mapsToState, null)   (Users)