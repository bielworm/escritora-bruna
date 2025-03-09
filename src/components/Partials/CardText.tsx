'use client'
import React, { useState } from 'react'
import DialogTexto from '../Dialogs/DialogTexto'
import { ImageField, KeyTextField } from '@prismicio/types'

interface Itext {
  imagem: ImageField<never>
  titulo: KeyTextField
  texto: any
}

export default function CardText({ text }: { text: Itext }) {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  return (
    <>
      <div>
        <div
          onClick={handleOpenModal}
          style={{ backgroundImage: `url('${text.imagem.url}')` }}
          className="relative cursor-pointer hover:brightness-100 transition-all duration-300 flex items-end p-3 justify-center w-full bg-cover bg-center h-64 brightness-90 rounded-md overflow-hidden"
        >
          <div className="z-0 absolute bottom-0 bg-gradient-to-b from-transparent w-full h-24 to-black" />
          <p className="z-10 text-center h-16 font-bold text-white text-xl">
            {text.titulo}
          </p>
        </div>
      </div>
      <DialogTexto open={openModal} setOpen={setOpenModal} data={text} />
    </>
  )
}
