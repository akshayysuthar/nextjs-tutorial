"use client";
import React from "react";
import { useState, useEffect } from "react";
import useSWR from "swr";

const page = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isloading, setIsLoading] = useState(false);

  // // to fetch data in client side
  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     // The return value is *not* serialized
  //     // You can return Date, Map, Set, etc.

  //     if (!res.ok) {
  //       // This will activate the closest `error.js` Error Boundary
  //       throw new Error("Failed to fetch data");
  //     }

  //     // const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   // getData();
  // }, []);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  // console.log(data)

  // function Profile () {
  // }
  return <div>page</div>;
};

export default page;
