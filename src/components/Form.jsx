import React from 'react'
import { useForm } from "react-hook-form"
import 'leaflet/dist/leaflet.css'
import {CircleMarker, MapContainer, Marker, Popup, TileLayer, Tooltip} from 'react-leaflet'
import axios from 'axios'

const center = [55.747608, 37.602418]

const Form = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/form', data)
        alert('Заявка отправлена')
        console.log(data);
    }
  
    console.log(watch("example"));

    return (
    <div>
    <form id = 'form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Заполните заявку на обратную связь</h1>

    <div className='input-group mb-3'>
        <input 
        {...register('lastName', {
            required: true,
            maxLength: 50,
            pattern: /^[А-Яа-я]+$/i
        })}
        type="text"
        className='form-control'
        placeholder='Фамилия'
        ></input>
    </div>
    {errors?.lastName?.type === 'required'&&(
        <p>Поле обязательно для заполнения</p>
    )}
    {errors?.lastName?.type === 'maxLength'&&(
        <p>Поле не может содержать более 50 символов</p>
    )}
    {errors?.lastName?.type === 'pattern'&&(
        <p>Поле заполнено некорректно</p>
    )}

<div className='input-group mb-3'>
        <input 
        {...register('firstName', {
            required: true,
            maxLength: 50,
            pattern: /^[А-Яа-я]+$/i
        })}
        type="text"
        className='form-control'
        placeholder='Имя'
        ></input>
    </div>
    {errors?.firstName?.type === 'required'&&(
        <p>Поле обязательно для заполнения</p>
    )}
    {errors?.firstName?.type === 'maxLength'&&(
        <p>Поле не может содержать более 50 символов</p>
    )}
    {errors?.firstName?.type === 'pattern'&&(
        <p>Поле заполнено некорректно</p>
    )}

<div className='input-group mb-3'>
        <input 
        {...register('patronymic', {
            maxLength: 50,
            pattern: /^[А-Яа-я]+$/i
        })}
        type="text"
        className='form-control'
        placeholder='Отчество'
        ></input>
    </div>
    {errors?.patronymic?.type === 'maxLength'&&(
        <p>Поле не может содержать более 50 символов</p>
    )}
    {errors?.patronymic?.type === 'pattern'&&(
        <p>Поле заполнено некорректно</p>
    )}

<div className='input-group mb-3'>
        <input 
        {...register('email', {
            required: true,
            maxLength: 50
        })}
        type="email"
        className='form-control'
        placeholder='E-mail'
        ></input>
    </div>
    {errors?.email?.type === 'required'&&(
        <p>Поле обязательно для заполнения</p>
    )}
    {errors?.email?.type === 'maxLength'&&(
        <p>Поле не может содержать более 50 символов</p>
    )}
      <input className='btn btn-outline-primary' type="submit" />
    </form>
<br></br>
    <MapContainer 
    center={center}
    zoom={10}
    style={{
        width: '100vw',
        height: "500px"
    }}>
        <TileLayer url='https://api.maptiler.com/maps/basic-v2/tiles.json?key=DTc3LYRF5Z3OSlrpRbj5' 
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'></TileLayer>
        
        <CircleMarker center={center} pathOptions={{color: 'black'}}> </CircleMarker>
        
        <Marker position={center}>
            <Popup>
                Мы находимся здесь
            </Popup>
            <Tooltip>При наведении</Tooltip>
        </Marker>
    </MapContainer>
    </div>
  );
}

export default Form