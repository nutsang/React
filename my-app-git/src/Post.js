import { useParams, useLocation } from "react-router-dom";

function PostItem(props){
    return (<>
    <img
    src={props.src}
    width={props.width}
    height={props.height}
    />
    <p>
        {props.name}<br/>{props.price}
    </p>
    </>);
}

export default function Post(){
    const {id} = useParams();
    const urlstring = new URLSearchParams(useLocation().search);
    const fname=urlstring.get("fname");
    const lname=urlstring.get("lname");
    if(id==1){
        return (<PostItem name="Mac mini" price="22000" src="https://cdn.pixabay.com/photo/2023/05/29/19/24/peonies-8027028_640.jpg" width="250" height="250"/>);
    }else if(id==2){
        return (<PostItem name="Mac Pro" price="30000" src="https://cdn.pixabay.com/photo/2023/04/15/17/19/cat-7928232__340.png" width="250" height="250"/>);
    }
    return (<>Hello {fname} {lname}</>);
}