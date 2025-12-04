// --- 타입 정의 ---

// 실제 서버에서 가져올 데이터 타입
interface UserData {
    id: number;
    name: string;
}

// 데이터를 처리하는 함수 타입: 데이터를 받지만 반환값은 없음 (void)
type DataProcessor = (data: UserData) => void;

// 데이터를 받아 상태 저장소에 저장하는 로직을 시뮬레이션
const handleData: DataProcessor = (data) => {
    // 💡 실제로는 여기서 Redux dispatch 또는 zustand set 함수를 호출하여 상태를 업데이트합니다.
    console.log(`[Action]: 사용자 ID ${data.id}의 데이터를 저장소에 업데이트했습니다.`);
    // return undefined; 또는 return; 이 숨어있지만 명시적인 값은 반환하지 않습니다.
};

// 비동기 함수 (Promise를 반환)
async function fetchData(processor: DataProcessor): Promise<void> {
    
    // 1. 데이터 가져오기 시뮬레이션
    const fetchedData: UserData = { id: 42, name: "Neo" }; 
    console.log("서버로부터 데이터 수신 완료.");

    // 2. 부수 효과 함수 호출 (값을 반환하지 않음)
    // processor(handleData)는 상태를 업데이트하는 '행위'만 수행하고 끝납니다.
    processor(fetchedData); 
    
    // 3. fetchData 함수 자체도 반환값이 없으므로 Promise<void>를 반환합니다.
}

// 📞 호출
fetchData(handleData); 
// 출력:
// 서버로부터 데이터 수신 완료.
// [Action]: 사용자 ID 42의 데이터를 저장소에 업데이트했습니다.