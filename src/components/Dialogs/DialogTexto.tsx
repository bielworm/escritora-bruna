import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@radix-ui/react-dialog'
import React from 'react'
import ContentRichText from '../Prismic/ContentRichText'
import { Fade } from 'react-awesome-reveal'

interface IDialogTexto {
  open: boolean
  setOpen: (boolean: boolean) => void
  data: any
}

export default function DialogTexto({ open, setOpen, data }: IDialogTexto) {
  return (
    <Dialog open={open} onOpenChange={(modal) => !modal && setOpen(false)}>
      <DialogContent className="z-[99999] fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
        <Fade>
          <div
            onClick={() => setOpen(false)}
            style={{ backgroundImage: `url('${data.imagem.url}')` }}
            className={`bg-cover relative overflow-y-scroll overflow-x-hidden max-h-[88vh] rounded-lg p-6 w-fit`}
          >
            <div className="cursor-pointer leading-[0] hover:bg-red-600 transition-all duration-300 flex bg-red-500 rounded-full justify-center items-center h-8 w-8 absolute top-3 right-3">
              x
            </div>
            <div className="bg-black/80 rounded-xl p-4">
              <Fade delay={3}>
                <DialogTitle className="text-center font-semibold text-white mb-1">
                  {data.titulo}
                </DialogTitle>
                <DialogDescription>
                  <ContentRichText data={data.texto} />
                </DialogDescription>
              </Fade>
            </div>
          </div>
        </Fade>
      </DialogContent>
    </Dialog>
  )
}
