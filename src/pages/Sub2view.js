import React, { useEffect, useState } from 'react';
import Box from '../components/Box';
import Title from '../components/TitleText'

const Sub2view = () => {

    useEffect(() => {
        // 컴포넌트가 처음 렌더링될 때 실행되는 코드
        console.log('Component mounted');
        // 컴포넌트가 언마운트될 때 클린업 함수 설정
        return () => {
            console.log('Component unmounted');
        };
    }, []);
    return (

        <Box boxClassName="content">
            <Box boxClassName="inner">
                <Title titleClassName="title1" wrapClassName="recruit" titleText="이야기 상세">

                </Title>
            </Box>
        </Box>
    );
}

export default Sub2view;