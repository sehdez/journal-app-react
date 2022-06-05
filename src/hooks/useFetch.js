import { useEffect, useRef, useState } from 'react';
export const useFetch = ( url ) => {

    const isMounted = useRef(true)

    const [state, setState] = useState<UseState>({
        // data   : [{ author:'', quote:'', series:''}],
        data: null,
        loading: true,
        error  : null 
    });
    useEffect( ()=> {
        return ()=> {
            isMounted.current = false;
        }
    }, [])
    useEffect( () => {
        setState({
            data: null,
            loading: true,
            error  : null 
        })
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                if (isMounted.current){
                        setState({
                            loading: false,
                            error: null,
                            data 
                        })
                    } else {
                        console.log('setState no se llamó')
                    }
                } )
    }, [url])
    return state; 
}





// var myHeaders = new Headers();
// myHeaders.append("x-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjY5N2NiZTAwNTA2MTM5YzkzY2MyYjYiLCJpYXQiOjE2NTEwOTEwOTUsImV4cCI6MTY1MTE3NzQ5NX0.IEKkCeSTRC9ZFpJqPH1uK6vgYWcR4Vly5mPZSmueVLo");

// var raw = "{\r\n    \"nombres\": \"David\",\r\n    \"apellidoPaterno\": \"Hernández\",\r\n    \"apellidoMaterno\": \"Cuevas\",\r\n    \"domicilio\": \"loma 35\",\r\n    \"email\": \"test@test.com\"\r\n}";

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://crud-sergio.herokuapp.com/api/clientes", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));