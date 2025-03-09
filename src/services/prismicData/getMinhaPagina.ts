'use server'
import { client } from '../prismicClient'
import { getCurrentLang } from './getCurrentLang'

export const getMinhaPagina = async () => {
  const lang = await getCurrentLang()
  const data = await client.getSingle('minha_pagina', {
    lang: lang ?? 'pt-br',
  })
  return data
}
