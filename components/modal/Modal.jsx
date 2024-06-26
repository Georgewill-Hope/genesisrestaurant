"use client"
import Image from "next/image";
import { GetDataFromLocalStorage } from "@/redux/Slices/navSlice"
import React, { useState} from "react"
import { useDispatch } from "react-redux"

import modalImage from "@/public/images/pop-up.avif";

const Modal = () => {
  const dispatch = useDispatch()
  let savedData
  savedData = JSON.parse(localStorage.getItem("cartItems"))

  const [data, setData] = useState(savedData ?? {
    totalCartItems: [],
    cartQuantity: 0,
    cartItemsTotalPrice: 0
  })


  const [showModal, setShowModal] = useState(true);

  const handleShowModal = () => {
    dispatch(GetDataFromLocalStorage(data))
    setShowModal(false)
  }
  return (
    <article
      className={`z-30 shadow-xl h-screen w-screen fixed backdrop-blur-xl bg-black/20  items-center justify-center top-0 left-0 right-0 bottom-0 ${showModal ? "flex" : "hidden"
        } px-1`}
      onClick={handleShowModal}
    >
      <div className="relative w-full h-[60vh] md:w-[400px] md:h-[70vh] lg:w-[500px] rounded-md">
        <Image
          src={modalImage}
          alt="pic"
          fill
          placeholder="blur"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw"
          className="object-contain object-top rounded-md"
        />
        <button
          className="absolute right-5 top-5 text-genesis-red outline-none text-xl font-bold"
          onClick={handleShowModal}
        >
          X
        </button>
      </div>
    </article>
  )
}

export default Modal



