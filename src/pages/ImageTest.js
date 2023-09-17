import React, { useState, useEffect, useRef, useCallback } from "react";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


let listenerCallbacks = new WeakMap();

const handleIntersections = (entries) => {
    entries.forEach((entry) => {
        if (!listenerCallbacks.has(entry.target)) {
            return;
        }

        let callback = listenerCallbacks.get(entry.target);

        if (!entry.isIntersecting) {
            return;
        }

        observer.unobserve(entry.target);
        listenerCallbacks.delete(entry.target);
        callback();
    });
};

let observer = new IntersectionObserver(handleIntersections, {
    rootMargin: "0px",
    threshold: "0.15"
});

const useIntersection = (ref, callback) => {
    useEffect(() => {
        listenerCallbacks.set(ref.current, callback);
        observer.observe(ref.current);

        return () => {
            listenerCallbacks.delete(ref.current);
            observer.unobserve(ref.current);
        };
    }, [ref, callback]);
};

const Image = ({ src, width, height }) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef();

    const callback = useCallback(() => {
        setIsInView(true);
    }, [setIsInView]);

    useIntersection(ref, callback);

    return (
        <div
            ref={ref}
            style={{
                paddingBottom: `${(height / width) * 100}%`,
                width: "100%"
            }}
        >
            {isInView && (
                <img
                    src={src}
                    alt=""
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%"
                    }}
                />
            )}
        </div>
    );
};

const ImageTest = () => {
    const src = "https://timmousk.com/wp-content/uploads/2022/08/cover-9.png";

    useEffect(() => {
        // 컴포넌트가 처음 렌더링될 때 실행되는 코드
        console.log('Component mounted');

        // 컴포넌트가 언마운트될 때 클린업 함수 설정
        return () => {
            console.log('Component unmounted');
        };
    }, []);
    return (
        <>
            <div>
                <LazyLoadImage
                    alt=''
                    effect="blur"
                    height={'100%'}
                    src={src} // use normal <img> attributes as props
                    width={'100%'} className="m-img" />
            </div>
            <div
                style={{
                    height: "2000px",
                    width: "100%",
                    position: "relative"
                }}
            ></div>
            <Image src={src} height={100} width={100} />
        </>
    );
}

export default ImageTest;