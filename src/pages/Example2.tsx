// --- 타입 정의 ---

// 상품 데이터 타입
interface Product {
    id: number;
    name: string;
    inStock: boolean;
}

// 상태를 업데이트하는 함수 타입 (아무것도 반환하지 않음)
type UpdateStockAction = (productId: number, newStock: boolean) => void;

interface StockButtonProps {
    productId: number;
    currentStock: boolean;
    // onUpdate는 실행은 하지만 반환값을 기대하지 않는 함수
    onUpdate: UpdateStockAction; 
}

const StockButton = ({ productId, currentStock, onUpdate }: StockButtonProps) => {
    
    // 버튼 클릭 시 실행될 핸들러
    const handleClick = () => {
        const newStockStatus = !currentStock;
        
        // 1. 부수 효과 실행: onUpdate 함수 호출
        //    -> 이 호출은 부모 컴포넌트의 상태를 변경하는 역할을 수행합니다.
        onUpdate(productId, newStockStatus); 
        
        // 2. 반환 값 없음: handleClick 함수 자체는 void입니다.
        //    함수가 여기서 끝납니다.
    };
    
    return (
        <button onClick={handleClick}>
            재고 {currentStock ? '있음' : '없음'}으로 변경
        </button>
    );
};

function Example2() {
  return (
    <div>
      
    </div>
  )
}

export default Example2
