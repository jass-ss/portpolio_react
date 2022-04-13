import React, { Fragment, useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';

const path = process.env.PUBLIC_URL;

function Map() {
	const container = useRef(null);
	const { kakao } = window; //윈도우 전역객체에서 카카오객체를 직접찾아서 변수에 할당.
	const [traffic, setTraffic] = useState(false);
	const [map, setMap] = useState(null); //안에 들어갈 자료형 적확하게 모르겠다면, null로! 자료형이 다르면 set되지 않는다.

	const branch_btns = [
		`${path}/img/marker1.png`,
		`${path}/img/marker2.png`,
		`${path}/img/marker3.png`,
	];

	var markerOptions = [
		{
			title: 'Head Office',
			latlng: new kakao.maps.LatLng(37.51426220045354, 127.06024581720781),
			imgSrc: branch_btns[0],
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: 'Donut Factory',
			latlng: new kakao.maps.LatLng(37.51720985347799, 127.04134374625059),
			imgSrc: branch_btns[1],
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: 'Flagship Store',
			latlng: new kakao.maps.LatLng(37.585601140947716, 127.02013033711161),
			imgSrc: branch_btns[2],
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
	];

	useEffect(() => {
		const option = {
			center: new kakao.maps.LatLng(37.51426220045354, 127.06024581720781), // 지도의 중심좌표
			level: 3, // 지도의 확대 레벨
		};

		// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
		const map2 = new kakao.maps.Map(container.current, option);

		//위의 인스턴스 맵을 state로 옮긴다. 렌더링되어도 날아가지 않도록.
		setMap(map2);
		for (let i = 0; i < branch_btns.length; i++) {
			new kakao.maps.Marker({
				//마커 이미지를 특정된 위치로.
				map: map2,
				position: markerOptions[i].latlng,
				title: markerOptions[i].title,
				image: new kakao.maps.MarkerImage(
					markerOptions[i].imgSrc,
					markerOptions[i].imgSize,
					markerOptions[i].imgPos
				), //이미지를 마커이미지로 만드는 객체 메서드
			});
		}
	}, []);

	useEffect(() => {
		handleTraffic();
	}, [traffic]);

	const handleTraffic = () => {
		if (map) {
			traffic
				? map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
				: map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
		}
	};
	return (
		<div className='mapCompo'>
			<div id='map1' ref={container}></div>
			{/*해당 버튼을 클릭할때머ㅏ다 기존 불린값을 반전시켜 토글발생. */}
			<div className='btnBox'>
				<button onClick={() => setTraffic(traffic ? false : true)}>
					{traffic ? 'traffic on' : 'traffic off'}
				</button>
				<button>Head Office</button>
				<button>Donut Factory</button>
				<button>Flagship Store</button>
			</div>
		</div>
	);
}

export default Map;
