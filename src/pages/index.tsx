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
