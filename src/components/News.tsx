import { useNavigate , useParams} from "react-router-dom";
export default function News(value:object){
    const navigate = useNavigate();
    const id = useParams();
    console.log(id);
    return (

        <div>
            <h2>News</h2>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <div>

            </div>
        </div>
    )
}