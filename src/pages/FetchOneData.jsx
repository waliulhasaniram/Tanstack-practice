import { useLocation } from "react-router";

const FetchOneData =()=> {
    const postData = useLocation()
   // console.log(postData.state)
    const {id, title, body} =  postData.state
    return <>
            <div key={id} className="m-4 p-4 bg-gray-800">
              <h2>ID: {id}</h2>
              <h3>Title: {title}</h3>
              <p>Body: {body}</p>
            </div>
    </>
}

export default FetchOneData;