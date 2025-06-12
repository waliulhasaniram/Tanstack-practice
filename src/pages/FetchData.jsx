import { useEffect, useState } from "react";
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

    // Optional: Log data when it's available
  if (data) {
    console.log('Fetched data:', data);
  }

  if (isLoading) {
    return <h1>Loading posts...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }
  
  return <h1> Fetch data!</h1>;
}