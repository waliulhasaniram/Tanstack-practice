import { useQuery } from "@tanstack/react-query";

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
    refetchOnWindowFocus: false  // Optional: prevent refetch on window focus
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
    <main className="flex-grow">
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.slice(0, 5).map(post => (
          <li key={post.id} className="m-4 p-4 bg-black">
            <h3>{post.title}</h3>
            <p>{post.body.slice(0, 50)}...</p>
          </li>
        ))}
      </ul>
    </div>
    </main>
  );
}