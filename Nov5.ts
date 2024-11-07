import styled from "styled-components";

// 드롭다운 전체 래퍼
export const DropDownContainer = styled.div`
  position: relative;
  display: inline-block; // 드롭다운을 버튼 옆에 붙게끔 함
`;

// 드롭다운 버튼
export const DropDownButton = styled.button`
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }
`;

// 드롭다운 메뉴 리스트
export const DropDownMenu = styled.ul`
  position: absolute;
  top: 100%; // 버튼 바로 아래 위치
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 그림자 추가
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100px; // 메뉴가 고정된 넓이로 깔끔하게 보이도록 설정
  z-index: 10; // 다른 요소 위에 나오도록 설정
`;

// 드롭다운 메뉴 아이템
export const DropDownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  font-size: 14px;
  color: #333;

  &:hover {
    background-color: #f1f1f1; // 호버 시 살짝 배경색 변경
  }
`;
