React 스니펫은 반복적인 코드 작성을 간소화하고 개발 생산성을 향상시키기 위해 제공되는 코드조각이라 생각하면된다! 
주로 VS Code와 같은 코드 에디터에서 플러그인 형태로 제공되며, 빠르게 특정 패턴의 코드를 자동으로 삽입할 수 있습니다.

기본 스니펫으로는

`rafce` : 화살표 함수 기반의 React 함수형 컴포넌트 생성
`rfc` : React 함수형 컴포넌트 생성
`rcc` : React 클래스형 컴포넌트 생성

등이 있습니다.

rafce 입력후 엔터를 누르면 다음과 같은 코드가 자동생성된다

```jsx
import React from 'react';

const ComponentName = () => {
  return <div>ComponentName</div>;
};

export default ComponentName;
```

PropTypes 추가시 `pts`를 입력 후 엔터를 치면

```jsx
ComponentName.propTypes = {
  propName: PropTypes.string,
};
```

위의 코드가 생성된다!
