import React,{Fragment} from 'react';
import './main-page-style.scss';
import PageSection from  '../page-section';

const MainPage = () =>{
    return (
        <Fragment>           
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