"use client";

import React, { useState, useEffect } from 'react';
import { getHouseList } from "@/helper/api";
import { housesType } from "@/types/houseListType";
import styles from "@/scss/houselist.module.scss"


export default function HouseList() {
    const [house, setHouse] = useState<housesType>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchHouseList();
    }, []);

    const fetchHouseList = async () => {
        try {
            setLoading(true);
            const data = await getHouseList();
            setHouse(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false); // Stop loading even if there's an error
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className={styles.houselistbg}>
                {house?.map((houseItem) => (
                    <div className={styles.houseItem} key={houseItem.slug}>
                        <div className={styles.itemImg}
                            style={{
                                backgroundImage: `url("/backgroundHouse/${houseItem?.slug}.svg")`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        ></div>
                        <div className={styles.itemText}>
                            {houseItem.name}</div>
                    </div>
                ))}
            </div>
        );
    }
}
