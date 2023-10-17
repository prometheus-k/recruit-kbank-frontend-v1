import React, { useEffect, useState } from 'react';
import { useSearch } from '../components/SearchContext';
import InfiniteScroll from "react-infinite-scroll-component";
import _ from 'lodash';

import TitleText from '../components/TitleText'
import List from '../components/List';
import ListItem from '../components/ListItem';
import ListItemText from '../components/ListItemText';
import TextBox from '../components/TextBox';
import Box from '../components/Box';
import Select from '../components/Select'
import SearchField from '../components/SearchField';

const jobGroupOptionsData = [
    { value: '', label: '전체' },
    { value: 'Tech', label: 'Tech' },
    { value: 'UX팀', label: 'UX' },
    { value: 'Risk', label: 'Risk' }
];

const careerOptionsData = [
    { value: '', label: '전체' },
    { value: '경력', label: '경력' },
    { value: '인턴', label: '인턴' },
    { value: '신규', label: '신규' }
];


const RecruitList = ({ listData }) => {
    const [lists, setLists] = useState(listData);
    const { searchTerm, setSearchTerm, selectedJobGroup, setSelectedJobGroup, selectedCareer, setSelectedCareer } = useSearch();

    const handleMoreButtonClick = () => {
        // 더보기 버튼 클릭 시 새로운 카드를 추가하는 함수
        // 실제 데이터를 추가하는 로직을 구현해야 합니다.

        const newList = {
            jobid: 1, tag: true, tit: '사후', sub1: 'Tech', sub2: '경력', dday: '오늘마감', ddayclassName: 'day'
        };
        setLists([...lists, newList]);
    };

    const handleinitButtonClick = () => {
        setSearchTerm(''); // 검색어 업데이트
        setSelectedJobGroup('');
        setSelectedCareer('');
    };

    const handleSearchInputChange = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm); // 검색어 업데이트
    };

    const handleJobGroupSelect = (event) => {
        setSelectedJobGroup(event.target.value);
    };

    const handleCareerSelect = (event) => {
        setSelectedCareer(event.target.value);
    };
    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        handleMoreButtonClick();
        // setTimeout(() => {
        //     this.setState({
        //         items: this.state.items.concat(Array.from({ length: 20 }))
        //     });
        // }, 1500);
    };
    // 검색어와 일치하는 카드들 필터링
    const filteredLists = lists.filter((list) =>
        list.tit.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedJobGroup === "" || list.sub1 === selectedJobGroup) &&
        (selectedCareer === "" || list.sub2 === selectedCareer)
    );

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
                <TitleText titleClassName="title1" titleText="케이뱅크와 함께<br />더 나은 금융을 만들어갈<br />동료를 기다립니다." />
            </Box>

            <Box boxClassName="inner">
                <div className="formWrap">
                    <div className="form-group">
                        <SearchField title="검색" onChange={handleSearchInputChange} value={searchTerm} />
                    </div>
                    <div className="form-group">
                        <Select options={jobGroupOptionsData} onChange={handleJobGroupSelect} value={selectedJobGroup} />
                    </div>
                    <div className="form-group">
                        <Select options={careerOptionsData} onChange={handleCareerSelect} value={selectedCareer} />
                    </div>
                </div>
            </Box>

            {filteredLists.length > 0 ? (
                <Box boxClassName="inner">
                    <List>
                        <InfiniteScroll
                            dataLength={filteredLists.length}
                            next={fetchMoreData}
                            hasMore={true}
                            loader={<h4>Loading...</h4>}
                        >
                            {filteredLists.map((list, index) => (
                                // <ListItem listItemTo={`/RecruitView?keyword=${encodeURIComponent(searchTerm)}`} key={index}>
                                <ListItem listItemTo={`/Recruit/RecruitView/${list.jobid}`} key={index}>
                                    <ListItemText>
                                        <Box boxClassName="recruit-tit">
                                            {list.tag ? <TextBox titleClassName="tag">NEW</TextBox> : null}
                                            <TextBox titleClassName="tit">{list.tit}</TextBox>
                                        </Box>
                                        <Box boxClassName="recruit-cate">
                                            <TextBox>{list.sub1}</TextBox>
                                            <TextBox>{list.sub2}</TextBox>
                                        </Box>
                                    </ListItemText>
                                    <ListItemText>
                                        <TextBox titleClassName={list.ddayclassName}>{list.dday}</TextBox>
                                    </ListItemText>
                                </ListItem>
                            ))}
                        </InfiniteScroll>
                    </List>
                    {/* <div className="btnWrap">
            <Button buttonText="더보기" onClick={handleMoreButtonClick} />
          </div> */}
                </Box>
            ) : (
                // filteredLists가 비어있을 때 보여줄 다른 HTML
                <Box boxClassName="inner">
                    <div className='applyWrap type2'>
                        <p className='tit'>현재 진행중인 공고가 없습니다.</p>
                        <div className='btnWrap'>
                            <button className='btn-apply' onClick={handleinitButtonClick}>
                                <span className='txt'>전제 공고로 돌아가기</span>
                            </button>
                        </div>
                    </div>
                </Box>
            )}
        </Box>

    );
}

export default RecruitList;