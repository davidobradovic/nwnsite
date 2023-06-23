import React, { useState } from 'react'
import './apply.css'
import { useNavigate } from 'react-router-dom';

function Apply() {

    const navigate = useNavigate();

    const [file, setFile] = useState(null);
    const [formInputs, setFormInputs] = useState({});
    const [otherDetails, setOtherDetails] = useState(false)

    const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    };

    const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('file', file);
        formData.append('ime', formInputs.ime);
        formData.append('prezime', formInputs.prezime);
        formData.append('email', formInputs.email);
        formData.append('telefon', formInputs.telefon);
        formData.append('grad', formInputs.grad);
        formData.append('postanskiBroj', formInputs.postanskiBroj);
        formData.append('adresa', formInputs.adresa);

        fetch('http://localhost:3011/upload', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
            })
            .catch(error => {
            // Handle any errors that occurred during the submission
            console.error('Error:', error);
            });

            setOtherDetails(true)
        };


  return (
    <div className='applyWindow'> 
        <h1 className='text-center p-5 font-semibold text-lg'>Apply for brand ambassador</h1>
        <form>
            <div className="formInput w-full p-3 mb-1">
                <label className='mb-1'>Slika</label>
                <input className='bg-gray-100 outline-none p-3' required type="file" placeholder='Unesite vasu sliku' onChange={handleFileChange} />
            </div>
            <div className="formInput w-1/2 p-3 mb-1">
                <label className='mb-1'>Ime</label>
                <input className='bg-gray-100 outline-none p-3 ' required type="text" placeholder='Unesite vase ime' onChange={handleInputChange} name='ime' />
            </div>
            <div className="formInput w-1/2 p-3 mb-1">
                <label className='mb-1'>Prezime</label>
                <input className='bg-gray-100 outline-none p-3 ' required type="text" placeholder='Unesite vase prezime' onChange={handleInputChange} name='prezime'  />
            </div>
            <div className="formInput w-full p-3 mb-1">
                <label className='mb-1'>Email</label>
                <input className='bg-gray-100 outline-none p-3 ' required type="text" placeholder='Unesite vasu email adresu' onChange={handleInputChange} name='email' />
            </div>
            <div className="formInput w-full p-3 mb-1">
                <label className='mb-1'>Telefon</label>
                <input className='bg-gray-100 outline-none p-3 ' required type="text" placeholder='Unesite vas telefo' onChange={handleInputChange} name='telefon' />
            </div>
            <div className="formInput w-1/3 p-3 mb-1">
                <label className='mb-1'>Grad</label>
                <input className='bg-gray-100 outline-none p-3 ' required type="text" placeholder='Unesite vas grad' onChange={handleInputChange} name='grad' />
            </div>
            <div className="formInput w-1/3 p-3 mb-1">
                <label className='mb-1'>Postanski broj</label>
                <input className='bg-gray-100 outline-none p-3 ' required type="text" placeholder='Unesite vas postanski broj' onChange={handleInputChange} name='postanskiBroj' />
            </div>
            <div className="formInput w-1/3 p-3 mb-1">
                <label className='mb-1'>Adresa</label>
                <input className='bg-gray-100 outline-none p-3 ' required type="text" placeholder='Unesite vasu adresu' onChange={handleInputChange} name='adresa' />
            </div>
            {
                otherDetails ? (
                    <>
                        <div className="formInput w-1/2 p-3 mb-1">
                            <label className='mb-1'>Biografija</label>
                            <textarea className='bg-gray-100 outline-none p-3 ' required type="text" placeholder='Unesite biografiju' onChange={handleInputChange} name='bio' />
                        </div>
                        <div className="formInput w-1/2 p-3 mb-1">
                            <label className='mb-1'>Interesovanja</label>
                            <textarea className='bg-gray-100 outline-none p-3 ' required type="text" placeholder='Unesite interesovanja' onChange={handleInputChange} name='interest'  />
                        </div>
                        <div className="formInput w-full p-3 mb-1">
                            <label className='mb-1'>Skola</label>
                            <input className='bg-gray-100 outline-none p-3 ' required type="text" placeholder='Unesite skole' onChange={handleInputChange} name='school' />
                        </div>
                        <div className="formInput w-full p-3 mb-1">
                            <label className='mb-1'>Edukacija</label>
                            <textarea className='bg-gray-100 outline-none p-3 ' required type="text" placeholder='Unesite edukaciju' onChange={handleInputChange} name='education'  />
                        </div>
                    </>
                ) : null
            }
            <button onClick={handleSubmit} className='w-full bg-red-400 ml-3 mr-3 p-3 text-white'>{otherDetails ? "Zavrsi" : "Sledeca"}</button>
            <button onClick={() => navigate('/')} className='w-full bg-red-400 mt-3 ml-3 mr-3 p-3 text-white'>PREKINI</button>
        </form>
    </div>
  )
}

export default Apply