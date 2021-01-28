import React, {useState} from 'react';
import {TableHeader} from '../TableHeader/TableHeader';
import  './CustomTable.css'
import {TableBody} from '../TableBody/TableBody';


export const CustomTable = () => {

    return (
        <div>
            <table>
                <thead >
                <TableHeader/>
                </thead >
                <tbody>
                <TableBody/>
                </tbody>
            </table>
        </div>
    )
}
