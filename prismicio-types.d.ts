// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client'

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

/**
 * Item in *Minha Página → Meus textos*
 */
export interface MinhaPaginaDocumentDataMeusTextosItem {
  /**
   * Título field in *Minha Página → Meus textos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: minha_pagina.meus_textos[].titulo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField

  /**
   * Texto field in *Minha Página → Meus textos*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: minha_pagina.meus_textos[].texto
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  texto: prismic.RichTextField

  /**
   * Imagem field in *Minha Página → Meus textos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: minha_pagina.meus_textos[].imagem
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem: prismic.ImageField<never>
}

/**
 * Content for Minha Página documents
 */
interface MinhaPaginaDocumentData {
  /**
   * Título Principal field in *Minha Página*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: minha_pagina.titulo_principal
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo_principal: prismic.KeyTextField

  /**
   * Texto descritivo field in *Minha Página*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: minha_pagina.texto_descritivo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  texto_descritivo: prismic.RichTextField

  /**
   * Meus textos field in *Minha Página*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: minha_pagina.meus_textos[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  meus_textos: prismic.GroupField<
    Simplify<MinhaPaginaDocumentDataMeusTextosItem>
  >
}

/**
 * Minha Página document from Prismic
 *
 * - **API ID**: `minha_pagina`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MinhaPaginaDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<MinhaPaginaDocumentData>,
    'minha_pagina',
    Lang
  >

export type AllDocumentTypes = MinhaPaginaDocument

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>
  }

  namespace Content {
    export type {
      MinhaPaginaDocument,
      MinhaPaginaDocumentData,
      MinhaPaginaDocumentDataMeusTextosItem,
      AllDocumentTypes,
    }
  }
}
