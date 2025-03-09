'use client'
import React from 'react'
import Icon from '../Adapters/Icon'
import { MinhaPaginaDocument } from '../../../prismicio-types'
import ContentRichText from '../Prismic/ContentRichText'
import CardText from '../Partials/CardText'
import { Fade, Slide } from 'react-awesome-reveal'

export default function SectionTexts({
  data: props,
}: {
  data: MinhaPaginaDocument
}) {
  const data = props.data

  return (
    <div className="relative w-screen h-screen bg-cover overflow-x-hidden">
      <img
        src="/img/bg-app.webp"
        className="fixed top-0 w-screen brightness-[0.32] h-screen object-cover -z-10"
      />
      <div className="mx-auto px-[6vw] py-[4vh] max-w-6xl overflow-x-hidden">
        <Slide direction="up">
          <h1 className="text-center font-bold text-4xl">
            {' '}
            <Icon icon={'solar:book-bold'} color="white" />{' '}
            {data.titulo_principal}
          </h1>
        </Slide>
        <Slide direction="left">
          <p className="font-medium mt-2 text-center">
            <ContentRichText data={data.texto_descritivo} />
          </p>
        </Slide>
        <Fade>
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            {data?.meus_textos &&
              data.meus_textos.map((text) => (
                <CardText key={text.titulo} text={text} />
              ))}
          </div>
        </Fade>
      </div>
    </div>
  )
}
