import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import Image from 'next/image';

export function ModalSuccess({close, name}){
    
    return(
        <Dialog.Portal className='flex justify-center items-center inset-0'>
            <Dialog.Overlay className='bg-[rgba(0,0,0,0.8)] fixed inset-0'/>
            <Dialog.Content className='absolute flex flex-col items-center justify-between p-3 lg:w-[300px] h-[400px] bg-white rounded-md m-auto inset-0 border-2'>
                <Image
                    src={require('../../src/assets/img-header.png')}
                    alt='Imagem dos noivos'
                    className='w-[150px] object-contain'
                />

                <section>
                    <p className='font-bold text-black text-center'>Você acabou de confirmar sua presença, estamos muito felizes e esperamos por você</p>
                    <p className='font-bold text-[#cb6843] text-xl text-center'>{name}</p>
                </section>

                <section className='flex flex-col w-full gap-2'>
                    <button
                        className='flex items-center justify-center rounded-3xl font-bold text-white bg-[#cb6843] h-10 px-3'
                        onClick={close}
                    >
                        Confirmar outra pessoa
                    </button>

                    <Link
                        href='/'
                        className='flex items-center justify-center rounded-3xl font-bold text-[#cb6843] border-[#cb6843] border-2 h-10 px-3'
                        onClick={close}
                    >
                        Voltar para o início
                    </Link>
                </section>
            </Dialog.Content>
        </Dialog.Portal>
    )
}