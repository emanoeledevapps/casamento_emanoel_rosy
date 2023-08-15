import Link from 'next/link';
import Image from 'next/image';
import {HiHome} from 'react-icons/hi';
import {FaUserCheck} from 'react-icons/fa';

export function ModalSuccess({close, name}){

    return(
        <div className='flex justify-center items-center inset-0'>
            <div className='bg-[rgba(0,0,0,0.8)] fixed inset-0'/>
            <div className='absolute flex flex-col items-center justify-between p-3 lg:w-[300px] h-[400px] bg-white rounded-md m-auto inset-0 border-2'>
                <Image
                    src={require('../../src/assets/nome-terra.png')}
                    alt='Imagem dos noivos'
                    className='w-[180px] object-contain'
                />

                <section>
                    <p className='font-bold text-black text-center'>Você acabou de confirmar sua presença, estamos muito felizes e esperamos por você</p>
                    <p className='font-bold text-[#cb6843] text-xl text-center'>{name}</p>
                </section>

                <section className='flex flex-col w-full gap-2'>
                    <button
                        className='flex items-center justify-center gap-1 rounded-3xl font-bold text-white bg-[#cb6843] h-10 px-3'
                        onClick={close}
                    >
                        <FaUserCheck color='white' size={24}/>
                        Confirmar outra pessoa
                    </button>

                    <Link
                        href='/'
                        className='flex items-center justify-center gap-1 rounded-3xl font-bold text-[#cb6843] border-[#cb6843] border-2 h-10 px-3'
                        onClick={close}
                    >
                        <HiHome size={24} color='#cb6843'/>
                        Voltar para o início
                    </Link>
                </section>
            </div>
        </div>
    );
}