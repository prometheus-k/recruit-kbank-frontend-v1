import React, { useEffect } from 'react';
import Title from '../components2/Title'
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import
import Button from '../components2/Button'
import Card from '../components2/Card';
import CardMedia from '../components2/CardMedia';
import CardContent from '../components2/CardContent';
import Typography from '../components2/Typography';
const Sub2 = () => {
  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 실행되는 코드
    console.log('Component mounted');

    // 컴포넌트가 언마운트될 때 클린업 함수 설정
    return () => {
      console.log('Component unmounted');
    };
  }, []);
  return (
    <div>
      <div className="inner">
        <Title titleClassName="title1">케이뱅크<br />사람들의 이야기</Title>
      </div>
      <div className="inner">
        <div className="kbank-manWrap">
          <ul className="column-list">
            <li className="col-box">
              <Card>
                <CardMedia cardImgClassName="type1" imageSrc="images/1.png"></CardMedia>
                <CardContent>
                  <Typography titleClassName="tit">1국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</Typography>
                  <Typography titleClassName="txt">준법지원팀 / </Typography>
                </CardContent>
              </Card>
            </li>
            <li className="col-box">
              <Card>
                <CardMedia cardImgClassName="type3" imageSrc="images/5.png"></CardMedia>
                <CardContent>
                  <Typography titleClassName="tit">2국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</Typography>
                  <Typography titleClassName="txt">준법지원팀 / </Typography>
                </CardContent>
              </Card>
            </li>
            <li className="col-box">
              <Card>
                <CardMedia cardImgClassName="type2" imageSrc="images/4.png"></CardMedia>
                <CardContent>
                  <Typography titleClassName="tit">3국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</Typography>
                  <Typography titleClassName="txt">준법지원팀 / </Typography>
                </CardContent>
              </Card>
            </li>
            <li className="col-box">
              <Card>
                <CardMedia cardImgClassName="type2" imageSrc="images/4.png"></CardMedia>
                <CardContent>
                  <Typography titleClassName="tit">4국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</Typography>
                  <Typography titleClassName="txt">준법지원팀 / </Typography>
                </CardContent>
              </Card>
            </li>
            <li className="col-box">
              <Card>
                <CardMedia cardImgClassName="type2" imageSrc="images/4.png"></CardMedia>
                <CardContent>
                  <Typography titleClassName="tit">5국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</Typography>
                  <Typography titleClassName="txt">준법지원팀 / </Typography>
                </CardContent>
              </Card>
            </li>
            <li className="col-box">
              <Card>
                <CardMedia cardImgClassName="type2" imageSrc="images/4.png"></CardMedia>
                <CardContent>
                  <Typography titleClassName="tit">6국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</Typography>
                  <Typography titleClassName="txt">준법지원팀 / </Typography>
                </CardContent>
              </Card>
            </li>
            <li className="col-box">
              <Card>
                <CardMedia cardImgClassName="type3" imageSrc="images/5.png"></CardMedia>
                <CardContent>
                  <Typography titleClassName="tit">7국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</Typography>
                  <Typography titleClassName="txt">준법지원팀 / </Typography>
                </CardContent>
              </Card>
            </li>
            <li className="col-box">
              <Card>
                <CardMedia cardImgClassName="type1" imageSrc="images/1.png"></CardMedia>
                <CardContent>
                  <Typography titleClassName="tit">8국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</Typography>
                  <Typography titleClassName="txt">준법지원팀 / </Typography>
                </CardContent>
              </Card>
            </li>
          </ul>
        </div>
      </div>
      <div className="inner">
        <Button buttonText="더보기" />
      </div>
    </div>


  );
}

export default Sub2;