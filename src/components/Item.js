import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Item = () => {
    const [joke, setJoke] = useState();

    const generate=() =>{
        axios.get(`https://api.chucknorris.io/jokes/random`)
        .then(response=>{
            setJoke(response.data.value)
        })
    }
    const food = () =>{
        axios.get(`https://api.chucknorris.io/jokes/random?category=food`)
        .then(response=>{
            setJoke(response.data.value)
        })
    }
    const animal = () =>{
        axios.get(`https://api.chucknorris.io/jokes/random?category=animal`)
        .then(response=>{
            setJoke(response.data.value)
        })
    } 
    const career = () =>{
        axios.get(`https://api.chucknorris.io/jokes/random?category=career`)
        .then(response=>{
            setJoke(response.data.value)
        })
    } 
    const celebrity = () =>{
        axios.get(`https://api.chucknorris.io/jokes/random?category=celebrity`)
        .then(response=>{
            setJoke(response.data.value)
        })
    }
    const dev = () =>{
        axios.get(`https://api.chucknorris.io/jokes/random?category=dev`)
        .then(response=>{
            setJoke(response.data.value)
        })
    }
    const history = () =>{
        axios.get(`https://api.chucknorris.io/jokes/random?category=history`)
        .then(response=>{
            setJoke(response.data.value)
        })
    }
    const money = () =>{
        axios.get(`https://api.chucknorris.io/jokes/random?category=money`)
        .then(response=>{
            setJoke(response.data.value)
        })
    }
    const movie = () =>{
        axios.get(`https://api.chucknorris.io/jokes/random?category=movie`)
        .then(response=>{
            setJoke(response.data.value)
        })
    }
    const music = () =>{
        axios.get(`https://api.chucknorris.io/jokes/random?category=music`)
        .then(response=>{
            setJoke(response.data.value)
        })
    }
    const political = () =>{
        axios.get(`https://api.chucknorris.io/jokes/random?category=political`)
        .then(response=>{
            setJoke(response.data.value)
        })
    }
    const religion = () =>{
        axios.get(`https://api.chucknorris.io/jokes/random?category=religion`)
        .then(response=>{
            setJoke(response.data.value)
        })
    }






















    useEffect(()=>{
        generate()
        food()
        religion()
        political()
        dev()
        celebrity()
        movie()
        animal()
        career()
        history()
        money()
        music()
    },[])
   
        return (
            <div>
            <button onClick={generate}>random joke</button>
            <button onClick={animal}>animal</button>
            <button onClick={history}>history</button>
            <button onClick={career}>career</button>
            <button onClick={movie}>movie</button>
            <button onClick={celebrity}>celebrity</button>
            <button onClick={political}>political</button>
            <button onClick={religion}>religion</button>
            <button onClick={music}>music</button>

                <div> {joke}</div>
                 
             </div>
             
         );
   

}

export default Item;
