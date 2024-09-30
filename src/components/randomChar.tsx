"use client";

import React from 'react'
import { useState, useEffect } from "react";
import { getRandomChar } from "@/helper/api"
import styles from "@/scss/home.module.scss"
import { CharacterInfo } from "@/types/charType"


export default function randomChar() {
    const [char, setChar] = useState<CharacterInfo | null>(null);
    const [loading, SetLoading] = useState(true);

    useEffect(() => {
        fetchChar()
    }, [])

    const fetchChar = async () => {
        try {
            SetLoading(true);
            const data = await getRandomChar();
            setChar(data)
            SetLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleRandom = () => {
        SetLoading(false);
        fetchChar();
    }
    if (loading) {
        return (
            <div className={styles.row}>
                <div className={styles.loading}>Loading...</div>
            </div>
        )
    }
    else {


        return (
            <div className={styles.row}>
                <div className={styles.imagebg}
                    style={{
                        backgroundImage: `url("/backgroundHouse/${char?.character.house.slug}.svg")`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >

                    <div className={styles.imageframe}>
                        <img
                            src={`/characters/${char?.character.slug}.jpg`}
                            alt={char?.character.name}
                        />
                    </div>
                    <div className={styles.textframe}>
                        <p>Character: <b>{char?.character.name}</b></p>
                        <p>House: <b>{char?.character.house.name}</b></p>
                    </div>
                </div>
                <div className={styles.descframe}>
                    <div className={styles.desc}>
                        <ul>
                            <li>
                                <h2>Quote: {char?.sentence}</h2>
                            </li>

                        </ul>
                    </div>
                    <div className={styles.btnGroup}>
                        <button className={styles.btnRandom} onClick={handleRandom}>Random</button>
                    </div>
                </div>
            </div>
        )
    }
}
