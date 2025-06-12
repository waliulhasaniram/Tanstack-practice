import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router";


const fetchPOST =async()=> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }
    return response.json();
}

export default function FetchData() {

  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['posts'],  // Unique cache key
    queryFn: fetchPOST,  // Fetch function
    retry: 2,             // Retry 2 times on failure
    refetchOnWindowFocus: false,  // Optional: prevent refetch on window focus
    // gcTime: 100000
    // staleTime: 10000
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true
  })

  // if (data) { // Optional: Log data when it's available
  //   console.log('Fetched data:', data);
  // }

  if (isLoading) {
    return <h1>Loading posts...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }
  return (
    <main className="">
    <div>
      <h1>Fetched Data</h1>
      <ul className="block">
          {data.slice(0, 10).map(post => (
          <NavLink to={`/fetch_one_data/${post.id}`} state={{...post}}>
            <li key={post.id} className="m-4 p-4 bg-gray-800">
              <h2>ID: {post.id}</h2>
              <h3>Title: {post.title}</h3>
              <p>Bdy {post.body.slice(0, 40)}...</p>
            </li>
          </NavLink>  
          ))}

      </ul>
    </div>
    </main>
  );
}