import React, { useState } from 'react'

const AgeCalulator = () => {




    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(0);
 
    const calculateAge = () => {
        const today = new Date();
        const birthdateDate = new Date(birthdate);
 
        let age = today.getFullYear() - birthdateDate.getFullYear();
        const monthDiff = today.getMonth() - birthdateDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
            age--;
        }
 
        setAge(age);
    };
 
    const resetCalculator = () => {
        setBirthdate('');
        setAge(0);
      };
  return (
    <div className='container'>
            <h1 className='text-center mb-3 text-[22px] text-bold'>Age Calulator</h1>
            <p className='text-[18px] mb-3'>This Age Calucaltor determine the Age of any person </p>
        
        <div className='flex'>
             {/* right Side  */}
        <div className='w-[50%]'>
            <h1 className='text-[20px] text-bold'>Date Of Birth</h1>
            <input type="date" required className='' value={birthdate} onChange={e=>setBirthdate(e.target.value)} />
            <div className='my-2'>
                <button className='bg-[#2f80ed] cursor-pointer p-1 text-white mr-2 rounded-md' onClick={calculateAge}>Calculate Age</button>
                <button className='bg-[#2f80ed] cursor-pointer p-1 text-white rounded-md' onClick={resetCalculator}>Reset</button>
            </div>
        </div>
            {/* Left Side  */}
            <div className='w-[50%]'>
                <div className='bg-[#EEF1F6] h-[250px]'>
                    <h2 className='flex text-center justify-center text-bold text-[20px] pt-4'>Your Age is</h2>
                    <h2 className='text-blue-700 flex text-center justify-center my-10 text-[30px]'>{age>0 ? `${age}`:" "}</h2>
                </div>

            </div>

        </div>

    </div>
  )
}

export default AgeCalulator