import React, { useState, useEffect } from 'react';
import serverApis from './serverApi/serverApi';
import "./arca.css";
import {useStore} from "store/store";
import { MfeButton } from 'mfe-poc-component-library';


export default () => {

    const [arcaData, setArcaData] = useState('');
    const {count,reset} = useStore();
    let arca_data = "";

    useEffect(()=>{
        serverApis.get( (data)=>{
                        let x = arcaData + "\n" + data.data;
                        arca_data += x;
                        setArcaData(arca_data);


                    } , (e)=>{
                        console.log(e.message);
                    })
        // setInterval( () =>{
        //         serverApis.get( (data)=>{
        //             let x = arcaData + "\n" + data.data;
        //             arca_data += x;
        //             setArcaData(arca_data);
        //
        //
        //         } , (e)=>{
        //             console.log(e.message);
        //         })
        // }
        // ,5000);
    },[])



    return (
        <div className="arca-body">
            <div className="page-title">ARCA</div>
            <div className="arca-content">
                <div className="server-content">
                    {arcaData}
                </div>
                <div className="store-content">
                    Counter: {count}
                    <div>
                        <MfeButton onClick={reset} text="Reset"/>
                    </div>
                </div>
            </div>
        </div>

    );
}