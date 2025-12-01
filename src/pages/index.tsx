import Any from '../typespace/Any'
import Array from '../typespace/Array'
import Boolean from '../typespace/Boolean'
import Enum from '../typespace/Enum'
import Generic from '../typespace/Generic'
import Interface from '../typespace/Interface'
import Intersection from '../typespace/Intersection'
import Literal from '../typespace/Literal'
import Never from '../typespace/Never'
import NullUndefined from '../typespace/NullUndefined'
import Number from '../typespace/Number'
import Object from '../typespace/Object'
import String from '../typespace/String'
import Tuple from '../typespace/Tuple'
import TypeAlias from '../typespace/TypeAlias'
import Union from '../typespace/Union'
import Unknown from '../typespace/Unknown'
import Void from '../typespace/Void'

function MainPage() {
    return (
        <div>
            <h4>기본타입 (Primitives)</h4>
            <p>Boolean, Number, String</p>
            <br />

            <h4>특수타입 (Special Types)</h4>
            <p>Any, Unknown, Void, Null/Undefined, Never</p>
            <br />

            <h4>컬렉션 및 구조 타입 (Collections & Structural Types)</h4>
            <p>Array, Tuple, Object</p>
            <br />

            <h4>조합 및 별칭타입 (Combination & Alias Types)</h4>
            <p>Enum, Union, Literal, Intersection, TypeAlias, Interface</p>
            <br />

            <div>
                1. any 타입 (가장 유연하지만 위험)
                <ul>
                    <li>역할: 모든 타입(문자열, 숫자, 객체 등)을 허용하며, 타입 검사를 일시적으로 우회할 때 사용됩니다.</li>
                    <li>단점: TypeScript의 타입 안정성을 포기하게 되어 런타임 에러의 위험을 높입니다.</li>
                    <li>권장: 가능한 한 사용을 지양하고, 대신 unknown 타입을 고려하는 것이 좋습니다.</li>
                </ul><br />

                2. 배열 (Array) 타입
                <ul>
                    <li>정의: 배열이 담을 요소의 타입을 명시합니다.</li>
                    <li>문법:
                        <ul>
                            <li>기본: Type[] (예: number[])</li>
                            <li>제네릭: Array&lt;Type&gt; (예: Array&lt;string&gt;)</li>
                            <li>특징: (number | string)[]처럼 유니언 타입을 사용하여 여러 타입을 허용할 수 있습니다.</li>
                        </ul>
                    </li>
                </ul><br />

                3. Enum (열거형) 타입
                <ul>
                    <li>역할: 관련된 상수 값들의 집합에 이름을 부여하여 코드의 가독성을 높이고 타입 안정성을 확보합니다.</li>
                    <li>
                        종류:
                        <ul>
                            <li>숫자형: 0부터 시작하는 숫자를 값으로 가짐.</li>
                            <li>문자열형: 명시적으로 문자열을 값으로 가짐.</li>
                        </ul>
                    </li>
                </ul><br />

                const enum의 의미:
                <ul>
                    <li>개발 시점에서는 **의미(LogLevel.Info)**와 타입 안전성을 제공합니다.</li>
                    <li>컴파일 시점에서는 2와 같은 실제 상수 값으로 대체되어 JS 코드의 크기를 줄여줍니다 (경량화).</li>
                    <li>값 비교는 단순해 보여도, 재사용성과 리팩토링 안정성을 위한 핵심 디자인 패턴입니다.</li>
                </ul><br />

                4. 제네릭 (Generics) 타입
                <ul>
                    <li>역할: 재사용 가능한 컴포넌트를 만들 때 사용되며, 실제 타입은 나중에 결정되도록 하는 타입의 플레이스 홀더입니다.</li>
                    <li>제약 조건 (extends): 제네릭 타입 변수가 특정 속성이나 기능을 반드시 가지도록 제한하여 타입 안전성을 확보합니다 (예: T extends &#123; length: number &#125;).</li>
                    <li>getProperty&lt;O, K extends keyof O&gt; 함수는 특정 객체가 아닌 모든 객체에 대해 타입 안전하게 속성에 접근하기 위해 사용되는 범용 유틸리티입니다.</li>
                    <li>클래스 제약: &#123; new (...args: any[]): T &#125; 표기법은 클래스 생성자 자체를 인수로 받아 동적으로 인스턴스를 생성할 때 사용됩니다 (팩토리 패턴, DI 컨테이너 등).</li>
                    <li>일반적인 서비스 코드보다는 프레임워크나 라이브러리를 만들 때 유용하게 활용됩니다.</li>
                </ul><br />
            </div>

            <Any />
            <Array />
            <Boolean />
            <Enum />
            <Generic />
            <Interface />
            <Intersection />
            <Literal />
            <Never />
            <NullUndefined />
            <Number />
            <Object />
            <String />
            <Tuple />
            <TypeAlias />
            <Union />
            <Unknown />
            <Void />
        </div>
    )
}

export default MainPage
