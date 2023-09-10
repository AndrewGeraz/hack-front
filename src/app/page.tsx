"use client"

import MainMenu from "./components/MainMenu/MainMenu"
import { useAppSelector } from "./lib/redux/hooks"
import localFont from "next/dist/compiled/@next/font/dist/local"

export default function Home() {
const isShowMenu = useAppSelector(state=>state.serviceSlice.isShowMenu)

  return (
    <>
    <div>
    <h1>Платформа</h1>
  </div>
  {isShowMenu&&<MainMenu/>}
  </>
  )
}
