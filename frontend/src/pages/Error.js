import React from 'react';
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const Error = () => {
    return (
        <>
            <MainNavigation/>
            <main>
                <PageContent title="An error has occurred">
                    <p>Something went wrong</p>
                </PageContent>
            </main>
        </>

    );
};

export default Error;