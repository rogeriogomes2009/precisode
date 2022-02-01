import React from "react"
import Link from "next/link"
import TextLoop from "react-text-loop"

const persons = ["Eletricista", "Encanador", "Marceneiro", "Pintor"]

const Header = () => (
  <header className="w-full container mx-auto">
    <div className="flex flex-col items-center py-12">
      <Link href="/">
        <a className="font-bold text-gray-800 uppercase text-center hover:text-gray-700 text-5xl">
          Tá Precisando de quem?
        </a>
      </Link>
      <div className="text-lg text-gray-600">
        Ache seu{" "}
        <span className="font-bold bg-blue-800 text-white px-4">
          <TextLoop
            children={persons}
            springConfig={{ stiffness: 180, damping: 8 }}
          />
        </span>{" "}
        aqui
      </div>
    </div>
  </header>
)

export default Header
