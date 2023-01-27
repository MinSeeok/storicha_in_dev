import Image from 'next/image';
import React, { useState } from 'react'
import LogoB from '../../../assets/images/logo/logo_b.png';
import { AiFillFacebook } from'@react-icons/all-files/ai/AiFillFacebook';
import { AiOutlineGoogle } from '@react-icons/all-files/ai/AiOutlineGoogle';
import { RiKakaoTalkFill } from '@react-icons/all-files/ri/RiKakaoTalkFill'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Inputs {
    email: string
    password: string
}

function LoginModalComp() {
  const [login, setLogin] = useState(false);
  const router = useRouter();
  const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async ({email, password}) => {
    if (login) {

    }
  }

  return (
    <div className='relative flex flex-col items-center p-2 space-y-3 w-screen h-screen'>
        {/* <Image
            src={LogoB}
            width={160}
            height={40}
            alt={'storichain-logo'}
        /> */}
        <button className='login-button mt-5 bg-[#36589E]'><AiFillFacebook/><span>페이스북으로 로그인</span></button>
        <button className='login-button text-black'><AiOutlineGoogle/><span>구글로 로그인</span></button>
        <button className='login-button bg-[#FFE000] text-black'><RiKakaoTalkFill/><span>카카오로 로그인</span></button>

        <p className='mt-10'>------------------------- 또는 -------------------------</p>
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className='relative mt-24 space-y-8 rounded py-10 px-6 '
        >
            <div className='space-y-4 w-[420px]'>
                <label className='inline-block w-full'>
                    <h4 className='text-lg'>이메일 아이디</h4>
                    <input 
                        type="email" 
                        placeholder='이메일 아이디' 
                        className='input'
                        {...register('email', { required: true })}
                    />
                    {errors.email && (
                        <p className='p-1 text-[13px] font-light text-orange-500'>
                            유효한 이메일을 입력하세요.
                        </p>
                    )}
                </label>
                <label className='inline-block w-full'>
                    <h4 className='text-lg'>패스워드</h4>
                    <input 
                        type="password" 
                        placeholder='패스워드' 
                        className='input'
                        {...register('password', { required: true })}
                    />
                    {errors.password && (
                        <p className='p-1 text-[13px] font-light text-orange-500'>
                            암호는 4자에서 20자 사이여야 합니다.  
                        </p>
                    )}
                </label>
            </div>

            <button 
                type='submit'
                className='login-button bg-[#FF6574] w-full'
            >
                로그인
            </button>
        </form>
        <button
            onClick={()=> router.push('/')}
            className='login-button w-[420px] bg-[#FFFFFF] text-black text-lg'
        >
            회원가입 20초밖에 안걸려요
        </button>
        <div className='flex flex-col py-7 items-center w-full'>
            <p className='text-[#FF6574] font-bold text-xl'>지금 무료로 스토리텔러가 되세요.</p>
            <p className='mt-3 text-lg text-center'>스토리 자산 플랫폼<br/>인생의 돌파구, 당신만의 스토리</p>
        </div>
    </div>
  )
}

export default LoginModalComp