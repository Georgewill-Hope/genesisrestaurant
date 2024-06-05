"use client"
import { GetDataFromLocalStorage } from "@/Slices/navSlice";
import {useEffect} from  "react"
import { useDispatch } from "react-redux";

const fetchFromLocal = ()=>{
    const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetDataFromLocalStorage());
  }, [dispatch]);
}

export default fetchFromLocal