import React, { Component } from "react";
import Head from 'next/head'
import styles from './Header.module.scss';
class Header extends Component {
    render(){
        return (
            <>
                <Head>
                    <title>Nextcom</title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <header className={styles.header}>
                    <h2 className={styles.headerTitle}>This a Header</h2>
                </header>
            </>
        )
    }
}

export default Header;