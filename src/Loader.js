import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner';
import { Layout } from './components'

function Loader() {
    return (
        <Layout.Loader>
            <CirclesWithBar
                height="200"
                width="200"
                // color="#4fa94d"
                color="#c3c3d5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel='circles-with-bar-loading'
            />
        </Layout.Loader>
    )
}


export default Loader