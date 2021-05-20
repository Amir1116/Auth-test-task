import React,{Fragment} from 'react';
import './main-page-style.scss';
import PageSection from  '../page-section';
import Alert from '../alerts';

const MainPage = () =>{
    return (
        <Fragment>
            <Alert success/>
            <h1 className='main-page__heading'>Main Page</h1>
            <main className='main-content'> 
            <PageSection/>
            <PageSection/>
            <PageSection/>
            </main>
        </Fragment>
    )
}

export default MainPage;