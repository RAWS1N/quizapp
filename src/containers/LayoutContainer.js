import React from 'react'
import { Layout } from '../components';

function LayoutContainer({data,score,setScore}) {
    return (
        <Layout>
            {data.map((item) => {
                return (
                    <Layout.Item item={item} key={item.id} score={score} setScore={setScore} />
                )
            })}
        </Layout>
    )
}

export default LayoutContainer